import { NextRequest, NextResponse } from "next/server";
import { isRoleFilled } from "@/lib/role-filled";
import { Resend } from "resend";
import {
  employeeApplicationSchema,
  contractorProposalSchema,
} from "@/lib/validations/opportunities";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { rateLimit, getClientIp } from "@/lib/opportunities/rate-limit";

let resend: Resend | null = null;

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[apply] RESEND_API_KEY not configured — emails will be skipped");
    return null;
  }
  if (!resend) resend = new Resend(apiKey);
  return resend;
}

const availabilityLabels: Record<string, string> = {
  immediate: "Immediate",
  "within-2-weeks": "Within 2 weeks",
  "within-1-month": "Within 1 month",
  flexible: "Flexible",
};

interface AnyBody {
  engagement_type?: string;
  [key: string]: unknown;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rl = rateLimit({
      key: `apply:${ip}`,
      limit: 3,
      windowMs: 60 * 60 * 1000,
    });
    if (!rl.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as AnyBody;

    if (body.engagement_type !== "employee" && body.engagement_type !== "contractor") {
      return NextResponse.json(
        { success: false, message: "Invalid engagement type" },
        { status: 400 }
      );
    }

    const schema =
      body.engagement_type === "employee"
        ? employeeApplicationSchema
        : contractorProposalSchema;

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }
    const data = parsed.data;

    const supabase = createServiceRoleClient();

    // Verify listing exists + is active
    const { data: listing, error: listingErr } = await supabase
      .from("opportunity_listings")
      .select("id, title, slug, engagement_type")
      .eq("id", data.listing_id)
      .eq("status", "active")
      .maybeSingle();

    if (listingErr) {
      console.error("[apply] listing fetch error:", listingErr.message);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
    // ⚖️ Filled roles reject server-side too — the hidden form is not the gate
    if (listing && isRoleFilled(listing.slug)) {
      return NextResponse.json(
        {
          success: false,
          message: "This role is currently filled and not accepting applications.",
        },
        { status: 403 }
      );
    }
    if (!listing || listing.engagement_type !== data.engagement_type) {
      return NextResponse.json(
        { success: false, message: "Listing not found or no longer active" },
        { status: 404 }
      );
    }

    // Build insert payload — fields depend on engagement type
    const baseInsert = {
      listing_id: data.listing_id,
      engagement_type: data.engagement_type,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      data_consent: data.data_consent,
      source: "website",
    } as const;

    let insertPayload: Record<string, unknown>;
    if (data.engagement_type === "employee") {
      insertPayload = {
        ...baseInsert,
        phone: data.phone || null,
        applicant_state: data.applicant_state,
        cover_letter:
          (data.cover_letter || "").trim() ||
          (data.resume_text || "").trim() ||
          null,
        resume_path: data.resume_draft_id
          ? `${data.resume_draft_id}` // upload route uses draft_id as folder; CRM joins on this
          : null,
        at_will_acknowledged: data.at_will_acknowledged,
      };
    } else {
      insertPayload = {
        ...baseInsert,
        portfolio_url: data.portfolio_url || null,
        rate_range: data.rate_range || null,
        availability: data.availability,
        project_interest: data.project_interest,
        ic_acknowledged: data.ic_acknowledged,
      };
    }

    const { error: insertErr } = await supabase
      .from("opportunity_applications")
      .insert(insertPayload);

    if (insertErr) {
      console.error("[apply] insert error:", insertErr.message);
      return NextResponse.json(
        { success: false, message: "Server error saving application" },
        { status: 500 }
      );
    }

    // Notification emails — best effort, do not block response
    const resendClient = getResend();
    if (resendClient) {
      const isEmployee = data.engagement_type === "employee";
      const subject = isEmployee
        ? `New Employee Application: ${data.first_name} ${data.last_name} — ${listing.title}`
        : `New Contractor Proposal: ${data.first_name} ${data.last_name} — ${listing.title}`;

      const teamBody = isEmployee
        ? `
New employee application

Listing: ${listing.title}
Slug: ${listing.slug}

APPLICANT
---------
Name: ${data.first_name} ${data.last_name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
State of residence: ${data.applicant_state}

COVER LETTER / MESSAGE
----------------------
${data.cover_letter || data.resume_text || "(none provided)"}

RESUME
------
${data.resume_draft_id ? `Uploaded — draft_id: ${data.resume_draft_id}` : "Text-paste alternative used (see cover letter)"}

ACKNOWLEDGMENTS
---------------
At-will acknowledged: ${data.at_will_acknowledged ? "YES" : "NO"}
Data consent: ${data.data_consent ? "YES" : "NO"}

---
Submitted via aeopic.com/opportunities/${listing.slug}
`.trim()
        : `
New contractor proposal

Listing: ${listing.title}
Slug: ${listing.slug}

CONTRACTOR
----------
Name: ${data.first_name} ${data.last_name}
Email: ${data.email}
Portfolio: ${data.portfolio_url || "Not provided"}
Rate / structure: ${data.rate_range || "Not provided"}
Availability: ${availabilityLabels[data.availability] || data.availability}

WHY INTERESTED
--------------
${data.project_interest}

ACKNOWLEDGMENTS
---------------
IC acknowledged: ${data.ic_acknowledged ? "YES" : "NO"}
Data consent: ${data.data_consent ? "YES" : "NO"}

---
Submitted via aeopic.com/opportunities/${listing.slug}
`.trim();

      const applicantBody = `
Hi ${data.first_name},

Thanks for ${isEmployee ? "applying" : "submitting a proposal"} to Aeopic for "${listing.title}". We received your ${isEmployee ? "application" : "proposal"} and will review within 5 business days.

If we'd like to move forward we'll reach out to coordinate next steps. If you have questions in the meantime, reply to this email or write to admin@aeopic.com.

Thanks again,
The Aeopic Team

---
Aeopic | Custom Software Studio
1919 Taylor St, Ste F, Houston, TX 77007
https://aeopic.com
`.trim();

      try {
        const teamEmailTo = process.env.TEAM_EMAIL || "admin@aeopic.com";
        await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: teamEmailTo,
          subject,
          text: teamBody,
        });
        await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: data.email,
          subject: isEmployee
            ? "We received your application — Aeopic"
            : "We received your proposal — Aeopic",
          text: applicantBody,
        });
      } catch (mailErr) {
        console.error("[apply] email send failed:", mailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[apply] unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null;

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured - emails will be skipped");
    return null;
  }
  if (!resend) {
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    const serviceLabels: Record<string, string> = {
      "web-app": "Custom Web Application",
      "ai-tools": "AI-Powered Tools",
      "marketing": "Marketing & SEO",
      "ecommerce": "eCommerce Platform",
      "not-sure": "Not Sure Yet",
    };
    const services = data.services.map(s => serviceLabels[s] || s).join(", ");

    // Log the submission (always works, even without email)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone || "Not provided");
    console.log("Company:", data.company || "Not provided");
    console.log("Services:", services);
    console.log("Project:", data.projectDescription);
    console.log("Timeline:", data.timeline || "Not specified");
    console.log("Budget:", data.budget || "Not specified");
    console.log("Referral:", data.referralSource || "Not specified");
    console.log("===================================");

    const resendClient = getResend();

    // Only attempt to send emails if Resend is configured
    if (resendClient) {
      const teamEmailBody = `
New Project Inquiry from ${data.name}

CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}

PROJECT DETAILS
---------------
Services Needed: ${services}
Project Description: ${data.projectDescription}
Timeline: ${data.timeline || "Not specified"}
Budget: ${data.budget || "Not specified"}

REFERRAL
--------
How they heard about us: ${data.referralSource || "Not specified"}

---
Submitted from aeopic.com/start
      `.trim();

      const confirmationEmailBody = `
Hi ${data.name},

Thanks for reaching out to Aeopic! We received your project inquiry and we're excited to learn more.

Here's what happens next:

1. We'll review your submission within 24 hours
2. We'll schedule a discovery call with you (about 30 minutes)
3. We'll send you a detailed quote within 48 hours of our call

If you have any questions in the meantime, feel free to reply to this email or reach us at contact@aeopic.com.

Talk soon,
The Aeopic Team

---
Aeopic | Custom Software Studio
Houston, Texas
https://aeopic.com
      `.trim();

      try {
        // Send notification to team
        const teamEmail = await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: process.env.TEAM_EMAIL || "contact@aeopic.com",
          subject: "New Project Inquiry: " + data.name + (data.company ? " (" + data.company + ")" : ""),
          text: teamEmailBody,
        });

        if (teamEmail.error) {
          console.error("Failed to send team notification:", teamEmail.error);
        }

        // Send confirmation to submitter
        const confirmEmail = await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: data.email,
          subject: "We Got Your Message - Aeopic",
          text: confirmationEmailBody,
        });

        if (confirmEmail.error) {
          console.error("Failed to send confirmation:", confirmEmail.error);
        }
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Email sending failed:", emailError);
      }
    }

    // Always return success if validation passed
    // The submission is logged even if emails fail
    return NextResponse.json({ success: true });

  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, errors: error },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

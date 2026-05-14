import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, estimatorSchema } from "@/lib/validations";

let resend: Resend | null = null;

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  console.log("RESEND_API_KEY configured:", apiKey ? `yes (${apiKey.substring(0, 8)}...)` : "NO");
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured - emails will be skipped");
    return null;
  }
  if (!resend) {
    resend = new Resend(apiKey);
  }
  return resend;
}

const serviceLabels: Record<string, string> = {
  "web-app": "Custom Web Application",
  "ai-tools": "AI-Powered Tools",
  "marketing": "Marketing & SEO",
  "ecommerce": "eCommerce Platform",
  "not-sure": "Not Sure Yet",
};

const projectTypeLabels: Record<string, string> = {
  "web-app": "Web Application",
  "mobile-app": "Mobile App",
  "platform": "Platform / SaaS",
  "marketing": "Marketing & Growth",
  "not-sure": "Not Sure Yet",
};

const complexityLabels: Record<string, string> = {
  "mvp": "Getting Started (MVP — 4-8 weeks)",
  "custom": "Growing (Custom App — 8-16 weeks)",
  "enterprise": "Advanced (Full Platform — 4-8 months)",
};

function getRecommendation(complexity: string) {
  if (complexity === "mvp") return "MVP / Prototype (4-8 weeks)";
  if (complexity === "custom") return "Custom Web Application (8-16 weeks)";
  return "Full Platform Build (4-8 months)";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const isEstimator = body.source === "pricing-estimator";

    if (isEstimator) {
      const data = estimatorSchema.parse(body);

      const projectType = projectTypeLabels[data.projectType] || data.projectType;
      const complexity = complexityLabels[data.complexity] || data.complexity;
      const features = data.features.length > 0 ? data.features.join(", ") : "None selected";
      const recommendation = getRecommendation(data.complexity);

      console.log("=== NEW PROJECT ESTIMATE REQUEST ===");
      console.log("Name:", data.name);
      console.log("Email:", data.email);
      console.log("Phone:", data.phone || "Not provided");
      console.log("Company:", data.company || "Not provided");
      console.log("Project Type:", projectType);
      console.log("Complexity:", complexity);
      console.log("Features:", features);
      console.log("Recommendation:", recommendation);
      console.log("Description:", data.description || "Not provided");
      console.log("====================================");

      const resendClient = getResend();

      if (resendClient) {
        const teamEmailBody = `
New Project Estimate Request from ${data.name}

CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}

PROJECT ESTIMATOR SUBMISSION
----------------------------
Project Type: ${projectType}
Complexity: ${complexity}
Features Selected: ${features}
Recommendation: ${recommendation}

Additional Details: ${data.description || "None provided"}

---
Submitted from aeopic.com/pricing (Project Estimator)
        `.trim();

        const confirmationEmailBody = `
Hi ${data.name},

Thanks for using the Aeopic project estimator! Based on your selections, we've identified your project as a ${recommendation}.

Here's what happens next:

1. We'll review your project details within 24 hours
2. We'll schedule a strategy call to discuss scope and investment
3. You'll receive a detailed proposal within 48 hours of our call

If you have any questions in the meantime, feel free to reply to this email or reach us at admin@aeopic.com.

Talk soon,
The Aeopic Team

---
Aeopic | Custom Software Studio
Houston, Texas
https://aeopic.com
        `.trim();

        try {
          const teamEmailTo = process.env.TEAM_EMAIL || "admin@aeopic.com";
          console.log("Sending team notification to:", teamEmailTo);

          const teamEmail = await resendClient.emails.send({
            from: "Aeopic <noreply@aeopic.com>",
            to: teamEmailTo,
            subject: "New Project Estimate: " + data.name + (data.company ? " (" + data.company + ")" : ""),
            text: teamEmailBody,
          });

          console.log("Team email result:", JSON.stringify(teamEmail));
          if (teamEmail.error) {
            console.error("Failed to send team notification:", teamEmail.error);
          }

          const confirmEmail = await resendClient.emails.send({
            from: "Aeopic <noreply@aeopic.com>",
            to: data.email,
            subject: "Your Project Estimate - Aeopic",
            text: confirmationEmailBody,
          });

          console.log("Confirmation email result:", JSON.stringify(confirmEmail));
          if (confirmEmail.error) {
            console.error("Failed to send confirmation:", confirmEmail.error);
          }
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
        }
      }

      return NextResponse.json({ success: true });
    }

    // Regular contact form submission
    const data = contactFormSchema.parse(body);

    const services = data.services.map(s => serviceLabels[s] || s).join(", ");

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

If you have any questions in the meantime, feel free to reply to this email or reach us at admin@aeopic.com.

Talk soon,
The Aeopic Team

---
Aeopic | Custom Software Studio
Houston, Texas
https://aeopic.com
      `.trim();

      try {
        const teamEmailTo = process.env.TEAM_EMAIL || "admin@aeopic.com";
        console.log("Sending team notification to:", teamEmailTo);

        const teamEmail = await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: teamEmailTo,
          subject: "New Project Inquiry: " + data.name + (data.company ? " (" + data.company + ")" : ""),
          text: teamEmailBody,
        });

        console.log("Team email result:", JSON.stringify(teamEmail));
        if (teamEmail.error) {
          console.error("Failed to send team notification:", teamEmail.error);
        }

        const confirmEmail = await resendClient.emails.send({
          from: "Aeopic <noreply@aeopic.com>",
          to: data.email,
          subject: "We Got Your Message - Aeopic",
          text: confirmationEmailBody,
        });

        console.log("Confirmation email result:", JSON.stringify(confirmEmail));
        if (confirmEmail.error) {
          console.error("Failed to send confirmation:", confirmEmail.error);
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    }

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

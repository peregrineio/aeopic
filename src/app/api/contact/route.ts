import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // If Resend isn't configured, log and return success
    if (!process.env.RESEND_API_KEY) {
      console.log("Form submission received:", validatedData);
      return NextResponse.json({ success: true });
    }

    // Send notification email to team
    // TODO: Implement Resend integration
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Aeopic <noreply@aeopic.com>',
    //   to: process.env.TEAM_EMAIL || 'contact@aeopic.com',
    //   subject: `New Project Inquiry from ${validatedData.name}`,
    //   text: formatEmailBody(validatedData),
    // });

    // Send confirmation email to submitter
    // await resend.emails.send({
    //   from: 'Aeopic <noreply@aeopic.com>',
    //   to: validatedData.email,
    //   subject: "We Got Your Message — Aeopic",
    //   text: confirmationEmailBody,
    // });

    console.log("Form submission received:", validatedData);
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

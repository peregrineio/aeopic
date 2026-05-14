import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function storeInSupabase(email: string, source: string): Promise<{ stored: boolean; duplicate?: boolean }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) return { stored: false };

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createClient } = require("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, source });

    if (error) {
      if (error.code === "23505") return { stored: false, duplicate: true };
      console.error("Supabase insert error:", error);
      return { stored: false };
    }

    return { stored: true };
  } catch {
    return { stored: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body as { email?: string; source?: string };

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const result = await storeInSupabase(normalizedEmail, source || "blog");

    if (result.duplicate) {
      return NextResponse.json(
        { success: false, error: "You're already subscribed!" },
        { status: 409 }
      );
    }

    if (!result.stored) {
      console.log("=== NEW NEWSLETTER SIGNUP ===");
      console.log("Email:", normalizedEmail);
      console.log("Source:", source || "blog");
      console.log("Timestamp:", new Date().toISOString());
      console.log("=============================");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

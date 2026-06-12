import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { rateLimit, getClientIp } from "@/lib/opportunities/rate-limit";

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const MAX_SIZE = 10 * 1024 * 1024;

interface Body {
  filename?: string;
  contentType?: string;
  size?: number;
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rl = rateLimit({
      key: `upload:${ip}`,
      limit: 5,
      windowMs: 60 * 60 * 1000,
    });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many uploads. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as Body;
    if (!body.filename || !body.contentType || typeof body.size !== "number") {
      return NextResponse.json(
        { error: "Missing filename, contentType, or size" },
        { status: 400 }
      );
    }
    if (!ALLOWED_MIME.has(body.contentType)) {
      return NextResponse.json(
        { error: "Only PDF or Word documents are allowed" },
        { status: 400 }
      );
    }
    if (body.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Files must be 10 MB or smaller" },
        { status: 400 }
      );
    }

    const draftId = crypto.randomUUID();
    const cleanName = sanitizeFilename(body.filename);
    const path = `${draftId}/${cleanName}`;

    const supabase = createServiceRoleClient();
    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUploadUrl(path);

    if (error || !data) {
      console.error("[upload-resume] signed URL error:", error?.message);
      return NextResponse.json(
        { error: "Could not generate upload URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      upload_url: data.signedUrl,
      draft_id: draftId,
      path,
      token: data.token,
    });
  } catch (err) {
    console.error("[upload-resume] unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

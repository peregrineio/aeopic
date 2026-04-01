import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY || "");
  }
  return resend;
}

const TEAM_EMAIL = process.env.TEAM_EMAIL || "contact@aeopic.com";

interface TranscriptMessage {
  role: "bot" | "user";
  content: string;
  timestamp: string;
}

interface TranscriptRequest {
  messages: TranscriptMessage[];
  page: string;
  startTime: string;
  endTime: string;
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function calculateDuration(startTime: string, endTime: string): string {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffMs = end.getTime() - start.getTime();
  const diffMins = Math.round(diffMs / 60000);

  if (diffMins < 1) return "less than a minute";
  if (diffMins === 1) return "1 minute";
  return `${diffMins} minutes`;
}

function formatEmailBody(data: TranscriptRequest): string {
  const { messages, page, startTime, endTime } = data;

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const totalMessages = messages.length;
  const duration = calculateDuration(startTime, endTime);
  const formattedStartTime = formatTimestamp(startTime);

  let body = `Chat Conversation from aeopic.com${page}\n`;
  body += `Started: ${formattedStartTime}\n`;
  body += `Duration: ${duration}\n\n`;
  body += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === "bot" ? "Bot" : "User";
    body += `[${role}] ${msg.content}\n\n`;
  }

  body += `---\n\n`;
  body += `Page: ${page}\n`;
  body += `Total messages: ${totalMessages} (${userMessageCount} from visitor)\n`;

  return body;
}

export async function POST(request: Request) {
  try {
    const data: TranscriptRequest = await request.json();

    // Validate minimum messages
    const userMessageCount = data.messages.filter((m) => m.role === "user").length;
    if (userMessageCount < 2) {
      return NextResponse.json(
        { success: false, message: "Not enough user messages to send transcript" },
        { status: 200 }
      );
    }

    const emailBody = formatEmailBody(data);

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("=== CHAT TRANSCRIPT (Resend not configured) ===");
      console.log(emailBody);
      console.log("=== END TRANSCRIPT ===");
      return NextResponse.json({ success: true, message: "Logged to console (Resend not configured)" });
    }

    // Send via Resend
    await getResend().emails.send({
      from: "Aeopic <noreply@aeopic.com>",
      to: TEAM_EMAIL,
      subject: `Chat Conversation — aeopic.com${data.page}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending chat transcript:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send transcript" },
      { status: 500 }
    );
  }
}

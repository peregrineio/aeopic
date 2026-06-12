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

interface LeadInfo {
  name?: string;
  contact?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  topic?: string;
}

interface TranscriptRequest {
  messages: TranscriptMessage[];
  page: string;
  startTime: string;
  endTime: string;
  lead?: LeadInfo;
  /** User messages the bot couldn't answer — free KB roadmap */
  unmatched?: string[];
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

function hasLead(lead?: LeadInfo): lead is LeadInfo {
  return Boolean(lead && (lead.contact || lead.name));
}

function formatSubject(data: TranscriptRequest): string {
  if (hasLead(data.lead)) {
    const lead = data.lead;
    const parts = [lead.projectType, lead.budget, lead.timeline].filter(Boolean).join(", ");
    return `🔥 Chat lead: ${lead.name ?? "Visitor"}${parts ? ` — ${parts}` : ""}`;
  }
  return `Chat Conversation — aeopic.com${data.page}`;
}

function formatEmailBody(data: TranscriptRequest): string {
  const { messages, page, startTime, endTime, lead, unmatched } = data;

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const duration = calculateDuration(startTime, endTime);

  let body = "";

  if (hasLead(lead)) {
    body += `=== LEAD CAPTURED ===\n`;
    if (lead.name) body += `Name: ${lead.name}\n`;
    if (lead.contact) body += `Contact: ${lead.contact}\n`;
    if (lead.projectType) body += `Project type: ${lead.projectType}\n`;
    if (lead.budget) body += `Budget: ${lead.budget}\n`;
    if (lead.timeline) body += `Timeline: ${lead.timeline}\n`;
    if (lead.topic) body += `Wants to discuss: ${lead.topic}\n`;
    body += `\nFollow up fast — speed-to-lead is everything.\n\n`;
  }

  body += `Chat Conversation from aeopic.com${page}\n`;
  body += `Started: ${formatTimestamp(startTime)}\n`;
  body += `Duration: ${duration}\n\n`;
  body += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === "bot" ? "Bot" : "User";
    body += `[${role}] ${msg.content}\n\n`;
  }

  body += `---\n\n`;

  if (unmatched && unmatched.length > 0) {
    body += `UNMATCHED QUESTIONS (add these to the knowledge base):\n`;
    for (const q of unmatched) {
      body += `  • ${q}\n`;
    }
    body += `\n`;
  }

  body += `Page: ${page}\n`;
  body += `Total messages: ${messages.length} (${userMessageCount} from visitor)\n`;

  return body;
}

export async function POST(request: Request) {
  try {
    const data: TranscriptRequest = await request.json();

    // Send when there's a captured lead OR meaningful engagement.
    // (Quick-reply-only journeys count — they're the highest-converting path.)
    const userMessageCount = data.messages.filter((m) => m.role === "user").length;
    if (!hasLead(data.lead) && userMessageCount < 2) {
      return NextResponse.json(
        { success: false, message: "Not enough engagement to send transcript" },
        { status: 200 }
      );
    }

    const emailBody = formatEmailBody(data);
    const subject = formatSubject(data);

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("=== CHAT TRANSCRIPT (Resend not configured) ===");
      console.log(`Subject: ${subject}`);
      console.log(emailBody);
      console.log("=== END TRANSCRIPT ===");
      return NextResponse.json({ success: true, message: "Logged to console (Resend not configured)" });
    }

    await getResend().emails.send({
      from: "Aeopic <noreply@aeopic.com>",
      to: TEAM_EMAIL,
      subject,
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

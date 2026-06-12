/**
 * Page-aware greetings + proactive teaser copy.
 * Research: specific, page-matched openers dramatically outperform generic
 * ("Did you injure your shoulder?" beats "We're here to help").
 */

export interface PageContext {
  greeting: string;
  quickReplies: string[];
  teaser: string;
}

const DEFAULT_QUICK_REPLIES = ["Get a ballpark", "What do you build?", "See your work", "Talk to a human"];

const DEFAULT_CONTEXT: PageContext = {
  greeting:
    "Hey there! 👋 I'm the Aeopic assistant. Ask me about our services, pricing, process, or open roles — or get a project ballpark in 60 seconds.",
  quickReplies: DEFAULT_QUICK_REPLIES,
  teaser: "Got a project in mind? Get a ballpark in 60s — no email needed.",
};

const PAGE_CONTEXTS: { prefix: string; context: PageContext }[] = [
  {
    prefix: "/pricing",
    context: {
      greeting:
        "Hey! 👋 Looking at pricing? I can get you a ballpark for your specific project in 4 quick questions — or answer anything about how our pricing works.",
      quickReplies: ["Get a ballpark", "What's included?", "How long do projects take?", "Talk to a human"],
      teaser: "Want a ballpark for your project? Takes 60 seconds.",
    },
  },
  {
    prefix: "/opportunities",
    context: {
      greeting:
        "Hey! 👋 Checking out our open roles? Ask me anything about working with Aeopic — or about what we build.",
      quickReplies: ["What do you build?", "What's the team like?", "Talk to a human"],
      teaser: "Curious about working with Aeopic? Ask me anything.",
    },
  },
  {
    prefix: "/services",
    context: {
      greeting:
        "Hey there! 👋 Questions about how we'd build yours? I can explain any service or get you a ballpark in 60 seconds.",
      quickReplies: ["Get a ballpark", "How much?", "How long?", "Talk to a human"],
      teaser: "Questions about how we'd build yours? Ask away.",
    },
  },
  {
    prefix: "/work",
    context: {
      greeting:
        "Hey! 👋 Like what you see? I can tell you how any of these were built — or get you a ballpark for something similar.",
      quickReplies: ["Get a ballpark", "How much?", "What industries?"],
      teaser: "Want something like this for your business?",
    },
  },
  {
    prefix: "/industries",
    context: {
      greeting:
        "Hey there! 👋 We build for your industry. Ask me what that looks like — or get a ballpark for your business in 60 seconds.",
      quickReplies: ["Get a ballpark", "What do you build?", "See your work"],
      teaser: "We build for your industry — ask me how.",
    },
  },
  {
    prefix: "/locations",
    context: {
      greeting:
        "Hey! 👋 Yes, we serve your area. Ask me anything about working with a local team — or get a ballpark in 60 seconds.",
      quickReplies: ["Get a ballpark", "What do you build?", "See your work"],
      teaser: "Local business? We build for your area — ask me how.",
    },
  },
  {
    prefix: "/process",
    context: {
      greeting:
        "Hey there! 👋 Questions about how an engagement actually works? That's my specialty.",
      quickReplies: ["How long do projects take?", "How much?", "Get a ballpark"],
      teaser: "Questions about how it works? Ask me anything.",
    },
  },
  {
    prefix: "/blog",
    context: {
      greeting:
        "Hey! 👋 Enjoying the read? I can answer questions about anything we've written — or about your own project.",
      quickReplies: ["What do you build?", "Get a ballpark", "See your work"],
      teaser: "Questions about your own project? I'm quick.",
    },
  },
];

/** Pages where the widget should stay completely out of the way. */
const SUPPRESSED_PREFIXES = ["/start", "/get-started"];

export function isSuppressedPage(pathname: string): boolean {
  return SUPPRESSED_PREFIXES.some((p) => pathname.startsWith(p));
}

export function getPageContext(pathname: string): PageContext {
  const match = PAGE_CONTEXTS.find(({ prefix }) => pathname.startsWith(prefix));
  return match?.context ?? DEFAULT_CONTEXT;
}

// ---- Typing timing (Typebot's shipped formula) ----

const WPM = 400;
const MIN_TYPING_MS = 500;
const MAX_TYPING_MS = 3000;

/** wordCount / 400wpm, clamped to [500ms, 3000ms]. */
export function typingDuration(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  const ms = (words / WPM) * 60_000;
  return Math.min(MAX_TYPING_MS, Math.max(MIN_TYPING_MS, ms));
}

/** Split a response into sequential bubbles on blank lines (max 3 chunks). */
export function chunkResponse(text: string): string[] {
  const parts = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  if (parts.length <= 3) return parts.length > 0 ? parts : [text];
  // Re-merge the tail so long answers don't become a bubble flood
  return [parts[0], parts[1], parts.slice(2).join("\n\n")];
}

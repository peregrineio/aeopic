import { Flow, FlowInput, FlowState, FlowStep, LeadInfo } from "./types";

/**
 * Guided lead-capture flows (Typebot-style block model, plain reducer).
 * Research-backed shape: 3–4 ICP-mapped qualification questions in buttons,
 * value first, contact info last with the "insurance" framing.
 */

const EMAIL_RE = /\S+@\S+\.\S+/;
const PHONE_RE = /(\+?\d[\d\s().-]{6,})/;

export function isValidContact(value: string): boolean {
  return EMAIL_RE.test(value) || PHONE_RE.test(value);
}

export const ballparkFlow: Flow = {
  id: "ballpark",
  start: "projectType",
  steps: {
    projectType: {
      id: "projectType",
      say: ["Let's get you a ballpark — 4 quick questions, no email required to start. 👇", "What kind of project is it?"],
      input: {
        type: "buttons",
        slot: "projectType",
        options: ["Custom Web App", "AI / Automation", "Marketing & SEO", "eCommerce", "Not sure yet"],
      },
      next: "budget",
    },
    budget: {
      id: "budget",
      say: ["Got it — {projectType}. What budget range are you thinking?"],
      input: {
        type: "buttons",
        slot: "budget",
        options: ["Under $5k", "$5k–$15k", "$15k–$50k", "$50k+", "Not sure"],
      },
      next: "timeline",
    },
    timeline: {
      id: "timeline",
      say: ["And how soon do you want to move?"],
      input: {
        type: "buttons",
        slot: "timeline",
        options: ["ASAP", "1–3 months", "3+ months", "Just exploring"],
      },
      next: "name",
    },
    name: {
      id: "name",
      say: [
        "Perfect. Most **{projectType}** projects in that range launch in 4–8 weeks, and the team can give you a fixed quote within 48 hours of a discovery call.",
        "Last step — who should we ask for?",
      ],
      input: { type: "text", slot: "name", placeholder: "Your first name" },
      next: "contact",
    },
    contact: {
      id: "contact",
      say: ["Thanks {name}! And just in case we get disconnected — what's the best email or phone number to reach you?"],
      input: {
        type: "contact",
        slot: "contact",
        placeholder: "Email or phone",
        retry: "Hmm, that doesn't look like an email or phone number — mind double-checking?",
      },
      next: "done",
    },
    done: {
      id: "done",
      say: [
        "You're all set, {name}! 🎉 The team will reach out within 24 hours (usually much faster) with your ballpark.",
        "Want a more detailed instant estimate in the meantime? **[Try the interactive estimator](/pricing)** — or keep asking me questions.",
      ],
    },
  },
};

export const humanFlow: Flow = {
  id: "human",
  start: "name",
  steps: {
    name: {
      id: "name",
      say: ["Absolutely — let me connect you with a real person. Who should they ask for?"],
      input: { type: "text", slot: "name", placeholder: "Your first name" },
      next: "contact",
    },
    contact: {
      id: "contact",
      say: ["Thanks {name}. Best email or phone number for the team to reach you?"],
      input: {
        type: "contact",
        slot: "contact",
        placeholder: "Email or phone",
        retry: "That doesn't look like an email or phone number — mind double-checking?",
      },
      next: "topic",
    },
    topic: {
      id: "topic",
      say: ["Got it. Anything specific you'd like them to come prepared for? (Or tap skip.)"],
      input: { type: "text", slot: "topic", placeholder: "What's this about?" },
      next: "done",
    },
    done: {
      id: "done",
      say: [
        "Done, {name}! A real human from the team will reach out within 24 hours — usually much faster during business hours. 🤝",
        "Anything else I can answer in the meantime?",
      ],
    },
  },
};

const flows: Record<string, Flow> = {
  [ballparkFlow.id]: ballparkFlow,
  [humanFlow.id]: humanFlow,
};

export function getFlow(id: string): Flow | undefined {
  return flows[id];
}

export function startFlow(flowId: string): FlowState {
  const flow = flows[flowId];
  return { flowId, stepId: flow.start, slots: {}, retried: false };
}

export function getStep(state: FlowState): FlowStep {
  return flows[state.flowId].steps[state.stepId];
}

export function interpolate(text: string, slots: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => slots[key] ?? "");
}

export interface FlowAdvance {
  state: FlowState | null; // null when flow is finished
  /** Bot bubbles to send (already interpolated) */
  say: string[];
  /** Input config for the next step (buttons/placeholder), if any */
  input?: FlowStep["input"];
  /** True when validation failed and we're re-asking */
  retrying: boolean;
  /** Set when the flow completed — ship this lead immediately */
  completedLead?: LeadInfo;
}

/** Opening bubbles + input for a freshly started flow. */
export function enterFlow(state: FlowState): FlowAdvance {
  const step = getStep(state);
  return {
    state,
    say: step.say.map((s) => interpolate(s, state.slots)),
    input: step.input,
    retrying: false,
  };
}

const SKIP_WORDS = new Set(["skip", "cancel", "no thanks", "nevermind", "never mind", "stop", "exit"]);

/**
 * Feed a user answer into the flow. Returns the next bubbles + input.
 * "skip"/"cancel" exits the flow gracefully. Validation gets ONE retry,
 * then the answer is accepted as-is — chat must never become a trap.
 */
export function advanceFlow(state: FlowState, answer: string): FlowAdvance | { exited: true } {
  const trimmed = answer.trim();
  if (SKIP_WORDS.has(trimmed.toLowerCase())) {
    // Skipping an optional tail question still completes the flow when we
    // already have contact info; otherwise it exits.
    const hasLead = Boolean(state.slots.contact);
    if (hasLead) {
      return finishFrom(state);
    }
    return { exited: true };
  }

  const step = getStep(state);
  const input = step.input;

  if (input) {
    // Validate once; second attempt passes through — never trap the user
    const retryMessage = validateInput(input, trimmed);
    if (retryMessage && !state.retried) {
      return {
        state: { ...state, retried: true },
        say: [retryMessage],
        input,
        retrying: true,
      };
    }
    state = {
      ...state,
      slots: { ...state.slots, [input.slot]: trimmed },
      retried: false,
    };
  }

  if (!step.next) return finishFrom(state);

  const nextState: FlowState = { ...state, stepId: step.next };
  const nextStep = getStep(nextState);
  const result: FlowAdvance = {
    state: nextStep.input || nextStep.next ? nextState : null,
    say: nextStep.say.map((s) => interpolate(s, nextState.slots)),
    input: nextStep.input,
    retrying: false,
  };
  // Terminal step with no input → flow is complete
  if (!nextStep.input && !nextStep.next) {
    result.state = null;
    result.completedLead = leadFromSlots(nextState.slots);
  }
  return result;
}

/** Returns a retry message when the answer doesn't fit the slot, else null. */
function validateInput(input: FlowInput, value: string): string | null {
  if (input.type === "contact" && !isValidContact(value)) {
    return input.retry ?? "Mind double-checking that?";
  }
  if (input.slot === "name" && (value.length > 40 || value.split(/\s+/).length > 4 || value.includes("?"))) {
    return "Just your first name is perfect 🙂";
  }
  return null;
}

function finishFrom(state: FlowState): FlowAdvance {
  return {
    state: null,
    say: ["Got it — thanks!"],
    retrying: false,
    completedLead: leadFromSlots(state.slots),
  };
}

function leadFromSlots(slots: Record<string, string>): LeadInfo {
  return {
    name: slots.name,
    contact: slots.contact,
    projectType: slots.projectType,
    budget: slots.budget,
    timeline: slots.timeline,
  };
}

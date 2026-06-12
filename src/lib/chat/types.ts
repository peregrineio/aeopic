export interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

export interface KBEntry {
  id: string;
  /** Short label shown in "Did you mean…?" chips */
  title: string;
  /** Full example phrasings — the primary match signal */
  utterances: string[];
  /** Discriminative single words / short phrases — secondary signal */
  keywords: string[];
  response: string;
  quickReplies?: string[];
  /** Pathname prefixes where this entry's score is boosted */
  boostOn?: string[];
}

export type MatchTier = "strong" | "medium" | "fallback";

export interface MatchResult {
  tier: MatchTier;
  entry: KBEntry | null;
  /** Raw BM25 score of the top hit (0 when fallback) */
  score: number;
  /** Top alternative entries for "Did you mean…?" chips */
  alternatives: KBEntry[];
}

// ---- Guided flows (lead capture) ----

export interface FlowInput {
  type: "buttons" | "text" | "contact";
  /** Slot name the answer is stored under */
  slot: string;
  options?: string[];
  placeholder?: string;
  /** Shown once if validation fails; second attempt is accepted as-is */
  retry?: string;
}

export interface FlowStep {
  id: string;
  /** Bot bubbles, sent sequentially. Supports {slot} interpolation. */
  say: string[];
  input?: FlowInput;
  next?: string;
}

export interface Flow {
  id: string;
  start: string;
  steps: Record<string, FlowStep>;
}

export interface FlowState {
  flowId: string;
  stepId: string;
  slots: Record<string, string>;
  /** True once a validation retry has been consumed for the current step */
  retried: boolean;
}

export interface LeadInfo {
  name?: string;
  contact?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
}

import { z } from "zod";
import { US_STATE_CODES } from "@/lib/constants/states";

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[\d().+\-\s]{7,20}$/u, "Enter a valid phone number")
  .optional()
  .or(z.literal(""));

const acknowledgedTrue = (message: string) =>
  z.boolean().refine((v) => v === true, { message });

const stateSchema = z
  .string()
  .refine((v) => (US_STATE_CODES as readonly string[]).includes(v), {
    message: "Select a state",
  });

const sharedBase = {
  listing_id: z.string().uuid({ message: "Invalid listing reference" }),
  first_name: z.string().trim().min(2, "First name is required"),
  last_name: z.string().trim().min(2, "Last name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  data_consent: acknowledgedTrue("You must consent to data processing"),
};

export const employeeApplicationSchema = z.object({
  ...sharedBase,
  engagement_type: z.literal("employee"),
  phone: phoneSchema,
  applicant_state: stateSchema,
  cover_letter: z
    .string()
    .trim()
    .max(2000, "Cover letter must be 2,000 characters or fewer")
    .optional()
    .or(z.literal("")),
  resume_draft_id: z.string().uuid().optional(),
  resume_text: z
    .string()
    .trim()
    .max(10000, "Resume text must be 10,000 characters or fewer")
    .optional()
    .or(z.literal("")),
  at_will_acknowledged: acknowledgedTrue(
    "You must acknowledge at-will employment"
  ),
});

export const contractorProposalSchema = z.object({
  ...sharedBase,
  engagement_type: z.literal("contractor"),
  // Optional here so generic proposals still validate; the sales application
  // form requires them client-side via salesApplicationSchema below
  phone: phoneSchema,
  applicant_state: stateSchema.optional().or(z.literal("")),
  sales_english_ack: z.boolean().optional(),
  commission_only_ack: z.boolean().optional(),
  portfolio_url: z
    .string()
    .trim()
    .url("Enter a valid URL")
    .optional()
    .or(z.literal("")),
  rate_range: z
    .string()
    .trim()
    .max(200, "Keep rate description under 200 characters")
    .optional()
    .or(z.literal("")),
  availability: z.enum([
    "immediate",
    "within-2-weeks",
    "within-1-month",
    "flexible",
  ]),
  project_interest: z
    .string()
    .trim()
    .min(20, "Tell us at least 20 characters about your interest")
    .max(2000, "Keep your message under 2,000 characters"),
  ic_acknowledged: acknowledgedTrue(
    "You must acknowledge this is an independent contractor engagement"
  ),
});

/**
 * Sales-role (SDR) 1099 application — same wire format as a contractor
 * proposal, but phone/state are required and the two legally-worded
 * screeners (legal review 2026-07-10) must be affirmed.
 */
export const salesApplicationSchema = contractorProposalSchema.extend({
  phone: z
    .string()
    .trim()
    .regex(/^[\d().+\-\s]{7,20}$/u, "Enter a valid phone number"),
  applicant_state: stateSchema,
  sales_english_ack: acknowledgedTrue(
    "This role requires conducting professional sales calls in fluent English"
  ),
  commission_only_ack: acknowledgedTrue(
    "You must acknowledge this is a commission-only role"
  ),
});

export type EmployeeApplicationInput = z.infer<typeof employeeApplicationSchema>;
export type ContractorProposalInput = z.infer<typeof contractorProposalSchema>;
export type SalesApplicationInput = z.infer<typeof salesApplicationSchema>;

export type ApplicationInput =
  | EmployeeApplicationInput
  | ContractorProposalInput;

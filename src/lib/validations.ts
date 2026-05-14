import { z } from "zod";

// Helper for optional fields that might receive null from form inputs
const optionalStringField = z.union([z.string(), z.null()]).optional().transform(v => v ?? undefined);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: optionalStringField,
  company: optionalStringField,
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDescription: z.string().min(10, "Please tell us more about your project"),
  timeline: optionalStringField,
  budget: optionalStringField,
  referralSource: optionalStringField,
});

// Input type before transformation (what the form sends)
export type ContactFormInput = z.input<typeof contactFormSchema>;

// Output type after transformation (what we use)
export type ContactFormData = z.output<typeof contactFormSchema>;

export const estimatorSchema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  complexity: z.string().min(1, "Please select complexity"),
  features: z.array(z.string()),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: optionalStringField,
  company: optionalStringField,
  description: optionalStringField,
});

export type EstimatorFormInput = z.input<typeof estimatorSchema>;
export type EstimatorFormData = z.output<typeof estimatorSchema>;

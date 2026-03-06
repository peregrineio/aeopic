import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDescription: z.string().min(10, "Please tell us more about your project"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  referralSource: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

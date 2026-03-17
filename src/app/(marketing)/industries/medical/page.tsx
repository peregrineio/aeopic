"use client";

import {
  Heart,
  Calendar,
  FileText,
  Bell,
  Users,
  MessageSquare,
  Shield,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function MedicalPage() {
  return (
    <IndustryPageTemplate
      industry="Medical & Dental"
      slug="medical"
      icon={Heart}
      color="#ef4444"
      heroHeadline="Software Built for Medical & Dental Practices"
      heroSubheadline="Patients want to book online. Give them what they want — securely."
      painPoints={[
        {
          problem:
            "Patients are calling to book appointments that take 30 seconds online",
          solution:
            "Self-service booking with calendar integration, insurance pre-screening, and automated confirmations.",
        },
        {
          problem: "Intake forms are still clipboard-and-pen at check-in",
          solution:
            "Digital intake forms patients complete from their phone before they arrive. Data flows directly into your system.",
        },
        {
          problem: "No-shows are costing you thousands per month",
          solution:
            "Automated appointment reminders via text and email — 24 hours before, 2 hours before, customizable.",
        },
        {
          problem:
            "Patient communication is scattered across phone, email, and voicemail",
          solution:
            "Secure patient messaging portal for questions, follow-ups, and document sharing — all in one place.",
        },
      ]}
      features={[
        {
          icon: Calendar,
          title: "Online Booking",
          description:
            "Self-service scheduling with real-time availability and automated confirmations.",
        },
        {
          icon: FileText,
          title: "Digital Intake Forms",
          description:
            "Patients complete paperwork on their phone before they arrive.",
        },
        {
          icon: Bell,
          title: "Appointment Reminders",
          description:
            "Automated text and email reminders that reduce no-shows by up to 70%.",
        },
        {
          icon: Users,
          title: "Patient Portal",
          description:
            "Secure access to appointments, documents, and communication history.",
        },
        {
          icon: MessageSquare,
          title: "Secure Messaging",
          description:
            "HIPAA-compliant messaging for patient questions and follow-ups.",
        },
        {
          icon: Shield,
          title: "HIPAA-Ready",
          description:
            "Built with privacy and compliance in mind from day one.",
        },
      ]}
      stats={[
        { value: "70%", label: "Fewer No-Shows" },
        { value: "3 Min", label: "Digital Intake Time" },
        { value: "HIPAA", label: "Compliant" },
      ]}
      cta={{
        headline: "Ready to Modernize Your Practice?",
        subheadline:
          "Let's build a patient experience that's secure, efficient, and actually works.",
      }}
    />
  );
}

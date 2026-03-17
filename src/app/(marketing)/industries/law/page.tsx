"use client";

import {
  Scale,
  FileText,
  FolderLock,
  ClipboardList,
  Calendar,
  MessageSquare,
  Bell,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function LawPage() {
  return (
    <IndustryPageTemplate
      industry="Law Offices"
      slug="law"
      icon={Scale}
      color="#1e3a5f"
      heroHeadline="Software Built for Law Offices"
      heroSubheadline="Client intake shouldn't be phone tag and lost emails. Automate it."
      painPoints={[
        {
          problem: "Client intake is emails, phone tag, and paper forms",
          solution:
            "Digital intake forms and automated workflows that capture client information and route it to the right attorney instantly.",
        },
        {
          problem: "Documents get lost in email chains and shared drives",
          solution:
            "A secure client portal with document sharing, e-signatures, and version history — accessible from anywhere.",
        },
        {
          problem: "Clients call to ask about their case status",
          solution:
            "A client portal where they can check case status, view upcoming dates, and message your team — without calling.",
        },
        {
          problem: "Follow-ups and deadlines slip through the cracks",
          solution:
            "Automated reminders for upcoming deadlines, follow-up tasks, and client check-ins — nothing gets missed.",
        },
      ]}
      features={[
        {
          icon: FileText,
          title: "Client Intake Automation",
          description:
            "Digital forms that capture client details and route to the right attorney.",
        },
        {
          icon: FolderLock,
          title: "Secure Document Portal",
          description:
            "Encrypted document sharing with e-signatures and version control.",
        },
        {
          icon: ClipboardList,
          title: "Case Status Tracking",
          description:
            "Clients can check their case status anytime without calling.",
        },
        {
          icon: Calendar,
          title: "Appointment Scheduling",
          description:
            "Online booking for consultations with automated confirmations.",
        },
        {
          icon: MessageSquare,
          title: "Client Messaging",
          description:
            "Secure messaging portal for questions and updates.",
        },
        {
          icon: Bell,
          title: "Deadline Management",
          description:
            "Automated reminders for deadlines, tasks, and follow-ups.",
        },
      ]}
      stats={[
        { value: "5 Min", label: "Intake, Not 5 Days" },
        { value: "Secure", label: "Client Portal" },
        { value: "Zero", label: "Missed Deadlines" },
      ]}
      cta={{
        headline: "Ready to Streamline Your Practice?",
        subheadline:
          "Let's build a system that handles intake, documents, and client communication — securely.",
      }}
    />
  );
}

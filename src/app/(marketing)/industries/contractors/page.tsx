"use client";

import {
  Hammer,
  Image,
  FileText,
  FolderKanban,
  Users,
  RefreshCw,
  Mail,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function ContractorsPage() {
  return (
    <IndustryPageTemplate
      industry="Contractors & Remodeling"
      slug="contractors"
      icon={Hammer}
      color="#726AFF"
      heroHeadline="Software Built for Contractors & Remodeling Companies"
      heroSubheadline="Your portfolio is on your phone, not your website. Let's change that."
      painPoints={[
        {
          problem: "Your best work is stuck in your camera roll",
          solution:
            "A portfolio website with before/after galleries, project descriptions, and a quote request form that captures leads 24/7.",
        },
        {
          problem: "Leads call, you're on a job site, they go to a competitor",
          solution:
            "Online quote request forms and automated follow-up emails that keep leads warm until you can call back.",
        },
        {
          problem: "You're tracking jobs on paper or in your head",
          solution:
            "A CRM that tracks every lead from first inquiry to final walkthrough — with notes, photos, and payment status.",
        },
        {
          problem: "Customers don't know the project status unless they call you",
          solution:
            "A client portal where customers can see project progress, approve change orders, and view invoices.",
        },
      ]}
      features={[
        {
          icon: Image,
          title: "Portfolio Website",
          description:
            "Beautiful before/after galleries that showcase your best work and attract new clients.",
        },
        {
          icon: FileText,
          title: "Quote Request Forms",
          description:
            "Online forms that capture lead details, project scope, and budget — 24/7.",
        },
        {
          icon: FolderKanban,
          title: "Project CRM",
          description:
            "Track every lead and project from inquiry to completion with notes and photos.",
        },
        {
          icon: Users,
          title: "Client Portal",
          description:
            "Customers can view project progress, approve changes, and pay invoices online.",
        },
        {
          icon: RefreshCw,
          title: "Progress Updates",
          description:
            "Keep clients informed with milestone updates and photo documentation.",
        },
        {
          icon: Mail,
          title: "Automated Follow-ups",
          description:
            "Nurture leads with automated emails while you're busy on job sites.",
        },
      ]}
      stats={[
        { value: "24/7", label: "Capture Leads" },
        { value: "Full", label: "Project Tracking Dashboard" },
        { value: "Self-Service", label: "Client Portal Access" },
      ]}
      cta={{
        headline: "Ready to Showcase Your Work?",
        subheadline:
          "Let's build a portfolio that attracts clients and a system that keeps projects on track.",
      }}
    />
  );
}

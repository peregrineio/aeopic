"use client";

import {
  Thermometer,
  LayoutDashboard,
  Calendar,
  Receipt,
  Users,
  Megaphone,
  Star,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function HVACPage() {
  return (
    <IndustryPageTemplate
      industry="HVAC & Home Services"
      slug="hvac"
      icon={Thermometer}
      color="#f59e0b"
      heroHeadline="Software Built for HVAC & Home Service Companies"
      heroSubheadline="Stop losing jobs to voicemail. Automate dispatch, booking, and billing — so you can focus on the work."
      painPoints={[
        {
          problem: "You're scheduling jobs on a whiteboard or spreadsheet",
          solution:
            "A visual dispatch dashboard with drag-and-drop scheduling, technician assignment, and real-time status tracking.",
        },
        {
          problem: "Customers call and get voicemail during busy hours",
          solution:
            "24/7 online booking that lets homeowners schedule service without picking up the phone.",
        },
        {
          problem: "You're chasing invoices 30-60 days after the job",
          solution:
            "Automated invoicing the moment a job is marked complete. Customers pay online instantly.",
        },
        {
          problem: "No way to track which marketing brings in jobs",
          solution:
            "Lead source tracking that shows you exactly which ads, Google searches, or referrals drive revenue.",
        },
      ]}
      features={[
        {
          icon: LayoutDashboard,
          title: "Dispatch Dashboard",
          description:
            "Visual scheduling with drag-and-drop, technician assignments, and real-time job status.",
        },
        {
          icon: Calendar,
          title: "Online Booking",
          description:
            "24/7 self-service booking so customers can schedule without calling.",
        },
        {
          icon: Receipt,
          title: "Automated Invoicing",
          description:
            "Invoices sent automatically when jobs complete. Online payment built in.",
        },
        {
          icon: Users,
          title: "Customer Portal",
          description:
            "Customers can view service history, upcoming appointments, and pay invoices.",
        },
        {
          icon: Megaphone,
          title: "Marketing & SEO",
          description:
            "Get found on Google. Track which marketing channels bring in the most jobs.",
        },
        {
          icon: Star,
          title: "Review Management",
          description:
            "Automated review requests after every job. Build your online reputation.",
        },
      ]}
      stats={[
        { value: "60%", label: "Less Phone Time" },
        { value: "24/7", label: "Online Booking" },
        { value: "Same-Day", label: "Get Paid" },
      ]}
      cta={{
        headline: "Ready to Modernize Your HVAC Business?",
        subheadline:
          "Let's build a platform that handles scheduling, billing, and customer communication — so you can focus on the work.",
      }}
    />
  );
}

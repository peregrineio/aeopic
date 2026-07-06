"use client";

import {
  Cog,
  ClipboardList,
  Users,
  ShieldCheck,
  Columns3,
  Monitor,
  Package,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function IndustrialContractingPage() {
  return (
    <IndustryPageTemplate
      industry="Industrial Contracting"
      slug="industrial-contracting"
      icon={Cog}
      color="#EA580C"
      heroHeadline="Software Built for the Turnaround, Not the Office Tower"
      heroSubheadline="Custom platforms for industrial contractors who run crews at refineries, chemical plants, and heavy industrial facilities — from daily reports to ISNetworld compliance."
      painPoints={[
        {
          problem: "Your daily reports are still on clipboards — data arrives 24-48 hours late",
          solution:
            "Digital daily field reports with trade-level crew tracking, photo attachments, and automatic rollup dashboards — submitted from the field before the shift ends.",
        },
        {
          problem: "ISNetworld eats 20+ hours a month of your safety team's time",
          solution:
            "A compliance dashboard that auto-generates TRIR/DART from your incident log, tracks certificate expirations, and organizes documents by platform requirement.",
        },
        {
          problem: "Your turnaround manager calls you for updates instead of checking a portal",
          solution:
            "A client-facing portal where your customer sees real-time progress against work packages, daily manpower counts, and safety metrics — without a single phone call.",
        },
        {
          problem: "Nobody knows where the scaffolding went",
          solution:
            "Equipment and tool tracking with check-in/check-out, location tagging, and utilization dashboards so you know exactly what you have and where it is.",
        },
      ]}
      features={[
        {
          icon: ClipboardList,
          title: "Digital Daily Reports",
          description:
            "Mobile-first daily logs capturing crew counts by trade, hours worked, equipment used, and progress notes with photo documentation. Auto-rollup to project dashboards.",
        },
        {
          icon: Users,
          title: "Craft Labor Tracking",
          description:
            "Track headcount and hours by trade classification, shift, and work package. Real-time manpower curves against plan. Billing-ready timesheet export.",
        },
        {
          icon: ShieldCheck,
          title: "Safety & Compliance Dashboard",
          description:
            "Log observations, near-misses, and incidents. Auto-calculate TRIR and DART. Track ISNetworld, Avetta, and DISA requirements in one view.",
        },
        {
          icon: Columns3,
          title: "Turnaround Progress Boards",
          description:
            "Visual Kanban-style boards tied to work packages. Drag-and-drop status updates built for turnaround coordinators who think in units and systems.",
        },
        {
          icon: Monitor,
          title: "Client Progress Portal",
          description:
            "Branded login for refinery and plant customers showing daily manpower, progress percentages, safety stats, and photo documentation in real time.",
        },
        {
          icon: Package,
          title: "Equipment & Tool Tracking",
          description:
            "Check-in/check-out system for scaffolding, rigging, welding machines, and specialty tools. Utilization rates, location tracking, and maintenance schedules.",
        },
      ]}
      stats={[
        { value: "62%", label: "Of Operators Struggle to Source Turnaround Workers" },
        { value: "40-60%", label: "Of Project Costs Are Labor" },
        { value: "7.2M bpd", label: "Gulf Coast Refining Capacity" },
      ]}
      cta={{
        headline: "Your Crews Deserve Better Than Clipboards",
        subheadline:
          "Let's build the platform your turnaround teams actually need. We're 20 minutes from the Ship Channel.",
      }}
    />
  );
}

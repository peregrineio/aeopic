"use client";

import {
  Factory,
  CalendarClock,
  ClipboardList,
  Calculator,
  CheckCircle,
  LayoutDashboard,
  Package,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function ManufacturingPage() {
  return (
    <IndustryPageTemplate
      industry="Manufacturing"
      slug="manufacturing"
      icon={Factory}
      color="#B45309"
      heroHeadline="Your Shop Floor Runs on Skill. Your Systems Should Keep Up."
      heroSubheadline="Custom MES, scheduling, and operations platforms for fabrication shops and manufacturers who've outgrown whiteboards and spreadsheets."
      painPoints={[
        {
          problem: "Your scheduling board is a whiteboard that limits your throughput",
          solution:
            "Visual production scheduling with drag-and-drop, capacity planning, bottleneck detection, and real-time status tracking across every machine and work center.",
        },
        {
          problem: "Paper work orders lose context between the office and the floor",
          solution:
            "Digital work orders with routing instructions, material specs, quality checkpoints, and operator notes — accessible on tablets at every station.",
        },
        {
          problem: "Quoting takes days when it should take minutes",
          solution:
            "Automated quoting engine that pulls from your material costs, labor rates, and machine time estimates to generate accurate quotes while the customer is still on the phone.",
        },
        {
          problem: "Your quality records won't survive an audit",
          solution:
            "Digital quality management with inspection checklists, measurement tracking, non-conformance workflows, and full traceability from raw material to finished part.",
        },
      ]}
      features={[
        {
          icon: CalendarClock,
          title: "Production Scheduling",
          description:
            "Visual drag-and-drop scheduling with capacity planning, machine allocation, and bottleneck detection. See every job across every work center in real time.",
        },
        {
          icon: ClipboardList,
          title: "Digital Work Orders",
          description:
            "Paperless work orders with routing, material specs, quality checkpoints, and operator notes. Track progress from release through completion.",
        },
        {
          icon: Calculator,
          title: "Automated Quoting",
          description:
            "Generate accurate quotes from your actual material costs, labor rates, and machine time. Configurable markup rules and customer-specific pricing.",
        },
        {
          icon: CheckCircle,
          title: "Quality Management",
          description:
            "Inspection checklists, measurement tracking, SPC charts, and non-conformance workflows. Full traceability for ISO and customer audits.",
        },
        {
          icon: LayoutDashboard,
          title: "Shop Floor Dashboard",
          description:
            "Real-time OEE, machine utilization, and production metrics displayed on shop floor monitors. Operators see their targets and status at a glance.",
        },
        {
          icon: Package,
          title: "Inventory & Purchasing",
          description:
            "Track raw materials, WIP, and finished goods. Automated reorder points, purchase order generation, and supplier management.",
        },
      ]}
      stats={[
        { value: "5,180", label: "Manufacturers in Harris County" },
        { value: "$80B", label: "Houston Metro Manufacturing GDP" },
        { value: "70%", label: "Of Shops Still Use Manual Scheduling" },
      ]}
      cta={{
        headline: "Your Shop Floor Deserves Better Than Whiteboards",
        subheadline:
          "Let's build a platform that matches how your operation actually runs — from quoting to shipping.",
      }}
    />
  );
}

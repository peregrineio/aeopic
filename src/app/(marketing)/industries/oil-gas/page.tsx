"use client";

import {
  Fuel,
  LayoutDashboard,
  DollarSign,
  Smartphone,
  FileCheck,
  Globe,
  Map,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function OilGasPage() {
  return (
    <IndustryPageTemplate
      industry="Oil & Gas"
      slug="oil-gas"
      icon={Fuel}
      color="#0C4A6E"
      heroHeadline="Your Wells Produce Data. Your Systems Should Keep Up."
      heroSubheadline="Custom platforms for independent operators and mid-market E&P companies — production dashboards, field operations, and compliance tools built around how you actually work."
      painPoints={[
        {
          problem: "Your production data lives in 6 spreadsheets and 3 inboxes",
          solution:
            "Unified production dashboards that ingest field data, SCADA feeds, and manual entry into one real-time view — with automated allocation and RRC-ready exports.",
        },
        {
          problem: "You don't know you've blown an AFE until the invoice arrives",
          solution:
            "Real-time AFE tracking with configurable threshold alerts, automatic cost categorization, and JIB-ready partner billing output.",
        },
        {
          problem: "Compliance filing is a fire drill every quarter",
          solution:
            "Compliance modules that auto-populate RRC and TCEQ regulatory forms from production data already in the system, with deadline calendars and audit trails.",
        },
        {
          problem: "Your field tickets disappear between the wellsite and accounting",
          solution:
            "Mobile field ticket capture with photo documentation, automatic matching to purchase orders and rate agreements, and approval workflows that close the loop before payment.",
        },
      ]}
      features={[
        {
          icon: LayoutDashboard,
          title: "Production Command Center",
          description:
            "Real-time well-by-well production dashboard pulling from SCADA, field data capture, and manual entry. Allocation calculations, decline curve overlays, and exception alerts.",
        },
        {
          icon: DollarSign,
          title: "AFE & Capital Tracking",
          description:
            "Create, approve, and monitor Authorization for Expenditure from proposal through close-out. Track actuals against budget with automated partner notifications.",
        },
        {
          icon: Smartphone,
          title: "Field Operations Mobile",
          description:
            "iOS/Android app for pumpers and field personnel to submit gauge readings, run tickets, and inspections — with offline capability for no-signal locations.",
        },
        {
          icon: FileCheck,
          title: "Regulatory Compliance Engine",
          description:
            "Auto-generate RRC, TCEQ, and state regulatory filings from production and emissions data. Filing deadline tracking and audit-ready records.",
        },
        {
          icon: Globe,
          title: "Vendor & Contractor Portal",
          description:
            "Centralized portal for contractor onboarding, rate agreement management, insurance tracking, field ticket submission, and invoice matching.",
        },
        {
          icon: Map,
          title: "Lease & Land Management",
          description:
            "Track mineral interests, working interests, division orders, and lease obligations with GIS integration connected to revenue distribution.",
        },
      ]}
      stats={[
        { value: "4,600+", label: "Energy Companies in Houston" },
        { value: "$900K", label: "Annual Waste from Disconnected Systems" },
        { value: "30%", label: "Downtime Reduction with Digital Workflows" },
      ]}
      cta={{
        headline: "Built in Houston. Built for Operators.",
        subheadline:
          "Your operation has its own workflows, its own reporting needs, its own field realities. Let's build the platform that fits — not the one that forces you to fit it.",
      }}
    />
  );
}

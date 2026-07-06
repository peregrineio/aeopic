"use client";

import {
  Blocks,
  LayoutDashboard,
  Workflow,
  Building2,
  Link,
  BarChart3,
  Users,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function EnterpriseSMBPage() {
  return (
    <IndustryPageTemplate
      industry="Enterprise SMB"
      slug="enterprise-smb"
      icon={Blocks}
      color="#475569"
      heroHeadline="Your Business Outgrew Your Software"
      heroSubheadline="You built a $5M–$100M operation on grit, spreadsheets, and a stack of disconnected tools. We build the platform that catches up to where you already are."
      painPoints={[
        {
          problem: "You have 12 tools and no answers",
          solution:
            "One unified dashboard pulling real-time data from every part of your operation — sales, projects, inventory, finance — into a single view your leadership team actually trusts.",
        },
        {
          problem: "Reporting takes all of Monday morning",
          solution:
            "Automated executive reporting that builds itself from live data. Weekly KPIs, department performance, and financial rollups — no spreadsheet exports required.",
        },
        {
          problem: "Your CRM doesn't match how you actually sell",
          solution:
            "A custom CRM built around your sales process — whether that's multi-stage bids, recurring service contracts, or complex multi-stakeholder deals.",
        },
        {
          problem: "You're paying for 6 tools and using half of each",
          solution:
            "One purpose-built platform that replaces the patchwork. No per-seat surprises, no middleware glue, no features you'll never touch.",
        },
      ]}
      features={[
        {
          icon: LayoutDashboard,
          title: "Unified Operations Dashboard",
          description:
            "Real-time visibility across departments, locations, and entities. One login, one source of truth for your entire operation.",
        },
        {
          icon: Workflow,
          title: "Custom Workflow Engine",
          description:
            "Automate cross-system processes — when a deal closes, the project spins up, the team gets assigned, the client gets onboarded. Automatically.",
        },
        {
          icon: Building2,
          title: "Multi-Location Command Center",
          description:
            "Location-level P&L, staffing, compliance, and performance metrics rolled up for leadership and drilled down for managers.",
        },
        {
          icon: Link,
          title: "Integration Hub",
          description:
            "Connect your existing tools — QuickBooks, HubSpot, inventory systems — into one data layer. No more export, import, reconcile.",
        },
        {
          icon: BarChart3,
          title: "Executive Reporting & BI",
          description:
            "Board-ready dashboards and automated reports built around the metrics that actually drive your decisions.",
        },
        {
          icon: Users,
          title: "Client & Vendor Portals",
          description:
            "Self-service portals for customers, contractors, or suppliers to track status, submit documents, and communicate — reducing your team's admin load.",
        },
      ]}
      stats={[
        { value: "67%", label: "Of Mid-Market Leaders Hit a SaaS Wall" },
        { value: "162%", label: "5-Year ROI for Custom vs Off-the-Shelf" },
        { value: "$120K+", label: "Annual Waste on Redundant SaaS" },
      ]}
      cta={{
        headline: "Stop Duct-Taping Your Tech Stack",
        subheadline:
          "Book a discovery call. We'll map your current systems, identify the gaps, and show you what a unified platform looks like for your operation.",
      }}
    />
  );
}

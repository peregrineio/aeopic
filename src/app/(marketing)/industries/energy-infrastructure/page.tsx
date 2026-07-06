"use client";

import {
  Zap,
  Activity,
  Cpu,
  FileCheck,
  GitBranch,
  Smartphone,
  Leaf,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function EnergyInfrastructurePage() {
  return (
    <IndustryPageTemplate
      industry="Energy Infrastructure"
      slug="energy-infrastructure"
      icon={Zap}
      color="#0F766E"
      heroHeadline="Software That Keeps the Grid Running"
      heroSubheadline="Custom dashboards, compliance tools, and asset management platforms for the companies that build and operate America's energy infrastructure."
      painPoints={[
        {
          problem: "Your asset data lives in 6 different systems that don't talk to each other",
          solution:
            "Unified dashboards pulling SCADA, IoT sensor, maintenance, and financial data into a single real-time view across every site in your portfolio.",
        },
        {
          problem: "Compliance prep takes your team 3 weeks every quarter",
          solution:
            "Custom compliance platforms that automate NERC CIP evidence collection, ERCOT reporting, and environmental permit tracking — so audits are a click, not a fire drill.",
        },
        {
          problem: "You find out about failures after they cost you $500K",
          solution:
            "Predictive maintenance tools that ingest sensor data, flag degradation trends, and trigger work orders before unplanned outages hit your bottom line.",
        },
        {
          problem: "Your project pipeline lives in a spreadsheet with 47 tabs",
          solution:
            "Purpose-built project portfolio platforms that track interconnection queue status, permitting milestones, land agreements, and construction progress in one place.",
        },
      ]}
      features={[
        {
          icon: Activity,
          title: "Asset Performance Dashboards",
          description:
            "Real-time visibility across solar arrays, substations, battery systems, and generation assets. Monitor inverter health, transformer loading, and battery state-of-health.",
        },
        {
          icon: Cpu,
          title: "Predictive Maintenance Engine",
          description:
            "ML-driven anomaly detection that learns your equipment's failure signatures. Integrates with existing SCADA and IoT sensors without rip-and-replace.",
        },
        {
          icon: FileCheck,
          title: "Regulatory Compliance Platform",
          description:
            "Automated evidence collection for NERC CIP, FERC, and ERCOT requirements. Audit-ready documentation with role-based access and version control.",
        },
        {
          icon: GitBranch,
          title: "Project & Interconnection Tracker",
          description:
            "Manage your development pipeline from queue application through commercial operation. Track permitting, land status, engineering milestones, and offtake agreements.",
        },
        {
          icon: Smartphone,
          title: "Field Operations Portal",
          description:
            "Mobile-first work order management for field technicians. Digital inspections, photo documentation, parts tracking, and crew scheduling — online or offline.",
        },
        {
          icon: Leaf,
          title: "Environmental & ESG Reporting",
          description:
            "Automated data collection for emissions monitoring, water usage, wildlife impact tracking, and ESG disclosure requirements across your portfolio.",
        },
      ]}
      stats={[
        { value: "$150B", label: "Annual Cost of US Power Outages" },
        { value: "427 GW", label: "In ERCOT Interconnection Queue" },
        { value: "69%", label: "Plants with Monthly Unplanned Outages" },
      ]}
      cta={{
        headline: "Your Infrastructure Deserves Better Than Spreadsheets",
        subheadline:
          "Let's scope a platform built for how your team actually operates — from asset monitoring to compliance to project delivery.",
      }}
    />
  );
}

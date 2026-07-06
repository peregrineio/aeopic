"use client";

import {
  Route,
  Shield,
  FileCheck,
  MapPin,
  Smartphone,
  BarChart3,
  Users,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function PipelineOperationsPage() {
  return (
    <IndustryPageTemplate
      industry="Pipeline Operations"
      slug="pipeline-operations"
      icon={Route}
      color="#334155"
      heroHeadline="Software Built for the Spread, Not the Boardroom"
      heroSubheadline="Integrity management, compliance tracking, and field ops platforms for pipeline operators who need software that works at the ROW — not just the corporate office."
      painPoints={[
        {
          problem: "Your integrity data lives in filing cabinets and disconnected spreadsheets",
          solution:
            "Unified integrity management dashboards that correlate ILI data, cathodic protection readings, and inspection records into one risk-ranked pipeline view.",
        },
        {
          problem: "PHMSA Mega Rule compliance is overwhelming your team",
          solution:
            "Automated compliance tracking that maps your obligations, organizes evidence, tracks deadlines, and generates audit-ready documentation for every regulatory requirement.",
        },
        {
          problem: "Enterprise software costs $100K+ and takes 18 months to deploy",
          solution:
            "Purpose-built platforms delivered in weeks, not years — scoped to your actual operations, not a vendor's feature roadmap.",
        },
        {
          problem: "Field inspectors can't submit reports without driving back to the office",
          solution:
            "Mobile inspection apps with offline capability, GPS-tagged photo documentation, and automatic sync to your integrity management system when connectivity returns.",
        },
      ]}
      features={[
        {
          icon: Shield,
          title: "Integrity Management Dashboard",
          description:
            "Risk-ranked pipeline views correlating ILI runs, CP surveys, leak history, and inspection data. Visual mapping of your entire system with anomaly tracking.",
        },
        {
          icon: FileCheck,
          title: "PHMSA Compliance Engine",
          description:
            "Map every regulatory obligation. Track evidence collection, filing deadlines, and audit preparation. Built for the Mega Rule and state-specific requirements.",
        },
        {
          icon: MapPin,
          title: "ROW & Easement Tracking",
          description:
            "GIS-integrated right-of-way management with landowner agreements, encroachment monitoring, and permit documentation in one system.",
        },
        {
          icon: Smartphone,
          title: "Field Inspection Mobile",
          description:
            "Offline-capable inspection app with GPS tagging, photo capture, standardized checklists, and direct submission to your integrity database.",
        },
        {
          icon: BarChart3,
          title: "ILI Data Management",
          description:
            "Ingest, visualize, and analyze inline inspection data. Track anomaly growth rates, schedule digs, and document repairs with full traceability.",
        },
        {
          icon: Users,
          title: "Contractor Safety Portal",
          description:
            "Onboard third-party contractors with qualification verification, safety documentation, and work permit management.",
        },
      ]}
      stats={[
        { value: "2.6M+", label: "Miles of Pipeline in the US" },
        { value: "$11.4B", label: "Integrity Management Market" },
        { value: "100%", label: "Operators Must Comply with Mega Rule" },
      ]}
      cta={{
        headline: "Your Pipeline Runs 24/7. Your Software Should Too.",
        subheadline:
          "Let's build the platform your operations team actually needs — from integrity management to field inspections to regulatory compliance.",
      }}
    />
  );
}

"use client";

import {
  Truck,
  Map,
  FileText,
  BarChart3,
  Warehouse,
  Users,
  TrendingUp,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function LogisticsPage() {
  return (
    <IndustryPageTemplate
      industry="Logistics & Supply Chain"
      slug="logistics"
      icon={Truck}
      color="#0E7490"
      heroHeadline="Your Freight Moves Fast. Your Software Should Too."
      heroSubheadline="Custom logistics platforms for freight brokers, 3PLs, and supply chain operators who need more than a spreadsheet but less than a $500K TMS."
      painPoints={[
        {
          problem: "Your load board is a spreadsheet that breaks every Friday afternoon",
          solution:
            "Purpose-built shipment management with real-time status tracking, carrier assignment, and automated notifications — designed to handle your actual volume.",
        },
        {
          problem: "BOLs, PODs, and customs docs are scattered across email, fax, and filing cabinets",
          solution:
            "Document management with OCR capture, auto-filing by shipment, and instant retrieval — every document attached to the load it belongs to.",
        },
        {
          problem: "Your TMS quote was $200K and a 9-month implementation",
          solution:
            "Custom platforms built in weeks, scoped to your operations. You get the features you need at a fraction of enterprise TMS pricing.",
        },
        {
          problem: "You can't see a shipment's status without calling the carrier",
          solution:
            "Real-time visibility dashboards with carrier integration, milestone tracking, and automated exception alerts — so you know before your customer asks.",
        },
      ]}
      features={[
        {
          icon: Map,
          title: "Shipment Tracking & Visibility",
          description:
            "Real-time shipment status across all carriers and modes. Milestone tracking, ETA calculations, and automated exception alerts when loads go off-plan.",
        },
        {
          icon: FileText,
          title: "Document Management",
          description:
            "OCR-powered document capture for BOLs, PODs, customs paperwork, and rate confirmations. Auto-filed by shipment with instant search and retrieval.",
        },
        {
          icon: BarChart3,
          title: "Rate & Carrier Management",
          description:
            "Manage carrier relationships, negotiate rates, track performance scorecards, and compare lane pricing — all in one place.",
        },
        {
          icon: Warehouse,
          title: "Warehouse Integration",
          description:
            "Connect your warehouse operations with inbound/outbound visibility, inventory tracking, and dock scheduling for seamless logistics flow.",
        },
        {
          icon: Users,
          title: "Customer Self-Service Portal",
          description:
            "Give your shippers a branded portal to book loads, track shipments, download PODs, and view invoices without calling your team.",
        },
        {
          icon: TrendingUp,
          title: "Analytics & Reporting",
          description:
            "Lane analysis, carrier scorecards, on-time delivery metrics, and cost-per-mile breakdowns. Data-driven decisions instead of gut calls.",
        },
      ]}
      stats={[
        { value: "#1", label: "Port of Houston in Foreign Tonnage" },
        { value: "$139B", label: "Texas Freight Market" },
        { value: "45%", label: "Small Operators Still on Spreadsheets" },
      ]}
      cta={{
        headline: "Your Logistics Operation Deserves a Real Platform",
        subheadline:
          "Let's build something that handles your actual volume — not a generic tool that breaks under pressure.",
      }}
    />
  );
}

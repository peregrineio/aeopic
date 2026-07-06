"use client";

import {
  Drill,
  FileText,
  LayoutGrid,
  Calculator,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function OilfieldServicesPage() {
  return (
    <IndustryPageTemplate
      industry="Oilfield Services"
      slug="oilfield-services"
      icon={Drill}
      color="#92400E"
      heroHeadline="Stop Losing Revenue at the Well Site"
      heroSubheadline="Digital field tickets, crew dispatch, job costing, and customer portals — purpose-built for oilfield service providers running crews across the basin."
      painPoints={[
        {
          problem: "Paper tickets bleed revenue — 2-5% of gross is never billed",
          solution:
            "Digital field ticketing with photo capture, e-signature, and offline sync — so every job gets invoiced, even at zero-coverage locations.",
        },
        {
          problem: "Dispatching by text message doesn't scale past 10 crews",
          solution:
            "Visual dispatch boards showing every crew, unit, and job in real time. Assign by availability, location, and certification match.",
        },
        {
          problem: "You don't know which jobs actually make money",
          solution:
            "Real-time job costing dashboards that show margin per well, per operation, per customer — not a guess 6 weeks after the work is done.",
        },
        {
          problem: "One expired cert shuts down an entire crew at the gate",
          solution:
            "Certification tracking with automated 30/60/90-day expiration alerts for H2S, SafeLand, well control, TWIC, and client-specific requirements.",
        },
      ]}
      features={[
        {
          icon: FileText,
          title: "Digital Field Tickets",
          description:
            "Mobile-first ticketing with offline mode, photo/video capture, company-man e-signature, and automatic sync to billing. Works at zero-coverage well sites.",
        },
        {
          icon: LayoutGrid,
          title: "Crew Dispatch Board",
          description:
            "Drag-and-drop scheduling across rigs and basins. See crew availability, equipment status, and travel time in a single view.",
        },
        {
          icon: Calculator,
          title: "Job Costing Engine",
          description:
            "Real-time cost tracking per well, per AFE, per operation. Automatically rolls up labor, equipment, consumables, and mileage against contracted rates.",
        },
        {
          icon: Users,
          title: "Customer Portal",
          description:
            "Give your operators a branded login to view service history, approve tickets, download invoices, and track open work orders.",
        },
        {
          icon: ShieldCheck,
          title: "Certification Dashboard",
          description:
            "Track H2S, SafeLand, well control, TWIC, and custom client requirements. Auto-alerts before expiration. Gate-ready compliance reports.",
        },
        {
          icon: MapPin,
          title: "Equipment Tracking",
          description:
            "GPS-enabled asset tracking for wireline units, coiled tubing reels, and rental equipment. Utilization rates, maintenance schedules, and yard inventory.",
        },
      ]}
      stats={[
        { value: "90%", label: "OFS Companies Still on Paper Tickets" },
        { value: "75 Days", label: "Average Order-to-Cash Cycle" },
        { value: "2-5%", label: "Revenue Lost to Unbilled Work" },
      ]}
      cta={{
        headline: "Your Crews Deserve Better Than Clipboards",
        subheadline:
          "Book a 30-minute call. We'll map your field-to-invoice workflow and show you exactly where custom software pays for itself.",
      }}
    />
  );
}

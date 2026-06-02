"use client";

import {
  Building2,
  Users,
  CalendarDays,
  BarChart3,
  CreditCard,
  Search,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function ChambersOfCommercePage() {
  return (
    <IndustryPageTemplate
      industry="Chambers of Commerce"
      slug="chambers-of-commerce"
      icon={Building2}
      color="#7C3AED"
      heroImage="/images/industries/chambers-of-commerce-hero.png"
      heroHeadline="Your Chamber Deserves Better Than ChamberMaster"
      heroSubheadline="Stop paying $5,000+/year for software you don't own, can't customize, and can't get support for. One integrated platform — member management, events, billing, directory, analytics — built around your chamber."
      painPoints={[
        {
          problem:
            "Your member management software looks like it was built in 2005 — because it was",
          solution:
            "A modern, intuitive platform your staff actually enjoys using and your members engage with. Clean dashboards, mobile-responsive design, real-time updates.",
        },
        {
          problem:
            "You're paying $325+/month for software you can't customize, and support takes 5 days to respond",
          solution:
            "A custom platform you own outright — no per-contact billing traps, no vendor lock-in, no waiting on a ticket queue. Your dedicated development team responds in hours, not days.",
        },
        {
          problem:
            "You can't see your retention rate without exporting CSVs and building a spreadsheet",
          solution:
            "Real-time analytics dashboard showing member retention, engagement scores, revenue trends, and churn risk alerts — the numbers that actually drive your chamber forward.",
        },
        {
          problem:
            "Your AMS doesn't talk to your email platform, which doesn't talk to your event system, which doesn't talk to your accounting",
          solution:
            "One integrated system: member database, event management, dues billing, email communications, analytics — all connected from day one. One login, one source of truth.",
        },
      ]}
      features={[
        {
          icon: Users,
          title: "Member Management & Directory",
          description:
            "Complete member CRM with tiered memberships, automated renewals, onboarding workflows, and a public-facing searchable directory that showcases your members.",
        },
        {
          icon: CalendarDays,
          title: "Event Management",
          description:
            "Create events, manage registrations, track attendance, and handle sponsors — from monthly mixers to annual galas. Integrated with your member data.",
        },
        {
          icon: CreditCard,
          title: "Dues & Billing",
          description:
            "Automated recurring billing with tiered pricing, payment reminders, and QuickBooks integration. No payment gateway surcharges — standard Stripe rates.",
        },
        {
          icon: BarChart3,
          title: "Real-Time Analytics",
          description:
            "Retention rates, engagement scores, revenue by stream, event ROI, and churn risk flags — all in a live dashboard. No more spreadsheet gymnastics.",
        },
        {
          icon: Building2,
          title: "Sponsorship & Non-Dues Revenue",
          description:
            "Manage sponsor tiers, track ROI, sell job board listings and digital advertising. Turn non-dues revenue from an afterthought into a growth engine.",
        },
        {
          icon: Search,
          title: "Website & Member Portal",
          description:
            "Modern public website with SEO-optimized directory, event pages, and news — plus a member portal where businesses update profiles, pay dues, and register for events.",
        },
      ]}
      stats={[
        { value: "Yours", label: "Own Your Platform — Zero Vendor Lock-In" },
        { value: "90%+", label: "Member Retention With Real Analytics" },
        { value: "5→1", label: "Replace Disconnected Tools With One System" },
      ]}
      cta={{
        headline: "Ready to Replace Your Outdated Chamber Software?",
        subheadline:
          "Let's build a platform your members actually use — one you own, one that grows with your chamber, and one that finally gives you the data to make real decisions.",
      }}
    />
  );
}

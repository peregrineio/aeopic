"use client";

import {
  Leaf,
  Route,
  Users,
  CreditCard,
  Bell,
  Globe,
  Calendar,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function LawnCarePage() {
  return (
    <IndustryPageTemplate
      industry="Lawn Care & Landscaping"
      slug="lawn-care"
      icon={Leaf}
      color="#38a169"
      heroHeadline="Software Built for Lawn Care & Landscaping Companies"
      heroSubheadline="Manage routes, customers, and billing from one platform — not 5 different apps."
      painPoints={[
        {
          problem: "You're planning routes on paper and driving in circles",
          solution:
            "Route optimization that groups nearby customers and saves hours of drive time every week.",
        },
        {
          problem: "Customers don't know when you're coming",
          solution:
            "Automated service notifications — 'Your lawn tech arrives tomorrow between 9-11am' — sent via text and email.",
        },
        {
          problem: "Seasonal revenue swings kill your cash flow",
          solution:
            "Recurring service plans with auto-billing. Customers sign up once, you get paid every month like clockwork.",
        },
        {
          problem:
            "Your before/after photos live on your phone, not your marketing",
          solution:
            "A portfolio website and social media content that showcases your work and attracts new customers.",
        },
      ]}
      features={[
        {
          icon: Route,
          title: "Route Optimization",
          description:
            "Smart routing that groups nearby jobs and minimizes drive time.",
        },
        {
          icon: Users,
          title: "Customer Portal",
          description:
            "Customers can view service history, upcoming visits, and pay invoices.",
        },
        {
          icon: CreditCard,
          title: "Auto-Billing",
          description:
            "Recurring billing for service plans. Get paid automatically every month.",
        },
        {
          icon: Bell,
          title: "Service Notifications",
          description:
            "Automated text and email reminders before every service visit.",
        },
        {
          icon: Globe,
          title: "Marketing Website",
          description:
            "Professional website with before/after galleries and online booking.",
        },
        {
          icon: Calendar,
          title: "Seasonal Campaigns",
          description:
            "Marketing automation for seasonal services like fall cleanup and spring prep.",
        },
      ]}
      stats={[
        { value: "5+", label: "Hours Saved Weekly on Routes" },
        { value: "Auto", label: "Recurring Revenue on Autopilot" },
        { value: "SMS", label: "Automated Service Reminders" },
      ]}
      cta={{
        headline: "Ready to Streamline Your Lawn Care Business?",
        subheadline:
          "Let's build a platform that handles routing, billing, and customer communication — so you can grow faster.",
      }}
    />
  );
}

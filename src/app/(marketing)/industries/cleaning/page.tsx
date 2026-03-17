"use client";

import {
  Shield,
  Globe,
  RefreshCw,
  Calendar,
  Image,
  Star,
  MapPin,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function CleaningPage() {
  return (
    <IndustryPageTemplate
      industry="Cleaning & Pest Control"
      slug="cleaning"
      icon={Shield}
      color="#38a169"
      heroHeadline="Software Built for Cleaning & Pest Control Companies"
      heroSubheadline="5-star reviews and no website? You're invisible to new customers."
      painPoints={[
        {
          problem:
            "You have great reviews but no website — new customers can't find you",
          solution:
            "A professional website with local SEO that puts you at the top of searches for 'cleaning service [city]' and 'pest control near me'.",
        },
        {
          problem:
            "Recurring customers are managed in spreadsheets or your head",
          solution:
            "A recurring service manager with auto-billing, service history, and customer portals for self-service.",
        },
        {
          problem: "You can't showcase your before/after work anywhere",
          solution:
            "Portfolio galleries on your website and social media that turn great work into new customers.",
        },
        {
          problem: "Happy customers don't leave reviews unless you ask them",
          solution:
            "Automated review requests after every completed job. More reviews = more trust = more customers.",
        },
      ]}
      features={[
        {
          icon: Globe,
          title: "Professional Website",
          description:
            "Modern website that showcases your services and converts visitors into customers.",
        },
        {
          icon: RefreshCw,
          title: "Recurring Service Management",
          description:
            "Manage recurring customers with automated scheduling and billing.",
        },
        {
          icon: Calendar,
          title: "Online Booking",
          description:
            "Customers book one-time or recurring services online, 24/7.",
        },
        {
          icon: Image,
          title: "Before/After Portfolio",
          description:
            "Showcase your best work with photo galleries that build trust.",
        },
        {
          icon: Star,
          title: "Review Generation",
          description:
            "Automated review requests that build your online reputation.",
        },
        {
          icon: MapPin,
          title: "Local SEO",
          description:
            "Get found on Google for local searches in your service area.",
        },
      ]}
      stats={[
        { value: "Found", label: "Get Found on Google" },
        { value: "Auto", label: "Recurring Revenue on Autopilot" },
        { value: "5-Star", label: "Review Pipeline" },
      ]}
      cta={{
        headline: "Ready to Get Found Online?",
        subheadline:
          "Let's build a website that ranks on Google and a system that keeps customers coming back.",
      }}
    />
  );
}

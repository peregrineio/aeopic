"use client";

import {
  Wrench,
  Globe,
  Calendar,
  Star,
  MapPin,
  Users,
  History,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function PlumbingElectricalPage() {
  return (
    <IndustryPageTemplate
      industry="Plumbing & Electrical"
      slug="plumbing-electrical"
      icon={Wrench}
      color="#3b82f6"
      heroHeadline="Software Built for Plumbing & Electrical Companies"
      heroSubheadline="41 five-star reviews but no website? Let's fix that. Get found, get booked, get paid."
      painPoints={[
        {
          problem:
            "Your best marketing is word of mouth — but new customers can't find you online",
          solution:
            "A modern website with local SEO that puts you at the top of 'plumber near me' and 'electrician [city]' searches.",
        },
        {
          problem: "You're relying on phone calls for every single booking",
          solution:
            "Online scheduling that lets customers pick a time slot and describe their issue — before you even pick up the phone.",
        },
        {
          problem: "Happy customers don't leave reviews unless you ask",
          solution:
            "Automated review requests sent after every completed job. Turn 5-star service into 5-star ratings.",
        },
        {
          problem: "Competitors with worse service are outranking you on Google",
          solution:
            "Google Business Profile optimization, local SEO, and a website that actually converts visitors into calls.",
        },
      ]}
      features={[
        {
          icon: Globe,
          title: "Professional Website",
          description:
            "Modern, mobile-first website that showcases your services and converts visitors.",
        },
        {
          icon: Calendar,
          title: "Online Scheduling",
          description:
            "Customers book appointments online with service selection and time preferences.",
        },
        {
          icon: Star,
          title: "Review Generation",
          description:
            "Automated review requests via text and email after every completed job.",
        },
        {
          icon: MapPin,
          title: "Google Business Optimization",
          description:
            "Optimized Google Business Profile that ranks for local searches.",
        },
        {
          icon: Users,
          title: "Customer Database",
          description:
            "Track every customer, their service history, and contact information.",
        },
        {
          icon: History,
          title: "Service History Tracking",
          description:
            "Complete record of every job — what was done, when, and by whom.",
        },
      ]}
      stats={[
        { value: "3x", label: "More Google Visibility" },
        { value: "Auto", label: "Review Requests" },
        { value: "100%", label: "Code Ownership" },
      ]}
      cta={{
        headline: "Ready to Get Found Online?",
        subheadline:
          "Let's build a website that ranks on Google and turns visitors into customers.",
      }}
    />
  );
}

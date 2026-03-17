"use client";

import {
  Car,
  Bell,
  Calendar,
  History,
  Clock,
  Megaphone,
  Star,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function AutoPage() {
  return (
    <IndustryPageTemplate
      industry="Auto & Detailing"
      slug="auto"
      icon={Car}
      color="#3b82f6"
      heroHeadline="Software Built for Auto Repair & Detailing"
      heroSubheadline="Your customers shouldn't have to call to check if their car is ready."
      painPoints={[
        {
          problem: "Customers call 3 times to check if their car is done",
          solution:
            "Automated status notifications — 'Your vehicle is ready for pickup' — sent via text the moment the job is complete.",
        },
        {
          problem:
            "Booking is phone-only and you lose customers to shops that take online appointments",
          solution:
            "Online booking with service selection, preferred time slots, and instant confirmation.",
        },
        {
          problem:
            "You can't remember the last time a customer came in or what you did",
          solution:
            "Complete customer history — every visit, every service, every vehicle — accessible in seconds.",
        },
        {
          problem: "Customers forget about you until something breaks",
          solution:
            "Automated maintenance reminders: 'Your oil change is due' or 'Time for a detail' — keeps them coming back.",
        },
      ]}
      features={[
        {
          icon: Bell,
          title: "Service Status Notifications",
          description:
            "Automated text updates when work starts, progresses, and completes.",
        },
        {
          icon: Calendar,
          title: "Online Booking",
          description:
            "Customers book appointments online with service selection and time preferences.",
        },
        {
          icon: History,
          title: "Customer History Database",
          description:
            "Complete record of every customer, vehicle, and service performed.",
        },
        {
          icon: Clock,
          title: "Maintenance Reminders",
          description:
            "Automated reminders for oil changes, inspections, and scheduled maintenance.",
        },
        {
          icon: Megaphone,
          title: "Marketing Campaigns",
          description:
            "Seasonal promotions and targeted campaigns to bring customers back.",
        },
        {
          icon: Star,
          title: "Review Generation",
          description:
            "Automated review requests after every completed service.",
        },
      ]}
      stats={[
        { value: "Zero", label: "Status Calls" },
        { value: "24/7", label: "Online Booking" },
        { value: "Auto", label: "Service Reminders" },
      ]}
      cta={{
        headline: "Ready to Upgrade Your Shop?",
        subheadline:
          "Let's build a system that keeps customers informed and coming back.",
      }}
    />
  );
}

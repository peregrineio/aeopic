"use client";

import {
  UtensilsCrossed,
  ShoppingBag,
  CalendarDays,
  Gift,
  Megaphone,
  MapPin,
  Users,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

export default function RestaurantsPage() {
  return (
    <IndustryPageTemplate
      industry="Restaurants"
      slug="restaurants"
      icon={UtensilsCrossed}
      color="#f59e0b"
      heroHeadline="Software Built for Restaurants & Food Service"
      heroSubheadline="Stop giving 30% to DoorDash. Own your online ordering."
      painPoints={[
        {
          problem: "Third-party delivery apps take 30% of every order",
          solution:
            "Your own online ordering platform — customers order directly from you, you keep 100% of the revenue.",
        },
        {
          problem: "Reservations are still phone-only during your busiest hours",
          solution:
            "Online reservation system that fills tables without tying up your host's phone line.",
        },
        {
          problem:
            "You have no way to bring customers back after their first visit",
          solution:
            "A loyalty program that rewards repeat customers and keeps them choosing you over the competition.",
        },
        {
          problem:
            "Your social media is inconsistent and doesn't drive real traffic",
          solution:
            "Content strategy, local SEO, and Google Business optimization that puts you at the top of 'restaurants near me' searches.",
        },
      ]}
      features={[
        {
          icon: ShoppingBag,
          title: "Online Ordering Platform",
          description:
            "Your own ordering system — no commissions, no middlemen, 100% your revenue.",
        },
        {
          icon: CalendarDays,
          title: "Reservation System",
          description:
            "Online table booking with real-time availability and automated confirmations.",
        },
        {
          icon: Gift,
          title: "Loyalty Program",
          description:
            "Reward repeat customers and keep them coming back.",
        },
        {
          icon: Megaphone,
          title: "Marketing & SEO",
          description:
            "Get found on Google and build a following on social media.",
        },
        {
          icon: MapPin,
          title: "Google Business Management",
          description:
            "Optimized Google Business Profile that ranks for local searches.",
        },
        {
          icon: Users,
          title: "Customer Database",
          description:
            "Track customer preferences, visit history, and contact info for targeted marketing.",
        },
      ]}
      stats={[
        { value: "100%", label: "Keep Online Orders" },
        { value: "Auto", label: "Fill Tables Without Phone Calls" },
        { value: "Loyalty", label: "That Brings Them Back" },
      ]}
      cta={{
        headline: "Ready to Own Your Online Presence?",
        subheadline:
          "Let's build a platform that keeps more money in your pocket and more customers coming back.",
      }}
    />
  );
}

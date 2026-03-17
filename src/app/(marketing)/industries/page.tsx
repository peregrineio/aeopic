import type { Metadata } from "next";
import Link from "next/link";
import {
  Thermometer,
  Wrench,
  Hammer,
  Leaf,
  Heart,
  UtensilsCrossed,
  Scale,
  Car,
  Shield,
  ArrowRight,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Industries We Serve | Aeopic",
  description:
    "Custom software solutions tailored for your industry. HVAC, plumbing, contractors, medical, restaurants, law offices, and more.",
};

const industries = [
  {
    icon: Thermometer,
    title: "HVAC & Home Services",
    slug: "hvac",
    color: "#f59e0b",
    description: "Dispatch, booking & customer portals",
    pain: "You're juggling phone calls, handwritten schedules, and chasing invoices.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    color: "#3b82f6",
    description: "Local SEO, scheduling & reviews",
    pain: "Your best marketing is word of mouth — but new customers can't find you online.",
  },
  {
    icon: Hammer,
    title: "Contractors & Remodeling",
    slug: "contractors",
    color: "#726AFF",
    description: "Portfolio sites, CRM & lead tracking",
    pain: "Your portfolio is on your phone, not on your website.",
  },
  {
    icon: Leaf,
    title: "Lawn Care & Landscaping",
    slug: "lawn-care",
    color: "#38a169",
    description: "Route optimization & customer management",
    pain: "You're managing routes on paper and customers can't see when you're coming.",
  },
  {
    icon: Heart,
    title: "Medical & Dental",
    slug: "medical",
    color: "#ef4444",
    description: "Patient portals & appointment booking",
    pain: "Patients are calling to book appointments that could be handled online.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    slug: "restaurants",
    color: "#f59e0b",
    description: "Online ordering & reservations",
    pain: "You're paying third-party apps 30% when customers would rather order from you.",
  },
  {
    icon: Scale,
    title: "Law Offices",
    slug: "law",
    color: "#1e3a5f",
    description: "Client portals & case management",
    pain: "Client intake is still emails and phone tag. Documents get lost.",
  },
  {
    icon: Car,
    title: "Auto & Detailing",
    slug: "auto",
    color: "#3b82f6",
    description: "Booking & service notifications",
    pain: "Your customers call to check if their car is ready because you don't have a system.",
  },
  {
    icon: Shield,
    title: "Cleaning & Pest Control",
    slug: "cleaning",
    color: "#38a169",
    description: "Recurring service & review generation",
    pain: "You've got 5-star reviews but no website. Customers are finding your competitors.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Industries"
        headline="Software Built for Your Industry"
        subheadline="We don't do generic. Every platform we build is tailored to how YOUR industry actually works."
      />

      {/* Industry Cards Grid */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated left border on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300"
                    style={{ backgroundColor: industry.color }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${industry.color}20` }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: industry.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {industry.description}
                  </p>

                  {/* Pain Point Preview */}
                  <p className="text-sm text-muted-foreground italic mb-4">
                    &ldquo;{industry.pain}&rdquo;
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Don't See Your Industry?"
        subheadline="We build custom solutions for businesses of all types. Let's talk about what you need."
        ctaText="Start the Conversation"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}

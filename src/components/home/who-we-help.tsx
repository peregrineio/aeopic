"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const industries = [
  {
    icon: Thermometer,
    title: "HVAC & Home Services",
    slug: "hvac",
    color: "#f59e0b",
    pain: "You're juggling phone calls, handwritten schedules, and chasing invoices.",
    solution:
      "We build dispatch dashboards, online booking, automated invoicing, and customer portals that let homeowners schedule and pay without calling.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    color: "#3b82f6",
    pain: "Your best marketing is word of mouth — but new customers can't find you online.",
    solution:
      "A modern website with local SEO, Google Business optimization, online scheduling, and a review system that turns happy customers into 5-star ratings.",
  },
  {
    icon: Hammer,
    title: "Contractors & Remodeling",
    slug: "contractors",
    color: "#726AFF",
    pain: "Your portfolio is on your phone, not on your website. Leads are going to competitors with better online presence.",
    solution:
      "Portfolio websites with project galleries, quote request forms, and CRM tools to track leads from first call to final walkthrough.",
  },
  {
    icon: Leaf,
    title: "Lawn Care & Landscaping",
    slug: "lawn-care",
    color: "#38a169",
    pain: "You're managing routes on paper and customers can't see when you're coming.",
    solution:
      "Route optimization, customer portals with service history, automated reminders, and seasonal marketing campaigns that fill your schedule.",
  },
  {
    icon: Heart,
    title: "Medical & Dental Clinics",
    slug: "medical",
    color: "#ef4444",
    pain: "Patients are calling to book appointments that could be handled online in 30 seconds.",
    solution:
      "Patient portals with self-service booking, intake forms, appointment reminders, and secure messaging — all HIPAA-ready.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Food Service",
    slug: "restaurants",
    color: "#f59e0b",
    pain: "You're paying third-party delivery apps 30% when customers would rather order from you directly.",
    solution:
      "Custom online ordering, reservation systems, loyalty programs, and marketing that brings customers to YOUR platform, not DoorDash.",
  },
  {
    icon: Scale,
    title: "Law Offices",
    slug: "law",
    color: "#1e3a5f",
    pain: "Client intake is still emails and phone tag. Documents get lost. Follow-ups fall through the cracks.",
    solution:
      "Client portals with secure document sharing, intake automation, case status tracking, and appointment scheduling.",
  },
  {
    icon: Car,
    title: "Auto Repair & Detailing",
    slug: "auto",
    color: "#3b82f6",
    pain: "Your customers call to check if their car is ready because you don't have a system to notify them.",
    solution:
      "Booking systems, service status notifications, customer history tracking, and marketing that keeps them coming back.",
  },
  {
    icon: Shield,
    title: "Cleaning & Pest Control",
    slug: "cleaning",
    color: "#38a169",
    pain: "You've got 5-star reviews but no website. Customers searching for your service are finding your competitors.",
    solution:
      "Professional websites with online booking, recurring service management, review generation, and local SEO that puts you on the map.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="py-20 md:py-28 bg-[#F6F7FB]">
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            Who We Help
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            We Know Your Industry. We&apos;ve Solved These Problems Before.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted-foreground"
          >
            Every business is different — but the challenges aren&apos;t. Here&apos;s
            how we help businesses like yours.
          </motion.p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
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
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>

                  {/* Pain Point */}
                  <p className="text-sm text-muted-foreground italic mb-4">
                    &ldquo;{industry.pain}&rdquo;
                  </p>

                  {/* Solution */}
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    {industry.solution}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

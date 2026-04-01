"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Thermometer,
  Wrench,
  Hammer,
  Heart,
  UtensilsCrossed,
  Shield,
} from "lucide-react";

const industries = [
  {
    icon: Thermometer,
    name: "HVAC & Home Services",
    painPoint: "Stop losing jobs to voicemail",
    color: "amber",
    slug: "hvac",
  },
  {
    icon: Wrench,
    name: "Plumbing & Electrical",
    painPoint: "Get found online, not just by word of mouth",
    color: "blue",
    slug: "plumbing-electrical",
  },
  {
    icon: Hammer,
    name: "Contractors & Remodeling",
    painPoint: "Showcase your work, capture more leads",
    color: "purple",
    slug: "contractors",
  },
  {
    icon: Heart,
    name: "Medical & Dental",
    painPoint: "Let patients book online, securely",
    color: "red",
    slug: "medical",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    painPoint: "Own your orders, skip the fees",
    color: "orange",
    slug: "restaurants",
  },
  {
    icon: Shield,
    name: "Cleaning & Pest Control",
    painPoint: "Turn reviews into a lead machine",
    color: "green",
    slug: "cleaning",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  amber: { bg: "bg-amber-100", text: "text-amber-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
};

export function IndustriesStrip() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            We Build for Businesses Like Yours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            From HVAC companies to law offices — we understand your industry.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const colors = colorClasses[industry.color];
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="block p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full bg-white group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-3`}
                  >
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {industry.painPoint}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

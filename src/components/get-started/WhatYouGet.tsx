"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  TrendingUp,
  Calendar,
  Key,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Web Platform",
    description: "Built for your exact workflow. Not a template.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Smart automation that saves you hours every week.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description: "Get found by the customers who need you.",
    color: "green",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Let customers book and pay 24/7.",
    color: "amber",
  },
  {
    icon: Key,
    title: "100% Code Ownership",
    description: "Your code. Your data. Yours forever.",
    color: "purple",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch.",
    color: "blue",
  },
];

const colorClasses: Record<string, string> = {
  purple: "bg-purple-500/20 text-purple-400",
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-green-500/20 text-green-400",
  amber: "bg-amber-500/20 text-amber-400",
};

export function WhatYouGet() {
  return (
    <section className="py-16 md:py-20 bg-[#0F1226]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-3"
          >
            Everything You Need to Run Your Business Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60"
          >
            One team. One vision. Everything connected.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

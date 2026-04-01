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
    title: "Custom Platform",
    description: "Built for your exact workflow. Not a template.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Smart automation that saves hours weekly.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description: "Get found by customers who need you.",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Let customers book and pay 24/7.",
  },
  {
    icon: Key,
    title: "100% Ownership",
    description: "Your code. Your data. Yours forever.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch.",
  },
];

export function GradientFeatures() {
  return (
    <section className="py-24 bg-atmosphere-dark relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Everything You Need to
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Grow Online
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            One team. One vision. Everything connected.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-gradient p-6 group hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20
                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, TrendingUp, Calendar, Key, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Code2, title: "Custom Platform", description: "Built for your exact workflow", size: "normal" },
  { icon: Sparkles, title: "AI-Powered", description: "Smart automation that saves hours", size: "normal" },
  { icon: TrendingUp, title: "Marketing & SEO", description: "Get found by customers", size: "wide" },
  { icon: Calendar, title: "Online Booking", description: "Customers book and pay 24/7", size: "normal" },
  { icon: Key, title: "You Own It", description: "Your code, your data, forever", size: "normal" },
  { icon: Headphones, title: "Ongoing Support", description: "We don't disappear", size: "wide" },
];

export function BentoFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--bento-text)] font-heading">
            Everything You Need
          </h2>
          <p className="mt-3 text-[var(--bento-text-secondary)]">
            One team. One vision. Everything connected.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isWide = feature.size === "wide";
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "bg-[var(--bento-bg)] rounded-[var(--bento-radius)] p-6",
                  "border border-[var(--bento-border)]",
                  "hover:shadow-[var(--bento-shadow-hover)] hover:border-[var(--bento-border-hover)]",
                  "transition-all duration-300",
                  isWide ? "md:col-span-2" : ""
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bento-accent-soft)]
                  flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[var(--bento-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--bento-text)]">{feature.title}</h3>
                <p className="mt-1 text-sm text-[var(--bento-text-secondary)]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

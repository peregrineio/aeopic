"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CostItem {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
  color: string;
}

const costs: CostItem[] = [
  {
    icon: Clock,
    stat: "20+ hrs/week",
    title: "Lost Time",
    description:
      "Spent on manual processes that software handles in seconds. That's $2,000+/month in salary on work a platform does automatically.",
    color: "text-orange-500",
  },
  {
    icon: TrendingDown,
    stat: "Leads slipping away",
    title: "Lost Revenue",
    description:
      "Missed leads, slow follow-ups, no online booking — your competitors with better tools are closing the deals you're losing.",
    color: "text-red-500",
  },
  {
    icon: AlertTriangle,
    stat: "Gets worse every quarter",
    title: "Compounding Debt",
    description:
      "Scattered data, duct-tape integrations, manual workarounds — the longer you wait, the more expensive the rebuild.",
    color: "text-red-600",
  },
];

export function CostOfWaiting() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1226] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-red-950/20 blur-[100px] pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="text-center mb-14">
          <p className="pricing-eyebrow mb-4">The Actual Cost</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-[-0.025em] mb-4">
            The Real Cost Isn&apos;t Building — It&apos;s Waiting
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every month without the right tools costs more than you think.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {costs.map((cost, index) => {
            const Icon = cost.icon;
            return (
              <motion.div
                key={cost.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pricing-card-dark p-6 text-center relative overflow-hidden"
              >
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-0.5",
                    cost.color === "text-orange-500"
                      ? "bg-orange-500/50"
                      : cost.color === "text-red-500"
                        ? "bg-red-500/50"
                        : "bg-red-600/50"
                  )}
                />
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center mx-auto">
                  <Icon className={`w-6 h-6 ${cost.color}`} />
                </div>
                <p
                  className={`text-3xl font-heading font-bold mt-5 tracking-[-0.03em] ${cost.color}`}
                >
                  {cost.stat}
                </p>
                <p className="text-lg font-heading font-bold mt-2 text-white">
                  {cost.title}
                </p>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">
                  {cost.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative pricing-card-dark p-8 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 rounded-br-3xl bg-[#726AFF]/[0.08]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl bg-[#726AFF]/[0.08]" />
            <p className="text-lg font-heading font-bold text-white relative z-10">
              The strategy call is free. Staying on your current path is
              what&apos;s expensive.
            </p>
            <a
              href="#estimator"
              className="mt-4 inline-flex items-center gap-2 text-[#726AFF] font-semibold text-sm hover:text-[#9B95FF] transition-colors relative z-10 font-mono"
            >
              Let&apos;s talk about your project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

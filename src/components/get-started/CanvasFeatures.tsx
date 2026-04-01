"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, TrendingUp, Calendar, Key, Headphones } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Platform",
    description: "Built for your exact workflow. Not a template. Real software, engineered specifically for your business.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Smart automation that learns and adapts. Save hours every week with intelligent workflows.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description: "Get found by customers who need you. Search optimization that drives real traffic and conversions.",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Let customers book and pay 24/7. Integrated scheduling that syncs with your workflow.",
  },
  {
    icon: Key,
    title: "100% Ownership",
    description: "Your code. Your data. Your platform. No vendor lock-in. Take it anywhere, anytime.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "We don't disappear after launch. Ongoing support and maintenance when you need it most.",
  },
];

export function CanvasFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36 bg-[#07070A] relative overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#726AFF]/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#726AFF]" />
            <span className="text-[#726AFF] text-sm font-semibold tracking-[0.2em] uppercase">
              Everything You Need
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#726AFF]" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            One team. One vision.
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Everything connected, working together to grow your business.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#726AFF]/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.04]">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[#726AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#726AFF]/20 to-[#9333EA]/10 border border-[#726AFF]/20 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-7 h-7 text-[#726AFF]" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

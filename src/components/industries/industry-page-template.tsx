"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Brand colors - matching the site's purple palette
const brand = {
  primary: "#726AFF",        // Main purple
  primarySoft: "#8B5CF6",    // Accent purple
  lavender: "#C4B5FD",       // Soft lavender
  lavenderLight: "#DDD6FE",  // Lighter lavender
  purpleBg: "#F5F3FF",       // Purple-tinted background
  purpleGlow: "rgba(114, 106, 255, 0.15)",
};

// Industry data for related industries
const allIndustries = [
  { slug: "hvac", title: "HVAC & Home Services", color: "#f59e0b" },
  { slug: "plumbing-electrical", title: "Plumbing & Electrical", color: "#3b82f6" },
  { slug: "contractors", title: "Contractors & Remodeling", color: "#726AFF" },
  { slug: "lawn-care", title: "Lawn Care & Landscaping", color: "#22c55e" },
  { slug: "medical", title: "Medical & Dental", color: "#ef4444" },
  { slug: "restaurants", title: "Restaurants", color: "#f97316" },
  { slug: "law", title: "Law Offices", color: "#1e3a5f" },
  { slug: "auto", title: "Auto & Detailing", color: "#0ea5e9" },
  { slug: "cleaning", title: "Cleaning & Pest Control", color: "#10b981" },
];

export interface IndustryPageProps {
  industry: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: { problem: string; solution: string }[];
  features: { icon: LucideIcon; title: string; description: string }[];
  stats: { value: string; label: string }[];
  cta: { headline: string; subheadline: string };
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO BACKGROUND — "Morphing Topology" Design
// ═══════════════════════════════════════════════════════════════════════════

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient - warm cream to subtle purple tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, ${brand.purpleBg} 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 90% 80%, rgba(196, 181, 253, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, #FDFCFB 0%, #F8F7FF 50%, #FAFAFA 100%)
          `
        }}
      />

      {/* Dot grid texture */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={brand.lavender} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Large morphing blob - top right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1.05, 1],
          rotate: [0, 5, -3, 0],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "50% 50% 40% 60% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[700px] h-[700px] opacity-60"
        style={{
          background: `linear-gradient(135deg, ${brand.purpleBg} 0%, rgba(196, 181, 253, 0.3) 50%, rgba(139, 92, 246, 0.1) 100%)`,
          filter: "blur(2px)"
        }}
      />

      {/* Secondary blob - center right */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
          borderRadius: [
            "40% 60% 60% 40% / 70% 30% 70% 30%",
            "60% 40% 40% 60% / 30% 70% 30% 70%",
            "40% 60% 60% 40% / 70% 30% 70% 30%"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[15%] w-[400px] h-[400px] opacity-40"
        style={{
          background: `linear-gradient(180deg, ${brand.lavender}40 0%, ${brand.primary}15 100%)`,
          filter: "blur(1px)"
        }}
      />

      {/* Floating ring - large */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[25%] w-[300px] h-[300px]"
      >
        <div
          className="w-full h-full rounded-full border-2 opacity-20"
          style={{ borderColor: brand.primary }}
        />
      </motion.div>

      {/* Floating ring - medium, dashed */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[10%] w-[200px] h-[200px]"
      >
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="98"
            fill="none"
            stroke={brand.lavender}
            strokeWidth="1"
            strokeDasharray="8 12"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Floating arc segment */}
      <motion.div
        animate={{ rotate: [0, 15, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[5%] w-[250px] h-[250px]"
      >
        <svg className="w-full h-full" viewBox="0 0 250 250">
          <path
            d="M 125 25 A 100 100 0 0 1 225 125"
            fill="none"
            stroke={brand.primary}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.25"
          />
        </svg>
      </motion.div>

      {/* Network nodes and connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={brand.primary} stopOpacity="0.15" />
            <stop offset="100%" stopColor={brand.lavender} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <motion.line
          x1="60%" y1="15%" x2="80%" y2="35%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="80%" y1="35%" x2="70%" y2="55%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.line
          x1="70%" y1="55%" x2="85%" y2="70%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
        <motion.line
          x1="60%" y1="15%" x2="55%" y2="40%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="55%" y1="40%" x2="70%" y2="55%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Nodes */}
        <motion.circle
          cx="60%" cy="15%" r="4"
          fill={brand.primary}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.circle
          cx="80%" cy="35%" r="6"
          fill={brand.lavender}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.circle
          cx="70%" cy="55%" r="5"
          fill={brand.primary}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        />
        <motion.circle
          cx="85%" cy="70%" r="4"
          fill={brand.lavenderLight}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.circle
          cx="55%" cy="40%" r="3"
          fill={brand.primarySoft}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </svg>

      {/* Floating small shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[40%] w-4 h-4 opacity-30"
        style={{ backgroundColor: brand.primary }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full opacity-25"
        style={{ backgroundColor: brand.lavender }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[45%] w-2 h-2 opacity-35"
        style={{
          backgroundColor: "transparent",
          border: `2px solid ${brand.primary}`,
          transform: "rotate(45deg)"
        }}
      />

      {/* Subtle horizontal lines */}
      <div className="absolute top-[25%] right-0 w-[40%] h-px opacity-10" style={{ backgroundColor: brand.primary }} />
      <div className="absolute top-[75%] right-[10%] w-[30%] h-px opacity-10" style={{ backgroundColor: brand.lavender }} />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: `linear-gradient(to top, rgba(250,250,250,1) 0%, transparent 100%)`
        }}
      />
    </div>
  );
}

// Diagonal line pattern background (for other sections)
function DiagonalGrid({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="diag-purple" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke={brand.primary} strokeWidth="1" opacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag-purple)" />
    </svg>
  );
}

// Measurement marker component
function MeasureMarker({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest" style={{ color: brand.lavender }}>
      <div className="w-8 h-px" style={{ backgroundColor: brand.lavender }} />
      <span>{label}</span>
      <div className="w-8 h-px" style={{ backgroundColor: brand.lavender }} />
    </div>
  );
}

// Technical annotation badge
function TechBadge({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "muted" }) {
  const color = variant === "primary" ? brand.primary : "#A3A3A3";
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border"
      style={{ borderColor: color, color }}
    >
      {children}
    </span>
  );
}

export function IndustryPageTemplate({
  industry,
  slug,
  icon: Icon,
  color,
  heroHeadline,
  heroSubheadline,
  painPoints,
  features,
  stats,
  cta,
}: IndustryPageProps) {
  const [expandedPain, setExpandedPain] = useState<number | null>(null);

  const relatedIndustries = allIndustries
    .filter((ind) => ind.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — Asymmetric Editorial Layout with Morphing Topology Background
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Morphing Topology Background */}
        <HeroBackground />

        {/* Measurement lines */}
        <div className="absolute top-8 left-8 right-8 hidden lg:flex justify-between items-center z-10">
          <MeasureMarker label="01" />
          <div className="flex-1 h-px mx-4 opacity-20" style={{ backgroundColor: brand.lavender }} />
          <MeasureMarker label={slug.toUpperCase()} />
        </div>

        <div className="container-site relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Main content - spans 7 columns */}
            <div className="lg:col-span-7">
              {/* Industry tag with technical styling */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border-2"
                  style={{ borderColor: brand.primary }}
                >
                  <Icon className="w-5 h-5" style={{ color: brand.primary }} />
                </div>
                <TechBadge>{industry}</TechBadge>
              </motion.div>

              {/* Headline with dramatic sizing */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] mb-6"
              >
                {heroHeadline.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {word}
                  </span>
                ))}
              </motion.h1>

              {/* Subheadline with indent */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-[#525252] leading-relaxed max-w-xl pl-8 border-l-2 mb-10"
                style={{ borderColor: brand.primary }}
              >
                {heroSubheadline}
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: brand.primary }}
                >
                  <Link href="/get-started" className="flex items-center gap-3">
                    Get Started
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Link
                  href="/process"
                  className="group flex items-center gap-2 text-[#0A0A0A] font-medium hover:opacity-70 transition-opacity"
                >
                  Our Process
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Stats column - spans 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div
                className="bg-white p-8 lg:p-10 border-t-4"
                style={{
                  borderTopColor: brand.primary,
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 20px 60px -20px rgba(114, 106, 255, 0.15)"
                }}
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] mb-6">
                  Client Results
                </div>
                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="flex items-baseline justify-between border-b border-[#E5E5E5] pb-4">
                      <span className="text-[#525252] text-sm">{stat.label}</span>
                      <span
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                        style={{ color: i === 0 ? brand.primary : "#0A0A0A" }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${brand.primary}, ${brand.lavender})` }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PAIN POINTS — Accordion with Technical Styling
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-site">
          {/* Section header with offset alignment */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <TechBadge>Challenges</TechBadge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-6 mb-4">
                  Sound<br />Familiar?
                </h2>
                <p className="text-[#525252] leading-relaxed">
                  Common problems we solve for {industry.toLowerCase()} businesses.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {painPoints.map((point, index) => {
                  const isExpanded = expandedPain === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setExpandedPain(isExpanded ? null : index)}
                        className="w-full text-left"
                      >
                        <div
                          className="border transition-all duration-300 p-6"
                          style={{
                            borderColor: isExpanded ? brand.primary : "#E5E5E5",
                            backgroundColor: isExpanded ? brand.purpleBg : "transparent",
                          }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <span
                                className="text-[11px] font-mono mt-1"
                                style={{ color: brand.primary }}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <h3 className="font-semibold text-[#0A0A0A] text-lg leading-snug">
                                  {point.problem}
                                </h3>
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <p className="text-[#525252] mt-4 leading-relaxed pr-8">
                                        <span className="font-semibold" style={{ color: brand.primary }}>Solution: </span>
                                        {point.solution}
                                      </p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            <div
                              className="w-8 h-8 flex items-center justify-center flex-shrink-0 border transition-colors"
                              style={{
                                borderColor: isExpanded ? brand.primary : "#E5E5E5",
                                color: isExpanded ? brand.primary : "#A3A3A3",
                                backgroundColor: isExpanded ? brand.purpleBg : "transparent"
                              }}
                            >
                              {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FEATURES — Bento-Style Grid
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: brand.purpleBg }}>
        <DiagonalGrid opacity={0.05} />

        {/* Subtle gradient orb */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40 pointer-events-none"
          style={{ backgroundColor: brand.lavenderLight }}
        />

        <div className="container-site relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <TechBadge>Solutions</TechBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-6 mb-4">
              What We Build
            </h2>
            <p className="text-[#525252] text-lg leading-relaxed">
              Custom software designed specifically for {industry.toLowerCase()} operations.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(114,106,255,0.2)]"
                  style={{
                    borderLeft: `3px solid ${brand.primary}`,
                  }}
                >
                  {/* Icon with technical frame */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: brand.purpleBg }}
                    >
                      <FeatureIcon className="w-5 h-5" style={{ color: brand.primary }} />
                    </div>
                    <span className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-widest">
                      Feature {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-[#525252] text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Circle className="w-2 h-2 fill-current" style={{ color: brand.primary }} />
                    <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: brand.primary }}>
                      Included
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          STATS — Large Typography Section with Purple Gradient
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 50%, ${brand.lavender} 100%)`
        }}
      >
        {/* Diagonal grid overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <pattern id="diag-white" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#FFFFFF" strokeWidth="1" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-white)" />
        </svg>

        <div className="container-site relative z-10">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-[clamp(4rem,12vw,8rem)] font-bold text-white leading-none tracking-tight"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/80 text-lg mt-4 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          RELATED INDUSTRIES — Minimal List
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TechBadge variant="muted">Also Serving</TechBadge>
          </motion.div>

          <div className="max-w-2xl mx-auto divide-y divide-[#E5E5E5]">
            {relatedIndustries.map((ind, index) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center justify-between py-6 hover:px-4 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-3 h-3"
                      style={{ backgroundColor: brand.primary }}
                    />
                    <span className="text-lg font-medium text-[#0A0A0A] group-hover:text-[#525252] transition-colors">
                      {ind.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    style={{ color: brand.primary }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA — Bold Full-Width with Purple Accents
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#0F1226] overflow-hidden">
        {/* Purple glow */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30 blur-[120px]"
          style={{ backgroundColor: brand.primary }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ backgroundColor: brand.lavender }}
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: brand.primary }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span
                className="inline-flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border"
                style={{ borderColor: brand.lavender, color: brand.lavender }}
              >
                {industry}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              {cta.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {cta.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-white hover:opacity-90 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${brand.primary}, ${brand.primarySoft})`
                }}
              >
                <Link href="/get-started" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-sm mt-10 font-mono"
            >
              No obligation • Response within 24 hours • 100% code ownership
            </motion.p>
          </div>
        </div>

        {/* Bottom measurement line */}
        <div className="absolute bottom-8 left-8 right-8 hidden lg:flex items-center">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest" style={{ color: brand.lavender }}>
            <div className="w-8 h-px" style={{ backgroundColor: brand.lavender }} />
            <span>END</span>
            <div className="w-8 h-px" style={{ backgroundColor: brand.lavender }} />
          </div>
          <div className="flex-1 h-px mx-4 opacity-20" style={{ backgroundColor: brand.lavender }} />
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
            © Aeopic · Custom Software Studio
          </span>
        </div>
      </section>
    </>
  );
}

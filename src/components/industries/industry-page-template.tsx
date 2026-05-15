"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const relatedIndustries = allIndustries
    .filter((ind) => ind.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — "Field Intelligence" dark editorial
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A14]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Industry color radial glow */}
        <div
          className="absolute top-0 right-0 w-2/3 h-2/3 opacity-15 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${color}, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-[0.08] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at bottom left, ${color}, transparent 70%)` }}
        />

        {/* Ghost industry icon — blueprint-weight strokes */}
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block pointer-events-none">
          <Icon
            className="w-[360px] h-[360px]"
            style={{ color: `${color}0C` }}
            strokeWidth={0.5}
          />
        </div>

        <div className="container-site relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <span
                className="text-[11px] font-mono uppercase tracking-[0.2em]"
                style={{ color }}
              >
                {industry}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#EDEDF0] mb-8"
            >
              {heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#8888A0] leading-relaxed max-w-xl mb-12"
            >
              {heroSubheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-[#0A0A14] hover:opacity-90 transition-opacity rounded-xl"
                style={{ backgroundColor: color }}
              >
                <Link href="/get-started" className="flex items-center gap-3">
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group flex items-center gap-2 text-[#8888A0] hover:text-[#EDEDF0] font-medium transition-colors"
              >
                Our Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS TICKER — scrolling status bar
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-3 border-y border-white/[0.08] bg-[#08080F] overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ x: { duration: 30, ease: "linear", repeat: Infinity } }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 items-center">
              {stats.map((stat, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center gap-12">
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <span style={{ color }}>&gt;</span>
                    <span className="text-[#EDEDF0] font-bold">{stat.value}</span>
                    <span className="text-white/30">{stat.label}</span>
                  </div>
                  <span className="text-white/15">|</span>
                </div>
              ))}
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color }}>&gt;</span>
                  <span className="text-[#EDEDF0] font-bold">Custom</span>
                  <span className="text-white/30">Platforms</span>
                </div>
                <span className="text-white/15">|</span>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color }}>&gt;</span>
                  <span className="text-[#EDEDF0] font-bold">100%</span>
                  <span className="text-white/30">Code Ownership</span>
                </div>
                <span className="text-white/15">|</span>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color }}>&gt;</span>
                  <span className="text-[#EDEDF0] font-bold">8-12 Weeks</span>
                  <span className="text-white/30">To Launch</span>
                </div>
                <span className="text-white/15">|</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PAIN POINTS — stacked signal-flow rows, no accordion
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0A0A14]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky header */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <span
                  className="text-[11px] font-mono uppercase tracking-[0.2em]"
                  style={{ color }}
                >
                  Challenges
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDF0] mt-4 mb-4 leading-[1.05]">
                  Sound
                  <br />
                  Familiar?
                </h2>
                <p className="text-[#8888A0] leading-relaxed">
                  Common problems we solve for {industry.toLowerCase()} businesses.
                </p>
              </motion.div>
            </div>

            {/* Pain point rows */}
            <div className="lg:col-span-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative py-10 border-t border-white/[0.06]"
                >
                  {/* Ghost ordinal */}
                  <div
                    className="absolute top-6 right-0 text-[5rem] md:text-[7rem] font-bold leading-none pointer-events-none select-none"
                    style={{ color: `${color}0A` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 pr-16 md:pr-24">
                    <h3 className="text-lg md:text-xl font-semibold text-[#EDEDF0] mb-4 leading-snug">
                      {point.problem}
                    </h3>
                    <p className="text-[#8888A0] leading-relaxed">
                      <span className="inline-block mr-2" style={{ color }}>
                        →
                      </span>
                      {point.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-white/[0.06]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURES — asymmetric bento grid, dark glass
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0D0D1A] relative overflow-hidden">
        {/* Subtle industry glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.07] pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span
              className="text-[11px] font-mono uppercase tracking-[0.2em]"
              style={{ color }}
            >
              Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDF0] mt-4 mb-4">
              What We Build
            </h2>
            <p className="text-[#8888A0] text-lg leading-relaxed">
              Custom software designed specifically for {industry.toLowerCase()} operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const isWide = index === 0 || index === 3;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={isWide ? "md:col-span-2" : "md:col-span-1"}
                >
                  <div
                    className="group relative h-full overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.05] hover:scale-[1.01]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${color}40`;
                      e.currentTarget.style.boxShadow = `0 0 60px ${color}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Ghost numeral */}
                    <div
                      className="absolute top-4 right-6 text-[6rem] md:text-[8rem] font-bold leading-none pointer-events-none select-none"
                      style={{ color: `${color}08` }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Module path */}
                    <div className="flex items-center gap-1.5 mb-6 font-mono text-[11px] text-white/25">
                      <span style={{ color }}>/</span>
                      <span>{slug}</span>
                      <span className="text-white/15">/</span>
                      <span>
                        {feature.title.toLowerCase().replace(/\s+&?\s*/g, "-")}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl mb-6"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <FeatureIcon className="w-5 h-5" style={{ color }} />
                    </div>

                    <h3 className="text-xl font-bold text-[#EDEDF0] mb-3 relative z-10">
                      {feature.title}
                    </h3>

                    <p className="text-[#8888A0] text-sm leading-relaxed relative z-10">
                      {feature.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="text-[11px] font-mono uppercase tracking-widest"
                        style={{ color }}
                      >
                        Included
                      </span>
                      <ArrowRight className="w-3 h-3" style={{ color }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS READOUT — large typography, industry-colored numerals
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#0A0A14]">
        <div className="container-site">
          <div className="border-y border-white/[0.06] py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-16 md:gap-8">
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-none tracking-tight"
                    style={{ color }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/30 text-sm font-mono uppercase tracking-widest mt-4">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED INDUSTRIES — minimal dark list
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0D0D1A]">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/25">
              Also Serving
            </span>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {relatedIndustries.map((ind, index) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center justify-between py-5 border-t border-white/[0.06] transition-all duration-200 hover:pl-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: ind.color }}
                    />
                    <span className="text-[#EDEDF0] font-medium group-hover:text-[#8888A0] transition-colors">
                      {ind.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — industry-colored glow, not purple
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#08080F] overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.12] blur-[120px] pointer-events-none"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <span
                className="text-[11px] font-mono uppercase tracking-[0.2em]"
                style={{ color }}
              >
                {industry}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDF0] leading-[1.05] tracking-tight mb-6"
            >
              {cta.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#8888A0] text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {cta.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-[#0A0A14] hover:opacity-90 transition-opacity rounded-xl"
                style={{ backgroundColor: color }}
              >
                <Link href="/get-started" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group flex items-center gap-2 text-[#8888A0] hover:text-[#EDEDF0] font-medium transition-colors"
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
              className="text-white/25 text-sm mt-12 font-mono"
            >
              No obligation · Response within 24 hours · 100% code ownership
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

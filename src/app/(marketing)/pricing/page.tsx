"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  CheckCircle,
  Check,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { FAQSection } from "@/components/shared/faq-section";

const heroStats = [
  { value: "$0", label: "Obligation to get a quote", color: "#726AFF" },
  { value: "24hr", label: "Typical response time", color: "#a78bfa" },
  { value: "100%", label: "Transparent pricing", color: "#c4b5fd" },
  { value: "8–12", label: "Weeks avg. to launch", color: "#726AFF" },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "We Listen",
    description:
      "Tell us what you need. We'll ask the right questions to understand your business, goals, and budget.",
  },
  {
    icon: FileText,
    title: "We Scope It",
    description:
      "We put together a detailed proposal with clear deliverables, timeline, and transparent pricing. No surprises.",
  },
  {
    icon: CheckCircle,
    title: "You Decide",
    description:
      "Review the proposal on your terms. No pressure, no rush. If it's a fit, we get to work.",
  },
];

const alwaysIncluded = [
  "100% source code ownership",
  "Modern, production-grade technology",
  "Responsive, mobile-first design",
  "Documentation & training",
  "Post-launch support",
  "No vendor lock-in — ever",
];

const saasItems = [
  { label: "CRM tool", cost: "$3.6K/yr" },
  { label: "Booking software", cost: "$1.8K/yr" },
  { label: "Email platform", cost: "$1.2K/yr" },
  { label: "Analytics", cost: "$0.9K/yr" },
  { label: "Support costs", cost: "$2.4K/yr" },
];

const customItems = [
  { label: "One-time build", cost: "Variable" },
  { label: "Hosting", cost: "~$600/yr" },
  { label: "Maintenance", cost: "Optional" },
  { label: "Feature adds", cost: "On demand" },
  { label: "Lock-in fees", cost: "$0", highlight: true },
];

const timelineSteps = [
  {
    time: "Day 1",
    title: "Initial Call",
    description: "We understand your business and goals. No sales pitch — just listening.",
    color: "#726AFF",
  },
  {
    time: "Day 3-5",
    title: "Proposal Delivered",
    description: "Detailed scope, timeline, and pricing. Everything upfront.",
    color: "#8b5cf6",
  },
  {
    time: "Week 2",
    title: "Blueprint Phase",
    description: "Architecture, UI mockups, and workflow design — before a line of code.",
    color: "#a78bfa",
  },
  {
    time: "Weeks 3-10",
    title: "Build & Iterate",
    description: "Weekly progress updates. You see it growing week by week.",
    color: "#c4b5fd",
  },
  {
    time: "Week 10-12",
    title: "Launch",
    description: "Go live. We stick around to optimize and support growth.",
    color: "#ddd6fe",
    emoji: "🚀",
  },
];

const faqs = [
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on scope, but most projects range from a few thousand to tens of thousands. We'll give you a clear number after understanding your needs — no vague ranges, no hidden fees.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We work with you to find a payment structure that fits your budget — whether that's milestone-based, monthly, or a custom arrangement.",
  },
  {
    question: "What if my needs change during the project?",
    answer:
      "It happens. We handle scope changes transparently — we'll tell you how it affects the timeline and cost before making any changes.",
  },
  {
    question: "What does ongoing support cost?",
    answer:
      "We offer monthly retainer plans for ongoing development, marketing, and support. We'll recommend what makes sense for your business after launch.",
  },
  {
    question: "Can I see a proposal before committing?",
    answer:
      "Absolutely. We provide a detailed proposal with clear scope, timeline, and pricing before you commit to anything.",
  },
];

function HeroStatTiles() {
  return (
    <section className="bg-[#F6F7FB] py-12 border-b border-gray-200">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 px-6 text-center min-w-[140px]"
            >
              <p
                className="text-[1.8rem] font-heading font-bold leading-none mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-[0.8rem] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ROICurveChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      {/* Header */}
      <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-4">
        Value over time: Custom Build vs. SaaS Patchwork
      </p>

      {/* Chart */}
      <svg viewBox="0 0 400 180" className="w-full h-auto">
        <defs>
          <linearGradient id="customGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(114,106,255,0.3)" />
            <stop offset="100%" stopColor="rgba(114,106,255,0.02)" />
          </linearGradient>
          <linearGradient id="saasGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1="50" y1="30" x2="380" y2="30" stroke="#e5e7eb" strokeDasharray="4" />
        <line x1="50" y1="70" x2="380" y2="70" stroke="#e5e7eb" strokeDasharray="4" />
        <line x1="50" y1="110" x2="380" y2="110" stroke="#e5e7eb" strokeDasharray="4" />

        {/* Y-axis labels */}
        <text x="20" y="34" fill="#6b7280" fontSize="8">High</text>
        <text x="20" y="74" fill="#6b7280" fontSize="8">Mid</text>
        <text x="20" y="114" fill="#6b7280" fontSize="8">Low</text>

        {/* X-axis labels */}
        <text x="90" y="145" fill="#6b7280" fontSize="8" textAnchor="middle">Yr 1</text>
        <text x="180" y="145" fill="#6b7280" fontSize="8" textAnchor="middle">Yr 2</text>
        <text x="270" y="145" fill="#6b7280" fontSize="8" textAnchor="middle">Yr 3</text>
        <text x="360" y="145" fill="#6b7280" fontSize="8" textAnchor="middle">Yr 4</text>

        {/* SaaS line (flat/slightly rising, dashed) */}
        <path
          d="M 50 110 Q 130 105, 180 100 T 270 95 T 360 88"
          fill="url(#saasGradientLight)"
          stroke="none"
        />
        <polyline
          points="50,110 130,105 180,100 230,97 270,95 320,90 360,88"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="6"
          strokeLinecap="round"
        />

        {/* Custom Build line (exponential curve up) */}
        <path
          d="M 50 110 Q 120 100, 180 85 T 270 50 T 360 25 L 360 130 L 50 130 Z"
          fill="url(#customGradientLight)"
        />
        <polyline
          points="50,110 100,102 150,90 200,72 250,52 300,38 360,25"
          fill="none"
          stroke="#726AFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* End labels */}
        <text x="365" y="22" fill="#726AFF" fontSize="9" fontWeight="600">Custom</text>
        <text x="365" y="85" fill="#9ca3af" fontSize="9">SaaS</text>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#726AFF] rounded" />
          <span className="text-[0.7rem] text-gray-700">Custom Build</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-gray-300 rounded" style={{ borderStyle: "dashed" }} />
          <span className="text-[0.7rem] text-gray-500">SaaS Patchwork</span>
        </div>
      </div>
    </motion.div>
  );
}

function VerticalTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Vertical gradient line */}
      <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#726AFF] via-[#a78bfa] to-[#ddd6fe]" />

      <div className="space-y-6">
        {timelineSteps.map((step) => (
          <div key={step.time} className="flex gap-4 relative">
            {/* Dot */}
            <div
              className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center z-10"
              style={{ backgroundColor: step.color }}
            >
              {step.emoji && <span className="text-xs">{step.emoji}</span>}
            </div>

            {/* Content */}
            <div className="pb-2">
              {/* Time badge */}
              <span
                className="inline-block px-2 py-0.5 rounded text-[0.65rem] font-medium mb-2 bg-[#F6F7FB] border border-gray-200 text-gray-500"
              >
                {step.time}
              </span>

              {/* Title */}
              <h4 className="text-gray-900 font-heading font-bold text-sm mb-1">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-[0.75rem] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CostComparisonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12"
    >
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-6">
          Custom Build vs. Recurring SaaS — 3-Year View
        </p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Patchwork SaaS */}
          <div className="bg-gray-50 rounded-lg border border-gray-100 p-5">
            <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-4">
              Patchwork SaaS
            </p>
            <div className="space-y-3">
              {saasItems.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="text-gray-600">{item.cost}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">3-Year Total</span>
                  <span className="text-gray-900 font-bold">$29.7K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Aeopic Custom */}
          <div className="bg-[#726AFF]/5 rounded-lg border border-[#726AFF]/20 p-5">
            <p className="text-[0.75rem] uppercase tracking-wider text-[#726AFF] mb-4">
              ✓ Aeopic Custom
            </p>
            <div className="space-y-3">
              {customItems.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className={item.highlight ? "text-[#726AFF] font-medium" : "text-gray-700"}>
                    {item.cost}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#726AFF]/10 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">You own it</span>
                  <span className="text-[#726AFF] font-heading font-bold text-lg">Forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insight callout */}
        <div className="mt-6 bg-[#726AFF]/5 border border-[#726AFF]/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-[#726AFF] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Key insight:</span> SaaS tools compound in cost every year and you own nothing. A custom build is an asset — your code, your data, your rules.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Pricing"
        headline="Every Business Is Different. Your Pricing Should Be Too."
        subheadline="We don't do cookie-cutter packages. Every project is scoped to your specific needs, goals, and budget. Let's talk about yours."
      />

      {/* Hero Stat Tiles */}
      <HeroStatTiles />

      {/* How Our Pricing Works */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Pricing Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connecting line (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-primary/20" />
                  )}

                  <div className="bg-[#F6F7FB] rounded-xl p-8 text-center shadow-sm border border-gray-100 h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Always Included */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What&apos;s Always Included
            </h2>
            <p className="text-muted-foreground text-lg">
              No matter the project size or scope
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {alwaysIncluded.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Cost Comparison Card */}
          <CostComparisonCard />
        </div>
      </section>

      {/* Let's Talk About Your Project - Main CTA */}
      <section className="relative py-24 md:py-32 bg-[#0F1226] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get a Custom Quote?
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every conversation starts with understanding your business. No
              sales pitch. No obligation. Just a straightforward discussion
              about what&apos;s possible and what it would cost.
            </p>

            {/* Primary CTA */}
            <Link
              href="/start"
              className="group inline-flex items-center gap-3 cta-gradient text-white text-lg font-semibold px-10 py-5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Email */}
            <div className="mt-8">
              <a
                href="mailto:contact@aeopic.com"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-lg">contact@aeopic.com</span>
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-sm">
              <MapPin className="h-4 w-4" />
              <span>
                We typically respond within 24 hours. Houston-based.
                Remote-friendly.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Chart + Vertical Timeline */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Long-Term Value
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Custom software appreciates in value while SaaS fees compound year after year.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ROI Chart */}
            <ROICurveChart />

            {/* Vertical Timeline */}
            <div className="bg-[#F6F7FB] rounded-xl border border-gray-200 p-6">
              <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-6">
                From Conversation to Launch
              </p>
              <VerticalTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-[#F6F7FB]">
        <FAQSection items={faqs} />
      </div>
    </>
  );
}

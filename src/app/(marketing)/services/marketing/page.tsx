"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Social Media",
    description: "Content that converts. Strategy that scales.",
    metrics: ["3x engagement", "Daily posting", "Paid + organic"],
  },
  {
    title: "SEO & Local Search",
    description: "Get found when customers search.",
    metrics: ["Page 1 rankings", "Technical SEO", "Content strategy"],
  },
  {
    title: "Google Business",
    description: "Own your local market.",
    metrics: ["Map pack visibility", "Review management", "Weekly posts"],
  },
  {
    title: "Paid Advertising",
    description: "Every dollar tracked. Every lead counted.",
    metrics: ["Google Ads", "Meta Ads", "A/B testing"],
  },
];

const results = [
  { metric: "+247%", label: "Average traffic increase", period: "Year one" },
  { metric: "3.2x", label: "Return on ad spend", period: "Avg. client" },
  { metric: "#1", label: "Local rankings", period: "12+ keywords" },
  { metric: "847", label: "Leads generated", period: "Per month avg." },
];

const faqs = [
  {
    q: "How long before I see results?",
    a: "Social engagement improves in weeks. SEO takes 3-6 months. We set realistic expectations and track progress weekly.",
  },
  {
    q: "What's the minimum budget?",
    a: "Marketing retainers start at $2,000/month including strategy, execution, and reporting. Ad spend is separate.",
  },
  {
    q: "Do you handle content creation?",
    a: "Yes. Graphics, copy, videos — we create everything. We learn your brand voice and maintain consistency across channels.",
  },
  {
    q: "How do you report performance?",
    a: "Monthly reports with real metrics: reach, engagement, traffic, leads, conversions. No vanity numbers.",
  },
];

export default function MarketingPage() {
  return (
    <main className="bg-[#FAFAFA]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/marketingherovid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container-site relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6"
            >
              Digital Marketing
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Marketing that
              <br />
              moves the needle.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12"
            >
              Social media, SEO, Google Business, paid ads — data-driven
              strategies that bring real customers to your door.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Get Started</Link>
              </Button>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-white/60 font-medium hover:text-white transition-colors"
              >
                <span>See results</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>

      {/* Results Strip */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {results.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold text-[#0A0A0A] tracking-tight mb-2">
                  {item.metric}
                </p>
                <p className="text-[#525252] mb-1">{item.label}</p>
                <p className="text-sm text-[#A3A3A3]">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6">
                The Problem
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0A0A0A] tracking-tight leading-[1.05]">
                Posting without
                <br />
                a plan.
                <br />
                <span className="text-[#A3A3A3]">Spending without</span>
                <br />
                <span className="text-[#A3A3A3]">a return.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:pt-20 space-y-6"
            >
              <p className="text-xl text-[#525252] leading-relaxed">
                You&apos;re posting on social media but nothing&apos;s happening.
                You&apos;re spending on ads but can&apos;t tell if it&apos;s working.
                Competitors are outranking you. Your Google Business profile
                is collecting dust.
              </p>
              <p className="text-xl text-[#525252] leading-relaxed">
                Meanwhile, customers are searching for exactly what you offer —
                and finding someone else.
              </p>
              <p className="text-xl font-medium text-[#0A0A0A]">
                We fix that.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <p className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
              Full-service
              <br />
              digital marketing.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E5]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors"
              >
                <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#10B981] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#525252] text-lg mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-sm text-[#525252] border border-[#E5E5E5] rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6">
                The Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1] mb-8">
                Audit. Strategy.
                <br />
                Execute. Report.
              </h2>
              <p className="text-xl text-[#525252] leading-relaxed">
                No guessing. No vanity metrics. Just clear strategy,
                consistent execution, and monthly reports that show
                exactly what&apos;s working.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              {[
                {
                  num: "01",
                  title: "Audit",
                  desc: "Analyze your current presence, competitors, and opportunities",
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Build a data-backed plan tailored to your goals",
                },
                {
                  num: "03",
                  title: "Execute",
                  desc: "Launch campaigns with continuous monitoring",
                },
                {
                  num: "04",
                  title: "Report",
                  desc: "Monthly metrics review and strategy adjustments",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <span className="text-4xl font-bold text-[#E5E5E5] group-hover:text-[#10B981] transition-colors">
                    {step.num}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#525252]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                Common
                <br />
                questions.
              </h2>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="border-t border-[#E5E5E5]">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-[#E5E5E5]"
                  >
                    <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                      <span className="text-lg font-medium text-[#0A0A0A] group-hover:text-[#10B981] transition-colors pr-8">
                        {faq.q}
                      </span>
                      <span className="text-[#A3A3A3] group-open:rotate-45 transition-transform text-2xl">
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-12">
                      <p className="text-[#525252] leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 bg-[#0A0A0A]">
        <div className="container-site">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#10B981] text-sm font-medium tracking-widest uppercase mb-6"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Ready to get found?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 mb-10"
            >
              Tell us about your business. We&apos;ll show you where the opportunities are.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start" className="flex items-center gap-2">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-white/50 font-medium hover:text-white transition-colors"
              >
                <span>View our process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

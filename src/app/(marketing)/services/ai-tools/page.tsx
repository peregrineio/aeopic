"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    id: "01",
    title: "AI Customer Support",
    description:
      "Chat and voice support that handles 80% of inquiries automatically. Smart escalation when human touch is needed.",
  },
  {
    id: "02",
    title: "Intelligent Ticketing",
    description:
      "Auto-categorize, prioritize, and route. SLA tracking and full customer context delivered instantly.",
  },
  {
    id: "03",
    title: "Knowledge Base AI",
    description:
      "Natural language search that finds answers in milliseconds. Self-updating from resolved conversations.",
  },
  {
    id: "04",
    title: "Predictive Analytics",
    description:
      "Spot patterns before they become problems. Churn prediction, demand forecasting, anomaly detection.",
  },
  {
    id: "05",
    title: "Process Automation",
    description:
      "Let AI handle repetitive work. Data extraction, report generation, workflow triggers — all autonomous.",
  },
  {
    id: "06",
    title: "Enterprise Security",
    description:
      "Your data stays yours. On-premise deployment, end-to-end encryption, full compliance built in.",
  },
];

const stats = [
  { value: "80%", label: "Auto-Resolution" },
  { value: "<5s", label: "Response Time" },
  { value: "60%", label: "Cost Reduction" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "24/7", label: "Availability" },
  { value: "10x", label: "Throughput" },
];

const faqs = [
  {
    q: "Is my data safe?",
    a: "Your data never leaves your control. We offer on-premise deployment, private cloud options, and enterprise-grade encryption. Nothing is used to train external models.",
  },
  {
    q: "How accurate is the AI?",
    a: "Accuracy depends on training data quality. Most systems achieve 85-95% accuracy after fine-tuning on your specific business context and terminology.",
  },
  {
    q: "Can it be customized for my business?",
    a: "That's the entire point. We train on your data, your processes, your terminology. The AI learns your business — not generic patterns.",
  },
  {
    q: "What happens when AI can't handle something?",
    a: "Smart escalation. When confidence is low or complexity is high, it routes to a human with full context. You always have control.",
  },
];

export default function AIToolsPage() {
  // Duplicate stats for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <main className="bg-[#050507]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/aitoolsherovid.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/40 to-[#050507]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(114,106,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(114,106,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-site relative z-10 py-32">
          <div className="max-w-4xl">
            {/* Eyebrow with glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#726AFF] shadow-[0_0_12px_#726AFF]" />
              <span className="text-[#726AFF] text-sm font-medium tracking-widest uppercase">
                AI Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Intelligence
              <br />
              <span className="text-[#726AFF]">built for your business.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed mb-12 max-w-2xl"
            >
              Custom AI systems that understand your data, your processes, your
              customers. Not generic tools — tailored intelligence.
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
                className="bg-[#726AFF] hover:bg-[#5B54CC] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Get Started</Link>
              </Button>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-white/40 font-medium hover:text-white transition-colors"
              >
                <span>View case studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />
      </section>

      {/* Stats Marquee */}
      <section className="py-4 border-y border-white/5 overflow-hidden bg-[#050507]">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ x: { duration: 25, ease: "linear", repeat: Infinity } }}
        >
          {duplicatedStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#726AFF]">
                {stat.value}
              </span>
              <span className="text-sm text-white/30 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
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
              <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-6">
                The Problem
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                Generic AI
                <br />
                doesn&apos;t work.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:pt-16 space-y-6"
            >
              <p className="text-xl text-white/50 leading-relaxed">
                Off-the-shelf chatbots frustrate customers. Pre-built models
                don&apos;t understand your terminology. One-size-fits-all
                automation breaks on edge cases.
              </p>
              <p className="text-xl text-white/50 leading-relaxed">
                Your business is unique. Your AI should be too.
              </p>
              <p className="text-xl font-medium text-white">
                We build AI that actually fits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-6">
              Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              What we build.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group grid md:grid-cols-12 gap-8 py-10 border-t border-white/5 hover:bg-white/[0.02] transition-colors px-6 -mx-6"
              >
                <div className="md:col-span-1">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-[#726AFF]/30 transition-colors">
                    {cap.id}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#726AFF] transition-colors">
                    {cap.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-white/40 text-lg leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 md:py-40 bg-[#08080B] border-t border-white/5">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-6">
                The Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Discovery to deployment.
              </h2>
              <p className="text-xl text-white/40 leading-relaxed">
                We don&apos;t just plug in AI. We understand your business
                first, then build systems that actually solve problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-px bg-white/5"
            >
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "Map workflows, identify high-impact opportunities",
                },
                {
                  num: "02",
                  title: "Architecture",
                  desc: "Design systems around your data and rules",
                },
                {
                  num: "03",
                  title: "Training",
                  desc: "Fine-tune models on your specific context",
                },
                {
                  num: "04",
                  title: "Deployment",
                  desc: "Launch with monitoring and iteration",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-[#08080B] p-8 group hover:bg-[#0D0D10] transition-colors"
                >
                  <span className="text-5xl font-bold text-white/5 group-hover:text-[#726AFF]/20 transition-colors block mb-6">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/30 text-sm">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Glass Card - Trust */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#726AFF]/20 via-transparent to-[#726AFF]/20 rounded-3xl blur-xl" />

            {/* Card */}
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-4">
                    Security First
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Your data never leaves your control.
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    On-premise deployment options. Private cloud configurations.
                    End-to-end encryption. SOC 2 compliance. Your data is never
                    used to train external models.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    "On-premise deployment",
                    "End-to-end encryption",
                    "SOC 2 compliant",
                    "HIPAA ready",
                    "Your data stays yours",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#726AFF]" />
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-6">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Common
                <br />
                questions.
              </h2>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-white/10"
                  >
                    <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                      <span className="text-lg font-medium text-white group-hover:text-[#726AFF] transition-colors pr-8">
                        {faq.q}
                      </span>
                      <span className="text-white/30 group-open:rotate-45 transition-transform text-2xl">
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-12">
                      <p className="text-white/40 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#726AFF]/10 rounded-full blur-[150px]" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-6"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Ready to build?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/40 mb-10"
            >
              Tell us what&apos;s slowing you down. We&apos;ll show you how AI
              can help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#726AFF] hover:bg-[#5B54CC] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start" className="flex items-center gap-2">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-white/40 font-medium hover:text-white transition-colors"
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

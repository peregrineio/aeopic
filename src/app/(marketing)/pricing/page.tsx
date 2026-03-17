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
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { FAQSection } from "@/components/shared/faq-section";

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

export default function PricingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Pricing"
        headline="Every Business Is Different. Your Pricing Should Be Too."
        subheadline="We don't do cookie-cutter packages. Every project is scoped to your specific needs, goals, and budget. Let's talk about yours."
      />

      {/* How Our Pricing Works */}
      <section className="section-padding bg-[#F6F7FB]">
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

                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 h-full">
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
      <section className="section-padding bg-white">
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
                className="flex items-center gap-4 bg-[#F6F7FB] p-5 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
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

      {/* FAQ */}
      <div className="bg-[#F6F7FB]">
        <FAQSection items={faqs} />
      </div>
    </>
  );
}

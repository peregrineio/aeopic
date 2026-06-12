"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

const industries = [
  {
    title: "Medical & Dental",
    slug: "medical",
    accent: "#ef4444",
    pain: "Patients are calling to book appointments that could be handled online in 30 seconds.",
    solution:
      "Patient portals with self-service booking, intake forms, appointment reminders, and secure messaging — HIPAA compliance built into every healthcare build.",
  },
  {
    title: "HVAC & Home Services",
    slug: "hvac",
    accent: "#f59e0b",
    pain: "You're juggling phone calls, handwritten schedules, and chasing invoices.",
    solution:
      "Dispatch dashboards, online booking, automated invoicing, and customer portals that let homeowners schedule and pay without calling.",
  },
  {
    title: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    accent: "#3b82f6",
    pain: "Your best marketing is word of mouth — but new customers can't find you online.",
    solution:
      "A modern website with local SEO, Google Business optimization, online scheduling, and a review system that turns happy customers into 5-star ratings.",
  },
  {
    title: "Contractors & Remodeling",
    slug: "contractors",
    accent: "#726AFF",
    pain: "Your portfolio is on your phone, not on your website. Leads are going to competitors.",
    solution:
      "Portfolio websites with project galleries, quote request forms, and CRM tools to track leads from first call to final walkthrough.",
  },
  {
    title: "Lawn Care & Landscaping",
    slug: "lawn-care",
    accent: "#38a169",
    pain: "You're managing routes on paper and customers can't see when you're coming.",
    solution:
      "Route optimization, customer portals with service history, automated reminders, and seasonal marketing campaigns that fill your schedule.",
  },
  {
    title: "Restaurants & Food Service",
    slug: "restaurants",
    accent: "#f59e0b",
    pain: "You're paying third-party delivery apps 30% when customers would rather order from you directly.",
    solution:
      "Custom online ordering, reservation systems, loyalty programs, and marketing that brings customers to YOUR platform, not DoorDash.",
  },
  {
    title: "Law Offices",
    slug: "law",
    accent: "#1e3a5f",
    pain: "Client intake is still emails and phone tag. Documents get lost. Follow-ups fall through the cracks.",
    solution:
      "Client portals with secure document sharing, intake automation, case status tracking, and appointment scheduling.",
  },
  {
    title: "Auto Repair & Detailing",
    slug: "auto",
    accent: "#3b82f6",
    pain: "Your customers call to check if their car is ready because you don't have a system to notify them.",
    solution:
      "Booking systems, service status notifications, customer history tracking, and marketing that keeps them coming back.",
  },
  {
    title: "Cleaning & Pest Control",
    slug: "cleaning",
    accent: "#38a169",
    pain: "You've got 5-star reviews but no website. Customers searching are finding your competitors.",
    solution:
      "Professional websites with online booking, recurring service management, review generation, and local SEO that puts you on the map.",
  },
];

const AUTO_ADVANCE_MS = 4500;

export function WhoWeHelp() {
  const [active, setActive] = useState(0);
  const [userTookOver, setUserTookOver] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-cycle until the visitor interacts
  useEffect(() => {
    if (userTookOver) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [userTookOver]);

  const select = (i: number) => {
    setUserTookOver(true);
    setActive(i);
  };

  const current = industries[active];

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-[#FAFAFA] overflow-hidden">
      <div className="container-site">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-14 md:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            02
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
            Who we help — select your industry
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.02]"
            style={{ color: brand.dark }}
          >
            We&apos;ve solved
            <br />
            <span style={{ color: brand.primary }}>your problems before.</span>
          </motion.h2>
        </div>

        {/* Switchboard: industry list ↔ diagnosis panel */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Industry list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 border-t border-gray-200"
          >
            {industries.map((industry, i) => {
              const isActive = i === active;
              return (
                <div key={industry.slug} className="border-b border-gray-200">
                  <button
                    onClick={() => select(i)}
                    onMouseEnter={() => select(i)}
                    aria-pressed={isActive}
                    className="w-full flex items-center gap-4 py-3.5 text-left group cursor-pointer"
                  >
                    {/* Signal dot */}
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300 flex-shrink-0"
                      style={{
                        background: isActive ? industry.accent : "#D1D5DB",
                        transform: isActive ? "scale(1.6)" : "scale(1)",
                      }}
                    />
                    <span
                      className="font-heading text-base md:text-lg font-bold tracking-tight transition-all duration-300 flex-1"
                      style={{
                        color: isActive ? brand.dark : "#9CA3AF",
                        transform: isActive ? "translateX(4px)" : "none",
                      }}
                    >
                      {industry.title}
                    </span>
                    <span
                      className="font-mono text-[10px] transition-opacity duration-300"
                      style={{ color: industry.accent, opacity: isActive ? 1 : 0 }}
                    >
                      ●
                    </span>
                  </button>

                  {/* Mobile: diagnosis expands inline */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <DiagnosisPanel industry={current} compact />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 mt-8 font-mono text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#726AFF] transition-colors border-b border-gray-300 hover:border-[#726AFF] pb-1"
            >
              All industries <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Diagnosis panel (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block lg:col-span-7 lg:col-start-6 lg:sticky lg:top-28"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <DiagnosisPanel industry={current} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DiagnosisPanel({
  industry,
  compact = false,
}: {
  industry: (typeof industries)[number];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "pb-8 pt-2 pl-5" : ""}>
      {/* The symptom */}
      <p
        className="font-mono text-[11px] tracking-[0.25em] uppercase mb-4"
        style={{ color: industry.accent }}
      >
        The symptom
      </p>
      <blockquote
        className={`font-heading font-bold tracking-tight leading-[1.15] mb-10 ${
          compact ? "text-xl" : "text-2xl md:text-4xl"
        }`}
        style={{ color: brand.dark }}
      >
        <span style={{ color: industry.accent }}>&ldquo;</span>
        {industry.pain}
        <span style={{ color: industry.accent }}>&rdquo;</span>
      </blockquote>

      {/* The fix */}
      <div className="flex gap-5">
        <div className="w-px flex-shrink-0" style={{ background: industry.accent, opacity: 0.35 }} />
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-3">
            How we fix it
          </p>
          <p className={`text-gray-600 leading-relaxed mb-6 ${compact ? "text-sm" : "text-base md:text-lg max-w-xl"}`}>
            {industry.solution}
          </p>
          <Link
            href={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase transition-all hover:gap-3"
            style={{ color: brand.primary }}
          >
            See the full build <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

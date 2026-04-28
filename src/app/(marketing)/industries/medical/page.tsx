"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    number: "01",
    title: "Online Booking",
    description:
      "Self-service scheduling with real-time availability. Patients book in 30 seconds. Calendar syncs automatically.",
  },
  {
    number: "02",
    title: "Digital Intake",
    description:
      "Patients complete forms on their phone before they arrive. Data flows directly into your system. No more clipboards.",
  },
  {
    number: "03",
    title: "Appointment Reminders",
    description:
      "Automated text and email reminders — 24 hours before, 2 hours before. No-shows drop by up to 70%.",
  },
  {
    number: "04",
    title: "Patient Portal",
    description:
      "Secure access to appointments, documents, and messaging. Everything in one place. HIPAA-compliant from day one.",
  },
];

const metrics = [
  { value: "70%", label: "Reduction in no-shows" },
  { value: "3 min", label: "Average intake time" },
  { value: "24/7", label: "Online booking availability" },
];

export default function MedicalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/medicalbackgroundvid.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        <div className="container-site relative z-10 py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#726AFF] text-sm font-medium tracking-wide mb-6"
            >
              Medical & Dental Practices
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Patients want to
              <br />
              book online.
              <br />
              <span className="text-[#726AFF]">Let them.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-12"
            >
              Custom software for medical and dental practices. Online booking,
              digital intake, automated reminders, patient portals — all
              HIPAA-ready.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#726AFF] hover:bg-[#5f58e0] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-white font-medium hover:text-[#726AFF] transition-colors"
              >
                <span>See our process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>

      {/* Problem Statement */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#726AFF] text-sm font-medium tracking-wide mb-4">
                The Problem
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                Your phone rings
                <br />
                for appointments
                <br />
                that should take
                <br />
                <span className="text-[#A3A3A3]">30 seconds online.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 lg:pt-16"
            >
              <p className="text-lg text-[#525252] leading-relaxed">
                Patients are calling to schedule, reschedule, and confirm
                appointments. Staff is buried in phone calls instead of patient
                care. Intake forms are still clipboard-and-pen at check-in. No-shows
                cost you thousands every month.
              </p>
              <p className="text-lg text-[#525252] leading-relaxed">
                Meanwhile, patients expect to book like they book everything else —
                on their phone, at midnight, without calling anyone.
              </p>
              <p className="text-lg font-medium text-[#0A0A0A]">
                We build the software that bridges this gap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-wide mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1] max-w-xl">
              Everything your
              <br />
              practice needs.
            </h2>
          </motion.div>

          <div className="border-t border-[#E5E5E5]">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-[#E5E5E5] py-12 md:py-16"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Number */}
                  <div className="col-span-3 md:col-span-2">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#E5E5E5] group-hover:text-[#726AFF] transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-heading), system-ui, sans-serif",
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-9 md:col-span-3 flex items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#726AFF] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-[#525252] text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#726AFF] text-sm font-medium tracking-wide mb-16 text-center"
          >
            Results
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4">
                  {metric.value}
                </p>
                <p className="text-[#737373] text-lg">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#726AFF] text-sm font-medium tracking-wide mb-6"
            >
              Security & Compliance
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1] mb-8"
            >
              HIPAA-compliant
              <br />
              <span className="text-[#A3A3A3]">from the first line of code.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#525252] leading-relaxed"
            >
              Every system we build for healthcare starts with security and
              privacy. Encrypted data, secure messaging, audit logs, access
              controls — not afterthoughts, but foundations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="container-site">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#726AFF] text-sm font-medium tracking-wide mb-6"
            >
              Get Started
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1] mb-8"
            >
              Ready to modernize
              <br />
              your practice?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#525252] leading-relaxed mb-10"
            >
              Let&apos;s build a patient experience that&apos;s secure, efficient,
              and actually works. Most projects launch in 8–12 weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#726AFF] hover:bg-[#5f58e0] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 text-[#525252] font-medium hover:text-[#0A0A0A] transition-colors"
              >
                <span>View all industries</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

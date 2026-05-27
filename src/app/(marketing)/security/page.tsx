"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "SOC 2 Type II",
    holder: "Anthropic, Supabase, Vercel, Stripe",
    description:
      "Independent audit verifying security, availability, and confidentiality controls are maintained consistently over time.",
  },
  {
    name: "ISO 27001:2022",
    holder: "Anthropic",
    description:
      "International standard for information security management systems. Formally audited and certified.",
  },
  {
    name: "ISO/IEC 42001:2023",
    holder: "Anthropic",
    description:
      "International standard for AI management systems. One of the first AI companies in the world to achieve this certification.",
  },
  {
    name: "PCI DSS Level 1",
    holder: "Stripe",
    description:
      "Highest level of payment card industry security certification. All payment processing runs through Stripe.",
  },
];

const securityPractices = [
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "All data encrypted in transit (TLS 1.2+) and at rest (AES-256). No exceptions.",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Role-based permissions, row-level security on database records, and multi-factor authentication for all administrative access.",
  },
  {
    icon: Eye,
    title: "Zero Data Retention",
    description:
      "For sensitive workloads, our AI provider retains zero prompts, responses, or logs. Available self-serve for any client engagement.",
  },
  {
    icon: Server,
    title: "US-Based Infrastructure",
    description:
      "All primary data processing occurs in the United States. Subprocessors are contractually bound to maintain security standards.",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description:
      "Administrative actions and data access events are logged. Activity event logs available with up to 180-day retention.",
  },
  {
    icon: Shield,
    title: "BAA Available",
    description:
      "Business Associate Agreements available for healthcare engagements through our infrastructure partners including Anthropic and Supabase.",
  },
];

const subprocessors = [
  { name: "Supabase", role: "Database & Auth", certs: "SOC 2 Type II, HIPAA BAA" },
  { name: "Vercel", role: "Hosting & CDN", certs: "SOC 2 Type II" },
  { name: "Anthropic", role: "AI Processing", certs: "SOC 2, ISO 27001, ISO 42001, BAA, ZDR" },
  { name: "Stripe", role: "Payments", certs: "PCI Level 1, SOC 2" },
  { name: "Twilio", role: "Communications", certs: "SOC 2, HIPAA eligible" },
  { name: "Resend", role: "Email", certs: "SOC 2 Type II" },
];

export default function SecurityPage() {
  return (
    <main className="bg-[#050507]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(114,106,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(114,106,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <Shield className="w-5 h-5 text-[#726AFF]" />
              <span className="text-[#726AFF] text-sm font-medium tracking-widest uppercase">
                Security & Trust
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Your data is
              <br />
              <span className="text-[#726AFF]">protected by design.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed mb-12 max-w-2xl"
            >
              Every platform we build runs on independently audited, certified
              infrastructure. Security is not an add-on — it is the foundation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certification Cards */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-4">
              Vendor Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Independently audited. Continuously verified.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  <Shield className="w-5 h-5 text-[#726AFF] flex-shrink-0 mt-1" />
                </div>
                <p className="text-[#726AFF] text-sm font-medium mb-3">
                  {cert.holder}
                </p>
                <p className="text-white/40 leading-relaxed text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-4">
              How We Protect Your Data
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Security practices built into every build.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, i) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <practice.icon className="w-8 h-8 text-[#726AFF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {practice.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subprocessor Summary */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-4">
              Infrastructure Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Every vendor in our stack, transparent.
            </h2>
            <p className="text-white/40 max-w-2xl">
              We only work with providers that maintain independently audited
              security programs.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-6 text-white/60 font-medium">Provider</th>
                  <th className="text-left py-4 pr-6 text-white/60 font-medium">Role</th>
                  <th className="text-left py-4 text-white/60 font-medium">Certifications</th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((sp) => (
                  <tr key={sp.name} className="border-b border-white/5">
                    <td className="py-4 pr-6 text-white font-medium">{sp.name}</td>
                    <td className="py-4 pr-6 text-white/40">{sp.role}</td>
                    <td className="py-4 text-white/40">{sp.certs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link
              href="/legal/subprocessors"
              className="text-[#726AFF] text-sm font-medium hover:underline inline-flex items-center gap-2"
            >
              View full subprocessor list
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[#726AFF] text-sm font-medium tracking-widest uppercase mb-4">
              Compliance Documentation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
              Everything in writing.
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Privacy Policy",
                  description: "TDPSA-compliant policy covering data collection, use, retention, and your rights.",
                  href: "/privacy",
                },
                {
                  title: "Data Processing Agreement",
                  description: "Standard DPA governing how we process personal data on behalf of clients.",
                  href: "/legal/dpa",
                },
                {
                  title: "Subprocessor List",
                  description: "Complete list of third-party services, their purposes, and compliance certifications.",
                  href: "/legal/subprocessors",
                },
                {
                  title: "Terms of Service",
                  description: "Service terms including AI disclosure, data processing, and intellectual property.",
                  href: "/terms",
                },
              ].map((doc) => (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="group flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#726AFF]/30 transition-colors"
                >
                  <div>
                    <h3 className="text-white font-medium group-hover:text-[#726AFF] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-white/30 text-sm mt-1">{doc.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#726AFF] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-site">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Questions about security?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/40 leading-relaxed mb-10"
            >
              We are happy to walk through our security practices, provide
              vendor documentation, or discuss compliance requirements for your
              industry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#726AFF] hover:bg-[#5B54CC] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

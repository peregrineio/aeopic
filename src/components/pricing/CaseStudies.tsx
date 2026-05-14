"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "Allstar AC & Heating",
    industry: "HVAC",
    before:
      "Manual booking, scattered tools, marketing with no tracking",
    after:
      "Custom platform with online booking, CRM, and integrated marketing campaigns",
    result: "Full business platform launched in 8 weeks",
  },
  {
    client: "GreenBee Lawn Care",
    industry: "Lawn Care",
    before:
      "Basic website, no advertising, no lead tracking system",
    after:
      "Custom website, Facebook & Google ad campaigns, weekly content strategy",
    result: "$0.16 CPC (industry average $1.50+), 1,900+ families served",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#E8E8F0]">
      <div className="container-site">
        <div className="mb-14">
          <p className="pricing-eyebrow mb-4">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.025em] text-[#0F1226]">
            Real Results From Real Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pricing-card-light p-0 overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-[#E8E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#726AFF]" />
                  <h3 className="text-base font-heading font-bold text-[#0F1226]">
                    {study.client}
                  </h3>
                </div>
                <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-[#726AFF]/70 bg-[#726AFF]/[0.08] px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>

              {/* Before / After columns */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0]">
                <div className="px-7 py-6">
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#EF4444]/80 mb-3">
                    Before
                  </p>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {study.before}
                  </p>
                </div>
                <div className="px-7 py-6">
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#10B981]/80 mb-3">
                    After
                  </p>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {study.after}
                  </p>
                </div>
              </div>

              {/* Result bar */}
              <div className="px-7 py-4 bg-[#726AFF]/[0.04] border-t border-[#726AFF]/[0.12] flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#726AFF] flex items-center justify-center shrink-0">
                  <ArrowRight className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm font-semibold text-[#0F1226]">
                  {study.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

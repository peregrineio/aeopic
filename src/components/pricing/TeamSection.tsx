"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Sam Shahin",
    role: "Founder & Lead Engineer",
    description:
      "Leads architecture, development, and client strategy. Personally involved in every project.",
    initials: "SS",
  },
  {
    name: "Justin Washington",
    role: "CMO & Sales",
    description:
      "Your first point of contact. Handles strategy, growth, and making sure your business goals drive every decision.",
    initials: "JW",
  },
  {
    name: "Theron Smith",
    role: "COO & Production",
    description:
      "Manages execution, timelines, and quality. Makes sure every deliverable ships on time.",
    initials: "TS",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#E8E8F0]">
      <div className="container-site">
        <div className="mb-14 max-w-2xl">
          <p className="pricing-eyebrow mb-4">The Team</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.025em] text-[#0F1226] mb-4">
            You Work Directly With Us
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl">
            No handoff to junior developers. No subcontractors you&apos;ve
            never met. The people you talk to are the people who build your
            product.
          </p>
        </div>

        <div className="space-y-5 max-w-3xl">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pricing-card-light p-6 flex items-start gap-5"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-[#726AFF]/[0.08] border border-[#726AFF]/15 flex items-center justify-center">
                <span className="text-[#726AFF] text-lg font-heading font-bold tracking-wider">
                  {member.initials}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-base font-heading font-bold text-[#0F1226]">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#726AFF]/70">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

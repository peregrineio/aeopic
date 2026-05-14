"use client";

import { motion } from "framer-motion";

const techColumns = [
  {
    name: "Next.js + React",
    description:
      "Your app ships in weeks, not months. Server-side rendering means fast load times and strong SEO from day one.",
  },
  {
    name: "Supabase",
    description:
      "Your data lives in a real database you own — not trapped in someone else's SaaS. Auth, storage, and real-time built in.",
  },
  {
    name: "Vercel",
    description:
      "Deploy globally in seconds. Auto-scaling, preview URLs for every change, and hosting that costs under $50/month for most apps.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#0F1226] py-20 md:py-28 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-site relative z-10">
        <div className="text-center mb-14">
          <p className="pricing-eyebrow mb-4 text-[#726AFF]/80">The Stack</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-[-0.025em]">
            Built on a Stack We Chose for a Reason
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-4xl mx-auto">
          {techColumns.map((col, index) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pricing-card-dark p-7"
            >
              <p className="pricing-eyebrow mb-4 text-[#726AFF]/60">
                0{index + 1}
              </p>
              <h3 className="text-xl font-heading font-bold text-white tracking-[-0.02em]">
                {col.name}
              </h3>
              <p className="text-sm text-white/50 mt-3 leading-relaxed">
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center font-heading font-bold text-xl md:text-2xl text-gradient"
        >
          Open source. No vendor lock-in. You own every line of code.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCode2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Tell Us", description: "Fill out the form. Takes 2 minutes." },
  { icon: FileCode2, num: "02", title: "We Design", description: "We map your workflow and architect the solution." },
  { icon: Rocket, num: "03", title: "We Build", description: "Agile development with weekly demos. Live in weeks." },
];

export function BentoProcess() {
  return (
    <section className="py-20 bg-[var(--bento-bg)] bento-grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--bento-text)] font-heading">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-8
                  border border-[var(--bento-border)] shadow-[var(--bento-shadow)]
                  hover:shadow-[var(--bento-shadow-hover)] transition-all duration-300
                  relative overflow-hidden"
              >
                {/* Large step number in background */}
                <span className="absolute -top-4 -right-2 text-8xl font-bold font-heading
                  text-[var(--bento-accent)] opacity-[0.05] select-none">
                  {step.num}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bento-accent)]
                    flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--bento-text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--bento-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

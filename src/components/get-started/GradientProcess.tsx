"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCode2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Tell Us",
    description:
      "Fill out the form. Takes 2 minutes. We respond within 24 hours.",
  },
  {
    icon: FileCode2,
    num: "02",
    title: "We Design",
    description:
      "We map your workflow, architect the solution, show you exactly what we'd build.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "We Build",
    description: "Agile development with weekly demos. Live in 8-12 weeks.",
  },
];

export function GradientProcess() {
  return (
    <section className="py-24 gradient-atmosphere noise-overlay-gradient relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] via-transparent to-[#0f0f1a]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600
                    flex items-center justify-center mx-auto shadow-lg shadow-violet-500/30"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/10
                    flex items-center justify-center text-sm font-bold text-white backdrop-blur-sm"
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

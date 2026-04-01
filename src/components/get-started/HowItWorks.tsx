"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCode2, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Tell Us What You Need",
    description:
      "Fill out the form above. Takes 2 minutes. We respond within 24 hours.",
    icon: MessageCircle,
  },
  {
    number: 2,
    title: "We Design the Solution",
    description:
      "We map your workflow, architect the platform, and show you exactly what we'd build.",
    icon: FileCode2,
  },
  {
    number: 3,
    title: "We Build & Launch",
    description:
      "Agile development with weekly demos. Live in weeks, not months.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-[#F6F7FB]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold"
          >
            Three Steps to Your New Platform
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Vertical Line - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 -mb-8" />
                  )}

                  <div className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

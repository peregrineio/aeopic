"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects launch in 8-12 weeks. We use agile sprints with weekly demos so you see progress every step of the way.",
  },
  {
    q: "What does '100% code ownership' mean?",
    a: "You own everything we build - the code, the designs, the data. No proprietary lock-in, no licensing fees, no surprises.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. After launch, we offer maintenance plans to keep your software updated, secure, and running smoothly.",
  },
  {
    q: "What's your pricing structure?",
    a: "We quote based on project scope. Most clients choose our subscription model which includes development, hosting, and support for a predictable monthly cost.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Absolutely. We specialize in integrating with existing tools - CRMs, payment processors, booking systems, and more.",
  },
];

export function GradientFAQ() {
  return (
    <section className="py-24 bg-atmosphere-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Questions & Answers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card-gradient p-8"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger
                  className="py-4 text-left font-medium text-white hover:no-underline
                  hover:text-violet-400 transition-colors [&>svg]:text-white/50"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-white/50">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

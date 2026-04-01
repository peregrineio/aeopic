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
    a: "Most projects launch in 8-12 weeks with weekly progress demos.",
  },
  {
    q: "What does '100% code ownership' mean?",
    a: "You own everything - the code, designs, data. No lock-in, no licensing fees.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. After launch, we offer maintenance plans to keep your software running smoothly.",
  },
  {
    q: "What's your pricing?",
    a: "We quote based on scope. Most clients choose our subscription model for predictable costs.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Absolutely. We specialize in integrating with CRMs, payment processors, and more.",
  },
];

export function BentoFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bento-bg)] rounded-[var(--bento-radius)] p-8 lg:p-12
            border border-[var(--bento-border)]"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--bento-text)] mb-8 font-heading">
            Questions & Answers
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[var(--bento-border)] last:border-0"
              >
                <AccordionTrigger
                  className="py-4 text-left font-medium text-[var(--bento-text)]
                    hover:no-underline hover:text-[var(--bento-accent)]"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[var(--bento-text-secondary)]">
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

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They built exactly what we needed — not what they wanted to sell us. The platform saves us 15+ hours a week.",
    name: "Business Owner",
    industry: "Home Services",
    initials: "BO",
  },
  {
    quote:
      "We went from spreadsheets to a full operations platform in 8 weeks. Our customers love the online booking.",
    name: "Owner",
    industry: "Service Company",
    initials: "SC",
  },
  {
    quote:
      "The fact that we own 100% of the code is what sold us. No vendor lock-in, no surprise price hikes.",
    name: "CEO",
    industry: "Growing Business",
    initials: "GB",
  },
];

export function TestimonialsSection() {
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
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
            >
              {/* Decorative Quote */}
              <div className="absolute top-4 right-4">
                <Quote className="w-10 h-10 text-primary/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-4" />

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";

// Industry data for related industries
const allIndustries = [
  { slug: "hvac", title: "HVAC & Home Services", color: "#f59e0b" },
  { slug: "plumbing-electrical", title: "Plumbing & Electrical", color: "#3b82f6" },
  { slug: "contractors", title: "Contractors & Remodeling", color: "#726AFF" },
  { slug: "lawn-care", title: "Lawn Care & Landscaping", color: "#38a169" },
  { slug: "medical", title: "Medical & Dental", color: "#ef4444" },
  { slug: "restaurants", title: "Restaurants", color: "#f59e0b" },
  { slug: "law", title: "Law Offices", color: "#1e3a5f" },
  { slug: "auto", title: "Auto & Detailing", color: "#3b82f6" },
  { slug: "cleaning", title: "Cleaning & Pest Control", color: "#38a169" },
];

export interface IndustryPageProps {
  industry: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: { problem: string; solution: string }[];
  features: { icon: LucideIcon; title: string; description: string }[];
  stats: { value: string; label: string }[];
  cta: { headline: string; subheadline: string };
}

export function IndustryPageTemplate({
  industry,
  slug,
  icon: Icon,
  color,
  heroHeadline,
  heroSubheadline,
  painPoints,
  features,
  stats,
  cta,
}: IndustryPageProps) {
  const [expandedPain, setExpandedPain] = useState<number | null>(null);

  // Get 3 related industries (not the current one)
  const relatedIndustries = allIndustries
    .filter((ind) => ind.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0F1226] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Industry Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="h-10 w-10" style={{ color }} />
            </motion.div>

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-white/60 tracking-[0.2em] uppercase text-sm font-semibold mb-4"
            >
              {industry}
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
            >
              {heroSubheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="cta-gradient text-white">
                <Link href="/start">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/process">See Our Process</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are the problems we hear from {industry.toLowerCase()} businesses every day. Click to see how we solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setExpandedPain(expandedPain === index ? null : index)}
                className={`cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${
                  expandedPain === index ? "border-green-500" : "border-amber-500"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      expandedPain === index ? "bg-green-100" : "bg-amber-100"
                    }`}
                  >
                    {expandedPain === index ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-2">{point.problem}</p>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{expandedPain === index ? "Solution" : "Click to see solution"}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expandedPain === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded Solution */}
                    <AnimatePresence>
                      {expandedPain === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-green-700 mt-4 pt-4 border-t border-gray-100 leading-relaxed">
                            {point.solution}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Here&apos;s What We Build for {industry}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTopColor: color, borderTopWidth: "3px" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <FeatureIcon className="h-6 w-6" style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-[#0F1226]">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color }}>
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">We Also Work With:</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: ind.color }}
                />
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-primary text-sm mt-3">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline={cta.headline}
        subheadline={cta.subheadline}
        ctaText="Get Started"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}

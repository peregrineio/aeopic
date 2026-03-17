"use client";

import { useState } from "react";
import {
  Share2,
  Search,
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

const painPointCards = [
  {
    pain: "Posting on Social Media With No Strategy",
    solution:
      "We build a content calendar backed by competitor research, local trends, and what's actually working in your industry. Every post has a purpose.",
  },
  {
    pain: "Nobody Can Find You on Google",
    solution:
      "We optimize your website for local search, fix technical SEO issues, and build a content strategy that puts you in front of customers actively searching for your services.",
  },
  {
    pain: "Spending Money on Ads With No Results",
    solution:
      "We run data-driven campaigns with clear targeting, A/B testing, and monthly reporting. You'll know exactly where every dollar goes and what it brought back.",
  },
  {
    pain: "Competitors Are Outranking You",
    solution:
      "We analyze what your competitors are doing, find the gaps, and build a strategy that positions you as the go-to choice in your market.",
  },
  {
    pain: "No Idea What's Working and What's Not",
    solution:
      "Monthly performance reports with clear metrics. Leads generated, traffic sources, conversion rates, ROI — no vanity metrics, just numbers that matter.",
  },
  {
    pain: "Your Google Business Profile Is Collecting Dust",
    solution:
      "We optimize your profile, post regularly, manage reviews, and make sure you show up in the local map pack when customers search for your services.",
  },
];

const services = [
  {
    icon: Share2,
    title: "Social Media Management & Engagement",
    color: "#726AFF",
    features: [
      "Content creation & scheduling",
      "Community management & engagement",
      "Paid social campaigns (Facebook, Instagram)",
      "Performance analytics & optimization",
    ],
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    color: "#3b82f6",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & content strategy",
      "Local SEO for service businesses",
      "Ongoing optimization & reporting",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    color: "#38a169",
    features: [
      "Profile optimization",
      "Regular post management",
      "Review strategy & response templates",
      "Local visibility enhancement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Trends & Customer Intelligence",
    color: "#f59e0b",
    features: [
      "Customer feedback analysis",
      "Competitor monitoring",
      "Trend identification",
      "Data-driven strategy adjustments",
    ],
  },
];

const faqs = [
  {
    question: "How long before I see results?",
    answer:
      "Social media engagement typically improves within the first month. SEO results take 3-6 months to materialize significantly. We set realistic expectations upfront and track progress weekly.",
  },
  {
    question: "What's the minimum budget?",
    answer:
      "Our marketing retainers start at $2,000/month. This includes strategy, execution, and reporting. Ad spend is separate and depends on your goals.",
  },
  {
    question: "Do you handle the content creation?",
    answer:
      "Yes. We create all content — graphics, copy, videos. We'll work with you to understand your brand voice and maintain consistency across all channels.",
  },
  {
    question: "How do you report on performance?",
    answer:
      "Monthly reports with clear metrics: reach, engagement, traffic, leads, and conversions. We focus on metrics that matter to your business, not vanity numbers.",
  },
];

function PainPointCard({
  card,
  isExpanded,
  onToggle,
}: {
  card: (typeof painPointCards)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
        isExpanded ? "border-green-500" : "border-gray-200"
      }`}
      onClick={onToggle}
      style={{
        borderLeftWidth: "4px",
        borderLeftColor: isExpanded ? "#38a169" : "#f59e0b",
      }}
    >
      <div className="p-5">
        {/* Pain State */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              isExpanded ? "bg-green-100" : "bg-amber-100"
            }`}
          >
            {isExpanded ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            )}
          </div>
          <div className="flex-1">
            <p
              className={`font-medium ${
                isExpanded ? "text-green-800" : "text-foreground"
              }`}
            >
              {card.pain}
            </p>
          </div>
        </div>

        {/* Expand indicator */}
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isExpanded ? "text-green-600" : "text-primary"
          }`}
        >
          <span>{isExpanded ? "Solution" : "See how we fix this"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Solution (expanded) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                {card.solution}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function MarketingPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <>
      <ServiceHero
        eyebrow="Digital Marketing"
        headline="Marketing That Moves the Needle"
        subheadline="Social media, SEO, Google Business — data-driven strategies that bring real customers to your door."
      />

      {/* Pain Points - Interactive Cards */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="Most Businesses Know They Need Marketing — They Just Don't Know What Works"
            centered
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Click on any challenge to see how we solve it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {painPointCards.map((card, index) => (
              <PainPointCard
                key={card.pain}
                card={card}
                isExpanded={expandedCard === index}
                onToggle={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services - with colors */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader headline="Our Services" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderTopColor: service.color,
                    borderTopWidth: "4px",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className="font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach - Enhanced with visual process and dashboard */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="Data-First Marketing. Every Decision Backed by Metrics."
            centered
          />

          {/* 3-Step Visual Process */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0.5 bg-primary/20" />

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Search className="h-6 w-6" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20 border-2 border-white shadow">
                  1
                </div>
                <h3 className="font-semibold text-center mb-2">Research & Strategy</h3>
                <p className="text-sm text-muted-foreground text-center">
                  We analyze your market, competitors, and customers before creating a single piece of content.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Rocket className="h-6 w-6" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20 border-2 border-white shadow">
                  2
                </div>
                <h3 className="font-semibold text-center mb-2">Execute & Optimize</h3>
                <p className="text-sm text-muted-foreground text-center">
                  We launch campaigns, monitor performance daily, and optimize in real-time.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20 border-2 border-white shadow">
                  3
                </div>
                <h3 className="font-semibold text-center mb-2">Report & Iterate</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Monthly reports with clear ROI. We show you what worked, what didn&apos;t, and what&apos;s next.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Marketing Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#0F1226] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  Marketing Performance — March 2026
                </span>
                <div className="w-16" />
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Leads Generated</p>
                    <p className="text-3xl font-bold text-white">247</p>
                    <p className="text-green-400 text-sm mt-1">↑ 32% vs last month</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Return on Ad Spend</p>
                    <p className="text-3xl font-bold text-primary">3.2x</p>
                    <p className="text-primary text-sm mt-1">Above target</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Organic Traffic</p>
                    <p className="text-3xl font-bold text-white">↑ 64%</p>
                    <p className="text-blue-400 text-sm mt-1">Year over year</p>
                  </div>
                </div>

                {/* Fake Chart */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-4">Traffic Trend</p>
                  <div className="flex items-end gap-2 h-24">
                    {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${height}%`,
                          background: i >= 9 ? "#726AFF" : "rgba(114, 106, 255, 0.3)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-white/40 text-xs">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Sep</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Footer text */}
                <p className="text-center text-white/50 text-sm mt-6">
                  Real-time analytics. Clear reporting. No vanity metrics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-[#0F1226]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">What Makes Us Different</h2>
            <p className="text-white/70 text-lg">
              We also build your platform — so your marketing and technology are
              perfectly aligned. No handoff friction. No miscommunication. One
              team.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="marketing" />

      <CTASection
        headline="Ready to Get Found?"
        subheadline="Tell us about your business. We'll show you where the opportunities are."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}

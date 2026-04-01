"use client";

import {
  TrendingUp,
  Search,
  Share2,
  MapPin,
  BarChart3,
  Mail,
  Target,
  Lightbulb,
  Code2,
  Wrench,
  Rocket,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";

const painPoints = [
  {
    problem: "Posting on social media with no strategy or results",
    solution: "Data-driven content calendar backed by competitor research and local trends",
  },
  {
    problem: "Nobody can find you on Google when they search",
    solution: "Local SEO optimization that puts you in front of customers actively searching",
  },
  {
    problem: "Spending money on ads with no measurable return",
    solution: "Targeted campaigns with clear ROI tracking and monthly performance reports",
  },
  {
    problem: "Competitors are outranking you everywhere",
    solution: "Competitive analysis and strategic positioning to become the go-to choice",
  },
  {
    problem: "No idea what's actually working and what's wasted",
    solution: "Clear metrics that matter — leads, conversions, revenue — not vanity numbers",
  },
  {
    problem: "Your Google Business Profile is collecting dust",
    solution: "Active profile management, review strategy, and local map pack optimization",
  },
];

const capabilities = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Content creation, scheduling, engagement, and paid campaigns that actually convert.",
    color: "#10B981",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    description: "Technical optimization, keyword strategy, and content that ranks. Dominate your local market.",
    color: "#3B82F6",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Profile optimization, regular posts, review management, and local visibility.",
    color: "#F59E0B",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Monthly reports with real metrics. Know exactly where every dollar goes and what it brings back.",
    color: "#726AFF",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated sequences that nurture leads. Newsletters that people actually read.",
    color: "#8B5CF6",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Google Ads, Facebook, Instagram — targeted campaigns with A/B testing and optimization.",
    color: "#EF4444",
  },
];

const processSteps = [
  {
    title: "Audit",
    description: "Analyze your current presence, competitors, and opportunities",
    icon: Lightbulb,
  },
  {
    title: "Strategy",
    description: "Build a data-backed plan tailored to your goals",
    icon: Code2,
  },
  {
    title: "Execute",
    description: "Launch campaigns with continuous monitoring and optimization",
    icon: Wrench,
  },
  {
    title: "Report",
    description: "Monthly metrics review and strategy adjustments",
    icon: Rocket,
  },
];

const stats = [
  { value: "3.2x", label: "Avg. ROAS", trend: "Return on ad spend" },
  { value: "+64%", label: "Organic Traffic", trend: "Year over year" },
  { value: "247", label: "Leads/Month", trend: "Average per client" },
  { value: "#1", label: "Local Rankings", trend: "For 12+ keywords" },
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
  {
    question: "Can you work with my existing website?",
    answer:
      "Yes, and we can also improve it. Since we build websites too, your marketing and development teams are aligned — no handoff friction.",
  },
];

export default function MarketingPage() {
  return (
    <ServicePageTemplate
      service="marketing"
      eyebrow="Digital Marketing"
      headline="Marketing That Moves the Needle"
      subheadline="Social media, SEO, Google Business — data-driven strategies that bring real customers to your door."
      painPoints={painPoints}
      capabilities={capabilities}
      processSteps={processSteps}
      stats={stats}
      faqs={faqs}
      ctaHeadline="Ready to Get Found?"
      ctaSubheadline="Tell us about your business. We'll show you where the opportunities are."
    />
  );
}

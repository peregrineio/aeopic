"use client";

import { useRef, ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  LucideIcon,
  Sparkles,
  Code2,
  TrendingUp,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";
import { RelatedServices } from "@/components/services/related-services";
import { CTASection } from "@/components/shared/cta-section";

// ============================================================================
// TYPES
// ============================================================================

type ServiceType = "web-apps" | "ai-tools" | "marketing" | "ecommerce";

interface PainPoint {
  problem: string;
  solution: string;
}

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Stat {
  value: string;
  label: string;
  trend?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  service: ServiceType;
  eyebrow: string;
  headline: string;
  subheadline: string;
  painPoints: PainPoint[];
  capabilities: Capability[];
  processSteps: ProcessStep[];
  stats: Stat[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaSubheadline: string;
}

// ============================================================================
// BRAND COLORS
// ============================================================================

const brand = {
  primary: "#726AFF",
  primarySoft: "#8B5CF6",
  lavender: "#C4B5FD",
  lavenderLight: "#DDD6FE",
  purpleBg: "#F5F3FF",
  dark: "#0F1226",
  darkSoft: "#1A1D35",
};

const serviceColors: Record<ServiceType, { accent: string; glow: string }> = {
  "web-apps": { accent: "#726AFF", glow: "rgba(114, 106, 255, 0.4)" },
  "ai-tools": { accent: "#8B5CF6", glow: "rgba(139, 92, 246, 0.4)" },
  "marketing": { accent: "#10B981", glow: "rgba(16, 185, 129, 0.4)" },
  "ecommerce": { accent: "#F59E0B", glow: "rgba(245, 158, 11, 0.4)" },
};

const serviceIcons: Record<ServiceType, LucideIcon> = {
  "web-apps": Code2,
  "ai-tools": Sparkles,
  "marketing": TrendingUp,
  "ecommerce": ShoppingCart,
};

// ============================================================================
// HERO VISUAL MOCKUPS
// ============================================================================

function WebAppsMockup() {
  return (
    <div className="relative w-full max-w-[500px]">
      {/* Browser frame */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
        style={{ boxShadow: `0 40px 80px -20px ${serviceColors["web-apps"].glow}` }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white/10 rounded-md px-3 py-1 text-[10px] text-white/50 font-mono">
              app.yourbusiness.com/dashboard
            </div>
          </div>
        </div>

        {/* App interface */}
        <div className="flex h-[280px]">
          {/* Sidebar */}
          <div className="w-[120px] bg-white/5 border-r border-white/10 py-4 px-2">
            {["Dashboard", "Customers", "Orders", "Analytics", "Settings"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`px-3 py-2 rounded-lg text-[10px] mb-1 ${
                  i === 0 ? "bg-[#726AFF]/30 text-white" : "text-white/50"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { value: "2,847", label: "Active Users", color: "#726AFF" },
                { value: "$48.2K", label: "Revenue", color: "#10B981" },
                { value: "98.5%", label: "Uptime", color: "#8B5CF6" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <div className="text-lg font-bold text-white" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-white/5 rounded-lg p-3 border border-white/10 h-[140px]"
            >
              <div className="text-[9px] text-white/40 mb-2">Revenue Trend</div>
              <svg viewBox="0 0 200 80" className="w-full h-[90px]">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#726AFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#726AFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 0 60 Q 30 55, 50 45 T 100 35 T 150 20 T 200 10"
                  fill="none"
                  stroke="#726AFF"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <path
                  d="M 0 60 Q 30 55, 50 45 T 100 35 T 150 20 T 200 10 L 200 80 L 0 80 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -right-4 top-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 w-[160px]"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-[10px] font-semibold text-gray-800">New Order</span>
        </div>
        <div className="text-[9px] text-gray-500">Invoice #4829 - $2,400</div>
      </motion.div>
    </div>
  );
}

function AIToolsMockup() {
  return (
    <div className="relative w-full max-w-[450px] h-[350px]">
      {/* Central brain node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
            boxShadow: `0 0 60px ${serviceColors["ai-tools"].glow}, 0 0 120px ${serviceColors["ai-tools"].glow}`,
          }}
        >
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      {/* Orbiting nodes */}
      {[
        { angle: 0, label: "NLP", delay: 0.5 },
        { angle: 60, label: "Vision", delay: 0.6 },
        { angle: 120, label: "Analysis", delay: 0.7 },
        { angle: 180, label: "Predict", delay: 0.8 },
        { angle: 240, label: "Learn", delay: 0.9 },
        { angle: 300, label: "Generate", delay: 1.0 },
      ].map((node) => {
        const radius = 130;
        const x = Math.cos((node.angle * Math.PI) / 180) * radius;
        const y = Math.sin((node.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={node.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            {/* Connection line */}
            <svg
              className="absolute"
              style={{
                width: radius,
                height: 2,
                left: x > 0 ? -radius : 0,
                top: "50%",
                transform: `rotate(${node.angle}deg)`,
                transformOrigin: x > 0 ? "right center" : "left center",
              }}
            >
              <motion.line
                x1="0"
                y1="1"
                x2={radius}
                y2="1"
                stroke={brand.lavender}
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: node.delay + 0.2 }}
              />
            </svg>

            {/* Node */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <span className="text-[10px] font-medium text-white/80">{node.label}</span>
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                className="absolute inset-0 rounded-xl border border-purple-400/50"
              />
            </div>
          </motion.div>
        );
      })}

      {/* Data streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function MarketingMockup() {
  return (
    <div className="relative w-full max-w-[480px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden"
        style={{ boxShadow: `0 40px 80px -20px ${serviceColors.marketing.glow}` }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
          <span className="text-xs font-medium text-white/80">Marketing Analytics</span>
          <div className="flex gap-2">
            <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[9px]">Live</div>
          </div>
        </div>

        <div className="p-5">
          {/* Metrics row */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { value: "12.4K", label: "Visitors", trend: "+24%", color: "#10B981" },
              { value: "847", label: "Leads", trend: "+18%", color: "#726AFF" },
              { value: "3.2%", label: "Conv Rate", trend: "+0.4%", color: "#F59E0B" },
              { value: "$8.2K", label: "Revenue", trend: "+32%", color: "#8B5CF6" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-xl font-bold" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-[8px] text-white/40 mb-0.5">{metric.label}</div>
                <div className="text-[9px] text-green-400">{metric.trend}</div>
              </motion.div>
            ))}
          </div>

          {/* Traffic chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/50">Traffic Sources</span>
              <span className="text-[9px] text-green-400">+47% this month</span>
            </div>
            <div className="flex items-end gap-2 h-20">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: i >= 9 ? "#10B981" : `rgba(16, 185, 129, ${0.2 + (i / 12) * 0.3})`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Channel breakdown */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { channel: "Organic", value: "58%", color: "#10B981" },
              { channel: "Paid", value: "28%", color: "#726AFF" },
              { channel: "Social", value: "14%", color: "#F59E0B" },
            ].map((ch) => (
              <div key={ch.channel} className="bg-white/5 rounded-lg p-2 border border-white/10">
                <div className="text-lg font-bold" style={{ color: ch.color }}>{ch.value}</div>
                <div className="text-[8px] text-white/40">{ch.channel}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating SEO card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute -left-6 bottom-10 bg-white rounded-xl p-3 shadow-xl w-[140px]"
      >
        <div className="text-[9px] text-gray-500 mb-1">Google Ranking</div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-green-600">#1</span>
          <span className="text-[9px] text-gray-400">for 12 keywords</span>
        </div>
      </motion.div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="relative w-full max-w-[480px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden"
        style={{ boxShadow: `0 40px 80px -20px ${serviceColors.ecommerce.glow}` }}
      >
        {/* Store header */}
        <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
          <span className="text-xs font-semibold text-white">Your Store</span>
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="w-4 h-4 text-white/60" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full text-[7px] text-white flex items-center justify-center">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Product grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { name: "Premium Pack", price: "$299", color: "#726AFF" },
              { name: "Starter Kit", price: "$149", color: "#F59E0B" },
              { name: "Pro Bundle", price: "$499", color: "#10B981" },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 rounded-xl p-3 border border-white/10"
              >
                <div
                  className="aspect-square rounded-lg mb-2 flex items-center justify-center"
                  style={{ background: `${product.color}20` }}
                >
                  <div
                    className="w-8 h-8 rounded"
                    style={{ background: product.color }}
                  />
                </div>
                <div className="text-[9px] text-white/70 truncate">{product.name}</div>
                <div className="text-xs font-bold text-white">{product.price}</div>
              </motion.div>
            ))}
          </div>

          {/* Checkout summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/50">Order Summary</span>
              <span className="text-xs font-bold text-amber-400">$947.00</span>
            </div>

            {/* Checkout steps */}
            <div className="flex items-center justify-between mb-3">
              {["Cart", "Info", "Pay", "Done"].map((step, i) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] ${
                      i <= 2 ? "bg-amber-500 text-white" : "bg-white/10 text-white/40"
                    }`}
                  >
                    {i < 2 ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  {i < 3 && (
                    <div className={`w-8 h-0.5 ${i < 2 ? "bg-amber-500" : "bg-white/10"}`} />
                  )}
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-2 bg-amber-500 text-white text-xs font-semibold rounded-lg"
            >
              Complete Purchase
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Sale notification */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -right-4 top-16 bg-white rounded-xl p-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-gray-800">New Sale!</div>
            <div className="text-[9px] text-gray-500">$299 · Just now</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Mockup selector
function HeroMockup({ service }: { service: ServiceType }) {
  switch (service) {
    case "web-apps":
      return <WebAppsMockup />;
    case "ai-tools":
      return <AIToolsMockup />;
    case "marketing":
      return <MarketingMockup />;
    case "ecommerce":
      return <EcommerceMockup />;
  }
}

// ============================================================================
// HERO SECTION
// ============================================================================

function ServiceHero({
  service,
  eyebrow,
  headline,
  subheadline,
}: {
  service: ServiceType;
  eyebrow: string;
  headline: string;
  subheadline: string;
}) {
  const ServiceIcon = serviceIcons[service];
  const colors = serviceColors[service];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F1226]">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div
          className="absolute top-0 right-0 w-[60%] h-full opacity-30"
          style={{
            background: `radial-gradient(ellipse at 70% 30%, ${colors.glow} 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[60%] opacity-20"
          style={{
            background: `radial-gradient(ellipse at 30% 70%, ${brand.primarySoft}40 0%, transparent 50%)`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${colors.accent}30` }}
              >
                <ServiceIcon className="w-5 h-5" style={{ color: colors.accent }} />
              </div>
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: colors.accent }}
              >
                {eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              {subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/start"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${brand.primarySoft} 100%)`,
                  boxShadow: `0 10px 40px -10px ${colors.glow}`,
                }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-all"
              >
                See Examples
              </Link>
            </motion.div>
          </div>

          {/* Right: Mockup */}
          <div className="hidden lg:flex justify-center">
            <HeroMockup service={service} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// PAIN POINTS SECTION
// ============================================================================

function PainPointsSection({
  painPoints,
  service,
}: {
  painPoints: PainPoint[];
  service: ServiceType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = serviceColors[service];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            Sound Familiar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the problems we solve every day for businesses like yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.problem}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Problem state */}
                <div className="p-6 border-b border-gray-100 group-hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-red-400 mb-1 block">
                        Before
                      </span>
                      <p className="text-gray-700 font-medium">{point.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Solution state */}
                <div
                  className="p-6 transition-colors"
                  style={{ background: `${colors.accent}08` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${colors.accent}20` }}
                    >
                      <Check className="w-5 h-5" style={{ color: colors.accent }} />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-semibold tracking-wider uppercase mb-1 block"
                        style={{ color: colors.accent }}
                      >
                        After Aeopic
                      </span>
                      <p className="text-gray-700">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CAPABILITIES SECTION
// ============================================================================

function CapabilitiesSection({
  capabilities,
  service,
}: {
  capabilities: Capability[];
  service: ServiceType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = serviceColors[service];

  return (
    <section ref={ref} className="py-20 lg:py-32" style={{ background: brand.purpleBg }}>
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            Built for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every platform we build includes these core capabilities, tailored to your workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const color = cap.color || colors.accent;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2" style={{ color: brand.dark }}>
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>

                  {/* Hover arrow */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }}>
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROCESS SECTION
// ============================================================================

function ProcessSection({
  processSteps,
  service,
}: {
  processSteps: ProcessStep[];
  service: ServiceType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = serviceColors[service];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            How We Build It
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven process that delivers results in 8-12 weeks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200">
            <motion.div
              className="h-full"
              style={{ background: colors.accent }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mx-auto mb-5"
                  >
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white border-2 shadow-lg mx-auto"
                      style={{ borderColor: colors.accent }}
                    >
                      <Icon className="w-10 h-10" style={{ color: colors.accent }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center"
                      style={{ background: colors.accent }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2" style={{ color: brand.dark }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// RESULTS SECTION
// ============================================================================

function ResultsSection({
  stats,
  service,
}: {
  stats: Stat[];
  service: ServiceType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = serviceColors[service];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#0F1226] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: colors.accent }}
      />

      <div className="container-site relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.lavender }}>
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Achieve
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Average results from businesses using our platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: colors.accent }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/80 text-sm mb-1">{stat.label}</div>
              {stat.trend && (
                <div className="text-green-400 text-xs">{stat.trend}</div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          Based on client-reported metrics, 12 months post-launch
        </motion.p>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN TEMPLATE COMPONENT
// ============================================================================

export function ServicePageTemplate({
  service,
  eyebrow,
  headline,
  subheadline,
  painPoints,
  capabilities,
  processSteps,
  stats,
  faqs,
  ctaHeadline,
  ctaSubheadline,
}: ServicePageTemplateProps) {
  return (
    <main>
      <ServiceHero
        service={service}
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
      />
      <PainPointsSection painPoints={painPoints} service={service} />
      <CapabilitiesSection capabilities={capabilities} service={service} />
      <ProcessSection processSteps={processSteps} service={service} />
      <ResultsSection stats={stats} service={service} />
      <FAQSection items={faqs} />
      <RelatedServices currentService={service} />
      <CTASection
        headline={ctaHeadline}
        subheadline={ctaSubheadline}
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </main>
  );
}

export default ServicePageTemplate;

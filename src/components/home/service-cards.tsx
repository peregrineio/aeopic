"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Code2, Sparkles, TrendingUp, ShoppingCart, ArrowUpRight } from "lucide-react";

// Web Apps - Growth line chart
function WebAppsVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <svg viewBox="0 0 340 80" className="w-full h-auto">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(114,106,255,0.35)" />
            <stop offset="100%" stopColor="rgba(114,106,255,0.05)" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d="M 20 65 Q 60 60, 100 55 T 180 40 T 260 25 T 320 15 L 320 70 L 20 70 Z"
          fill="url(#lineGradient)"
        />
        {/* Line */}
        <polyline
          points="20,65 60,58 100,52 140,45 180,38 220,30 260,22 300,18 320,15"
          fill="none"
          stroke="#726AFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* End dot */}
        <circle cx="320" cy="15" r="4" fill="#726AFF" />
        {/* Label */}
        <text x="295" y="12" fill="#726AFF" fontSize="11" fontWeight="600">
          ↑ 42%
        </text>
      </svg>
    </div>
  );
}

// AI Tools - Chat conversation
function AIToolsVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100 space-y-2">
      {/* User message - left */}
      <div className="flex justify-start">
        <div className="bg-white rounded-lg px-3 py-2 max-w-[85%] border border-gray-100">
          <p className="text-[0.7rem] text-gray-700">
            How do I reschedule my appointment?
          </p>
        </div>
      </div>
      {/* Bot message - right */}
      <div className="flex justify-end">
        <div className="bg-[#726AFF]/10 border border-[#726AFF]/20 rounded-lg px-3 py-2 max-w-[85%]">
          <p className="text-[0.7rem] text-[#726AFF]">
            I found your booking for Mar 31. Move it to Apr 2?
          </p>
        </div>
      </div>
      {/* User confirmation - left */}
      <div className="flex justify-start">
        <div className="bg-white rounded-lg px-3 py-2 border border-gray-100">
          <p className="text-[0.65rem] text-gray-500">Yes please!</p>
        </div>
      </div>
    </div>
  );
}

// Marketing - Progress bars
function MarketingVisual() {
  const channels = [
    { name: "Organic Search", value: 82, color: "#726AFF" },
    { name: "Google Business", value: 68, color: "#a78bfa" },
    { name: "Social Media", value: 54, color: "#c4b5fd" },
    { name: "Direct", value: 38, color: "#6d3fd4" },
  ];

  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100 space-y-2.5">
      {channels.map((channel) => (
        <div key={channel.name} className="flex items-center gap-2">
          <span className="text-[0.65rem] text-gray-500 w-[110px] shrink-0">
            {channel.name}
          </span>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${channel.value}%`,
                backgroundColor: channel.color,
              }}
            />
          </div>
          <span className="text-[0.65rem] text-gray-500 w-8 text-right">
            {channel.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

// eCommerce - Donut chart
function EcommerceVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <svg viewBox="0 0 340 80" className="w-full h-auto">
        {/* Donut chart */}
        <g transform="translate(50, 40)">
          {/* Background circle */}
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Products 40% */}
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#726AFF"
            strokeWidth="8"
            strokeDasharray="70.4 175.9"
            strokeDashoffset="44"
            transform="rotate(-90)"
          />
          {/* Subscriptions 29% */}
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="8"
            strokeDasharray="51 175.9"
            strokeDashoffset="-26.4"
            transform="rotate(-90)"
          />
          {/* Services 19% */}
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="8"
            strokeDasharray="33.4 175.9"
            strokeDashoffset="-77.4"
            transform="rotate(-90)"
          />
          {/* Other 12% */}
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="8"
            strokeDasharray="21.1 175.9"
            strokeDashoffset="-110.8"
            transform="rotate(-90)"
          />
          {/* Center text */}
          <text
            x="0"
            y="-3"
            textAnchor="middle"
            fill="#1A1A1A"
            fontSize="10"
            fontWeight="bold"
          >
            $48K
          </text>
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fill="#6b7280"
            fontSize="7"
          >
            Monthly
          </text>
        </g>

        {/* Legend */}
        <g transform="translate(115, 15)">
          <rect x="0" y="0" width="8" height="8" rx="1" fill="#726AFF" />
          <text x="14" y="7" fill="#6b7280" fontSize="8">
            Products 40%
          </text>

          <rect x="0" y="16" width="8" height="8" rx="1" fill="#a78bfa" />
          <text x="14" y="23" fill="#6b7280" fontSize="8">
            Subscriptions 29%
          </text>

          <rect x="0" y="32" width="8" height="8" rx="1" fill="#c4b5fd" />
          <text x="14" y="39" fill="#6b7280" fontSize="8">
            Services 19%
          </text>

          <rect x="0" y="48" width="8" height="8" rx="1" fill="#d1d5db" />
          <text x="14" y="55" fill="#6b7280" fontSize="8">
            Other 12%
          </text>
        </g>
      </svg>
    </div>
  );
}

const services = [
  {
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Platforms built for your exact workflow. Not a template with your logo — real code, real ownership.",
    href: "/services/web-apps",
    accent: "from-primary to-primary/60",
    Visual: WebAppsVisual,
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description:
      "Smart systems that actually work. Ticket automation, knowledge bases, customer support that scales.",
    href: "/services/ai-tools",
    accent: "from-[hsl(260_80%_60%)] to-primary/60",
    Visual: AIToolsVisual,
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description:
      "Get found by customers who need you. Social media, SEO, Google Business — all connected.",
    href: "/services/marketing",
    accent: "from-primary/80 to-[hsl(280_70%_50%)]",
    Visual: MarketingVisual,
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Sell products, subscriptions, services. Stores built for conversion, not monthly platform fees.",
    href: "/services/ecommerce",
    accent: "from-[hsl(280_70%_50%)] to-primary",
    Visual: EcommerceVisual,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServiceCards() {
  return (
    <section className="section-padding mesh-gradient-1 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block eyebrow text-primary mb-4"
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5"
          >
            Everything You Need
            <br className="hidden sm:block" />
            <span className="text-gradient">to Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            From custom platforms to AI tools to marketing — one team, one vision, everything connected.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block h-full"
              >
                <div className="premium-card p-8 lg:p-10 h-full relative overflow-hidden">
                  {/* Gradient accent line at top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title with arrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl lg:text-2xl font-heading">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Inline Visual */}
                  <service.Visual />

                  {/* Hover indicator */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <span className="text-sm font-medium text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                      Learn more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

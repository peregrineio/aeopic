"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

// ============================================================================
// Showcase visuals — rendered inside the dark "product window"
// ============================================================================

function WebAppsShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
          Revenue dashboard
        </p>
        <span className="font-mono text-xs text-emerald-400">↑ 42% this quarter</span>
      </div>
      <svg viewBox="0 0 340 110" className="w-full h-auto">
        <defs>
          <linearGradient id="homeLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(114,106,255,0.4)" />
            <stop offset="100%" stopColor="rgba(114,106,255,0)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" y1={25 * i + 10} x2="340" y2={25 * i + 10} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        <motion.path
          d="M 10 95 Q 50 88, 90 78 T 170 58 T 250 32 T 330 18 L 330 105 L 10 105 Z"
          fill="url(#homeLineGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.polyline
          points="10,95 50,86 90,78 130,68 170,58 210,45 250,32 290,24 330,18"
          fill="none"
          stroke={brand.primary}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.circle
          cx="330" cy="18" r="4" fill={brand.primary}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }}
        />
      </svg>
      <div className="grid grid-cols-3 gap-3">
        {[
          { k: "Bookings", v: "312" },
          { k: "Invoices", v: "$48.2k" },
          { k: "Uptime", v: "99.99%" },
        ].map((cell) => (
          <div key={cell.k} className="border border-white/10 rounded-lg px-3 py-2.5">
            <p className="text-white font-bold text-sm">{cell.v}</p>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35">{cell.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIToolsShowcase() {
  const lines = [
    { role: "user", text: "How do I reschedule my appointment?" },
    { role: "bot", text: "I found your booking for Mar 31. Move it to Apr 2 at 10am?" },
    { role: "user", text: "Yes please!" },
    { role: "bot", text: "Done — confirmation sent. Anything else?" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
          Support assistant
        </p>
        <span className="font-mono text-xs text-white/40">resolves without staff</span>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.35 }}
            className={`flex ${line.role === "bot" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-xl px-3.5 py-2.5 max-w-[80%] text-xs leading-relaxed ${
                line.role === "bot"
                  ? "bg-[#726AFF] text-white rounded-br-sm"
                  : "bg-white/10 text-white/80 rounded-bl-sm"
              }`}
            >
              {line.text}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-400"
      >
        ✓ ticket resolved · 0 human minutes
      </motion.p>
    </div>
  );
}

function MarketingShowcase() {
  const channels = [
    { name: "Organic search", value: 82 },
    { name: "Google Business", value: 68 },
    { name: "Social media", value: 54 },
    { name: "Direct", value: 38 },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
          Acquisition channels
        </p>
        <span className="font-mono text-xs text-emerald-400">12.4k visitors / mo</span>
      </div>
      <div className="space-y-3.5">
        {channels.map((channel, i) => (
          <div key={channel.name}>
            <div className="flex justify-between mb-1.5">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/55">
                {channel.name}
              </span>
              <span className="font-mono text-[11px] text-white/40">{channel.value}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: brand.primary, opacity: 1 - i * 0.18 }}
                initial={{ width: 0 }}
                animate={{ width: `${channel.value}%` }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 pt-1">
        all channels, one strategy
      </p>
    </div>
  );
}

function AIAgentsShowcase() {
  const agents = [
    { name: "Lead Qualifier", status: "active", handled: "847" },
    { name: "Support Agent", status: "active", handled: "2.1k" },
    { name: "Scheduler", status: "active", handled: "394" },
    { name: "Voice Handler", status: "idle", handled: "156" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
          Agent fleet
        </p>
        <span className="font-mono text-xs text-cyan-400">4 active</span>
      </div>
      <div className="border-t border-white/10">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="flex items-center gap-3 py-2.5 border-b border-white/10"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${agent.status === "active" ? "bg-cyan-400" : "bg-white/20"}`} />
            <span className="font-mono text-[11px] tracking-[0.12em] text-white/55 flex-1">
              {agent.name}
            </span>
            <span className="font-mono text-xs text-white font-semibold">{agent.handled}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="font-mono text-[10px] tracking-[0.15em] uppercase text-cyan-400"
      >
        ✓ autonomous · human-in-the-loop
      </motion.p>
    </div>
  );
}

// ============================================================================
// Service data
// ============================================================================

const services = [
  {
    n: "01",
    title: "Custom Web Apps",
    slug: "app.yourbusiness.com",
    description:
      "Platforms built for your exact workflow. Not a template with your logo — real code, real ownership.",
    href: "/services/web-apps",
    Showcase: WebAppsShowcase,
  },
  {
    n: "02",
    title: "AI Operating Systems",
    slug: "assistant.yourbusiness.com",
    description:
      "Smart systems that actually work. Ticket automation, knowledge bases, customer support that scales.",
    href: "/services/ai-tools",
    Showcase: AIToolsShowcase,
  },
  {
    n: "03",
    title: "Marketing & SEO",
    slug: "analytics.yourbusiness.com",
    description:
      "Get found by customers who need you. Social media, SEO, Google Business — all connected.",
    href: "/services/marketing",
    Showcase: MarketingShowcase,
  },
  {
    n: "04",
    title: "Custom AI Agents",
    slug: "agents.yourbusiness.com",
    description:
      "Autonomous agents that qualify leads, handle calls, and run operations — trained on your data.",
    href: "/services/ai-agents",
    Showcase: AIAgentsShowcase,
  },
];

// ============================================================================
// Section
// ============================================================================

export function ServiceCards() {
  const [active, setActive] = useState(0);
  const ActiveShowcase = services[active].Showcase;

  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="container-site">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-14 md:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            01
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
            What we build
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1]"
            style={{ color: brand.dark }}
          >
            Everything you need
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${brand.primary}` }}>
              to grow online.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 lg:col-start-9 text-gray-600 leading-relaxed self-end"
          >
            From custom platforms to AI tools to marketing — one team, one
            vision, everything connected.
          </motion.p>
        </div>

        {/* Split: index ↔ live panel */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Service index */}
          <div className="lg:col-span-5 border-t border-gray-200">
            {services.map((service, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={service.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="w-full text-left py-6 md:py-7 group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className="font-mono text-sm transition-colors duration-300"
                        style={{ color: isActive ? brand.primary : "#9CA3AF" }}
                      >
                        /{service.n}
                      </span>
                      <h3
                        className="font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 flex-1"
                        style={{ color: isActive ? brand.primary : brand.dark }}
                      >
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className="w-5 h-5 transition-all duration-300"
                        style={{
                          color: isActive ? brand.primary : "#D1D5DB",
                          transform: isActive ? "rotate(45deg)" : "none",
                        }}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 pl-12 text-gray-600 leading-relaxed pr-8">
                            {service.description}
                          </p>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 mt-3 ml-12 font-mono text-[11px] tracking-[0.2em] uppercase hover:gap-3 transition-all"
                            style={{ color: brand.primary }}
                          >
                            Explore <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {/* Mobile: showcase inline under the active row */}
                          <div className="lg:hidden mt-6">
                            <ShowcaseWindow slug={service.slug}>
                              <service.Showcase />
                            </ShowcaseWindow>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}

            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-8 font-mono text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#726AFF] transition-colors border-b border-gray-300 hover:border-[#726AFF] pb-1"
            >
              All services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sticky live panel (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28"
          >
            <ShowcaseWindow slug={services[active].slug}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveShowcase />
                </motion.div>
              </AnimatePresence>
            </ShowcaseWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Dark product window with browser chrome — the showcase frame. */
function ShowcaseWindow({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_40px_90px_-50px_rgba(15,18,38,0.55)]"
      style={{ background: brand.dark }}
    >
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1 font-mono text-[11px] text-white/40 text-center max-w-xs mx-auto truncate">
            {slug}
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 min-h-[340px]">{children}</div>
    </div>
  );
}

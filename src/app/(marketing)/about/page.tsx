"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Brand
const brand = {
  primary: "#726AFF",
  dark: "#0F1226",
};

// ============================================================================
// SHARED — section scaffolding (dossier style: number + rule + mono label)
// ============================================================================

function SectionRule({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-14 md:mb-20">
      <span
        className="font-mono text-xs tracking-[0.3em] uppercase"
        style={{ color: brand.primary }}
      >
        {number}
      </span>
      <span
        className={`font-mono text-xs tracking-[0.3em] uppercase ${
          dark ? "text-white/40" : "text-gray-400"
        }`}
      >
        {label}
      </span>
      <div className={`flex-1 h-px ${dark ? "bg-white/10" : "bg-gray-200"}`} />
    </div>
  );
}

// ============================================================================
// 01 — HERO: file header
// ============================================================================

function AboutHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: brand.dark }}>
      {/* Grid-paper texture (matches site footer language) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Rotated square accent */}
      <div
        className="absolute -right-40 -top-40 w-[480px] h-[480px] border border-white/[0.06] pointer-events-none"
        style={{ transform: "rotate(45deg)" }}
      />
      <div
        className="absolute -right-24 -top-24 w-[480px] h-[480px] border border-white/[0.04] pointer-events-none"
        style={{ transform: "rotate(45deg)" }}
      />
      {/* Purple bloom */}
      <div
        className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: brand.primary }}
      />

      {/* Vertical coordinates — right edge */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="font-mono text-[11px] tracking-[0.4em] text-white/25 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          29.7604° N — 95.3698° W · Houston, Texas
        </span>
      </div>

      <div className="container-site relative z-10 pt-40 pb-24 md:pt-48 md:pb-32">
        {/* File header line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12 font-mono text-[11px] tracking-[0.25em] uppercase"
        >
          <span style={{ color: brand.primary }}>FILE / ABOUT</span>
          <span className="text-white/30">—</span>
          <span className="text-white/40">Aeopic LLC</span>
          <span className="text-white/30">—</span>
          <span className="text-white/40">Custom Software Studio</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-heading font-bold tracking-tight leading-[0.95] mb-10">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block text-5xl md:text-7xl lg:text-8xl text-white"
          >
            The team
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-5xl md:text-7xl lg:text-8xl"
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${brand.primary}`,
            }}
          >
            behind the code.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl text-lg md:text-xl text-white/70 leading-relaxed mb-20"
        >
          A small, focused team of engineers and strategists building custom
          software for businesses that are ready to grow. We&apos;re not an
          agency — we&apos;re your technical partners.
        </motion.p>

        {/* Stats — ruled ledger row, not pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/15"
        >
          {[
            { value: "10+", label: "Years combined experience" },
            { value: "100%", label: "Code ownership, upon completion" },
            { value: "HTX", label: "Houston based & proud" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-6 pr-8 border-b border-white/15 sm:border-b-0 sm:border-r last:border-r-0 sm:px-8 first:pl-0"
            >
              <p
                className="font-heading text-3xl md:text-4xl font-bold mb-1"
                style={{ color: brand.primary }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// 02 — STORY: git log
// ============================================================================

const commits = [
  {
    hash: "a3f08c1",
    tag: "the-problem",
    title: "We saw a gap",
    body: "Expensive agencies charging six figures, or limited SaaS tools forcing you to adapt. There had to be a better way.",
  },
  {
    hash: "7d21e9b",
    tag: "the-idea",
    title: "Friends with a mission",
    body: "Engineers, strategists, and designers came together with one goal: make custom technology accessible to all businesses.",
  },
  {
    hash: "f96b442",
    tag: "the-solution",
    title: "Aeopic was born",
    body: "A new kind of software partner — one that builds with you, not just for you. Real code, real ownership, real results.",
  },
];

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container-site">
        <SectionRule number="01" label="Origin — why we started" />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: editorial statement */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
              style={{ color: brand.dark }}
            >
              Every company has a commit history.
              <span style={{ color: brand.primary }}> This is ours.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-gray-600 leading-relaxed max-w-md"
            >
              Aeopic didn&apos;t start as a business plan. It started as a
              frustration with how local businesses get treated by the software
              industry.
            </motion.p>
          </div>

          {/* Right: terminal log */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_30px_80px_-40px_rgba(15,18,38,0.4)]"
              style={{ background: brand.dark }}
            >
              {/* Terminal chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-[11px] text-white/40">
                  aeopic — git log --reverse
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {commits.map((commit, i) => (
                  <motion.div
                    key={commit.hash}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.25 }}
                    className="relative pl-6"
                  >
                    {/* Commit dot + line */}
                    <span
                      className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ background: brand.primary }}
                    />
                    {i < commits.length - 1 && (
                      <span className="absolute left-[4.5px] top-5 bottom-[-32px] w-px bg-white/15" />
                    )}

                    <p className="font-mono text-xs text-white/40 mb-1.5">
                      <span style={{ color: brand.primary }}>commit {commit.hash}</span>
                      {"  "}
                      <span className="text-white/30">(tag: {commit.tag})</span>
                    </p>
                    <p className="font-heading text-lg font-bold text-white mb-1.5">
                      {commit.title}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed max-w-lg">
                      {commit.body}
                    </p>
                  </motion.div>
                ))}

                {/* Cursor line */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.4 }}
                  className="font-mono text-xs text-white/40 pl-6"
                >
                  $ <span className="text-white/70">next commit: yours</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="inline-block w-2 h-3.5 ml-1 align-middle"
                    style={{ background: brand.primary }}
                  />
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 03 — CAPABILITIES: editorial index (full-row hover inversion)
// ============================================================================

const capabilities = [
  {
    n: "01",
    title: "Engineering",
    description: "Full-stack developers building production-grade platforms from the ground up.",
  },
  {
    n: "02",
    title: "AI & Automation",
    description: "Integrating AI into real business workflows — not just chatbots.",
  },
  {
    n: "03",
    title: "Design & UX",
    description: "Interfaces built for humans first, with obsessive attention to usability.",
  },
  {
    n: "04",
    title: "Strategy",
    description: "We help you figure out what to build and why it matters.",
  },
  {
    n: "05",
    title: "Marketing",
    description: "Data-driven campaigns connecting your business with the right customers.",
  },
  {
    n: "06",
    title: "Support",
    description: "We stick around after launch. Your success is our success.",
  },
];

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#FAFAFA]">
      <div className="container-site">
        <SectionRule number="02" label="Index — what we bring" />

        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1]"
            style={{ color: brand.dark }}
          >
            Full-stack
            <br />
            everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 lg:col-start-9 text-gray-600 leading-relaxed self-end"
          >
            Engineers, designers, and strategists — six disciplines, one team,
            working together to turn your ideas into reality.
          </motion.p>
        </div>

        {/* The index */}
        <div className="border-t border-gray-200">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.n}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="group relative border-b border-gray-200 overflow-hidden cursor-default"
            >
              {/* Inversion sweep */}
              <div
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ background: brand.dark }}
              />

              <div className="relative grid grid-cols-12 items-center gap-4 py-7 md:py-9">
                <span
                  className="col-span-2 md:col-span-1 font-mono text-sm transition-colors duration-500"
                  style={{ color: brand.primary }}
                >
                  /{cap.n}
                </span>
                <h3
                  className="col-span-10 md:col-span-5 font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#0F1226] group-hover:text-white transition-colors duration-500"
                >
                  {cap.title}
                </h3>
                <p className="col-span-10 col-start-3 md:col-span-5 md:col-start-7 text-sm md:text-base text-gray-500 group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                  {cap.description}
                </p>
                <span className="hidden md:flex col-span-1 col-start-12 justify-end">
                  <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 04 — VALUES: typographic manifesto
// ============================================================================

const values = [
  { word: "Excellence", note: "We don't ship anything we wouldn't use ourselves" },
  { word: "Integrity", note: "Honest timelines, transparent pricing, no shortcuts" },
  { word: "Service", note: "We build for people, not just profit" },
  { word: "Craft", note: "We love what we do and it shows in the code" },
  { word: "Growth", note: "Always learning, always improving" },
];

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: brand.dark }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10">
        <SectionRule number="03" label="Manifesto — what we stand for" dark />

        <div>
          {values.map((value, i) => (
            <motion.div
              key={value.word}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 py-4 md:py-5 border-b border-white/[0.07] last:border-b-0"
            >
              <h3
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none transition-all duration-500 select-none"
                style={
                  i % 2 === 0
                    ? { color: "white" }
                    : { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.45)" }
                }
              >
                <span
                  className="group-hover:text-transparent transition-colors duration-500"
                  style={{ transition: "color .5s" }}
                >
                  <span className="group-hover:[-webkit-text-stroke:0px] group-hover:[color:#726AFF] transition-all duration-500">
                    {value.word}
                  </span>
                </span>
              </h3>
              <p className="font-mono text-[11px] md:text-xs tracking-[0.18em] uppercase text-white/35 group-hover:text-white/70 transition-colors duration-500 md:ml-auto md:text-right max-w-xs">
                {value.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 05 — STACK: spec sheet with dotted leaders
// ============================================================================

const stack = [
  { category: "Frontend", value: "Next.js / React" },
  { category: "Language", value: "TypeScript" },
  { category: "Styling", value: "Tailwind CSS" },
  { category: "Backend", value: "Supabase" },
  { category: "Database", value: "PostgreSQL" },
  { category: "Hosting", value: "Vercel" },
  { category: "AI", value: "Anthropic / OpenAI" },
  { category: "Payments", value: "Stripe" },
];

function StackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container-site">
        <SectionRule number="04" label="Specification — our stack" />

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ color: brand.dark }}
            >
              Modern, proven
              <br />
              technology.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-600 leading-relaxed max-w-md"
            >
              The same tools trusted by industry leaders — available to
              businesses of any size. No proprietary frameworks, no lock-in:
              any developer can maintain what we build.
            </motion.p>
          </div>

          {/* Spec table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 self-center"
          >
            <div className="font-mono text-sm">
              {stack.map((row, i) => (
                <motion.div
                  key={row.category}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-baseline gap-3 py-3 group"
                >
                  <span className="text-gray-400 uppercase tracking-[0.15em] text-xs whitespace-nowrap">
                    {row.category}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted border-gray-300 translate-y-[-3px] group-hover:border-[#726AFF] transition-colors"
                    aria-hidden
                  />
                  <span className="font-semibold whitespace-nowrap" style={{ color: brand.dark }}>
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 06 — HOUSTON: coordinates strip
// ============================================================================

function HoustonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#FAFAFA] relative overflow-hidden">
      {/* Orbit rings */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <svg width="560" height="560" viewBox="0 0 560 560" fill="none">
          <circle cx="280" cy="280" r="120" stroke={brand.primary} strokeOpacity="0.15" />
          <circle cx="280" cy="280" r="200" stroke={brand.primary} strokeOpacity="0.1" strokeDasharray="3 6" />
          <circle cx="280" cy="280" r="276" stroke={brand.primary} strokeOpacity="0.06" />
          {/* Orbiting dot */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "280px 280px" }}
          >
            <circle cx="280" cy="80" r="5" fill={brand.primary} />
          </motion.g>
          <circle cx="280" cy="280" r="7" fill={brand.primary} fillOpacity="0.6" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        <SectionRule number="05" label="Coordinates — Space City" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: brand.primary }}
        >
          29.7604° N / 95.3698° W
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1] mb-8 max-w-3xl"
          style={{ color: brand.dark }}
        >
          Houston proud,
          <br />
          <span
            style={{ color: "transparent", WebkitTextStroke: `2px ${brand.dark}` }}
          >
            globally minded.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed max-w-xl mb-12"
        >
          Based in Houston, Texas — home to NASA, the energy industry, and one
          of the most diverse business ecosystems in the country. We serve
          clients locally and remotely, bringing Space City ambition to every
          project.
        </motion.p>

        {/* Ruled facts row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 border-t border-b border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 max-w-2xl"
        >
          {["Houston, TX", "Remote-friendly", "Local & global clients"].map((fact) => (
            <span
              key={fact}
              className="font-mono text-xs tracking-[0.2em] uppercase text-gray-500 py-4 sm:px-8 first:pl-0"
            >
              {fact}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// 07 — CTA
// ============================================================================

function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ background: brand.dark }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: brand.primary }}
        >
          End of file — start of something
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1] mb-8"
        >
          Ready to work
          <br />
          <span style={{ color: brand.primary }}>together?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          We&apos;re always excited to meet businesses that are ready to build
          something great. Let&apos;s have a conversation about what
          you&apos;re working on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/start"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: brand.primary }}
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
          >
            See our work
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30"
        >
          Usually respond within 24 hours · Houston-based · Remote-friendly
        </motion.p>
      </div>
    </section>
  );
}

// ============================================================================
// PAGE
// ============================================================================

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <CapabilitiesSection />
      <ValuesSection />
      <StackSection />
      <HoustonSection />
      <AboutCTA />
    </main>
  );
}

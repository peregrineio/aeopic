"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

// ============================================================================
// HERO — the pipeline run
// ============================================================================

const pipelineStages = [
  { id: "discovery", label: "discovery", duration: "wk 1–2" },
  { id: "blueprint", label: "blueprint", duration: "wk 1–2" },
  { id: "build", label: "build", duration: "wk 4–8" },
  { id: "launch", label: "launch", duration: "ongoing" },
];

const LOOP_DURATION = 6;
const LOOP_PAUSE = 2;
const TOTAL = LOOP_DURATION + LOOP_PAUSE;

/** A pipeline node that lights up as the sweep passes its position. */
function PipelineNode({ index }: { index: number }) {
  const stage = pipelineStages[index];
  // Point in the loop (0..1 of LOOP_DURATION) when the sweep reaches this node
  const hit = (index / (pipelineStages.length - 1)) * (LOOP_DURATION / TOTAL);
  const after = Math.min(hit + 0.02, 1);

  return (
    <div className="flex flex-col items-center gap-3 relative z-10">
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        {/* Idle ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/15 bg-[#0F1226]" />
        {/* Lit state */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          style={{
            background: brand.primary,
            boxShadow: `0 0 30px ${brand.primary}80`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: TOTAL,
            times: [0, hit, after, 0.97, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Check className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
        </motion.div>
        {/* Idle index */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center">
          <motion.span
            className="font-mono text-sm text-white/50"
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{
              duration: TOTAL,
              times: [0, hit, after, 0.97, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>
      </div>
      <div className="text-center">
        <p className="font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/70">
          {stage.label}
        </p>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mt-0.5">
          {stage.duration}
        </p>
      </div>
    </div>
  );
}

function PipelineVisual() {
  return (
    <div className="relative">
      {/* Track */}
      <div className="absolute top-6 md:top-7 left-6 right-6 md:left-7 md:right-7 h-0.5 bg-white/10" />
      {/* Animated fill sweep */}
      <div className="absolute top-6 md:top-7 left-6 right-6 md:left-7 md:right-7 h-0.5 overflow-hidden">
        <motion.div
          className="h-full origin-left"
          style={{ background: brand.primary, boxShadow: `0 0 12px ${brand.primary}` }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: TOTAL,
            times: [0, LOOP_DURATION / TOTAL, 0.97, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="flex justify-between">
        {pipelineStages.map((stage, i) => (
          <PipelineNode key={stage.id} index={i} />
        ))}
      </div>

      {/* Run output */}
      <motion.p
        className="mt-8 font-mono text-[11px] tracking-[0.15em] text-emerald-400 text-center"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: TOTAL,
          times: [0, LOOP_DURATION / TOTAL - 0.02, LOOP_DURATION / TOTAL + 0.02, 0.97, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ✓ pipeline complete — platform live in 4–8 weeks
      </motion.p>
    </div>
  );
}

function ProcessHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: brand.dark }}>
      {/* Grid texture */}
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
      <div
        className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: brand.primary }}
      />
      <div
        className="absolute -right-48 -top-48 w-[480px] h-[480px] border border-white/[0.06] pointer-events-none"
        style={{ transform: "rotate(45deg)" }}
      />

      <div className="container-site relative z-10 pt-40 pb-20 md:pt-48 md:pb-28">
        {/* File header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12 font-mono text-[11px] tracking-[0.25em] uppercase"
        >
          <span style={{ color: brand.primary }}>PIPELINE / HOW WE WORK</span>
          <span className="text-white/30">—</span>
          <span className="text-white/40">4 stages</span>
          <span className="text-white/30">—</span>
          <span className="text-white/40">No surprises, no scope creep</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-heading font-bold tracking-tight leading-[0.95] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block text-5xl md:text-7xl lg:text-8xl text-white"
          >
            Idea in.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-5xl md:text-7xl lg:text-8xl"
            style={{ color: "transparent", WebkitTextStroke: `2px ${brand.primary}` }}
          >
            Launch out.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl text-lg md:text-xl text-white/70 leading-relaxed mb-16 md:mb-20"
        >
          A proven 4-phase process that turns your vision into a
          production-ready platform. No surprises, no scope creep — just
          steady progress toward launch.
        </motion.p>

        {/* The living pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10"
        >
          <div className="flex items-center justify-between mb-8">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35">
              aeopic — pipeline run
            </p>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </div>
          <PipelineVisual />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PHASE ARTIFACTS — terminal-styled stage outputs
// ============================================================================

function ArtifactWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_30px_70px_-40px_rgba(15,18,38,0.5)]"
      style={{ background: brand.dark }}
    >
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-[11px] text-white/40 ml-auto">{title}</span>
      </div>
      <div className="p-6 font-mono text-xs md:text-[13px] leading-relaxed">{children}</div>
    </div>
  );
}

function DiscoveryArtifact() {
  return (
    <ArtifactWindow title="discovery — kickoff notes">
      <p className="text-white/80">
        <span style={{ color: brand.primary }}>$</span> aeopic discover --client=you
      </p>
      <div className="mt-3 space-y-2 text-white/55">
        <p><span className="text-white/35">Q:</span> What eats the most hours every week?</p>
        <p className="pl-4 text-white/75">&ldquo;Chasing invoices and double-entering jobs.&rdquo;</p>
        <p><span className="text-white/35">Q:</span> Where do leads fall through?</p>
        <p className="pl-4 text-white/75">&ldquo;Voicemail. After hours. Every weekend.&rdquo;</p>
      </div>
      <p className="mt-4 text-emerald-400">✓ pain points mapped · goals set · metrics defined</p>
    </ArtifactWindow>
  );
}

function BlueprintArtifact() {
  return (
    <ArtifactWindow title="blueprint — spec.md">
      <div className="space-y-1.5 text-white/55">
        <p className="text-white/80">your-platform/</p>
        <p className="pl-4">├── <span style={{ color: brand.primary }}>dashboard</span> <span className="text-white/30">— jobs, revenue, schedule at a glance</span></p>
        <p className="pl-4">├── <span style={{ color: brand.primary }}>booking</span> <span className="text-white/30">— customers self-serve 24/7</span></p>
        <p className="pl-4">├── <span style={{ color: brand.primary }}>invoicing</span> <span className="text-white/30">— auto-send, auto-chase</span></p>
        <p className="pl-4">└── <span style={{ color: brand.primary }}>portal</span> <span className="text-white/30">— customers track everything</span></p>
      </div>
      <p className="mt-4 text-emerald-400">✓ approved by you before a line of code</p>
    </ArtifactWindow>
  );
}

function BuildArtifact() {
  const sprints = [
    { week: "wk 1", task: "core platform + auth", state: "✓" },
    { week: "wk 2", task: "booking flow — demo'd Friday", state: "✓" },
    { week: "wk 3", task: "your feedback: 'move the calendar' — done", state: "✓" },
    { week: "wk 4", task: "invoicing + payments", state: "●" },
  ];
  return (
    <ArtifactWindow title="build — sprint log">
      <div className="space-y-2">
        {sprints.map((sprint) => (
          <p key={sprint.week} className="text-white/55">
            <span className={sprint.state === "✓" ? "text-emerald-400" : "text-[#726AFF]"}>
              {sprint.state}
            </span>{" "}
            <span className="text-white/35 inline-block w-12">{sprint.week}</span>
            {sprint.task}
          </p>
        ))}
      </div>
      <p className="mt-4 text-white/80">
        <span style={{ color: brand.primary }}>$</span> demo every Friday · your feedback shapes the build
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="inline-block w-2 h-3.5 ml-1.5 align-middle"
          style={{ background: brand.primary }}
        />
      </p>
    </ArtifactWindow>
  );
}

function LaunchArtifact() {
  return (
    <ArtifactWindow title="launch — production">
      <p className="text-white/80">
        <span style={{ color: brand.primary }}>$</span> aeopic deploy --production
      </p>
      <div className="mt-3 space-y-1.5 text-white/55">
        <p><span className="text-emerald-400">✓</span> deployed to app.yourbusiness.com</p>
        <p><span className="text-emerald-400">✓</span> monitoring live · 99.99% uptime</p>
        <p><span className="text-emerald-400">✓</span> bug fixes included</p>
        <p><span className="text-emerald-400">✓</span> code ownership transferred to you</p>
      </div>
      <p className="mt-4 text-white/80">
        <span style={{ color: brand.primary }}>?</span> what should we build next
      </p>
    </ArtifactWindow>
  );
}

// ============================================================================
// PHASES — hung off a scroll-driven spine
// ============================================================================

interface PhaseData {
  number: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverable: string;
  Artifact: React.ComponentType;
}

const phases: PhaseData[] = [
  {
    number: "01",
    title: "Discovery",
    duration: "Weeks 1–2",
    description:
      "We start by understanding your business inside and out. What works, what doesn't, and where you want to be. This is where we ask the hard questions.",
    activities: [
      "Kickoff conversation to understand your business",
      "Workflow mapping — how things work today",
      "Pain point identification — what's broken",
      "Goal setting — where you want to be",
      "Success metrics definition",
    ],
    deliverable: "Detailed project specification",
    Artifact: DiscoveryArtifact,
  },
  {
    number: "02",
    title: "Blueprint",
    duration: "Weeks 1–2",
    description:
      "We design everything before writing code. Architecture, UI, workflows — all mapped out and approved by you before development begins.",
    activities: [
      "Technical architecture design",
      "UI/UX wireframes and design system",
      "Database schema planning",
      "Integration mapping",
      "Feature prioritization for MVP",
    ],
    deliverable: "Complete blueprint + visual mockups",
    Artifact: BlueprintArtifact,
  },
  {
    number: "03",
    title: "Build & Iterate",
    duration: "Weeks 4–8",
    description:
      "We build in weekly sprints, showing you real progress every step of the way. Your feedback shapes the final product.",
    activities: [
      "Agile development sprints",
      "Weekly progress demos",
      "Feedback integration",
      "Quality testing at every stage",
      "Performance optimization",
    ],
    deliverable: "Production-ready platform",
    Artifact: BuildArtifact,
  },
  {
    number: "04",
    title: "Launch & Evolve",
    duration: "Ongoing",
    description:
      "Go live with confidence. We handle deployment, monitoring, and stick around to help you grow and optimize.",
    activities: [
      "Production deployment",
      "Performance monitoring",
      "Bug fixes (included)",
      "Feature additions as you grow",
      "Ongoing optimization",
    ],
    deliverable: "Live platform + ongoing partnership",
    Artifact: LaunchArtifact,
  },
];

function PhaseBlock({ phase, index }: { phase: PhaseData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 md:py-24">
      {/* Spine node */}
      <div className="hidden lg:block absolute left-[-49px] top-[7.5rem]">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, type: "spring" }}
          className="w-4 h-4 rounded-full border-[3px] bg-white"
          style={{ borderColor: brand.primary }}
        />
      </div>

      {/* Meta column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:col-span-4"
      >
        <span
          className="block font-heading text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-4 select-none"
          style={{ color: "transparent", WebkitTextStroke: `1.5px ${brand.primary}` }}
        >
          {phase.number}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: brand.dark }}>
          {phase.title}
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-6">
          {phase.duration}
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">{phase.description}</p>

        {/* Deliverable plate */}
        <div className="border-l-2 pl-4" style={{ borderColor: brand.primary }}>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">
            Deliverable
          </p>
          <p className="font-semibold" style={{ color: brand.dark }}>
            {phase.deliverable}
          </p>
        </div>
      </motion.div>

      {/* Work column */}
      <div className="lg:col-span-7 lg:col-start-6 space-y-8">
        {/* Activities ledger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-gray-200"
        >
          {phase.activities.map((activity, i) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="flex items-baseline gap-4 py-3 border-b border-gray-200"
            >
              <span className="font-mono text-[11px]" style={{ color: brand.primary }}>
                {phase.number}.{i + 1}
              </span>
              <span className="text-sm md:text-base text-gray-700">{activity}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stage artifact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <phase.Artifact />
        </motion.div>
      </div>

      {/* Mobile divider */}
      {index < phases.length - 1 && (
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
      )}
    </div>
  );
}

function PhasesSection() {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start 0.7", "end 0.7"],
  });
  const spineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-site">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            STAGES
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
            The pipeline, stage by stage
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Spine + phases */}
        <div ref={spineRef} className="relative lg:pl-12">
          {/* Track */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          {/* Scroll-driven fill — the pipeline completes as you read */}
          <motion.div
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-px origin-top"
            style={{
              scaleY: spineProgress,
              background: brand.primary,
              boxShadow: `0 0 8px ${brand.primary}60`,
            }}
          />

          {phases.map((phase, index) => (
            <PhaseBlock key={phase.number} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WORKING AGREEMENT — what to expect, rendered as a document
// ============================================================================

const agreementClauses = [
  {
    n: "01",
    title: "Clear communication",
    body: "Weekly updates. No ghosting. You always know where things stand.",
  },
  {
    n: "02",
    title: "No surprises",
    body: "Scope and budget are locked in from day one. No hidden fees.",
  },
  {
    n: "03",
    title: "Fast iteration",
    body: "See real progress every week. Not months of silence.",
  },
  {
    n: "04",
    title: "Direct access",
    body: "Talk to the engineers building your product. No middlemen.",
  },
];

function WorkingAgreement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative overflow-hidden" style={{ background: brand.dark }}>
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
        className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-14 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            TERMS
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/40">
            Working with us
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-6">
              The terms we
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>
                hold ourselves to.
              </span>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              We believe in transparency, speed, and quality. This is what that
              looks like in practice — on every project, no exceptions.
            </p>
          </motion.div>

          {/* The document */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/25 backdrop-blur-sm">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <span className="font-mono text-[11px] text-white/40">working-agreement.md</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-400">
                  ✓ standard on every build
                </span>
              </div>
              <div className="p-6 md:p-8 space-y-7">
                {agreementClauses.map((clause, i) => (
                  <motion.div
                    key={clause.n}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  >
                    <p className="font-mono text-xs mb-1.5">
                      <span style={{ color: brand.primary }}>##</span>{" "}
                      <span className="text-white/35">{clause.n}.</span>{" "}
                      <span className="text-white font-bold tracking-wide">{clause.title}</span>
                    </p>
                    <p className="text-sm text-white/55 leading-relaxed pl-6">{clause.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA
// ============================================================================

function ProcessCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: brand.primary }}
        >
          Stage 00 — the conversation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] mb-8 max-w-4xl"
          style={{ color: brand.dark }}
        >
          Every pipeline starts
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: `2px ${brand.dark}` }}>
            with a conversation.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-xl mb-12 leading-relaxed"
        >
          Tell us what you&apos;re building. We&apos;ll map the stages, give you a
          fixed number, and you&apos;ll know exactly what happens next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <Link
            href="/start"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: brand.primary }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.15em] uppercase text-gray-500 hover:text-[#726AFF] transition-colors border-b border-gray-300 hover:border-[#726AFF] pb-1"
          >
            Get an instant estimate
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PAGE
// ============================================================================

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <PhasesSection />
      <WorkingAgreement />
      <ProcessCTA />
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import {
  Thermometer,
  Wrench,
  Hammer,
  Leaf,
  Heart,
  UtensilsCrossed,
  Scale,
  Car,
  Shield,
  Building2,
  Fuel,
  Drill,
  Route,
  Cog,
  Zap,
  Factory,
  Truck,
  Blocks,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface Sector {
  icon: LucideIcon;
  title: string;
  slug: string;
  color: string;
  description: string;
  pain: string;
}

const LOCAL_SERVICE: Sector[] = [
  {
    icon: Thermometer,
    title: "HVAC & Home Services",
    slug: "hvac",
    color: "#f59e0b",
    description: "Dispatch, booking & customer portals",
    pain: "You're juggling phone calls, handwritten schedules, and chasing invoices.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    color: "#3b82f6",
    description: "Local SEO, scheduling & reviews",
    pain: "Your best marketing is word of mouth — but new customers can't find you online.",
  },
  {
    icon: Hammer,
    title: "Contractors & Remodeling",
    slug: "contractors",
    color: "#726AFF",
    description: "Portfolio sites, CRM & lead tracking",
    pain: "Your portfolio is on your phone, not on your website.",
  },
  {
    icon: Leaf,
    title: "Lawn Care & Landscaping",
    slug: "lawn-care",
    color: "#38a169",
    description: "Route optimization & customer management",
    pain: "You're managing routes on paper and customers can't see when you're coming.",
  },
  {
    icon: Heart,
    title: "Medical & Dental",
    slug: "medical",
    color: "#ef4444",
    description: "Patient portals & appointment booking",
    pain: "Patients are calling to book appointments that could be handled online.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    slug: "restaurants",
    color: "#f97316",
    description: "Online ordering & reservations",
    pain: "You're paying third-party apps 30% when customers would rather order from you.",
  },
  {
    icon: Scale,
    title: "Law Offices",
    slug: "law",
    color: "#5B84B1",
    description: "Client portals & case management",
    pain: "Client intake is still emails and phone tag. Documents get lost.",
  },
  {
    icon: Car,
    title: "Auto & Detailing",
    slug: "auto",
    color: "#0ea5e9",
    description: "Booking & service notifications",
    pain: "Your customers call to check if their car is ready because you don't have a system.",
  },
  {
    icon: Shield,
    title: "Cleaning & Pest Control",
    slug: "cleaning",
    color: "#10b981",
    description: "Recurring service & review generation",
    pain: "You've got 5-star reviews but no website. Customers are finding your competitors.",
  },
  {
    icon: Building2,
    title: "Chambers of Commerce",
    slug: "chambers-of-commerce",
    color: "#7C3AED",
    description: "Member management, events & analytics",
    pain: "You're paying $5,000+/year for software that looks like 2005.",
  },
];

const INDUSTRIAL_ENTERPRISE: Sector[] = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    slug: "oil-gas",
    color: "#38BDF8",
    description: "Production dashboards, AFE tracking & compliance",
    pain: "Your production data lives in 6 spreadsheets and nobody has the full picture until month-end.",
  },
  {
    icon: Drill,
    title: "Oilfield Services",
    slug: "oilfield-services",
    color: "#F59E0B",
    description: "Field tickets, dispatch & job costing",
    pain: "Paper tickets get lost, crews get double-booked, and 2-5% of revenue is never billed.",
  },
  {
    icon: Route,
    title: "Pipeline Operations",
    slug: "pipeline-operations",
    color: "#94A3B8",
    description: "Integrity management & PHMSA compliance",
    pain: "Your integrity data lives in filing cabinets and PHMSA compliance is a quarterly fire drill.",
  },
  {
    icon: Cog,
    title: "Industrial Contracting",
    slug: "industrial-contracting",
    color: "#EA580C",
    description: "Turnaround management & safety compliance",
    pain: "Your daily reports are on clipboards and ISNetworld eats 20 hours a month.",
  },
  {
    icon: Zap,
    title: "Energy Infrastructure",
    slug: "energy-infrastructure",
    color: "#2DD4BF",
    description: "Grid operations, renewables & asset management",
    pain: "Your SCADA data, compliance docs, and project pipeline all live in different systems.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    slug: "manufacturing",
    color: "#D97706",
    description: "Shop floor scheduling, MES & quality",
    pain: "Your scheduling board is a whiteboard and your quality records won't survive an audit.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    slug: "logistics",
    color: "#22D3EE",
    description: "Freight management & shipment visibility",
    pain: "Your load board is a spreadsheet and you can't tell customers where their freight is.",
  },
  {
    icon: Blocks,
    title: "Enterprise SMB",
    slug: "enterprise-smb",
    color: "#A78BFA",
    description: "Unified platforms for growing businesses",
    pain: "You have 12 tools, none of them talk to each other, and reporting takes all Monday morning.",
  },
];

const ALL_SECTORS = [...LOCAL_SERVICE, ...INDUSTRIAL_ENTERPRISE];

/* ─────────────────────────────────────────────────────────────────
   HERO — cycling sector name, grid texture, mono readouts
────────────────────────────────────────────────────────────────── */
function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ALL_SECTORS.length),
      2200
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = ALL_SECTORS[index];

  return (
    <section className="relative bg-[#08080F] pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%)",
        }}
      />

      {/* Ambient glow that follows the cycling sector color */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-[0.13] pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: current.color }}
      />

      <div className="container-site relative z-10">
        {/* Eyebrow readout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-10"
        >
          <span
            className="transition-colors duration-700"
            style={{ color: current.color }}
          >
            /
          </span>
          <span>Industries</span>
          <span className="text-white/15">·</span>
          <span>18 sectors indexed</span>
          <span
            className="inline-block w-2 h-4 animate-pulse transition-colors duration-700"
            style={{ backgroundColor: current.color }}
          />
        </motion.div>

        {/* Headline with cycling sector */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-[clamp(2.6rem,7vw,5.5rem)] font-bold text-[#EDEDF0] leading-[1.02] tracking-tight max-w-5xl"
        >
          Software built for
          <br />
          <span className="relative inline-flex overflow-hidden align-bottom h-[1.15em]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={current.slug}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-nowrap"
                style={{ color: current.color }}
              >
                {current.title.toLowerCase()}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#8888A0] text-lg md:text-xl leading-relaxed max-w-xl mt-8"
        >
          We don&apos;t do generic. Every platform is engineered around how
          your industry actually operates — the workflows, the compliance, the
          field realities.
        </motion.p>

        {/* Mono stat readouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-12 font-mono text-sm"
        >
          {[
            ["18", "Sectors"],
            ["02", "Divisions"],
            ["100%", "Custom-Built"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-2.5">
              <span
                className="transition-colors duration-700"
                style={{ color: current.color }}
              >
                &gt;
              </span>
              <span className="text-[#EDEDF0] font-bold">{value}</span>
              <span className="text-white/30">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TICKER — endless sector marquee
────────────────────────────────────────────────────────────────── */
function Ticker() {
  const reduceMotion = useReducedMotion();
  const run = [...ALL_SECTORS, ...ALL_SECTORS];

  return (
    <div className="relative bg-[#08080F] border-y border-white/[0.06] py-5 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #08080F, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #08080F, transparent)",
        }}
      />
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
      >
        {run.map((s, i) => (
          <div
            key={`${s.slug}-${i}`}
            className="flex items-center gap-10 shrink-0"
          >
            <div className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.15em] text-white/40">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.title}
            </div>
            <span className="text-white/10 font-mono text-xs">▸</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   BENTO MOSAIC — asymmetric tiles, industry color always on
────────────────────────────────────────────────────────────────── */

/* Span patterns per division — 6-col grid, featured tiles span 2 rows */
const DIVISION_01_SPANS = [
  "lg:col-span-3 lg:row-span-2", // HVAC — featured
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4", // Law — wide
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4", // Chambers — wide
];

const DIVISION_02_SPANS = [
  "lg:col-span-4 lg:row-span-2", // Oil & Gas — hero tile
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3", // Logistics — wide
  "lg:col-span-3", // Enterprise SMB — wide
];

function SectorTile({
  sector,
  index,
  span,
  onHover,
}: {
  sector: Sector;
  index: number;
  span: string;
  onHover: (color: string | null) => void;
}) {
  const Icon = sector.icon;
  const featured = span.includes("row-span-2");
  const wide = span.includes("col-span-4") || span.includes("col-span-3");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.06 }}
      className={`${span} ${featured ? "sm:col-span-2" : ""}`}
    >
      <Link
        href={`/industries/${sector.slug}`}
        onMouseEnter={(e) => {
          onHover(sector.color);
          e.currentTarget.style.borderColor = `${sector.color}66`;
          e.currentTarget.style.boxShadow = `0 8px 40px ${sector.color}1F`;
        }}
        onMouseLeave={(e) => {
          onHover(null);
          e.currentTarget.style.borderColor = `${sector.color}2E`;
          e.currentTarget.style.boxShadow = "none";
        }}
        className="group relative flex h-full min-h-[8.5rem] flex-col overflow-hidden rounded-2xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: `${sector.color}2E`,
          background: `linear-gradient(135deg, ${sector.color}${
            featured ? "26" : "17"
          } 0%, ${sector.color}06 55%, rgba(255,255,255,0.02) 100%)`,
        }}
      >
        {/* Ghost icon — always faintly on, grows on hover */}
        <div
          className={`absolute pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
            featured
              ? "-right-8 -bottom-8"
              : wide
                ? "-right-5 -bottom-6"
                : "-right-4 -bottom-5"
          }`}
          style={{ color: sector.color, opacity: 0.09 }}
        >
          <Icon
            className={
              featured ? "w-44 h-44" : wide ? "w-28 h-28" : "w-24 h-24"
            }
          />
        </div>

        {/* Top row — icon chip + index */}
        <div className="relative z-10 flex items-start justify-between mb-auto">
          <div
            className={`rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              featured ? "w-12 h-12" : "w-10 h-10"
            }`}
            style={{ backgroundColor: `${sector.color}22` }}
          >
            <Icon
              className={featured ? "w-6 h-6" : "w-5 h-5"}
              style={{ color: sector.color }}
            />
          </div>
          <span className="font-mono text-[10px] text-white/25 group-hover:text-white/50 transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-5">
          <h3
            className={`font-heading font-bold text-[#EDEDF0] tracking-tight leading-tight ${
              featured
                ? "text-2xl md:text-4xl"
                : wide
                  ? "text-xl md:text-2xl"
                  : "text-lg md:text-xl"
            }`}
          >
            {sector.title}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 mt-2">
            {sector.description}
          </p>

          {featured && (
            <p className="text-[#8888A0] text-sm italic mt-4 max-w-sm hidden md:block">
              <span className="mr-2 not-italic" style={{ color: sector.color }}>
                →
              </span>
              &ldquo;{sector.pain}&rdquo;
            </p>
          )}

          {/* Explore affordance */}
          <div
            className={`flex items-center gap-1.5 mt-4 transition-all duration-300 ${
              featured
                ? "opacity-70 group-hover:opacity-100"
                : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: sector.color }}
            >
              Explore
            </span>
            <ArrowUpRight className="w-3 h-3" style={{ color: sector.color }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DIVISION — numbered section with reactive ambient glow
────────────────────────────────────────────────────────────────── */
function Division({
  number,
  title,
  tagline,
  sectors,
  spans,
  startIndex,
}: {
  number: string;
  title: string;
  tagline: string;
  sectors: Sector[];
  spans: string[];
  startIndex: number;
}) {
  const [glow, setGlow] = useState<string | null>(null);

  return (
    <section className="relative bg-[#08080F] py-20 md:py-28 overflow-hidden">
      {/* Reactive ambient glow */}
      <div
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: glow ?? "#726AFF",
          opacity: glow ? 0.09 : 0.03,
        }}
      />

      <div className="container-site relative z-10">
        {/* Division header */}
        <div className="relative mb-12 md:mb-16">
          <span
            className="absolute -top-10 md:-top-20 -left-2 font-heading text-[7rem] md:text-[13rem] font-bold leading-none text-white/[0.03] pointer-events-none select-none"
            aria-hidden
          >
            {number}
          </span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 pt-8 md:pt-12"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-5">
              <span className="text-[#726AFF]">Division {number}</span>
              <span className="h-px w-12 bg-white/15" />
              <span>{sectors.length} sectors</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#EDEDF0] tracking-tight">
              {title}
            </h2>
            <p className="text-[#8888A0] text-lg mt-4 max-w-xl">{tagline}</p>
          </motion.div>
        </div>

        {/* Bento mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:auto-rows-[10.5rem]">
          {sectors.map((sector, i) => (
            <SectorTile
              key={sector.slug}
              sector={sector}
              index={startIndex + i}
              span={spans[i] ?? "lg:col-span-2"}
              onHover={setGlow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN
────────────────────────────────────────────────────────────────── */
export function IndustriesIndexClient() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <Ticker />
      <Division
        number="01"
        title="Local & Service"
        tagline="The businesses that keep Texas running — booked, dispatched, and found online."
        sectors={LOCAL_SERVICE}
        spans={DIVISION_01_SPANS}
        startIndex={0}
      />
      <Division
        number="02"
        title="Industrial & Enterprise"
        tagline="Heavy operations, complex compliance, serious scale. Built 20 minutes from the Ship Channel."
        sectors={INDUSTRIAL_ENTERPRISE}
        spans={DIVISION_02_SPANS}
        startIndex={10}
      />
    </MotionConfig>
  );
}

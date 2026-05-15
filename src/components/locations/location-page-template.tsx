"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type LocationData,
  getAllLocationSlugs,
  getLocationData,
} from "@/lib/locations";

interface LocationPageTemplateProps {
  data: LocationData;
}

export function LocationPageTemplate({ data }: LocationPageTemplateProps) {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — Full-width image with city gradient overlay
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={
          {
            "--city-primary": data.colors.primary,
            "--city-secondary": data.colors.secondary,
          } as React.CSSProperties
        }
      >
        <Image
          src={data.hero.image}
          alt={data.city}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20"
          style={{ background: `linear-gradient(to bottom left, ${data.colors.primary}, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10"
          style={{ background: `linear-gradient(to top right, ${data.colors.secondary}, transparent)` }}
        />

        <div className="container-site relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span
                  className="text-sm font-mono uppercase tracking-[0.15em]"
                  style={{ color: data.colors.secondary }}
                >
                  {data.hero.tagline}
                </span>
              </motion.div>

              {data.pronunciation && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-white/50 text-sm italic mb-4"
                >
                  (That&apos;s {data.pronunciation}, by the way)
                </motion.p>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-6"
              >
                {data.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl pl-8 border-l-2 mb-10"
                style={{ borderColor: data.colors.primary }}
              >
                {data.hero.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: data.colors.primary }}
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Get Started
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Link
                  href="/process"
                  className="group flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
                >
                  Our Process
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 lg:p-10">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
                  Contact Info
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Building2
                      className="w-5 h-5 mt-0.5"
                      style={{ color: data.colors.primary }}
                    />
                    <div>
                      <p className="font-medium text-white">Aeopic LLC</p>
                      <p className="text-sm text-white/50">
                        1919 Taylor St Ste F
                        <br />
                        Houston, TX 77007
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail
                      className="w-5 h-5"
                      style={{ color: data.colors.primary }}
                    />
                    <a
                      href="mailto:contact@aeopic.com"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      contact@aeopic.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: data.colors.primary }}
                    />
                    <span className="text-white/50">
                      Response within 24 hours
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.08]">
                  <p className="text-sm text-white/50">
                    Serving {data.city} and the greater {data.region} area with
                    custom software solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          STATS TICKER — Scrolling marquee (web-apps banner style)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-3 border-y border-white/10 bg-[#0D0D0D] overflow-hidden">
        <div className="relative">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 items-center">
                {data.identity.stats.map((stat, index) => (
                  <div key={`${setIndex}-${index}`} className="flex items-center gap-12">
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <span style={{ color: data.colors.primary }}>&gt;</span>
                      <span className="text-white font-bold">{stat.value}</span>
                      <span className="text-white/40">{stat.label}</span>
                    </div>
                    <span className="text-white/20">|</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color: data.colors.secondary }}>#</span>
                  <span className="text-white font-bold">Custom Platforms</span>
                  <span className="text-white/40">for {data.city}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color: data.colors.primary }}>=</span>
                  <span className="text-white font-bold">100%</span>
                  <span className="text-white/40">code ownership</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span style={{ color: data.colors.secondary }}>^</span>
                  <span className="text-white font-bold">8-12 weeks</span>
                  <span className="text-white/40">to launch</span>
                </div>
                <span className="text-white/20">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          IDENTITY — Description Block
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1226]">
        <div className="container-site py-20 md:py-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8"
          >
            {data.identity.headline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl pl-8 border-l-2"
            style={{ borderColor: data.colors.primary }}
          >
            {data.identity.description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-white/70 text-lg leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          LANDMARKS — Community pride points (IYKYK spots)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0e1a] py-24 md:py-32">
        <div className="container-site">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">
              Field Notes — {data.city.toUpperCase()}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
              What Makes {data.city} {data.city}
            </h2>
            <div className="mt-6 mb-14 h-px bg-white/[0.08]" />
          </motion.div>

          {/* Desktop: asymmetric featured + list split */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1px_1fr] gap-0">

            {/* Featured landmark — index 0 */}
            <motion.div
              className="pr-16"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="relative">
                <span
                  className="absolute -top-6 left-0 text-[120px] font-bold leading-none select-none pointer-events-none"
                  style={{
                    color: `${data.colors.primary}14`,
                    fontFamily: "var(--font-heading)",
                  }}
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="relative pt-8">
                  <div
                    className="w-8 h-[2px] mb-5"
                    style={{ backgroundColor: data.colors.primary }}
                  />
                  <h3
                    className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white tracking-tight leading-tight mb-5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {data.landmarks[0].name}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed max-w-xs">
                    {data.landmarks[0].description}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: data.colors.secondary }}
                    >
                      {data.city}, TX
                    </span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vertical divider */}
            <div
              className="self-stretch w-px"
              style={{
                background: `linear-gradient(to bottom, transparent, ${data.colors.primary}50, transparent)`,
              }}
            />

            {/* List — indices 1 through end */}
            <div className="pl-16">
              {data.landmarks.slice(1).map((landmark, index) => (
                <div key={landmark.name}>
                  <motion.div
                    className="group relative py-8 cursor-default"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.08 + 0.15,
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <span
                      className="absolute top-6 right-0 text-[72px] font-bold leading-none select-none pointer-events-none tabular-nums"
                      style={{
                        color: `${data.colors.primary}10`,
                        fontFamily: "var(--font-heading)",
                      }}
                      aria-hidden="true"
                    >
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <div className="relative max-w-[85%]">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span
                          className="font-mono text-xs tabular-nums shrink-0"
                          style={{ color: data.colors.primary }}
                        >
                          {String(index + 2).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                          {landmark.name}
                        </h3>
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed pl-8">
                        {landmark.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < data.landmarks.length - 2 && (
                    <div className="h-px bg-white/[0.06]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: single vertical list for all landmarks */}
          <div className="lg:hidden divide-y divide-white/[0.06]">
            {data.landmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                className="relative py-7 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
              >
                <span
                  className="absolute top-4 right-0 text-[64px] font-bold leading-none select-none pointer-events-none"
                  style={{
                    color: `${data.colors.primary}10`,
                    fontFamily: "var(--font-heading)",
                  }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative max-w-[80%]">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="font-mono text-xs shrink-0"
                      style={{ color: data.colors.primary }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {landmark.name}
                    </h3>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed pl-7">
                    {landmark.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PAIN POINTS — Why local businesses need this (conversion drivers)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1226] py-20 md:py-28">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
          >
            The {data.city} Business Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-white/40 text-lg mb-12 max-w-2xl"
          >
            We studied your market. Here&apos;s what we found — and how we solve
            it.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((point, index) => (
              <motion.div
                key={point.headline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 hover:-translate-y-1 transition-all duration-300"
                style={{ borderBottomWidth: 3, borderBottomColor: `color-mix(in srgb, ${data.colors.primary} 40%, transparent)` }}
              >
                <div
                  className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${data.colors.primary} 15%, transparent)`,
                    boxShadow: `0 0 20px color-mix(in srgb, ${data.colors.primary} 10%, transparent)`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: data.colors.primary }}
                  />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {point.headline}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SERVICES — What we build in this city (Bento Grid)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0e1a] py-24 md:py-32">
        <div className="container-site">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">
              Services — {data.city.toUpperCase()}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
              What We Build in {data.city}
            </h2>
            <div className="mt-6 mb-14 h-px bg-white/[0.08]" />
          </motion.div>

          {/* Bento grid — asymmetric 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.services.map((service, index) => {
              const isWide = index === 0 || index === 3;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  className={isWide ? "md:col-span-2" : "md:col-span-1"}
                >
                  <Link
                    href={service.href}
                    className="group relative block h-full overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05]"
                    style={{
                      borderColor: `transparent`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${data.colors.primary}40`;
                      e.currentTarget.style.boxShadow = `0 0 40px ${data.colors.primary}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `transparent`;
                      e.currentTarget.style.boxShadow = `none`;
                    }}
                  >
                    {/* Ghost numeral */}
                    <span
                      className="absolute -top-4 -right-2 text-[100px] md:text-[120px] font-bold leading-none select-none pointer-events-none"
                      style={{
                        color: `${data.colors.primary}08`,
                        fontFamily: "var(--font-heading)",
                      }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="font-mono text-xs tabular-nums"
                          style={{ color: data.colors.primary }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs text-white/20">
                          ./{service.href.split("/").pop()}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className={`text-white/45 leading-relaxed ${isWide ? "text-base max-w-lg" : "text-sm"}`}>
                        {service.description}
                      </p>

                      <div
                        className="flex items-center gap-2 mt-6 text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                        style={{ color: data.colors.primary }}
                      >
                        <span>explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INDUSTRIES — Who we serve, ordered per city
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1226] py-20 md:py-28">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12"
          >
            Industries We Serve in {data.city}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {data.topIndustries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="px-4 py-2 border border-white/[0.1] rounded-full text-sm text-white/60 hover:text-[var(--city-primary)] hover:border-[var(--city-primary)] transition-colors cursor-default"
                style={
                  {
                    "--city-primary": data.colors.primary,
                  } as React.CSSProperties
                }
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          NEARBY AREAS — Related locations + broader area list
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0e1a] py-20 md:py-28">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white tracking-tight text-center mb-12"
          >
            Other Areas We Serve
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <div className="divide-y divide-white/[0.06]">
              {getAllLocationSlugs()
                .filter((s) => s !== data.slug)
                .map((slug, index) => {
                  const loc = getLocationData(slug)!;
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={`/locations/${slug}`}
                        className="group flex items-center justify-between py-5 hover:px-4 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <MapPin
                            className="w-4 h-4"
                            style={{ color: data.colors.primary }}
                          />
                          <div>
                            <span className="font-medium text-white group-hover:text-white/70 transition-colors">
                              {loc.city}
                            </span>
                            <span className="text-sm text-white/30 ml-2">
                              {loc.region}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight
                          className="w-5 h-5 text-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          style={{ color: data.colors.primary }}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <p className="text-sm text-white/30 text-center mb-3">
                Also serving nearby areas
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {data.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: data.colors.primary }}
              >
                View all service areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA — City-specific close with gradient overlay
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#0F1226] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: data.colors.gradient }}
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: data.colors.primary }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span
                className="inline-flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border rounded"
                style={{
                  borderColor: `color-mix(in srgb, ${data.colors.primary} 50%, transparent)`,
                  color: data.colors.secondary,
                }}
              >
                {data.city}, Texas
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              {data.cta.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {data.cta.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: data.colors.primary }}
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-sm mt-10 font-mono"
            >
              No obligation · Response within 24 hours · 100% code ownership
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

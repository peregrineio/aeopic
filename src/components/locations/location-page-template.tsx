"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Brand colors - matching the site's purple palette
const brand = {
  primary: "#726AFF",
  primarySoft: "#8B5CF6",
  lavender: "#C4B5FD",
  lavenderLight: "#DDD6FE",
  purpleBg: "#F5F3FF",
  purpleGlow: "rgba(114, 106, 255, 0.15)",
};

// All location data for related locations
const allLocations = [
  { slug: "college-station", city: "College Station", region: "Brazos Valley" },
  { slug: "bryan", city: "Bryan", region: "Brazos Valley" },
  { slug: "manor", city: "Manor", region: "Austin Metro" },
  { slug: "montgomery-county", city: "Montgomery County", region: "Greater Houston" },
  { slug: "conroe", city: "Conroe", region: "Montgomery County" },
  { slug: "magnolia", city: "Magnolia", region: "Montgomery County" },
  { slug: "tomball", city: "Tomball", region: "Northwest Houston" },
];

// Services offered in all locations
const services = [
  {
    title: "Custom Web Applications",
    description: "Business platforms tailored to your workflow",
    href: "/services/web-apps",
  },
  {
    title: "AI-Powered Tools",
    description: "Chatbots, automation, and smart systems",
    href: "/services/ai-tools",
  },
  {
    title: "Marketing & SEO",
    description: "Get found locally and convert visitors",
    href: "/services/marketing",
  },
  {
    title: "eCommerce Solutions",
    description: "Sell products and services online",
    href: "/services/ecommerce",
  },
];

// Industries served
const industries = [
  "HVAC & Home Services",
  "Medical & Dental",
  "Contractors & Remodeling",
  "Restaurants & Food Service",
  "Auto & Detailing",
  "Law Offices",
  "Lawn Care & Landscaping",
  "Cleaning & Pest Control",
];

export interface LocationPageProps {
  city: string;
  slug: string;
  region: string;
  heroHeadline: string;
  heroSubheadline: string;
  localDescription: string;
  nearbyAreas: string[];
}

// Hero background component
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, ${brand.purpleBg} 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 90% 80%, rgba(196, 181, 253, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #FDFCFB 0%, #F8F7FF 50%, #FAFAFA 100%)
          `,
        }}
      />

      {/* Dot grid texture */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <pattern
            id="location-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill={brand.lavender} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#location-dots)" />
      </svg>

      {/* Large morphing blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1.05, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-50"
        style={{
          background: `linear-gradient(135deg, ${brand.purpleBg} 0%, rgba(196, 181, 253, 0.3) 50%, rgba(139, 92, 246, 0.1) 100%)`,
          filter: "blur(2px)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: `linear-gradient(to top, rgba(250,250,250,1) 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}

// Technical badge component
function TechBadge({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "muted";
}) {
  const color = variant === "primary" ? brand.primary : "#A3A3A3";
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border"
      style={{ borderColor: color, color }}
    >
      {children}
    </span>
  );
}

export function LocationPageTemplate({
  city,
  slug,
  region,
  heroHeadline,
  heroSubheadline,
  localDescription,
  nearbyAreas,
}: LocationPageProps) {
  const relatedLocations = allLocations
    .filter((loc) => loc.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — Location-specific hero section
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <HeroBackground />

        <div className="container-site relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Main content */}
            <div className="lg:col-span-7">
              {/* Location tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border-2"
                  style={{ borderColor: brand.primary }}
                >
                  <MapPin className="w-5 h-5" style={{ color: brand.primary }} />
                </div>
                <TechBadge>{region}</TechBadge>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] mb-6"
              >
                {heroHeadline}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-[#525252] leading-relaxed max-w-xl pl-8 border-l-2 mb-10"
                style={{ borderColor: brand.primary }}
              >
                {heroSubheadline}
              </motion.p>

              {/* CTA row */}
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
                  style={{ backgroundColor: brand.primary }}
                >
                  <Link href="/get-started" className="flex items-center gap-3">
                    Get Started
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Link
                  href="/process"
                  className="group flex items-center gap-2 text-[#0A0A0A] font-medium hover:opacity-70 transition-opacity"
                >
                  Our Process
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div
                className="bg-white p-8 lg:p-10 border-t-4"
                style={{
                  borderTopColor: brand.primary,
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.04), 0 20px 60px -20px rgba(114, 106, 255, 0.15)",
                }}
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] mb-6">
                  Contact Info
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Building2
                      className="w-5 h-5 mt-0.5"
                      style={{ color: brand.primary }}
                    />
                    <div>
                      <p className="font-medium text-[#0A0A0A]">Aeopic LLC</p>
                      <p className="text-sm text-[#525252]">
                        1919 Taylor St Ste F
                        <br />
                        Houston, TX 77007
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail
                      className="w-5 h-5"
                      style={{ color: brand.primary }}
                    />
                    <a
                      href="mailto:admin@aeopic.com"
                      className="text-[#0A0A0A] hover:underline"
                    >
                      admin@aeopic.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: brand.primary }}
                    />
                    <span className="text-[#525252]">
                      Response within 24 hours
                    </span>
                  </div>
                </div>
                <div
                  className="mt-6 pt-6 border-t"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  <p className="text-sm text-[#525252]">
                    Serving {city} and the greater {region} area with custom
                    software solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${brand.primary}, ${brand.lavender})`,
          }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          LOCAL DESCRIPTION — About serving this area
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <TechBadge>Local Service</TechBadge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-6 mb-4">
                  Web Design & Marketing in {city}
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-lg text-[#525252] leading-relaxed mb-8">
                  {localDescription}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {nearbyAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: brand.primary }}
                      />
                      <span className="text-[#0A0A0A]">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SERVICES — What we offer in this location
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: brand.purpleBg }}
      >
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TechBadge>Services</TechBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-6 mb-4">
              What We Build in {city}
            </h2>
            <p className="text-[#525252] text-lg max-w-2xl mx-auto">
              From custom web applications to full-service marketing, we help{" "}
              {city} businesses grow online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white p-6 h-full transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(114,106,255,0.2)]"
                  style={{ borderLeft: `3px solid ${brand.primary}` }}
                >
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 group-hover:text-[#726AFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#525252]">{service.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: brand.primary }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INDUSTRIES — Who we help in this area
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TechBadge variant="muted">Industries</TechBadge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mt-6">
              Industries We Serve in {city}
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 border text-sm text-[#525252] hover:border-[#726AFF] hover:text-[#726AFF] transition-colors cursor-default"
                style={{ borderColor: "#E5E5E5" }}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          RELATED LOCATIONS — Other areas we serve
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TechBadge variant="muted">Service Areas</TechBadge>
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] mt-6">
              Other Areas We Serve
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto divide-y" style={{ borderColor: "#E5E5E5" }}>
            {relatedLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center justify-between py-5 hover:px-4 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: brand.primary }}
                    />
                    <div>
                      <span className="font-medium text-[#0A0A0A] group-hover:text-[#525252] transition-colors">
                        {loc.city}
                      </span>
                      <span className="text-sm text-[#A3A3A3] ml-2">
                        {loc.region}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    style={{ color: brand.primary }}
                  />
                </Link>
              </motion.div>
            ))}
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
              style={{ color: brand.primary }}
            >
              View all service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#0F1226] overflow-hidden">
        {/* Purple glow */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30 blur-[120px]"
          style={{ backgroundColor: brand.primary }}
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
                className="w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: brand.primary }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span
                className="inline-flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border"
                style={{ borderColor: brand.lavender, color: brand.lavender }}
              >
                {city}, Texas
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Ready to Grow Your {city} Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Let&apos;s build a custom platform that helps your business stand
              out in {region}.
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
                style={{
                  background: `linear-gradient(135deg, ${brand.primary}, ${brand.primarySoft})`,
                }}
              >
                <Link href="/get-started" className="flex items-center gap-3">
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
              No obligation • Response within 24 hours • 100% code ownership
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

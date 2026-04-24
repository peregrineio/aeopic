"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const services = [
  { label: "Custom Web Apps", href: "/services/web-apps" },
  { label: "AI-Powered Tools", href: "/services/ai-tools" },
  { label: "Marketing & SEO", href: "/services/marketing" },
  { label: "eCommerce", href: "/services/ecommerce" },
];

const industries = [
  { label: "HVAC & Home Services", href: "/industries/hvac" },
  { label: "Plumbing & Electrical", href: "/industries/plumbing-electrical" },
  { label: "Contractors", href: "/industries/contractors" },
  { label: "Lawn Care", href: "/industries/lawn-care" },
  { label: "Medical & Dental", href: "/industries/medical" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Law Offices", href: "/industries/law" },
  { label: "Auto & Detailing", href: "/industries/auto" },
  { label: "Cleaning & Pest Control", href: "/industries/cleaning" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Get Started", href: "/contact" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-primary" />

      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large corner triangle */}
        <div
          className="absolute -right-32 -top-32 w-96 h-96 border border-white/[0.03]"
          style={{ transform: 'rotate(45deg)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Accent circle */}
        <div className="absolute -left-20 bottom-40 w-40 h-40 rounded-full border border-primary/10" />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-site relative z-10">

        {/* CTA Row */}
        <div className="py-20 md:py-28 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left: Big headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
                Let&apos;s
                <br />
                <span className="text-primary">build.</span>
              </h2>
            </motion.div>

            {/* Right: Email + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Email */}
              <a
                href="mailto:contact@aeopic.com"
                className="group flex items-center gap-4 text-2xl md:text-3xl font-heading font-medium hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-6 w-6 text-primary" />
                contact@aeopic.com
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg px-8 py-5 transition-all duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="w-2 h-px bg-primary opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-200" />
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Industries
              </h3>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.label}>
                    <Link
                      href={industry.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="w-2 h-px bg-primary opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-200" />
                      <span>{industry.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="w-2 h-px bg-primary opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-200" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex items-center justify-center w-12 h-12 border border-white/10 hover:border-primary hover:bg-primary text-white/50 hover:text-white transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact / Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <p className="font-semibold text-white">Aeopic</p>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p>1919 Taylor St, Ste F</p>
                    <p>Houston, TX 77007</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+19799338032"
                    className="hover:text-white transition-colors duration-200"
                  >
                    (979) 933-8032
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contact@aeopic.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    contact@aeopic.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold tracking-tight"
          >
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              AEOPIC
            </Link>
          </motion.div>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Aeopic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Typing animation hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}

// Terminal line component
function TerminalLine({
  command,
  output,
  delay = 0,
}: {
  command: string;
  output?: string;
  delay?: number;
}) {
  const { displayedText, isComplete } = useTypingEffect(command, 30, delay);

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="text-[#10B981]">$</span>
        <span className="text-white/90 font-mono">
          {displayedText}
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#726AFF] ml-0.5"
            />
          )}
        </span>
      </div>
      {isComplete && output && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 font-mono text-sm mt-1 pl-4"
        >
          {output}
        </motion.div>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "How long does a custom web app take to build?",
    answer:
      "Most projects launch in 8-12 weeks. We work in sprints, so you'll see progress every week and can provide feedback throughout the process.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. You own everything we build. The code, the design, the infrastructure — it's all yours.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer ongoing support and maintenance plans. Most clients keep us on retainer for updates, new features, and optimization.",
  },
  {
    question: "Can you work with my existing systems?",
    answer:
      "Absolutely. We specialize in building platforms that integrate with your existing tools — CRMs, payment processors, inventory systems, and more.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "We offer monthly retainer plans that include bug fixes, performance monitoring, security updates, and a set number of hours for new features or improvements.",
  },
];

export default function WebAppsPage() {
  return (
    <main className="bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/webappsherovid.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#726AFF]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#10B981]/10 to-transparent" />

        <div className="container-site relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Terminal badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#726AFF]/30 bg-[#726AFF]/10 mb-8"
              >
                <Terminal className="w-4 h-4 text-[#726AFF]" />
                <span className="text-[#726AFF] text-sm font-mono">
                  custom-development
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
              >
                Build software
                <br />
                <span className="text-[#726AFF]">that runs</span>
                <br />
                your business.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/50 leading-relaxed max-w-lg mb-10 font-mono"
              >
                Custom platforms designed around your workflow. Full-stack
                systems that scale. 100% code ownership.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#726AFF] hover:bg-[#5f58e0] text-white px-8 py-7 text-base font-mono"
                >
                  <Link href="/start" className="flex items-center gap-2">
                    <span>./start-project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-white/50 font-mono hover:text-white transition-colors"
                >
                  <span>view examples</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0D0D0D] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                  </div>
                  <span className="text-white/30 text-xs font-mono ml-2">
                    ~/your-business
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <TerminalLine
                    command="aeopic init your-business-platform"
                    output="Initializing custom platform..."
                    delay={500}
                  />
                  <TerminalLine
                    command="aeopic add dashboard analytics portal"
                    output="Installing core modules..."
                    delay={2000}
                  />
                  <TerminalLine
                    command="aeopic deploy --production"
                    output="✓ Deployed to app.yourbusiness.com"
                    delay={3500}
                  />
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-[#10B981] text-xs">
                      Platform ready. Time to launch: 8 weeks.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/20 font-mono text-xs"
          >
            scroll
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar - Scrolling Marquee */}
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
            {/* First set */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 items-center">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#726AFF]">&gt;</span>
                  <span className="text-white font-bold">40+ hours</span>
                  <span className="text-white/40">saved weekly</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#10B981]">+</span>
                  <span className="text-white font-bold">85%</span>
                  <span className="text-white/40">revenue increase</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#726AFF]">=</span>
                  <span className="text-white font-bold">100%</span>
                  <span className="text-white/40">code ownership</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#10B981]">^</span>
                  <span className="text-white font-bold">99.9%</span>
                  <span className="text-white/40">uptime guarantee</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#726AFF]">$</span>
                  <span className="text-white font-bold">8-12 weeks</span>
                  <span className="text-white/40">to launch</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#10B981]">#</span>
                  <span className="text-white font-bold">Next.js</span>
                  <span className="text-white/40">React</span>
                  <span className="text-white/40">TypeScript</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#726AFF]">@</span>
                  <span className="text-white font-bold">Full-stack</span>
                  <span className="text-white/40">custom platforms</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#10B981]">*</span>
                  <span className="text-white font-bold">0</span>
                  <span className="text-white/40">vendor lock-in</span>
                </div>
                <span className="text-white/20">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#726AFF] font-mono text-sm mb-6">
                // the-problem
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1]">
                Five tools.
                <br />
                <span className="text-white/20">Zero sync.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:pt-20"
            >
              <p className="text-white/50 text-xl leading-relaxed mb-8">
                Your CRM doesn&apos;t talk to your calendar. Your calendar doesn&apos;t
                talk to your invoicing. You&apos;re copying data between spreadsheets,
                chasing payments manually, and losing hours to tasks a computer
                should handle.
              </p>
              <p className="text-white text-xl font-medium">
                We build the system that connects everything.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build - Typography Driven Rows */}
      <section className="py-32 md:py-40 border-t border-white/10">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[#10B981] font-mono text-sm mb-6">
              // what-we-build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Everything. Connected.
            </h2>
          </motion.div>

          <div className="border-t border-white/10">
            {[
              {
                num: "01",
                title: "Operations Dashboard",
                desc: "Central command for your entire business. Jobs, customers, revenue — one unified view.",
              },
              {
                num: "02",
                title: "Customer Portal",
                desc: "Self-service booking, payments, order tracking. Fewer phone calls, happier clients.",
              },
              {
                num: "03",
                title: "Real-Time Analytics",
                desc: "Revenue trends, team performance, customer insights. Know exactly what's working.",
              },
              {
                num: "04",
                title: "Automated Workflows",
                desc: "Invoices, reminders, follow-ups — all on autopilot. Set it and forget it.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-white/10 py-10 md:py-14"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-4xl md:text-5xl font-bold text-white/10 group-hover:text-[#726AFF] transition-colors duration-300 font-mono">
                      {item.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#726AFF] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-white/50 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Minimal Timeline */}
      <section className="py-32 md:py-40 bg-[#0D0D0D]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#726AFF] font-mono text-sm mb-6">
                // the-process
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1]">
                8 weeks.
                <br />
                <span className="text-white/20">Idea to launch.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:pt-20"
            >
              <p className="text-white/50 text-xl leading-relaxed">
                We work in weekly sprints. You see progress every 7 days.
                No black boxes, no surprises — just steady, visible momentum
                toward launch.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#726AFF] to-[#10B981]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
              {[
                { week: "1-2", title: "Discovery", desc: "Map workflow and goals" },
                { week: "2-3", title: "Blueprint", desc: "Design architecture" },
                { week: "3-8", title: "Build", desc: "Weekly demos and iteration" },
                { week: "8+", title: "Launch", desc: "Deploy and support" },
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex w-3 h-3 rounded-full bg-[#726AFF] mb-8" />

                  <p className="text-[#726AFF] font-mono text-xs mb-2">
                    Week {phase.week}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Single Line */}
      <section className="py-16 border-y border-white/10">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-white/30 font-mono text-sm">Built with</span>
            {["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Supabase", "Vercel", "Stripe"].map((tech) => (
              <span key={tech} className="text-white/50 font-mono text-sm hover:text-[#726AFF] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Clean Accordion */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-[#726AFF] font-mono text-sm mb-6">
                // faq
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Common
                <br />
                questions.
              </h2>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-white/10"
                  >
                    <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                      <span className="text-lg font-medium text-white group-hover:text-[#726AFF] transition-colors pr-8">
                        {faq.question}
                      </span>
                      <span className="text-white/30 group-open:rotate-45 transition-transform text-2xl">
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-12">
                      <p className="text-white/50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32 md:py-40 border-t border-white/10">
        <div className="container-site">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#10B981] font-mono text-sm mb-6"
            >
              // start
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1] mb-8"
            >
              Ready to build?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-xl mb-10"
            >
              Tell us what you need. We&apos;ll show you what&apos;s possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#726AFF] hover:bg-[#5f58e0] text-white px-8 py-7 text-base font-mono"
              >
                <Link href="/start" className="flex items-center gap-2">
                  <span>./start-project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-white/50 font-mono hover:text-white transition-colors"
              >
                <span>view our process</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

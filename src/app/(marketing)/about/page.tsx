import type { Metadata } from "next";
import {
  Star,
  Shield,
  Heart,
  Hammer,
  TrendingUp,
  Code2,
  Sparkles,
  Palette,
  Compass,
  Megaphone,
  Headphones,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About Us | Aeopic",
  description:
    "A small, focused team of engineers and strategists building custom software for businesses that are ready to grow.",
};

const capabilities = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Full-stack developers who build production-grade platforms from the ground up.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "Specialists in integrating AI into real business workflows — not just chatbots.",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Interfaces built for humans first, with obsessive attention to usability.",
  },
  {
    icon: Compass,
    title: "Strategy & Growth",
    description:
      "We don't just build — we help you figure out what to build and why.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Data-driven campaigns that connect your business with the right customers.",
  },
  {
    icon: Headphones,
    title: "Support & Delivery",
    description:
      "We stick around after launch. Your success is our success.",
  },
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We don't ship anything we wouldn't use ourselves",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest timelines, transparent pricing, no shortcuts",
  },
  {
    icon: Heart,
    title: "Service",
    description: "We build for people, not just profit",
  },
  {
    icon: Hammer,
    title: "Craft",
    description: "We love what we do and it shows in the code",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We're always learning, always improving",
  },
];

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About Us"
        headline="A Team Built to Build"
        subheadline="A small, focused team of engineers and strategists building custom software for businesses that are ready to grow."
        gradient
      />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeader headline="Why We Started Aeopic" centered={false} />
            <div className="prose prose-lg text-muted-foreground">
              <p>
                We saw a gap in the market: expensive agencies that charge
                six figures, or limited SaaS tools that force you to adapt
                your business to their workflow. There had to be a better way.
              </p>
              <p>
                Aeopic was founded by a group of friends with combined
                experience in software development, business strategy, and
                digital marketing. We came together with a simple mission:
                make custom technology accessible to businesses of all sizes.
              </p>
              <p>
                We believe in craft, integrity, and service. Every line of
                code we write, every design decision we make, is guided by
                these values. We're not here to sell you something you don't
                need — we're here to build what your business actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring to the Table */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="What We Bring to the Table"
            subheadline="Engineers, designers, and strategists — working together to turn your ideas into production-ready software."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`p-6 border-l-4 border-primary rounded-r-lg hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-white"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-[#0F1226]">
        <div className="container-site">
          <SectionHeader headline="Our Values" centered dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#F6F7FB] border-l-4 border-primary p-6 text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 rounded-r-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 shadow-md shadow-primary/20">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="section-padding bg-accent">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Our Technology</h2>
            <p className="text-muted-foreground text-lg">
              We build with modern, proven technology: Next.js, React,
              TypeScript, Supabase, and AI. The same tools trusted by industry
              leaders — available to businesses of any size.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work Together?"
        subheadline="Let's talk about what you're building."
        ctaText="Work With Us"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}

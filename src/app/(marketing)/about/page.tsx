import type { Metadata } from "next";
import { User, Star, Shield, Heart, Hammer, TrendingUp } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About Us | Aeopic",
  description:
    "Meet the team behind Aeopic. We're a group of builders who believe great software should be accessible to every business.",
};

const team = [
  {
    name: "Founder 1",
    role: "Co-Founder",
    bio: "Software engineer with a passion for building products that solve real problems.",
  },
  {
    name: "Founder 2",
    role: "Co-Founder",
    bio: "Business strategist focused on helping companies scale through technology.",
  },
  {
    name: "Founder 3",
    role: "Co-Founder",
    bio: "Full-stack developer who believes in clean code and great user experiences.",
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
        headline="Meet the Team Behind Aeopic"
        subheadline="We're a group of builders who believe great software should be accessible to every business."
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

      {/* The Team */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader headline="The Team" centered />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="premium-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader headline="Our Values" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
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

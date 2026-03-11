import type { Metadata } from "next";
import {
  Search,
  FileCode,
  Hammer,
  Rocket,
  MessageSquare,
  DollarSign,
  CheckCircle,
  Users,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Our Process | Aeopic",
  description:
    "A proven process that turns your idea into a production-ready platform — fast. Discovery, Blueprint, Build, Launch.",
};

const phases = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    duration: "1-2 Weeks",
    description:
      "We start by understanding your business inside and out. What works, what doesn't, and where you want to be.",
    activities: [
      "Kickoff conversation (understand your business)",
      "Workflow mapping (how things work today)",
      "Pain point identification (what's broken)",
      "Goal setting (where you want to be)",
      "Success metrics definition (how we measure wins)",
    ],
    deliverable: "Detailed project specification",
    investment: "~5-8 hours of your time (meetings, reviews)",
  },
  {
    number: 2,
    icon: FileCode,
    title: "Blueprint",
    duration: "1-2 Weeks",
    description:
      "We design everything before writing a single line of code. Architecture, UI, workflows — all mapped out.",
    activities: [
      "Technical architecture design",
      "UI/UX wireframes and design system",
      "Database schema planning",
      "Integration mapping",
      "Feature prioritization",
    ],
    deliverable: "Complete blueprint + visual mockups",
    investment: "~3-5 hours of your time (reviews, feedback)",
  },
  {
    number: 3,
    icon: Hammer,
    title: "Build & Iterate",
    duration: "4-8 Weeks",
    description:
      "We build in sprints, showing you progress every week. Your feedback shapes the final product.",
    activities: [
      "Agile development sprints",
      "Weekly progress demos (you see real progress)",
      "Feedback integration (we listen and adjust)",
      "Quality testing at every stage",
      "Performance optimization",
    ],
    deliverable: "Production-ready platform",
    callout: "You're never in the dark — weekly updates keep you in the loop.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Evolve",
    duration: "Ongoing",
    description:
      "Go live with confidence. We stick around to optimize, support, and grow with you.",
    activities: [
      "Production deployment",
      "Monitoring & optimization",
      "Bug fixes (included)",
      "Feature additions as you grow",
      "Performance maintenance",
    ],
    deliverable: "Live platform + ongoing partnership",
  },
];

const expectations = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "You always know where things stand",
  },
  {
    icon: DollarSign,
    title: "No Surprises",
    description: "Scope and budget are transparent from day one",
  },
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "We test everything before you see it",
  },
  {
    icon: Users,
    title: "Your Feedback Matters",
    description: "Iterative means we actually listen",
  },
];

export default function ProcessPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Process"
        headline="How We Build"
        subheadline="A proven process that turns your idea into a production-ready platform — fast."
      />

      {/* Timeline Overview */}
      <section className="py-12 bg-[#F6F7FB] border-b border-primary/10">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center font-bold shadow-md shadow-primary/20">
                    {phase.number}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{phase.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {phase.duration}
                    </p>
                  </div>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-primary/40 to-primary/20 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Details */}
      <div>
        {phases.map((phase, index) => (
          <section
            key={phase.number}
            className={`section-padding ${
              index % 2 === 0 ? "bg-white" : "bg-[#F6F7FB]"
            }`}
          >
            <div className="container-site">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                      <phase.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Phase {phase.number}: {phase.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {phase.description}
                  </p>

                  <h3 className="font-semibold mb-3">What we do:</h3>
                  <ul className="space-y-2 mb-6">
                    {phase.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  {phase.callout && (
                    <p className="text-sm italic text-muted-foreground bg-primary/5 border-l-2 border-primary p-4 rounded-r-lg">
                      {phase.callout}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="premium-card p-6 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-2">
                      DELIVERABLE
                    </p>
                    <p className="font-medium">{phase.deliverable}</p>
                  </div>

                  {phase.investment && (
                    <div className="premium-card p-6 border-l-4 border-primary/50">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        YOUR INVESTMENT
                      </p>
                      <p className="text-sm">{phase.investment}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* What to Expect */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader headline="What to Expect" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Start?"
        subheadline="Let's have a conversation about what you need."
        ctaText="Start the Conversation"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}

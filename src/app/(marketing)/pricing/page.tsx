import {
  PricingHero,
  ValueAnchor,
  ProjectTypes,
  ProjectEstimator,
  CostOfWaiting,
  TeamSection,
  FinalCTA,
} from "@/components/pricing";
import { FAQSection } from "@/components/shared/faq-section";

const faqs = [
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on scope and complexity. Most of our projects fall into three categories: MVPs and prototypes (4-8 weeks), custom applications (8-16 weeks), and full platform builds (4-8 months). Use the project estimator above to get a personalized recommendation, or book a strategy call — we'll give you a clear scope and investment range within 48 hours.",
  },
  {
    question: "Who will actually build my project?",
    answer:
      "You'll work directly with our founding team — Sam (engineering), Justin (strategy), and Theron (production). We don't outsource to junior developers or subcontractors. The people on your kickoff call are the people writing your code.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We don't disappear. We offer monthly retainer partnerships for ongoing development, marketing, and support. Most clients continue working with us after launch because adding features to a platform you already own is far cheaper than subscribing to new SaaS tools.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We work with you to find a payment structure that fits — milestone-based, monthly installments, or a custom arrangement. We believe cost shouldn't be a barrier to getting the right solution built.",
  },
  {
    question: "What if my needs change during the project?",
    answer:
      "It happens, and we handle it transparently. If scope changes, we'll tell you exactly how it affects the timeline and investment before making any changes. No surprises.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. Every line of code, every design asset, every database — it's yours. We don't hold your business hostage with proprietary lock-in. You can take the codebase to any developer at any time.",
  },
  {
    question: "How do I know this is worth the investment?",
    answer:
      "We'll show you. Before a single line of code, you'll see a detailed blueprint with architecture, UI mockups, and workflow design. You'll know exactly what you're getting and why it solves your problem. If it doesn't make sense, we'll tell you — we'd rather earn your trust than take a project that isn't a fit.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <ValueAnchor />
      <ProjectTypes />
      <ProjectEstimator />
      <CostOfWaiting />
      <TeamSection />
      <div className="bg-white border-t border-[#E8E8F0]">
        <FAQSection items={faqs} />
      </div>
      <FinalCTA />
    </>
  );
}

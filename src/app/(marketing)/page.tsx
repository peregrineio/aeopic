import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ServiceCards } from "@/components/home/service-cards";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { WhyAeopic } from "@/components/home/why-aeopic";
import { ProcessPreview } from "@/components/home/process-preview";
import { SocialProof } from "@/components/home/social-proof";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Aeopic | Custom Web Apps, AI Tools, Marketing & eCommerce",
  description:
    "Customer-tailored web applications, AI-powered business tools, marketing services, and eCommerce solutions. Built by a team that gets it done.",
  openGraph: {
    title: "Aeopic | Custom Web Apps, AI Tools, Marketing & eCommerce",
    description:
      "Customer-tailored web applications, AI-powered business tools, marketing services, and eCommerce solutions.",
    url: "https://aeopic.com",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServiceCards />
      <WhoWeHelp />
      <WhyAeopic />
      <ProcessPreview />
      <SocialProof />
      <FinalCTA />
    </>
  );
}

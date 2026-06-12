import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ServiceCards } from "@/components/home/service-cards";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { WhyAeopic } from "@/components/home/why-aeopic";
import { ProcessPreview } from "@/components/home/process-preview";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Aeopic | AI Software Development & Custom Web Apps | Houston, TX",
  description:
    "Custom web apps, AI tools, marketing & eCommerce. Houston-based software studio. Remote-friendly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aeopic | AI Software Development & Custom Web Apps | Houston, TX",
    description:
      "Custom web apps, AI tools, marketing & eCommerce. Houston-based. Remote-friendly.",
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
      <FinalCTA />
    </>
  );
}

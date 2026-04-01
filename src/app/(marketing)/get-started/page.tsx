import type { Metadata } from "next";
import {
  CanvasHero,
  SocialProofTicker,
  CanvasProcess,
  CanvasFeatures,
  CanvasFAQ,
  CanvasCTA,
} from "@/components/get-started";

export const metadata: Metadata = {
  title: "Get Started | Aeopic",
  description: "Tell us about your project. We'll show you what's possible.",
};

export default function GetStartedPage() {
  return (
    <main>
      <CanvasHero />
      <SocialProofTicker />
      <CanvasProcess />
      <CanvasFeatures />
      <CanvasFAQ />
      <CanvasCTA />
    </main>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import {
  getActiveListingCount,
  getActiveListings,
} from "@/lib/opportunities";
import { OpportunitiesHero } from "@/components/opportunities/hero";
import { OpportunitiesFilterBar } from "@/components/opportunities/filter-bar";
import { OpportunitiesJsonLd } from "@/components/opportunities/schema-json-ld";
import { WhyAeopic } from "@/components/opportunities/why-aeopic";
import { OpportunitiesLegalFooter } from "@/components/opportunities/legal-footer";

export const metadata: Metadata = {
  title: "Opportunities | Aeopic — Build Our Sales Floor",
  description:
    "Join Aeopic LLC's founding sales team. Hiring appointment setters, sales development reps, account executives, and client success managers. Base plus uncapped commission. Remote-first, nationwide.",
};

// ISR — revalidate hourly, also revalidated on demand via /api/opportunities/revalidate
export const revalidate = 3600;

export default async function OpportunitiesPage() {
  const [listings, count] = await Promise.all([
    getActiveListings(),
    getActiveListingCount(),
  ]);

  return (
    <main className="bg-[#08080F]">
      <OpportunitiesHero openCount={count} />
      {/* useSearchParams() in the filter bar requires a Suspense boundary to prerender */}
      <Suspense>
        <OpportunitiesFilterBar listings={listings} />
      </Suspense>
      <WhyAeopic />
      <OpportunitiesLegalFooter />
      <OpportunitiesJsonLd listings={listings} />
    </main>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { OpportunityListing } from "@/lib/types/opportunities";

import { isRoleFilled } from "@/lib/role-filled";

interface ListingCardProps {
  listing: OpportunityListing;
  index: number;
}

function compactMoney(v: number): string {
  return v >= 1000 ? `$${Math.round(v / 1000)}K` : `$${v}`;
}

function formatComp(listing: OpportunityListing): {
  primary: string;
  secondary: string | null;
} {
  const { salary_min, salary_max, salary_type } = listing;
  // Max-only = unguaranteed ceiling ("Up to") — used for commission-only
  // roles where a min would read as a wage floor (legal review 2026-07-14)
  if (!salary_min && salary_max) {
    return {
      primary:
        salary_type === "hourly"
          ? `Up to $${salary_max}/hr`
          : `Up to ${compactMoney(salary_max)}`,
      secondary: listing.compensation_notes,
    };
  }
  if (salary_min && salary_max) {
    if (salary_type === "hourly") {
      return {
        primary: `$${salary_min}–$${salary_max}/hr`,
        secondary: listing.compensation_notes,
      };
    }
    return {
      primary: `${compactMoney(salary_min)}–${compactMoney(salary_max)}`,
      secondary:
        listing.compensation_notes ??
        (salary_type === "annual" ? "per year" : null),
    };
  }
  return {
    primary: salary_type === "project" ? "Project-based" : "Hourly",
    secondary: listing.estimated_duration
      ? `Est. ${listing.estimated_duration}`
      : null,
  };
}

function relativeTime(iso: string | null): string {
  if (!iso) return "Just posted";
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86400000);
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 30) return `Posted ${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "Posted 1 month ago" : `Posted ${months} months ago`;
}

function locationLabel(t: string): string {
  if (t === "remote") return "Remote";
  if (t === "hybrid") return "Hybrid";
  return "On-site";
}

function truncate(text: string, max = 170): string {
  const cleaned = text.replace(/^#+\s*.*$/gm, "").replace(/\s+/g, " ").trim();
  return cleaned.length <= max ? cleaned : cleaned.slice(0, max).trim() + "…";
}

export function ListingCard({ listing, index }: ListingCardProps) {
  const isEmployee = listing.engagement_type === "employee";
  const filled = isRoleFilled(listing.slug);
  const accent = isEmployee ? "#726AFF" : "#FBBF24";
  const comp = formatComp(listing);
  const excerpt = truncate(
    isEmployee ? listing.description : listing.deliverables ?? listing.description
  );

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: "none" }}
    >
      {/* Accent beam */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: accent }}
      />
      {/* Hover wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${accent}0A 0%, transparent 55%)`,
        }}
      />

      <div className="relative flex flex-col md:flex-row">
        {/* ── Main section ── */}
        <div className="flex-1 min-w-0 p-6 md:p-8">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] mb-5">
            <span className="text-white/25">
              Nº {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="px-2.5 py-1 rounded-md font-medium"
              style={{ backgroundColor: `${accent}1A`, color: accent }}
            >
              {isEmployee ? "W-2 Employee" : "1099 Contract"}
            </span>
            {filled && (
              <span className="px-2.5 py-1 rounded-md font-medium bg-red-500/15 text-red-400">
                Role Currently Filled
              </span>
            )}
            <span className="text-white/35">{listing.department}</span>
            <span className="text-white/15">·</span>
            <span className="text-white/35">
              {locationLabel(listing.location_type)}
            </span>
          </div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#EDEDF0] tracking-tight leading-tight">
            <Link
              href={`/opportunities/${listing.slug}`}
              className="transition-colors hover:text-white focus-visible:outline-none"
            >
              {listing.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-[#8888A0] leading-relaxed line-clamp-2 max-w-2xl">
            {excerpt}
          </p>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
            {relativeTime(listing.posted_at)}
          </p>
        </div>

        {/* ── Comp stub (past the perforation) ── */}
        <div className="relative md:w-64 shrink-0 border-t md:border-t-0 md:border-l border-dashed border-white/[0.12] bg-white/[0.015] p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-between gap-4">
          {/* Perforation notches (desktop) */}
          <span className="hidden md:block absolute -left-[11px] -top-[11px] w-[22px] h-[22px] rounded-full bg-[#08080F] border border-white/[0.08]" />
          <span className="hidden md:block absolute -left-[11px] -bottom-[11px] w-[22px] h-[22px] rounded-full bg-[#08080F] border border-white/[0.08]" />

          <div className="flex flex-col min-w-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 mb-1.5">
              Compensation
            </span>
            <span
              className="font-heading text-2xl md:text-[1.7rem] font-bold tracking-tight leading-none"
              style={{ color: accent }}
            >
              {comp.primary}
            </span>
            {comp.secondary && (
              <span className="mt-1.5 text-xs text-white/40 leading-snug">
                {comp.secondary}
              </span>
            )}
          </div>

          <Link
            href={`/opportunities/${listing.slug}`}
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 shrink-0 md:w-full"
            style={{ backgroundColor: accent, color: "#08080F" }}
          >
            {isEmployee ? "View & Apply" : "View & Submit"}
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

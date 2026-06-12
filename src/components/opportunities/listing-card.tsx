import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { OpportunityListing } from "@/lib/types/opportunities";

interface ListingCardProps {
  listing: OpportunityListing;
}

function formatSalary(min: number | null, max: number | null, type: string | null) {
  if (!min || !max) return null;
  const fmt = (v: number) => v.toLocaleString("en-US");
  const suffix =
    type === "annual" ? "/year" : type === "hourly" ? "/hour" : "";
  return `$${fmt(min)} – $${fmt(max)}${suffix}`;
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

function truncate(text: string, max = 180): string {
  const cleaned = text.replace(/^#+\s*.*$/gm, "").replace(/\s+/g, " ").trim();
  return cleaned.length <= max ? cleaned : cleaned.slice(0, max).trim() + "…";
}

export function ListingCard({ listing }: ListingCardProps) {
  const isEmployee = listing.engagement_type === "employee";
  const borderClass = isEmployee
    ? "border-l-[3px] border-l-[#726AFF]"
    : "border-l-[3px] border-l-[#D5D5F0]";

  const compensation = isEmployee
    ? formatSalary(listing.salary_min, listing.salary_max, listing.salary_type)
    : `${listing.salary_type === "project" ? "Project-based" : "Hourly"}${
        listing.estimated_duration ? ` · Est. ${listing.estimated_duration}` : ""
      }`;

  const excerpt = truncate(
    isEmployee
      ? listing.description
      : listing.deliverables ?? listing.description
  );

  return (
    <article
      className={`group rounded-lg border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-md ${borderClass}`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {isEmployee ? (
          <Badge className="bg-[#726AFF] text-white hover:bg-[#5B54D6]">
            Employee
          </Badge>
        ) : (
          <Badge className="bg-[#D5D5F0] text-[#3a32a0] hover:bg-[#bdb6e8]">
            Contractor
          </Badge>
        )}
        <Badge variant="secondary">{listing.department}</Badge>
        <Badge variant="outline">{locationLabel(listing.location_type)}</Badge>
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        <Link
          href={`/opportunities/${listing.slug}`}
          className="hover:text-[#726AFF] focus-visible:text-[#726AFF] focus-visible:outline-none"
        >
          {listing.title}
        </Link>
      </h3>

      {compensation && (
        <p className="mt-2 text-base font-semibold text-[#726AFF]">
          {compensation}
          {isEmployee && listing.compensation_notes && (
            <span className="ml-1 font-normal text-muted-foreground">
              {listing.compensation_notes}
            </span>
          )}
        </p>
      )}

      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          {locationLabel(listing.location_type)} · {listing.department} ·{" "}
          {relativeTime(listing.posted_at)}
        </span>
        <Button
          asChild
          size="sm"
          variant={isEmployee ? "default" : "outline"}
          className={
            isEmployee
              ? "bg-[#726AFF] hover:bg-[#5B54D6]"
              : "border-[#726AFF] text-[#726AFF] hover:bg-[#726AFF]/10"
          }
        >
          <Link href={`/opportunities/${listing.slug}`}>
            {isEmployee ? "View & Apply" : "View & Submit"}
            <ArrowRight className="ml-1 size-3.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

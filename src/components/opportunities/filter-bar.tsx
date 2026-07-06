"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { OpportunityListing } from "@/lib/types/opportunities";
import { ListingCard } from "@/components/opportunities/listing-card";

interface FilterBarProps {
  listings: OpportunityListing[];
}

const LOCATION_LABELS = [
  { value: "all", label: "All Locations" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
];

const TYPE_TABS: Array<{ value: "all" | "employee" | "contractor"; label: string }> = [
  { value: "all", label: "All" },
  { value: "employee", label: "Positions" },
  { value: "contractor", label: "Contract" },
];

export function OpportunitiesFilterBar({ listings }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [type, setType] = useState<"all" | "employee" | "contractor">(
    (searchParams.get("type") as "employee" | "contractor") ?? "all"
  );
  const [dept, setDept] = useState<string>(searchParams.get("dept") ?? "all");
  const [location, setLocation] = useState<string>(
    searchParams.get("location") ?? "all"
  );

  const departments = useMemo(
    () =>
      Array.from(new Set(listings.map((l) => l.department))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [listings]
  );

  // Sync URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (dept !== "all") params.set("dept", dept);
    if (location !== "all") params.set("location", location);
    const qs = params.toString();
    startTransition(() => {
      router.replace(`/opportunities${qs ? `?${qs}` : ""}`, { scroll: false });
    });
  }, [type, dept, location, router]);

  const filtered = useMemo(
    () =>
      listings.filter((l) => {
        if (type === "employee" && l.engagement_type !== "employee") return false;
        if (type === "contractor" && l.engagement_type !== "contractor")
          return false;
        if (dept !== "all" && l.department !== dept) return false;
        if (location !== "all" && l.location_type !== location) return false;
        return true;
      }),
    [listings, type, dept, location]
  );

  const darkSelectTrigger =
    "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 focus:ring-[#726AFF]/40 [&>svg]:text-white/40";

  return (
    <div className="bg-[#08080F]">
      {/* Sticky filter rail */}
      <div className="sticky top-16 z-30 border-y border-white/[0.07] bg-[#08080F]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Type tabs */}
          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 w-fit">
            {TYPE_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setType(tab.value)}
                className={`rounded-lg px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  type === tab.value
                    ? "bg-[#726AFF] text-[#08080F] font-bold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Select value={dept} onValueChange={(v) => setDept(v ?? "all")}>
              <SelectTrigger className={`w-full sm:w-[200px] ${darkSelectTrigger}`}>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-[#0D0D1A] text-white/80">
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={location}
              onValueChange={(v) => setLocation(v ?? "all")}
            >
              <SelectTrigger className={`w-full sm:w-[180px] ${darkSelectTrigger}`}>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-[#0D0D1A] text-white/80">
                {LOCATION_LABELS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Ticket stack */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-14 text-center">
            <h3 className="font-heading text-xl font-bold text-[#EDEDF0]">
              {listings.length === 0
                ? "No open opportunities right now"
                : "No opportunities match your filters"}
            </h3>
            <p className="mt-3 text-sm text-[#8888A0]">
              {listings.length === 0 ? (
                <>
                  We&apos;re always looking for talented people.{" "}
                  <a
                    href="/start"
                    className="font-medium text-[#726AFF] underline-offset-4 hover:underline"
                  >
                    Send us your info
                  </a>{" "}
                  and we&apos;ll reach out when something opens up.
                </>
              ) : (
                "Check back soon or adjust your filters."
              )}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {filtered.map((l, i) => (
              <ListingCard key={l.id} listing={l} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  return (
    <div>
      <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Tabs
            value={type}
            onValueChange={(v) =>
              setType((v as "all" | "employee" | "contractor") ?? "all")
            }
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="employee">Positions</TabsTrigger>
              <TabsTrigger value="contractor">Contractor</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap items-center gap-3">
            <Select value={dept} onValueChange={(v) => setDept(v ?? "all")}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
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
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
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

      <div className="mx-auto max-w-6xl px-6 py-12">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed bg-muted/40 p-12 text-center">
            <h3 className="text-lg font-medium">
              {listings.length === 0
                ? "No open opportunities right now"
                : "No opportunities match your filters"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
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
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

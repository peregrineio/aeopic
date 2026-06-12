import "server-only";
import { createStaticAnonClient } from "@/lib/supabase/server";
import type { OpportunityListing } from "@/lib/types/opportunities";

/**
 * Missing Supabase env vars must degrade to empty listings — never crash
 * the build (generateStaticParams runs these at build time).
 */
function hasSupabaseEnv(): boolean {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  if (!configured) {
    console.warn("[opportunities] Supabase env vars not set — returning empty data");
  }
  return configured;
}

/**
 * Fetch all currently-visible active listings. RLS makes this safe to call
 * from anywhere — anon role can only see status='active' rows.
 */
export async function getActiveListings(): Promise<OpportunityListing[]> {
  if (!hasSupabaseEnv()) return [];
  const supabase = createStaticAnonClient();
  const { data, error } = await supabase
    .from("opportunity_listings")
    .select("*")
    .eq("status", "active")
    .order("featured", { ascending: false })
    .order("posted_at", { ascending: false });

  if (error) {
    console.error("[getActiveListings] supabase error:", error.message);
    return [];
  }
  return (data ?? []) as OpportunityListing[];
}

export async function getListingBySlug(
  slug: string
): Promise<OpportunityListing | null> {
  if (!hasSupabaseEnv()) return null;
  const supabase = createStaticAnonClient();
  const { data, error } = await supabase
    .from("opportunity_listings")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .maybeSingle();

  if (error) {
    console.error("[getListingBySlug] supabase error:", error.message);
    return null;
  }
  return (data as OpportunityListing) ?? null;
}

export async function getActiveListingCount(): Promise<number> {
  if (!hasSupabaseEnv()) return 0;
  const supabase = createStaticAnonClient();
  const { count, error } = await supabase
    .from("opportunity_listings")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");

  if (error) {
    console.error("[getActiveListingCount] supabase error:", error.message);
    return 0;
  }
  return count ?? 0;
}

/**
 * Fetch all active listing slugs for `generateStaticParams()`.
 */
export async function getAllActiveSlugs(): Promise<string[]> {
  if (!hasSupabaseEnv()) return [];
  const supabase = createStaticAnonClient();
  const { data, error } = await supabase
    .from("opportunity_listings")
    .select("slug")
    .eq("status", "active");

  if (error) {
    console.error("[getAllActiveSlugs] supabase error:", error.message);
    return [];
  }
  return (data ?? []).map((row) => row.slug as string);
}

/**
 * "Role Currently Filled / Not Accepting Applications" state (2026-07-12
 * punch list Prompt 32 + legal review 2026-07-10).
 *
 * Config-driven: comma-separated slugs in NEXT_PUBLIC_ROLE_FILLED_SLUGS
 * override the default. The SDR/ODR role is FILLED by default RIGHT NOW
 * (legal + volume) — remove it from this list (or set the env var) to
 * reopen applications.
 */
const DEFAULT_FILLED_SLUGS = [
  "sales-development-representative",
  "opportunities-development-representative",
];

export function filledSlugs(): string[] {
  const raw = process.env.NEXT_PUBLIC_ROLE_FILLED_SLUGS;
  if (raw !== undefined) {
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return DEFAULT_FILLED_SLUGS;
}

export function isRoleFilled(slug: string): boolean {
  return filledSlugs().includes(slug);
}

/** Pin the ODR/filled flagship role to the top of the careers list. */
export function sortWithOdrFirst<T extends { slug: string }>(listings: T[]): T[] {
  const pinned = filledSlugs();
  return [...listings].sort((a, b) => {
    const ap = pinned.includes(a.slug) ? 0 : 1;
    const bp = pinned.includes(b.slug) ? 0 : 1;
    return ap - bp;
  });
}

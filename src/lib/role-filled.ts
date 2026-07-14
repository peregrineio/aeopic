/**
 * "Role Currently Filled / Not Accepting Applications" state (2026-07-12
 * punch list Prompt 32 + legal reviews 2026-07-10 / 2026-07-14).
 *
 * Direction per Sam 2026-07-14: the SDR role is the one Aeopic is actively
 * hiring (matches the live Indeed/ZipRecruiter postings) — it stays OPEN
 * and pinned to the top. The other listings are not being actively hired
 * and display as filled / not accepting.
 *
 * Config-driven: comma-separated slugs in NEXT_PUBLIC_ROLE_FILLED_SLUGS
 * override the default filled list.
 */
const DEFAULT_FILLED_SLUGS = [
  "account-manager-business-development",
  "account-executive-closer",
  "client-success-manager",
  "senior-full-stack-developer",
];

/** Flagship recruiting role(s) — always sorted to the top of the list. */
const PINNED_SLUGS = [
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

/** Pin the flagship SDR/ODR role to the top of the careers list. */
export function sortWithOdrFirst<T extends { slug: string }>(listings: T[]): T[] {
  return [...listings].sort((a, b) => {
    const ap = PINNED_SLUGS.includes(a.slug) ? 0 : 1;
    const bp = PINNED_SLUGS.includes(b.slug) ? 0 : 1;
    return ap - bp;
  });
}

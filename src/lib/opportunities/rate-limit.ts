/**
 * Simple in-memory IP rate limiter. Resets on server restart; fine for
 * single-region Vercel dev/preview, hardened-version-TBD for production
 * (Upstash/Redis), but acceptable for an opportunities form at v1 scale.
 */
interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export function rateLimit(opts: {
  key: string;
  limit: number;
  windowMs: number;
}): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = buckets.get(opts.key);

  if (!existing || existing.resetAt < now) {
    buckets.set(opts.key, { count: 1, resetAt: now + opts.windowMs });
    return { allowed: true, remaining: opts.limit - 1, resetAt: now + opts.windowMs };
  }

  if (existing.count >= opts.limit) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: opts.limit - existing.count,
    resetAt: existing.resetAt,
  };
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() ?? "unknown";
  return (
    headers.get("x-real-ip") ?? headers.get("cf-connecting-ip") ?? "unknown"
  );
}

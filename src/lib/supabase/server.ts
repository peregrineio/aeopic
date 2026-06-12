import { createServerClient } from "@supabase/ssr";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Anon server client. Use in Server Components / route handlers where
 * RLS-respecting reads are desired. Reads/writes go through anon role,
 * subject to the policies on the table.
 */
export async function createAnonServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Components can't set cookies — no-op when called there.
          }
        },
      },
    }
  );
}

/**
 * Cookie-free anon client. Required for public reads that run outside a
 * request scope — generateStaticParams, ISR regeneration — where calling
 * cookies() throws. Still subject to anon RLS policies.
 */
export function createStaticAnonClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

/**
 * Service-role client. NEVER expose this to the browser. Used in API route
 * handlers that need to bypass RLS — e.g. inserting an application row from
 * an anonymous applicant, or creating a signed storage upload URL.
 */
export function createServiceRoleClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

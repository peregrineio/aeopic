import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const refToIndustry: Record<string, { slug: string; label: string }> = {
  "manor-chamber": { slug: "chambers-of-commerce", label: "Chambers of Commerce" },
  "chamber": { slug: "chambers-of-commerce", label: "Chambers of Commerce" },
  "hvac": { slug: "hvac", label: "HVAC & Home Services" },
  "plumbing": { slug: "plumbing-electrical", label: "Plumbing & Electrical" },
  "contractors": { slug: "contractors", label: "Contractors & Remodeling" },
  "lawn-care": { slug: "lawn-care", label: "Lawn Care & Landscaping" },
  "medical": { slug: "medical", label: "Medical & Dental" },
  "restaurants": { slug: "restaurants", label: "Restaurants" },
  "law": { slug: "law", label: "Law Offices" },
  "auto": { slug: "auto", label: "Auto & Detailing" },
  "cleaning": { slug: "cleaning", label: "Cleaning & Pest Control" },
};

export function proxy(request: NextRequest) {
  const ref = request.nextUrl.searchParams.get("ref");
  const existing = request.cookies.get("aeopic-ref")?.value;

  if (ref && refToIndustry[ref]) {
    const industry = refToIndustry[ref];
    const url = request.nextUrl.clone();
    url.searchParams.delete("ref");

    const response = NextResponse.redirect(url);
    response.cookies.set("aeopic-ref", industry.slug, {
      maxAge: 60 * 60 * 24 * 90,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getListingBySlug,
  getAllActiveSlugs,
} from "@/lib/opportunities";
import { ListingMarkdown } from "@/components/opportunities/markdown";
import { ListingSidebar } from "@/components/opportunities/listing-sidebar";
import { OpportunitiesJsonLd } from "@/components/opportunities/schema-json-ld";
import { EmployeeApplicationForm } from "@/components/opportunities/employee-form";
import { ContractorProposalForm } from "@/components/opportunities/contractor-form";
import { SalesApplicationForm } from "@/components/opportunities/sales-application-form";
import { isRoleFilled } from "@/lib/role-filled";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllActiveSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) {
    return { title: "Opportunity not found | Aeopic" };
  }
  const cleanDescription = listing.description
    .replace(/^#+\s*.*$/gm, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return {
    title: `${listing.title} | Opportunities | Aeopic`,
    description: cleanDescription,
  };
}

function formatSalary(
  min: number | null,
  max: number | null,
  type: string | null
) {
  if (!max) return null;
  const fmt = (v: number) => v.toLocaleString("en-US");
  const suffix =
    type === "annual" ? "/year" : type === "hourly" ? "/hour" : "";
  // Max-only = unguaranteed ceiling for commission-only roles — never
  // render a floor that reads as a wage guarantee (legal review 2026-07-14)
  if (!min) return `Up to $${fmt(max)}${suffix}`;
  return `$${fmt(min)} – $${fmt(max)}${suffix}`;
}

function locationLabel(t: string): string {
  if (t === "remote") return "Remote";
  if (t === "hybrid") return "Hybrid";
  return "On-site";
}

const AT_WILL_DISCLAIMER = `Employment with Aeopic LLC is at-will. This means either Aeopic or the employee may terminate the employment relationship at any time, with or without cause or notice. Nothing on this page or in any communication during the hiring process creates a contract of employment or guarantees employment for any specific duration.`;

const IC_DISCLAIMER = `This is an independent contractor engagement, not an employment position. Independent contractors are self-employed and responsible for their own taxes, insurance, and business expenses. Engagement as an independent contractor does not create an employer-employee relationship with Aeopic LLC.`;

const PRIVACY_NOTICE = `By submitting an application, you consent to Aeopic LLC collecting and processing the personal information you provide for hiring evaluation. Your information will be retained for up to two (2) years from the date of submission and will not be shared with third parties except as necessary for the hiring process or as required by law. To request deletion, contact admin@aeopic.com.`;

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) notFound();

  const isEmployee = listing.engagement_type === "employee";

  // Contractor roles with salary fields set (e.g. commission-only "Up to
  // $X") render those; the Project-based/Hourly label is the fallback only
  const salaryLabel = formatSalary(
    listing.salary_min,
    listing.salary_max,
    listing.salary_type
  );
  const compensation = isEmployee
    ? salaryLabel
    : salaryLabel ??
      `${listing.salary_type === "project" ? "Project-based" : "Hourly"}${
        listing.estimated_duration ? ` · Est. ${listing.estimated_duration}` : ""
      }`;

  const sidebarComp =
    (compensation ?? "") +
    (listing.compensation_notes ? ` ${listing.compensation_notes}` : "");

  return (
    <main className="bg-background">
      {/* pt must clear the fixed header (h-16 / md:h-20) */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-12 md:pt-32 lg:pb-16">
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All Opportunities
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
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
              <Badge variant="outline">
                {locationLabel(listing.location_type)}
                {listing.location_detail ? ` — ${listing.location_detail}` : ""}
              </Badge>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {listing.title}
            </h1>

            {compensation && (
              <p className="mt-3 text-xl font-semibold text-[#726AFF]">
                {compensation}
                {isEmployee && listing.compensation_notes && (
                  <span className="ml-2 font-normal text-muted-foreground">
                    {listing.compensation_notes}
                  </span>
                )}
              </p>
            )}

            <p className="mt-2 text-sm text-muted-foreground">
              Posted{" "}
              {listing.posted_at
                ? new Date(listing.posted_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "recently"}{" "}
              · {listing.department} · {locationLabel(listing.location_type)}
            </p>

            {listing.eligible_states && listing.eligible_states.length > 0 && (
              <div className="mt-6 rounded-md border bg-muted/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Open to applicants in
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {listing.eligible_states.map((s) => (
                    <span
                      key={s}
                      className="rounded border bg-card px-2 py-0.5 text-xs font-mono font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <ListingMarkdown
              source={listing.description}
              className="mt-2 text-base"
            />

            <h2 className="mt-10 text-2xl font-semibold">Requirements</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90 marker:text-[#726AFF]">
              {listing.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            {listing.nice_to_haves && listing.nice_to_haves.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl font-semibold">
                  Preferred Qualifications
                </h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90 marker:text-[#726AFF]">
                  {listing.nice_to_haves.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            )}

            {isEmployee && listing.benefits_summary && (
              <>
                <h2 className="mt-10 text-2xl font-semibold">Benefits</h2>
                <ListingMarkdown
                  source={listing.benefits_summary}
                  className="text-base"
                />
              </>
            )}

            {!isEmployee && listing.deliverables && (
              <>
                <h2 className="mt-10 text-2xl font-semibold">Deliverables</h2>
                <ListingMarkdown
                  source={listing.deliverables}
                  className="text-base"
                />
              </>
            )}
          </div>

          <div className="lg:col-span-4">
            <ListingSidebar
              title={listing.title}
              compensationLine={sidebarComp}
              isEmployee={isEmployee}
              postedAt={listing.posted_at}
              closesAt={listing.closes_at}
            />
          </div>
        </div>

        <Separator className="my-12" />

        <div className="rounded-md border bg-muted/30 p-6 text-sm text-muted-foreground">
          <h3 className="text-sm font-semibold text-foreground">
            {isEmployee ? "At-Will Employment" : "Independent Contractor Notice"}
          </h3>
          <p className="mt-2 leading-relaxed">
            {isEmployee ? AT_WILL_DISCLAIMER : IC_DISCLAIMER}
          </p>
          <p className="mt-3 leading-relaxed">
            {PRIVACY_NOTICE} See our{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#726AFF] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        {/* Application form — hidden entirely while the role is filled
            (2026-07-12 punch list; server-side reject in the apply API too) */}
        {isRoleFilled(listing.slug) ? (
          <div className="mt-12 rounded-2xl border border-red-500/25 bg-red-500/5 p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-400 mb-2">
              Role Currently Filled
            </p>
            <p className="text-sm text-[#8888A0] max-w-xl mx-auto">
              We&apos;re not accepting applications for this position right
              now. Check back — openings are posted here first.
            </p>
          </div>
        ) : isEmployee ? (
          <div id="employee-application-form" className="mt-12 scroll-mt-24">
            <EmployeeApplicationForm
              listingId={listing.id}
              listingTitle={listing.title}
            />
          </div>
        ) : listing.department === "Sales" ? (
          /* Sales-department 1099 roles (SDR) get a real application form —
             the generic proposal form reads as freelance-project intake */
          <div id="sales-application-form" className="mt-12 scroll-mt-24">
            <SalesApplicationForm
              listingId={listing.id}
              listingTitle={listing.title}
            />
          </div>
        ) : (
          <div id="contractor-proposal-form" className="mt-12 scroll-mt-24">
            <ContractorProposalForm
              listingId={listing.id}
              listingTitle={listing.title}
            />
          </div>
        )}
      </div>

      <OpportunitiesJsonLd listings={[listing]} />
    </main>
  );
}

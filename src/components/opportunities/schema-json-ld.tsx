import type { OpportunityListing } from "@/lib/types/opportunities";

const HIRING_ORG = {
  "@type": "Organization",
  name: "Aeopic LLC",
  sameAs: "https://aeopic.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1919 Taylor St, Ste F",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77007",
    addressCountry: "US",
  },
};

function buildJobPosting(listing: OpportunityListing) {
  const isEmployee = listing.engagement_type === "employee";
  const employmentType = isEmployee ? "FULL_TIME" : "CONTRACTOR";
  const jobLocationType =
    listing.location_type === "onsite" ? "IN_OFFICE" : "TELECOMMUTE";

  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: listing.title,
    description: listing.description,
    datePosted: listing.posted_at,
    employmentType,
    jobLocationType,
    hiringOrganization: HIRING_ORG,
    directApply: true,
    url: `https://aeopic.com/opportunities/${listing.slug}`,
  };

  if (listing.closes_at) json.validThrough = listing.closes_at;

  if (
    isEmployee &&
    listing.salary_min !== null &&
    listing.salary_max !== null
  ) {
    json.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: listing.salary_min,
        maxValue: listing.salary_max,
        unitText:
          listing.salary_type === "annual"
            ? "YEAR"
            : listing.salary_type === "hourly"
              ? "HOUR"
              : undefined,
      },
    };
  }

  if (listing.eligible_states && listing.eligible_states.length > 0) {
    json.applicantLocationRequirements = listing.eligible_states.map(
      (state) => ({
        "@type": "State",
        name: state,
      })
    );
  }

  return json;
}

interface Props {
  listings: OpportunityListing[];
}

export function OpportunitiesJsonLd({ listings }: Props) {
  if (listings.length === 0) return null;
  return (
    <>
      {listings.map((l) => (
        <script
          key={l.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJobPosting(l)),
          }}
        />
      ))}
    </>
  );
}

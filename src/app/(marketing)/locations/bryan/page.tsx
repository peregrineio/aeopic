import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Bryan, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Bryan businesses. Serving downtown Bryan and the greater Brazos Valley with modern software solutions.",
  keywords: [
    "web design Bryan TX",
    "marketing Bryan Texas",
    "web development Bryan",
    "SEO Bryan TX",
    "custom software Bryan",
    "downtown Bryan web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Bryan, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Bryan businesses.",
    url: "https://aeopic.com/locations/bryan",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function BryanPage() {
  return (
    <>
      <LocationPageTemplate
        city="Bryan"
        slug="bryan"
        region="Brazos Valley"
        heroHeadline="Web Design & Marketing in Bryan"
        heroSubheadline="Custom software solutions for Bryan's growing business community. From downtown shops to service providers across the city."
        localDescription="Bryan's historic downtown and expanding commercial areas are home to a diverse mix of businesses—from family-owned restaurants and retail shops to contractors, medical practices, and professional services. Aeopic helps Bryan businesses compete in the digital age with custom web applications, local SEO, and targeted marketing campaigns. We build platforms that reflect the character of your business while driving real results."
        nearbyAreas={[
          "College Station",
          "Navasota",
          "Brenham",
          "Caldwell",
          "Kurten",
          "Millican",
          "Brazos County",
          "Robertson County",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Bryan",
            description:
              "Custom web applications and marketing services for Bryan, TX businesses",
            url: "https://aeopic.com/locations/bryan",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1919 Taylor St Ste F",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77007",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "City",
              name: "Bryan",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            email: "admin@aeopic.com",
            priceRange: "$$",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 30.6744,
                longitude: -96.3700,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Magnolia, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Magnolia businesses. Serving Montgomery County's western communities with modern software solutions.",
  keywords: [
    "web design Magnolia TX",
    "marketing Magnolia Texas",
    "web development Magnolia",
    "SEO Magnolia TX",
    "custom software Magnolia",
    "Montgomery County west web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Magnolia, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Magnolia businesses.",
    url: "https://aeopic.com/locations/magnolia",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function MagnoliaPage() {
  return (
    <>
      <LocationPageTemplate
        city="Magnolia"
        slug="magnolia"
        region="Montgomery County"
        heroHeadline="Web Design & Marketing in Magnolia"
        heroSubheadline="Custom software solutions for Magnolia's thriving business community. Local expertise for local businesses."
        localDescription="Magnolia combines small-town character with big growth potential. As families and businesses continue to discover this Montgomery County gem, local service providers face both opportunity and competition. Aeopic helps Magnolia businesses stand out with custom web applications that automate operations, local SEO that puts you in front of customers, and marketing campaigns that drive real results. From contractors and HVAC companies to restaurants and medical practices, we build platforms that work as hard as you do."
        nearbyAreas={[
          "Tomball",
          "The Woodlands",
          "Conroe",
          "Pinehurst",
          "Stagecoach",
          "Waller",
          "Hockley",
          "Cypress",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Magnolia",
            description:
              "Custom web applications and marketing services for Magnolia, TX businesses",
            url: "https://aeopic.com/locations/magnolia",
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
              name: "Magnolia",
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
                latitude: 30.2096,
                longitude: -95.7508,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

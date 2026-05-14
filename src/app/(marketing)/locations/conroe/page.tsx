import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Conroe, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Conroe businesses. Serving the Montgomery County seat with modern software solutions.",
  keywords: [
    "web design Conroe TX",
    "marketing Conroe Texas",
    "web development Conroe",
    "SEO Conroe TX",
    "custom software Conroe",
    "Montgomery County web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Conroe, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Conroe businesses.",
    url: "https://aeopic.com/locations/conroe",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function ConroePage() {
  return (
    <>
      <LocationPageTemplate
        city="Conroe"
        slug="conroe"
        region="Montgomery County"
        heroHeadline="Web Design & Marketing in Conroe"
        heroSubheadline="Custom software solutions for one of Texas's fastest-growing cities. Modern platforms for businesses ready to scale."
        localDescription="Conroe has been consistently ranked as one of America's fastest-growing cities, and for good reason. The combination of affordable business costs, proximity to Houston, and a booming population has created incredible opportunities for local businesses. Aeopic helps Conroe businesses capitalize on this growth with custom web applications, local SEO strategies, and targeted marketing campaigns. Whether you're serving the established downtown community or the rapidly expanding suburbs, we build digital solutions that drive results."
        nearbyAreas={[
          "The Woodlands",
          "Willis",
          "Montgomery",
          "Cut and Shoot",
          "Shenandoah",
          "Oak Ridge North",
          "Magnolia",
          "Spring",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Conroe",
            description:
              "Custom web applications and marketing services for Conroe, TX businesses",
            url: "https://aeopic.com/locations/conroe",
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
              name: "Conroe",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            email: "contact@aeopic.com",
            priceRange: "$$",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 30.3119,
                longitude: -95.4561,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

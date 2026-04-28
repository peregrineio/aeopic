import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Manor, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Manor businesses. Serving Austin's fastest-growing suburb with modern software solutions.",
  keywords: [
    "web design Manor TX",
    "marketing Manor Texas",
    "web development Manor",
    "SEO Manor TX",
    "custom software Manor",
    "Austin suburb web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Manor, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Manor businesses.",
    url: "https://aeopic.com/locations/manor",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function ManorPage() {
  return (
    <>
      <LocationPageTemplate
        city="Manor"
        slug="manor"
        region="Austin Metro"
        heroHeadline="Web Design & Marketing in Manor"
        heroSubheadline="Custom software solutions for one of Austin's fastest-growing suburbs. Modern platforms for modern businesses."
        localDescription="Manor has transformed from a small town into one of the Austin metro's most dynamic growth areas. New families, new businesses, and new opportunities are reshaping the community every day. Aeopic helps Manor businesses establish a strong digital presence—whether you're a home service company, restaurant, healthcare provider, or retail shop. We build custom web applications and run targeted marketing campaigns that help you capture your share of this explosive growth."
        nearbyAreas={[
          "Austin",
          "Pflugerville",
          "Elgin",
          "Taylor",
          "Hutto",
          "Round Rock",
          "Del Valle",
          "Travis County",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Manor",
            description:
              "Custom web applications and marketing services for Manor, TX businesses",
            url: "https://aeopic.com/locations/manor",
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
              name: "Manor",
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
                latitude: 30.3405,
                longitude: -97.5567,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

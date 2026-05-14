import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in College Station, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for College Station businesses. Serving Texas A&M area companies with modern software solutions.",
  keywords: [
    "web design College Station",
    "marketing College Station TX",
    "web development Brazos Valley",
    "SEO College Station",
    "custom software College Station",
    "Texas A&M web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in College Station, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for College Station businesses.",
    url: "https://aeopic.com/locations/college-station",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function CollegeStationPage() {
  return (
    <>
      <LocationPageTemplate
        city="College Station"
        slug="college-station"
        region="Brazos Valley"
        heroHeadline="Web Design & Marketing in College Station"
        heroSubheadline="Custom software solutions for businesses in the heart of Aggieland. From local service companies to startups, we build platforms that drive growth."
        localDescription="College Station is home to Texas A&M University and a thriving community of local businesses, startups, and service providers. Whether you're running an HVAC company, restaurant, medical practice, or tech startup, Aeopic builds custom web applications and marketing campaigns tailored to the College Station market. We understand the unique dynamics of the Brazos Valley—from seasonal student populations to the steady growth of local families and businesses."
        nearbyAreas={[
          "Bryan",
          "Navasota",
          "Brenham",
          "Caldwell",
          "Hearne",
          "Madisonville",
          "Huntsville",
          "Brazos County",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - College Station",
            description:
              "Custom web applications and marketing services for College Station, TX businesses",
            url: "https://aeopic.com/locations/college-station",
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
              name: "College Station",
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
                latitude: 30.6280,
                longitude: -96.3344,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

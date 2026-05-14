import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Tomball, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Tomball businesses. Serving northwest Houston with modern software solutions.",
  keywords: [
    "web design Tomball TX",
    "marketing Tomball Texas",
    "web development Tomball",
    "SEO Tomball TX",
    "custom software Tomball",
    "northwest Houston web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Tomball, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Tomball businesses.",
    url: "https://aeopic.com/locations/tomball",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function TomballPage() {
  return (
    <>
      <LocationPageTemplate
        city="Tomball"
        slug="tomball"
        region="Northwest Houston"
        heroHeadline="Web Design & Marketing in Tomball"
        heroSubheadline="Custom software solutions for Tomball's business community. Where small-town values meet big-city opportunity."
        localDescription="Tomball has maintained its historic charm while evolving into a thriving business hub in northwest Houston. From the bustling downtown to the growing commercial corridors, Tomball businesses need digital solutions that help them compete. Aeopic builds custom web applications, runs local SEO campaigns, and creates targeted marketing strategies for Tomball service providers, retailers, and professional services. We understand the balance between community connection and business growth that makes Tomball special."
        nearbyAreas={[
          "Magnolia",
          "Spring",
          "Cypress",
          "The Woodlands",
          "Klein",
          "Champions",
          "Willowbrook",
          "Jersey Village",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Tomball",
            description:
              "Custom web applications and marketing services for Tomball, TX businesses",
            url: "https://aeopic.com/locations/tomball",
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
              name: "Tomball",
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
                latitude: 30.0972,
                longitude: -95.6161,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  );
}

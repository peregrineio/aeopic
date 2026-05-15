import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";
import { getLocationData } from "@/lib/locations";

const locationData = getLocationData("bryan")!;

export const metadata: Metadata = {
  title: locationData.seo.title,
  description: locationData.seo.description,
  keywords: locationData.seo.keywords,
  openGraph: {
    title: locationData.seo.title,
    description: locationData.seo.description,
    url: locationData.seo.ogUrl,
    siteName: "Aeopic",
    type: "website",
  },
};

export default function BryanPage() {
  return (
    <>
      <LocationPageTemplate data={locationData} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Aeopic - ${locationData.city}`,
            description: locationData.seo.description,
            url: locationData.seo.ogUrl,
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
              name: locationData.city,
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: locationData.seo.geoLat,
              longitude: locationData.seo.geoLng,
            },
            email: "contact@aeopic.com",
          }),
        }}
      />
    </>
  );
}

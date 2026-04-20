import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.myrideserivcecenter.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | My Ride Service Center",
    default: "My Ride Service Center | Auto Repair & Collision Body Shop in Fredericksburg, VA",
  },
  description:
    "My Ride Service Center is Fredericksburg, VA's trusted auto repair and collision body shop. Certified technicians, all makes and models, insurance support, same-day service. Call 540-418-6626.",
  keywords: [
    "auto repair Fredericksburg VA",
    "collision repair Fredericksburg",
    "body shop Fredericksburg VA",
    "car repair Fredericksburg",
    "My Ride Service Center",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "My Ride Service Center",
    title: "My Ride Service Center | Auto Repair & Body Shop in Fredericksburg, VA",
    description:
      "Fredericksburg's trusted auto repair and collision body shop. Certified technicians, insurance support, all makes and models. Call 540-418-6626.",
    images: [{ url: "/myride-hero.jpg", width: 1200, height: 630, alt: "My Ride Service Center" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  name: "My Ride Service Center",
  description:
    "Fredericksburg, VA's trusted auto repair and collision body shop. Certified technicians for all makes and models.",
  url: SITE_URL,
  telephone: "+15404186626",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2715 Lafayette Blvd",
    addressLocality: "Fredericksburg",
    addressRegion: "VA",
    postalCode: "22408",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.2662,
    longitude: -77.5183,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  image: `${SITE_URL}/myride-hero.jpg`,
  sameAs: ["https://www.facebook.com/profile.php?id=61583662515240"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

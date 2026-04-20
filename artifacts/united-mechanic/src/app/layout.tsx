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
    "My Ride Service Center is Fredericksburg, VA's trusted auto repair and collision body shop — 25+ years serving Stafford, Spotsylvania & surrounding areas. All makes and models, insurance accepted. Call 540-418-6626.",
  keywords: [
    "auto repair Fredericksburg VA",
    "collision repair Fredericksburg VA",
    "body shop Fredericksburg VA",
    "car repair Fredericksburg VA",
    "auto body shop Fredericksburg VA",
    "mechanic near me Fredericksburg",
    "oil change Fredericksburg VA",
    "brake repair Fredericksburg VA",
    "collision center Fredericksburg VA",
    "dent repair Fredericksburg VA",
    "auto painting Fredericksburg VA",
    "My Ride Service Center",
    "auto repair Stafford VA",
    "auto repair Spotsylvania VA",
    "dealership service Fredericksburg",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "My Ride Service Center",
    title: "My Ride Service Center | Auto Repair & Body Shop in Fredericksburg, VA",
    description:
      "Fredericksburg's trusted auto repair and collision body shop — 25+ years serving VA. All makes and models, insurance accepted. Call 540-418-6626.",
    images: [{ url: "/myride-hero.jpg", width: 1200, height: 630, alt: "My Ride Service Center — Auto Repair & Body Shop Fredericksburg VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Ride Service Center | Auto Repair & Body Shop in Fredericksburg, VA",
    description: "25+ years serving Fredericksburg, VA. Auto repair, collision body shop & dealership services. Call 540-418-6626.",
    images: ["/myride-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair", "AutoBodyShop"],
  name: "My Ride Service Center",
  description:
    "Fredericksburg, VA's trusted auto repair and collision body shop with 25+ years of experience. Serving Stafford, Spotsylvania & surrounding areas. All makes and models.",
  url: SITE_URL,
  telephone: "+15404186626",
  foundingDate: "2000",
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
  hasMap: "https://maps.google.com/?q=2715+Lafayette+Blvd+Fredericksburg+VA+22408",
  areaServed: [
    { "@type": "City", name: "Fredericksburg" },
    { "@type": "City", name: "Stafford" },
    { "@type": "City", name: "Spotsylvania" },
    { "@type": "AdministrativeArea", name: "Spotsylvania County" },
    { "@type": "AdministrativeArea", name: "Stafford County" },
  ],
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
  paymentAccepted: "Cash, Credit Card, Debit Card, Check, Insurance",
  currenciesAccepted: "USD",
  priceRange: "$$",
  image: `${SITE_URL}/myride-hero.jpg`,
  logo: `${SITE_URL}/myride-logo-horiz-new.png`,
  sameAs: ["https://www.facebook.com/profile.php?id=61583662515240"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair & Body Shop Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Collision Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Body & Paint" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dealership Service Program" } },
    ],
  },
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

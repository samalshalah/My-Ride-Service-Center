import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";
import ServiceContent from "@/components/pages/ServiceContent";

const SITE_URL = "https://www.myrideserivcecenter.com";

export function generateStaticParams() {
  return BODY_SHOP_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug && s.category === "body-shop");
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/body-shop/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  };
}

export default async function BodyShopServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug && s.category === "body-shop");
  if (!service) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "My Ride Service Center",
      telephone: "+15404186626",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2715 Lafayette Blvd",
        addressLocality: "Fredericksburg",
        addressRegion: "VA",
        postalCode: "22408",
      },
    },
    areaServed: [
      { "@type": "City", name: "Fredericksburg" },
      { "@type": "City", name: "Stafford" },
      { "@type": "City", name: "Spotsylvania" },
    ],
    url: `${SITE_URL}/body-shop/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Body Shop", item: `${SITE_URL}/body-shop` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/body-shop/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceContent service={service} />
    </>
  );
}

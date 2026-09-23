import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingContent from "@/components/pages/SeoLandingContent";
import { getSeoLandingPage, SEO_LANDING_PAGES } from "@/data/seoLandingPages";

const SITE_URL = "https://myrideservicecenter.com";

export function generateStaticParams() {
  return SEO_LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${page.slug}/`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.image, width: 1200, height: 630 }],
    },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) return notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.primaryService,
    description: page.metaDescription,
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
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Fredericksburg" },
      { "@type": "City", name: "Stafford" },
      { "@type": "City", name: "Spotsylvania" },
    ],
    url: `${SITE_URL}/${page.slug}/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/${page.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SeoLandingContent page={page} />
    </>
  );
}

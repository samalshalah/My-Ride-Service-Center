import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";
import ServiceContent from "@/components/pages/ServiceContent";

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
      canonical: `https://www.myrideserivcecenter.com/body-shop/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceContent service={service} />
    </>
  );
}

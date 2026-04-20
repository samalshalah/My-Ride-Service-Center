import type { Metadata } from "next";
import BodyShopContent from "@/components/pages/BodyShopContent";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you work with insurance companies?", acceptedAnswer: { "@type": "Answer", text: "Yes — My Ride Service Center works directly with all major insurance carriers including State Farm, GEICO, Allstate, Progressive, USAA, and more. We prepare the estimate, document the damage, and coordinate the repair." } },
    { "@type": "Question", name: "How do I get a collision repair estimate?", acceptedAnswer: { "@type": "Answer", text: "Simply bring your vehicle to our Fredericksburg shop for a free damage assessment. We inspect all visible and underlying damage, photograph everything, and provide a detailed written estimate." } },
    { "@type": "Question", name: "Will my car look like it did before the accident?", acceptedAnswer: { "@type": "Answer", text: "Our goal is always a repair that's indistinguishable from the factory. We use computer spectrophotometer color matching, professional panel preparation, and quality paint products to deliver a factory-quality finish." } },
    { "@type": "Question", name: "How long does collision repair take?", acceptedAnswer: { "@type": "Answer", text: "Timeline depends on the extent of the damage and parts availability. Minor cosmetic repairs can take 1–3 days. Major collision repairs can take 1–2 weeks. We'll give you an accurate timeline during your estimate." } },
    { "@type": "Question", name: "Do you provide a warranty on body shop work?", acceptedAnswer: { "@type": "Answer", text: "Yes. All body shop repairs at My Ride Service Center are backed by a warranty covering both parts and labor." } },
    { "@type": "Question", name: "What should I do right after a collision?", acceptedAnswer: { "@type": "Answer", text: "First, ensure everyone's safety and call 911 if needed. Document the scene with photos. Exchange insurance information. Then call My Ride Service Center at 540-418-6626 — we'll walk you through the next steps." } },
  ],
};

export const metadata: Metadata = {
  title: "Collision & Body Shop in Fredericksburg, VA | My Ride Service Center",
  description:
    "Professional collision repair and body shop in Fredericksburg, VA. My Ride Service Center offers dent repair, auto painting, frame straightening, glass replacement & more. Insurance accepted. Call 540-418-6626.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/body-shop",
  },
  openGraph: {
    title: "Collision & Body Shop in Fredericksburg, VA | My Ride Service Center",
    description: "Professional collision repair, dent removal, auto painting & insurance support. Call 540-418-6626.",
    images: [{ url: "/myride-body-shop-hero.jpg" }],
  },
};

export default function BodyShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BodyShopContent />
    </>
  );
}

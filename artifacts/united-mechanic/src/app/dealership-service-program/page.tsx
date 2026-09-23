import type { Metadata } from "next";
import DealershipContent from "@/components/pages/DealershipContent";

const DEALERSHIP_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the My Ride Dealership Service Program?", acceptedAnswer: { "@type": "Answer", text: "The My Ride Dealership Service Program is a dedicated partnership for automotive dealerships in Fredericksburg, VA. We handle reconditioning, overflow mechanical work, collision claims, and customer referrals — acting as a trusted extension of your service department." } },
    { "@type": "Question", name: "How does the dealership program pricing work?", acceptedAnswer: { "@type": "Answer", text: "We offer volume-friendly pricing for dealership partners with transparent, itemized invoicing. No hidden fees. Contact us to discuss rates based on your expected volume." } },
    { "@type": "Question", name: "What types of work do you perform for dealerships?", acceptedAnswer: { "@type": "Answer", text: "We perform trade-in reconditioning, body work, mechanical repairs, painting, glass replacement, and PDR. We also accept customer vehicle referrals for warranty-adjacent repairs and overflow service work." } },
    { "@type": "Question", name: "How quickly can you turn around dealership vehicles?", acceptedAnswer: { "@type": "Answer", text: "Dealership partners receive priority scheduling. We understand your reconditioning timelines and work to match them. Most standard reconditioning is completed within 1–3 business days." } },
  ],
};

export const metadata: Metadata = {
  title: "Dealership Service Program in Fredericksburg, VA | My Ride Service Center",
  description:
    "Dealership service program in Fredericksburg, VA for reconditioning, overflow repairs, collision claims, priority scheduling, and transparent pricing.",
  alternates: {
    canonical: "https://myrideservicecenter.com/dealership-service-program/",
  },
  openGraph: {
    title: "Dealership Service Program in Fredericksburg, VA | My Ride Service Center",
    description: "Fleet-level service for dealerships — reconditioning, overflow work, collision claims. One trusted local partner in Fredericksburg, VA. Call 540-418-6626.",
    images: [{ url: "/myride-dealership.jpg", width: 1200, height: 630 }],
  },
};

export default function DealershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DEALERSHIP_FAQ_SCHEMA) }} />
      <DealershipContent />
    </>
  );
}

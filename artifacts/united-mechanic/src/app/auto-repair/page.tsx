import type { Metadata } from "next";
import AutoRepairContent from "@/components/pages/AutoRepairContent";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I know when my car needs repairs?", acceptedAnswer: { "@type": "Answer", text: "Common warning signs include dashboard warning lights, unusual noises (grinding, squealing, knocking), changes in vehicle handling or ride quality, decreased fuel economy, or a burning smell. When in doubt, bring your vehicle in — we offer free visual inspections and honest recommendations." } },
    { "@type": "Question", name: "Do you work on all car makes and models?", acceptedAnswer: { "@type": "Answer", text: "Yes. My Ride Service Center in Fredericksburg, VA services all domestic, Asian, and European makes and models including Ford, Chevrolet, GMC, Dodge, Honda, Toyota, Nissan, Hyundai, BMW, Mercedes-Benz, Volkswagen, and more." } },
    { "@type": "Question", name: "Do you offer same-day auto repair?", acceptedAnswer: { "@type": "Answer", text: "We offer same-day service on many common repairs including oil changes, brake pad replacement, battery replacement, and minor electrical work." } },
    { "@type": "Question", name: "Will you give me an estimate before starting work?", acceptedAnswer: { "@type": "Answer", text: "Always. We provide a written estimate before any repair begins. We never start work on your vehicle without your approval." } },
    { "@type": "Question", name: "Do your repairs come with a warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes. All parts and labor at My Ride Service Center are backed by a warranty." } },
    { "@type": "Question", name: "Do I need an appointment for auto repair?", acceptedAnswer: { "@type": "Answer", text: "Appointments are recommended and help us get to your vehicle faster. We also accept walk-ins. Call us at 540-418-6626 or use our online booking to schedule." } },
  ],
};

export const metadata: Metadata = {
  title: "Auto Repair in Fredericksburg, VA | My Ride Service Center",
  description:
    "Auto repair in Fredericksburg, VA for brakes, oil changes, diagnostics, suspension, electrical, and transmission service. Call My Ride at 540-418-6626.",
  alternates: {
    canonical: "https://myrideservicecenter.com/auto-repair/",
  },
  openGraph: {
    title: "Auto Repair in Fredericksburg, VA | My Ride Service Center",
    description: "Expert auto repair for all makes and models. Brake service, engine diagnostics, oil changes, transmission repair & more. Call 540-418-6626.",
    images: [{ url: "/myride-auto-repair.jpg" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myrideservicecenter.com/" },
    { "@type": "ListItem", position: 2, name: "Auto Repair", item: "https://myrideservicecenter.com/auto-repair/" },
  ],
};

export default function AutoRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <AutoRepairContent />
    </>
  );
}

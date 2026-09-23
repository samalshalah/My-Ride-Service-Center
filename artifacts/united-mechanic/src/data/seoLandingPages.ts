export interface SeoLandingPageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  image: string;
  summary: string;
  primaryService: string;
  sections: { heading: string; body: string }[];
  benefits: string[];
  relatedLinks: { href: string; label: string }[];
  faq: { q: string; a: string }[];
}

export const SEO_LANDING_PAGES: SeoLandingPageData[] = [
  {
    slug: "collision-repair-fredericksburg-va",
    title: "Collision Repair Fredericksburg VA",
    metaTitle: "Collision Repair Fredericksburg VA | My Ride Service Center",
    metaDescription: "Collision repair in Fredericksburg, VA for dents, paint, frame damage, and insurance claims. My Ride Service Center repairs all makes and models. Call 540-418-6626.",
    heroLabel: "Collision Repair",
    image: "/myride-body-shop-hero.jpg",
    summary: "After an accident, My Ride Service Center helps Fredericksburg drivers get safe, clean repairs without unnecessary delays. We handle visible body damage, hidden structural concerns, paint matching, and insurance coordination in one local shop.",
    primaryService: "Collision repair",
    sections: [
      {
        heading: "Complete collision repair after an accident",
        body: "A proper collision repair starts with more than replacing damaged panels. Our team inspects the vehicle for hidden damage, checks panel alignment, documents the repair plan, and restores the body finish so the vehicle looks right and drives safely.",
      },
      {
        heading: "Insurance claim support for Fredericksburg drivers",
        body: "We work with insurance companies and help document the repair scope clearly. If additional damage is found after teardown, we communicate the supplement needs so the claim and repair stay aligned.",
      },
      {
        heading: "Paint, body, and mechanical coordination",
        body: "Collision damage can affect bumpers, lights, cooling parts, suspension, and sensors. Because My Ride Service Center handles body shop and mechanical repair, customers do not need to coordinate multiple shops.",
      },
    ],
    benefits: [
      "Collision estimates for cars, trucks, and SUVs",
      "Dent repair, bumper repair, frame checks, and paint work",
      "Direct insurance claim documentation",
      "Color matching and refinishing for a clean finish",
      "Local shop near Lafayette Blvd in Fredericksburg",
    ],
    relatedLinks: [
      { href: "/body-shop/", label: "Body Shop Services" },
      { href: "/body-shop/bumper-repair/", label: "Bumper Repair" },
      { href: "/body-shop/frame-straightening/", label: "Frame Straightening" },
    ],
    faq: [
      { q: "Do I need an appointment for collision repair?", a: "An appointment is recommended so we can inspect the damage, take photos, and prepare the estimate without rushing the process." },
      { q: "Can you work with my insurance company?", a: "Yes. We help with repair documentation and can coordinate directly with insurance carriers during the estimate and supplement process." },
      { q: "How long does collision repair take?", a: "Timing depends on damage severity, parts availability, and insurance approval. Small bumper or panel repairs may take a few days, while structural or multi-panel repairs take longer." },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return SEO_LANDING_PAGES.find((page) => page.slug === slug);
}

import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "My Ride Service Center | Auto Repair & Collision Body Shop in Fredericksburg, VA",
  description:
    "My Ride Service Center is Fredericksburg, VA's trusted auto repair and collision body shop — 25+ years experience, all makes and models, insurance accepted. Call 540-418-6626.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com",
  },
  openGraph: {
    title: "My Ride Service Center | Auto Repair & Collision Body Shop in Fredericksburg, VA",
    description:
      "25+ years serving Fredericksburg, VA — auto repair, collision body shop & dealership services. All makes and models. Call 540-418-6626.",
    images: [{ url: "/myride-hero.jpg", width: 1200, height: 630, alt: "My Ride Service Center Fredericksburg VA" }],
  },
};

export default function HomePage() {
  return <HomeContent />;
}

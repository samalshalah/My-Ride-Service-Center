import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "My Ride Service Center | Auto Repair & Collision Body Shop in Fredericksburg, VA",
  description:
    "My Ride Service Center is Fredericksburg, VA's trusted auto repair and collision body shop. Certified technicians, all makes and models, insurance support. Call 540-418-6626.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com",
  },
};

export default function HomePage() {
  return <HomeContent />;
}

import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us | My Ride Service Center",
  description:
    "Learn about My Ride Service Center — Fredericksburg, VA's trusted auto repair and collision body shop. Certified technicians, honest service, all makes and models.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/about",
  },
  openGraph: {
    title: "About My Ride Service Center | Fredericksburg, VA Auto Repair",
    description: "Fredericksburg's trusted auto repair and collision body shop. Certified technicians, fast turnaround, and insurance support.",
    images: [{ url: "/myride-about-hero.jpg" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

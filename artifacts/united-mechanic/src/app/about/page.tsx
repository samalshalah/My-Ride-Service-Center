import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About My Ride Service Center | 25+ Years Auto Repair in Fredericksburg, VA",
  description:
    "For over 25 years, My Ride Service Center has served Fredericksburg, Stafford & Spotsylvania VA with expert auto repair, body shop services, and a dedicated Dealership Service Program. Honest service, all makes and models.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/about",
  },
  openGraph: {
    title: "About My Ride Service Center | 25+ Years in Fredericksburg, VA",
    description: "25+ years serving Fredericksburg, Stafford & Spotsylvania VA — auto repair, body shop, and dealership services. All makes and models.",
    images: [{ url: "/myride-about-hero.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

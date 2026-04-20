import type { Metadata } from "next";
import DealershipContent from "@/components/pages/DealershipContent";

export const metadata: Metadata = {
  title: "Dealership Service Program | My Ride Service Center",
  description:
    "My Ride Dealership Service Program — fast turnaround, transparent pricing, and certified repairs for automotive dealers in Fredericksburg, VA. Call 540-418-6626.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/dealership-service-program",
  },
  openGraph: {
    title: "Dealership Service Program | My Ride Service Center",
    description: "Fleet-level service for dealerships — reconditioning, overflow work, collision claims. One trusted local partner in Fredericksburg, VA.",
    images: [{ url: "/myride-dealership.jpg" }],
  },
};

export default function DealershipPage() {
  return <DealershipContent />;
}

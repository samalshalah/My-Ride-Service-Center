import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact My Ride Service Center | Auto Repair Shop in Fredericksburg, VA",
  description:
    "Contact My Ride Service Center — auto repair & collision body shop in Fredericksburg, VA. Call 540-418-6626, get directions to 2715 Lafayette Blvd, or book a service appointment online.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/contact",
  },
  openGraph: {
    title: "Contact My Ride Service Center | Auto Repair in Fredericksburg, VA",
    description: "Call 540-418-6626 or visit 2715 Lafayette Blvd, Fredericksburg, VA 22408. Mon–Fri 8am–6pm, Sat 9am–3pm.",
    images: [{ url: "/myride-fredericksburg.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

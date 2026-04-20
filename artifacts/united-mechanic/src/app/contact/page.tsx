import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | My Ride Service Center",
  description:
    "Contact My Ride Service Center in Fredericksburg, VA. Call 540-418-6626, get directions to 2715 Lafayette Blvd, or book a service appointment online.",
  alternates: {
    canonical: "https://www.myrideserivcecenter.com/contact",
  },
  openGraph: {
    title: "Contact My Ride Service Center | Fredericksburg, VA",
    description: "Call 540-418-6626 or visit us at 2715 Lafayette Blvd, Fredericksburg, VA 22408. Mon–Fri 8–6, Sat 9–3.",
    images: [{ url: "/myride-fredericksburg.jpg" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

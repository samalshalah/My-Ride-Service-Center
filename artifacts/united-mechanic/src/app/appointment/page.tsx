import type { Metadata } from "next";
import AppointmentContent from "@/components/pages/AppointmentContent";

export const metadata: Metadata = {
  title: "Book an Appointment | My Ride Service Center",
  description:
    "Schedule an auto repair or body shop appointment at My Ride Service Center in Fredericksburg, VA. Same-day appointments often available. Call 540-418-6626.",
  alternates: {
    canonical: "https://myrideservicecenter.com/appointment/",
  },
  openGraph: {
    title: "Book a Repair Appointment | My Ride Service Center",
    description: "Schedule your auto repair or collision repair appointment in Fredericksburg, VA. Same-day appointments often available.",
  },
};

export default function AppointmentPage() {
  return <AppointmentContent />;
}

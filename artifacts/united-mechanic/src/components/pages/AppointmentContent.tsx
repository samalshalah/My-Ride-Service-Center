"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone, MapPin, CheckCircle2, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

export default function AppointmentContent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      (window as any).jotformEmbedHandler(
        "iframe[id='JotFormIFrame-261094961811156']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHero
        badge={<><Calendar className="h-4 w-4" /><span>Schedule a Visit</span></>}
        title="Book a Repair Appointment"
        subtitle="Tell us about your vehicle and we'll get you in as soon as possible — same-day appointments often available."
        image="/myride-auto-repair.jpg"
        imageAlt="My Ride Service Center"
      />

      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <iframe
                id="JotFormIFrame-261094961811156"
                title="My Ride Service Center - Appointment"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/261094961811156"
                frameBorder={0}
                style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
                scrolling="no"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Hours of Operation</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <li key={day} className="flex justify-between">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-medium ${hours === "Closed" ? "text-red-500" : "text-foreground"}`}>
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Our Location</h3>
                </div>
                <p className="font-semibold text-sm text-foreground mb-0.5">Fredericksburg, VA</p>
                <p className="text-xs text-muted-foreground mb-1">2715 Lafayette Blvd, VA 22408</p>
                <a href="tel:5404186626" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                  <Phone className="h-3.5 w-3.5" /> 540-418-6626
                </a>
              </div>

              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">What to Expect</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Our team will call to confirm your appointment",
                    "Our technicians will inspect and diagnose",
                    "You'll get a clear estimate before any work begins",
                    "All repairs backed by our quality guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Prefer to Call?</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Same-day appointments often available when you call directly.
                </p>
                <a href="tel:5404186626" className="block">
                  <Button className="w-full font-semibold" size="sm">
                    <Phone className="mr-2 h-3.5 w-3.5" /> 540-418-6626
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

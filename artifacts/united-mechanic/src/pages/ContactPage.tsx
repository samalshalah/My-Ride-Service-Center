import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <PageHero
        badge={<><span>Get in Touch</span></>}
        title="Contact Us"
        subtitle="Call or stop by our Fredericksburg location — we're ready to help with your vehicle."
        image="/myride-fredericksburg.jpg"
        imageAlt="My Ride Service Center in Fredericksburg, VA"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-zinc-50 rounded-3xl border border-border p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Fredericksburg Location</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground">2715 Lafayette Blvd</p>
                      <p className="text-muted-foreground">Fredericksburg, VA 22408</p>
                      <a
                        href="https://www.google.com/maps/search/2715+Lafayette+Blvd+Fredericksburg+VA+22408"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-2 text-primary text-sm font-medium hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a href="tel:5404186626" className="text-primary font-semibold hover:underline text-lg">
                        540-418-6626
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Hours of Operation</p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex justify-between gap-8">
                          <span>Monday – Friday</span>
                          <span className="font-medium text-foreground">8:00 AM – 6:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span className="font-medium text-foreground">9:00 AM – 3:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span className="font-medium text-red-500">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <Facebook className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Follow Us</p>
                      <a
                        href="https://www.facebook.com/profile.php?id=61583662515240"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1877F2] font-medium hover:underline"
                      >
                        Facebook →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-primary rounded-3xl p-8 text-white">
                <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-white/80 mb-6 text-sm">
                  Call us now or book an appointment online. Same-day service often available.
                </p>
                <a href="tel:5404186626" className="block mb-3">
                  <Button variant="outline" size="lg" className="w-full font-semibold border-white text-white hover:bg-white hover:text-primary">
                    <Phone className="mr-2 h-5 w-5" /> Call 540-418-6626
                  </Button>
                </a>
                <Link href="/appointment">
                  <Button size="lg" className="w-full font-semibold bg-white text-primary hover:bg-white/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="bg-zinc-50 rounded-3xl border border-border p-8">
                <h3 className="font-bold text-foreground mb-4">Auto Repair Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  From oil changes and brakes to transmission repair and engine diagnostics — we handle it all.
                </p>
                <Link href="/auto-repair">
                  <Button variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
                    View Auto Repair →
                  </Button>
                </Link>
              </div>

              <div className="bg-zinc-50 rounded-3xl border border-border p-8">
                <h3 className="font-bold text-foreground mb-4">Body Shop Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Collision repair, dent removal, painting, and glass replacement with insurance support.
                </p>
                <Link href="/body-shop">
                  <Button variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
                    View Body Shop →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-3xl overflow-hidden h-80 border border-border shadow-sm">
            <iframe
              title="My Ride Service Center Map"
              src="https://maps.google.com/maps?q=2715+Lafayette+Blvd+Fredericksburg+VA+22408&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

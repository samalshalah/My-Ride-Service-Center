import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  const locations = [
    {
      name: "Fredericksburg",
      address: "31 Perchwood Dr",
      city: "Fredericksburg, VA 22405",
      phone: "504-658-1818",
      tel: "5046581818",
      badge: "Virginia State Inspection Station",
      mapUrl: "https://maps.google.com/?q=31+Perchwood+Dr+Fredericksburg+VA+22405",
      href: "/locations/fredericksburg",
      hours: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 8:00 AM – 3:00 PM", "Sunday: Closed"],
    },
    {
      name: "Woodbridge",
      address: "1025 Cannons Ct Unit 2",
      city: "Woodbridge, VA 22191",
      phone: "571-458-7251",
      tel: "5714587251",
      badge: null,
      mapUrl: "https://maps.google.com/?q=1025+Cannons+Ct+Unit+2+Woodbridge+VA+22191",
      href: "/locations/woodbridge",
      hours: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 8:00 AM – 3:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Call, get directions, or chat on WhatsApp — we're ready to help with your vehicle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold">{loc.name}</h2>
                  {loc.badge && (
                    <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                      {loc.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{loc.address}</p>
                      <p className="text-muted-foreground">{loc.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${loc.tel}`} className="font-bold text-xl hover:text-primary transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground space-y-0.5">
                      {loc.hours.map((h) => <p key={h}>{h}</p>)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${loc.tel}`}>
                    <Button className="w-full font-semibold">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                  </a>
                  <a href={loc.mapUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </a>
                  <Link href={loc.href} className="col-span-2">
                    <Button variant="ghost" className="w-full text-primary hover:bg-primary/5">
                      View Location Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-14 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-16 w-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="h-8 w-8 text-[#25D366]" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Prefer to chat?</h2>
            <p className="text-muted-foreground mb-6">
              Reach us on WhatsApp for quick questions, appointment requests, or to send photos of your vehicle.
            </p>
            <a href="https://wa.me/15046581818" target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold h-12 px-8">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

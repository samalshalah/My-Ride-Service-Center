import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { ServiceData } from "@/data/services";

export type { ServiceData };

interface Props {
  service: ServiceData;
}

export default function ServicePage({ service }: Props) {
  const backHref = service.category === "body-shop" ? "/body-shop" : "/auto-repair";
  const backLabel = service.category === "body-shop" ? "Body Shop" : "Auto Repair";

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <PageHero
        badge={<><span>{backLabel}</span></>}
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        imageAlt={service.title}
        actions={
          <>
            <a href="tel:5404186626">
              <Button size="lg" className="font-semibold w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </a>
            <Link href="/appointment">
              <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
          </>
        }
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to {backLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">What's Included</h2>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose My Ride</h2>
                <ul className="space-y-3">
                  {service.whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-zinc-50 rounded-3xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm text-muted-foreground mb-5">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Fredericksburg, VA</p>
                      <p>2715 Lafayette Blvd</p>
                      <p>Fredericksburg, VA 22408</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href="tel:5404186626" className="font-medium text-foreground hover:text-primary">540-418-6626</a>
                  </div>
                </div>
                <a href="tel:5404186626" className="block mb-2">
                  <Button className="w-full font-semibold">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
                <Link href="/appointment">
                  <Button variant="outline" className="w-full font-semibold">
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="bg-primary rounded-3xl p-6 text-white">
                <h3 className="font-bold mb-2">Hours of Operation</h3>
                <ul className="space-y-1.5 text-sm text-white/80">
                  <li className="flex justify-between"><span>Mon – Fri</span><span className="font-medium text-white">8:00 AM – 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-white">9:00 AM – 3:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-red-300">Closed</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

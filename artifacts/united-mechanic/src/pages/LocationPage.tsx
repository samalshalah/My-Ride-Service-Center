import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data/services";

export interface LocationData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  tel: string;
  mapUrl: string;
  services: string[];
  badge?: string;
  heroImage: string;
  description: string;
  highlights: string[];
}

export const LOCATIONS: Record<string, LocationData> = {
  fredericksburg: {
    name: "Fredericksburg",
    address: "31 Perchwood Dr",
    city: "Fredericksburg",
    state: "VA",
    zip: "22405",
    phone: "504-658-1818",
    tel: "5046581818",
    mapUrl: "https://maps.google.com/?q=31+Perchwood+Dr+Fredericksburg+VA+22405",
    services: [
      "Virginia State Vehicle Inspection",
      "Transmission Repair & Rebuild",
      "Engine Diagnostics & Repair",
      "Brake Service",
      "AC & Heat Repair",
      "Wheel Alignment",
      "Diesel Engine Service",
      "Oil Changes & Maintenance",
      "Electrical Repair",
      "All Makes & Models",
    ],
    badge: "VA State Inspection Station",
    heroImage: "/hero.png",
    description:
      "Our Fredericksburg location is the original United Mechanic shop — serving the community for over 20 years. As a certified Virginia State Inspection Station, we handle everything from routine maintenance to complex transmission rebuilds. Our experienced technicians are here for you, Monday through Saturday.",
    highlights: [
      "Certified Virginia State Inspection Station",
      "Award-winning transmission specialists",
      "20+ years serving the Fredericksburg community",
      "Domestic and import vehicles — all makes and models",
      "Honest estimates with no surprise charges",
    ],
  },
  woodbridge: {
    name: "Woodbridge",
    address: "1025 Cannons Ct Unit 2",
    city: "Woodbridge",
    state: "VA",
    zip: "22191",
    phone: "571-458-7251",
    tel: "5714587251",
    mapUrl: "https://maps.google.com/?q=1025+Cannons+Ct+Unit+2+Woodbridge+VA+22191",
    services: [
      "Transmission Repair & Rebuild",
      "Engine Diagnostics & Repair",
      "Brake Service",
      "AC & Heat Repair",
      "Wheel Alignment",
      "Diesel Engine Service",
      "Oil Changes & Maintenance",
      "Electrical Repair",
      "All Makes & Models",
    ],
    heroImage: "/transmission.png",
    description:
      "United Mechanic's Woodbridge location brings the same trusted expertise and quality workmanship to Prince William County. Whether you need a transmission rebuild, brake service, or general auto repair, our skilled technicians deliver honest, reliable work — just like we have for two decades.",
    highlights: [
      "Same trusted United Mechanic quality",
      "Full-service auto repair facility",
      "Convenient Woodbridge/Dale City location",
      "Skilled technicians, honest pricing",
      "Domestic and import vehicles welcome",
    ],
  },
};

export default function LocationPage({ slug }: { slug: string }) {
  const location = LOCATIONS[slug];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Location not found.</p>
      </div>
    );
  }

  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        badge={location.badge ? <><ShieldCheck className="h-4 w-4" /><span>{location.badge}</span></> : <><span>Our Location</span></>}
        title={`United Mechanic — ${location.name}`}
        subtitle={`${location.address}, ${location.city}, ${location.state} ${location.zip}`}
        image={location.heroImage}
        imageAlt={location.name}
      />

      {/* Quick Contact Bar */}
      <section className="bg-primary py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="h-5 w-5 shrink-0" />
            <span className="font-medium">{location.address}, {location.city}, {location.state} {location.zip}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${location.tel}`}>
              <Button size="sm" className="bg-white text-primary hover:bg-zinc-100 font-bold">
                <Phone className="mr-2 h-4 w-4" /> {location.phone}
              </Button>
            </a>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white text-sm underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">About This Location</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{location.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-5">Why Choose This Location</h3>
                <div className="space-y-3">
                  {location.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-base font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-5">Services Available at {location.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {location.services.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-border">
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sticky Sidebar */}
            <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-zinc-950 text-white rounded-3xl p-8 sticky top-28 space-y-6">
                <h3 className="text-xl font-bold">Contact {location.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{location.address}</p>
                      <p className="text-zinc-400 text-sm">{location.city}, {location.state} {location.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${location.tel}`} className="font-medium text-lg hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-zinc-400">
                      <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                      <p>Saturday: 8:00 AM – 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <a href={`tel:${location.tel}`} className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-semibold">
                    <Phone className="mr-2 h-5 w-5" /> Call Us Now
                  </Button>
                </a>

                <a href={location.mapUrl} target="_blank" rel="noreferrer" className="block">
                  <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800 h-10">
                    Get Directions
                  </Button>
                </a>

                <a href="https://wa.me/15046581818" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-[#25D366] text-sm hover:underline">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.112 1.528 5.836L.057 23.929a.5.5 0 0 0 .622.607l6.248-1.637A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.534-5.21-1.457l-.374-.224-3.874 1.016 1.03-3.765-.244-.386A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-bold">Popular Services</h2>
            <Link href="/services" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-center w-full h-9 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium transition-colors"
                  >
                    More Information
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

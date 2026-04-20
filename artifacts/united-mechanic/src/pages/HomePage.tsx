import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Star, Car, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/services";

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/shop-interior.jpg" alt="United Mechanic Auto Shop" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <ShieldCheck className="mr-2 h-4 w-4" /> 20+ Years of Trusted Service in Northern Virginia
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Your One Stop Service Shop
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed">
                Transmission, export, and auto repair for all makes and models. Two convenient locations serving Fredericksburg and Woodbridge, VA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5046581818">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold">
                    <Phone className="mr-2 h-5 w-5" /> Fredericksburg
                  </Button>
                </a>
                <a href="tel:5714587251">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Phone className="mr-2 h-5 w-5" /> Woodbridge
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "20+ Years Experience", desc: "Decades of proven reliability" },
              { icon: Star, title: "Award Winning", desc: "Best of Business Rated" },
              { icon: Car, title: "All Makes & Models", desc: "Domestic and Import" },
              { icon: CheckCircle2, title: "Certified Mechanics", desc: "Expert repair and diagnostics" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
              <p className="text-muted-foreground text-lg">Expert auto care for every need</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                    {service.description.split(".")[0]}.
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 flex items-center justify-center w-full h-10 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors"
                  >
                    More Information
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All 8 Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Two Convenient Locations</h2>
            <p className="text-lg text-muted-foreground">Serving Northern Virginia — wherever you are</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Fredericksburg",
                address: "31 Perchwood Dr, Fredericksburg, VA 22405",
                phone: "504-658-1818",
                tel: "5046581818",
                badge: "VA Inspection Station",
                services: "State Inspection, Transmission, Auto Repair",
                href: "/locations/fredericksburg",
              },
              {
                name: "Woodbridge",
                address: "1025 Cannons Ct Unit 2, Woodbridge, VA 22191",
                phone: "571-458-7251",
                tel: "5714587251",
                badge: null,
                services: "Transmission, Auto Repair",
                href: "/locations/woodbridge",
              },
            ].map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl border border-border p-8 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{loc.name}</h3>
                  {loc.badge && (
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {loc.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${loc.tel}`} className="font-semibold text-lg hover:text-primary transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={`tel:${loc.tel}`} className="flex-1">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                  </a>
                  <Link href={loc.href}>
                    <Button variant="outline" className="px-5">
                      Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get your vehicle serviced?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Call either location or chat with us on WhatsApp — we're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5046581818">
                <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 font-bold h-12 px-8">
                  <Phone className="mr-2 h-4 w-4" /> Call Fredericksburg
                </Button>
              </a>
              <a href="tel:5714587251">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-12 px-8">
                  <Phone className="mr-2 h-4 w-4" /> Call Woodbridge
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

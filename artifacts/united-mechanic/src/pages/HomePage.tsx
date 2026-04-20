import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Star, Car, CheckCircle2, ArrowRight, Wrench, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/myride-hero.jpg" alt="My Ride Service Center" className="w-full h-full object-cover" style={{ objectPosition: "65% center" }} />
          <div className="absolute inset-0 bg-zinc-950/55" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              My Ride Service Center
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Fredericksburg's Trusted Collision &amp; Auto Repair Experts
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-xl">
              From minor dents to major repairs — we bring your car back to life with certified technicians, fast turnaround, and insurance support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button size="lg" className="font-semibold w-full sm:w-auto text-base px-8">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:5404186626">
                <Button size="lg" variant="outline" className="font-semibold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto text-base px-8">
                  <Phone className="mr-2 h-5 w-5" /> 540-418-6626
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            {[
              { icon: <ShieldCheck className="h-4 w-4" />, text: "Certified Technicians" },
              { icon: <Star className="h-4 w-4" />, text: "5-Star Rated Service" },
              { icon: <Car className="h-4 w-4" />, text: "All Makes & Models" },
              { icon: <CheckCircle2 className="h-4 w-4" />, text: "Insurance Support" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                {icon} {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Repair Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Wrench className="h-4 w-4" /> Auto Repair
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Complete Auto Repair Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From routine maintenance to complex mechanical repairs — we handle it all with certified expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {AUTO_REPAIR_SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/auto-repair/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 h-44 cursor-pointer">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm leading-tight">{service.title}</h3>
                      <span className="inline-flex items-center gap-1 text-primary text-xs mt-1 font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/auto-repair">
              <Button size="lg" variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
                View All Auto Repair Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Body Shop Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <PaintBucket className="h-4 w-4" /> Body Shop
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Collision &amp; Body Shop Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional collision repair, paint, and restoration — backed by insurance support and precision craftsmanship.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BODY_SHOP_SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/body-shop/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 h-44 cursor-pointer">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm leading-tight">{service.title}</h3>
                      <span className="inline-flex items-center gap-1 text-primary text-xs mt-1 font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/body-shop">
              <Button size="lg" variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
                View All Body Shop Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star className="h-4 w-4" /> Why My Ride
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Fredericksburg's Repair Shop You Can Trust
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Certified Technicians", desc: "Our team is trained and certified for both mechanical and body shop repairs." },
                  { title: "Insurance Support", desc: "We work directly with your insurance company to make claims stress-free." },
                  { title: "Fast Turnaround", desc: "We respect your time — same-day service available on qualifying repairs." },
                  { title: "All Makes & Models", desc: "Domestic and foreign vehicles, from sedans to trucks and SUVs." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden h-80"
            >
              <img src="/myride-auto-repair.jpg" alt="Our shop" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Book Your Repair?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
              Call us or schedule online — same-day appointments often available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <Button size="lg" className="font-semibold w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:5404186626">
                <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
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

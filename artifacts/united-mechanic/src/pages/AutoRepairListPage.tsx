import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { AUTO_REPAIR_SERVICES } from "@/data/services";

export default function AutoRepairListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        badge={<><Wrench className="h-4 w-4" /><span>Auto Repair</span></>}
        title="Auto Repair Services"
        subtitle="Complete mechanical repair and maintenance for all makes and models — performed by certified technicians in Fredericksburg, VA."
        image="/shop-interior.jpg"
        imageAlt="Auto repair shop"
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTO_REPAIR_SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/auto-repair/${service.slug}`}>
                  <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white cursor-pointer">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.tagline}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get Your Vehicle Fixed?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            Call us or book online — same-day appointments often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

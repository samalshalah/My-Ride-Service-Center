import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data/services";

export default function ServicesListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        badge={<><span>Auto Services</span></>}
        title="Our Specialized Services"
        subtitle="From routine maintenance to complex transmission rebuilds — our experienced technicians handle it all."
        image="/shop-interior.jpg"
        imageAlt="United Mechanic shop"
      />

      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
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
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">Have a question about your vehicle?</h2>
          <p className="text-muted-foreground mb-6">Call either of our locations — we're happy to give you an honest diagnosis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5046581818">
              <Button size="lg" className="w-full sm:w-auto font-semibold">
                <Phone className="mr-2 h-4 w-4" /> Fredericksburg: 504-658-1818
              </Button>
            </a>
            <a href="tel:5714587251">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                <Phone className="mr-2 h-4 w-4" /> Woodbridge: 571-458-7251
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

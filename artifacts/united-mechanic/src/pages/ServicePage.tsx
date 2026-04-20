import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export type { ServiceData } from "@/data/services";
export { SERVICES } from "@/data/services";

import type { ServiceData } from "@/data/services";

function ServicePageLayout({ service }: { service: ServiceData }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden bg-zinc-950">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{service.title}</h1>
            <p className="text-xl text-zinc-300 max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What We Do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-border"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose United Mechanic</h3>
                <div className="space-y-4">
                  {service.whyUs.map((reason, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center shrink-0 text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-base font-medium pt-0.5">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-zinc-950 text-white rounded-3xl p-8 sticky top-28">
                <h3 className="text-xl font-bold mb-6">Contact a Location</h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="font-bold text-lg mb-3">Fredericksburg</h4>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-zinc-400 text-sm">31 Perchwood Dr<br />Fredericksburg, VA 22405</p>
                    </div>
                    <a href="tel:5046581818" className="block w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Phone className="mr-2 h-4 w-4" /> 504-658-1818
                      </Button>
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="font-bold text-lg mb-3">Woodbridge</h4>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-zinc-400 text-sm">1025 Cannons Ct Unit 2<br />Woodbridge, VA 22191</p>
                    </div>
                    <a href="tel:5714587251" className="block w-full">
                      <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                        <Phone className="mr-2 h-4 w-4" /> 571-458-7251
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                  <p className="text-sm text-zinc-400 mb-3">Or chat on WhatsApp</p>
                  <a
                    href="https://wa.me/15046581818"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default ServicePageLayout;

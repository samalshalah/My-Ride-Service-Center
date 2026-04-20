"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Car, ShieldCheck, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoxedHero from "@/components/BoxedHero";

export default function DealershipContent() {
  return (
    <div className="min-h-screen bg-background">
      <BoxedHero
        category="Dealership Program"
        title="My Ride Dealership Service Program"
        locationLine="in Fredericksburg, VA"
        description="Fleet-level service quality for dealerships — fast turnaround, transparent pricing, and quality repairs your customers can trust. One trusted local partner for reconditioning, overflow work, and collision claims."
        image="/myride-dealership.jpg"
        imageAlt="My Ride Service Center dealership program"
        stats={[
          { label: "Priority", sub: "Scheduling" },
          { label: "Full-Service", sub: "One Shop" },
          { label: "Volume", sub: "Pricing" },
        ]}
        breadcrumb={[{ href: "/dealership-service-program", label: "Dealership Program" }]}
        appointmentHref="/contact"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4" /> Trusted Partner
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-5">A Service Partner Your Dealership Can Rely On</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The My Ride Dealership Service Program is designed to give automotive dealers a trusted, local repair partner for reconditioning, overflow work, and customer vehicle service — handled with the same care as your own in-house team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need trade-in reconditioning, body work, mechanical repairs, or a reliable shop to refer customers to, My Ride Service Center delivers consistent quality with fast turnaround.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden">
              <img src="/myride-fredericksburg.jpg" alt="Professional service" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Program Benefits</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">What makes the My Ride Dealership Program the right choice for your operation.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="h-6 w-6" />, title: "Fast Turnaround", desc: "Priority scheduling for dealership partners — we respect your reconditioning timelines." },
              { icon: <DollarSign className="h-6 w-6" />, title: "Competitive Pricing", desc: "Volume-friendly rates with transparent invoicing — no hidden fees, ever." },
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Quality Guaranteed", desc: "Every repair is performed by experienced technicians using quality parts." },
              { icon: <Car className="h-6 w-6" />, title: "Full-Service Capability", desc: "Mechanical, body shop, paint, and glass — one shop handles it all." },
              { icon: <Users className="h-6 w-6" />, title: "Dedicated Contact", desc: "A direct line to our team — no being transferred or waiting in queues." },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: "Insurance Support", desc: "We handle all insurance coordination for collision and body work claims." },
            ].map(({ icon, title, desc }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-primary mb-4">{icon}</div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Services Available to Dealers</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Trade-in vehicle reconditioning","Pre-delivery mechanical inspections","Dent and scratch repair","Auto painting and color matching",
              "Frame straightening and collision repair","Windshield and glass replacement","Brake, suspension, and engine repair","Oil changes and routine maintenance",
              "Transmission service and repair","Customer vehicle referral handling",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Interested in the Dealership Program?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">Call us to discuss how My Ride Service Center can support your dealership's service needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5404186626">
                <Button size="lg" className="font-semibold w-full sm:w-auto"><Phone className="mr-2 h-4 w-4" /> Call Now</Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

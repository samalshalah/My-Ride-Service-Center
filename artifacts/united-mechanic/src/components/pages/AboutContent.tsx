"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Wrench, Users, ArrowRight, Car, PaintBucket, Building2, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoxedHero from "@/components/BoxedHero";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <BoxedHero
        category="About Us"
        title="About My Ride Service Center"
        locationLine="Fredericksburg, VA"
        description="For over 25 years, My Ride Service Center has been Fredericksburg's trusted home for auto repair, collision body shop services, and our dedicated Dealership Service Program — all under one roof."
        image="/myride-about-hero.jpg"
        imageAlt="My Ride Service Center — 25 years serving Fredericksburg, VA"
        stats={[
          { label: "25+", sub: "Years Serving VA" },
          { label: "All Makes", sub: "& Models" },
          { label: "Insurance", sub: "Approved" },
        ]}
        breadcrumb={[{ href: "/about", label: "About" }]}
        appointmentHref="/appointment"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Heart className="h-4 w-4" /> Our Story
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-5">25 Years Serving the Fredericksburg, VA Community</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                My Ride Service Center has been a cornerstone of the Fredericksburg community for over 25 years. What started as a commitment to honest, reliable auto repair has grown into a full-service operation covering three areas of expertise: auto mechanical repair, collision body shop work, and a dedicated Dealership Service Program.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Over the decades, we've built lasting relationships with drivers and dealerships across Fredericksburg, Stafford, and Spotsylvania, VA — built on one simple principle: do the job right and treat every customer with respect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you've been in an accident, need routine maintenance, or are a dealership looking for a reliable local repair partner — My Ride Service Center has the experience, the equipment, and the team to handle it.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden">
              <img src="/myride-body-shop-hero.jpg" alt="My Ride Service Center shop — Fredericksburg, VA" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Divisions */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Three Services, One Trusted Shop</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From everyday mechanical repairs to full collision restoration and dealership partnerships — we cover every aspect of vehicle care in Fredericksburg, VA.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="h-7 w-7" />,
                title: "Auto Repair",
                desc: "Full mechanical repair and maintenance for all makes and models — oil changes, brakes, engine diagnostics, transmission service, AC & heating, exhaust, electrical, and more.",
                link: "/auto-repair",
                label: "View Auto Repair Services",
              },
              {
                icon: <PaintBucket className="h-7 w-7" />,
                title: "Body Shop",
                desc: "Complete collision repair, dent removal, frame straightening, auto painting, scratch repair, glass replacement, and rust repair — with direct insurance billing support.",
                link: "/body-shop",
                label: "View Body Shop Services",
              },
              {
                icon: <Building2 className="h-7 w-7" />,
                title: "Dealership Service Program",
                desc: "A trusted local partner for automotive dealerships — trade-in reconditioning, overflow mechanical work, collision claims, and customer vehicle referrals with fast turnaround and volume pricing.",
                link: "/dealership-service-program",
                label: "View Dealership Program",
              },
            ].map(({ icon, title, desc, link, label }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-8 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">{icon}</div>
                <h3 className="text-xl font-extrabold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                <Link href={link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  {label} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">What We Stand For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The values that have guided every repair we've performed for 25 years.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle2 className="h-6 w-6" />, title: "Honesty", desc: "We give you a straight answer and a fair estimate before any work begins — no surprises." },
              { icon: <Wrench className="h-6 w-6" />, title: "Expertise", desc: "Experienced technicians trained in both mechanical repair and collision bodywork across all makes and models." },
              { icon: <Car className="h-6 w-6" />, title: "Quality", desc: "Quality parts, proper techniques, and repairs done right the first time — every time." },
              { icon: <Users className="h-6 w-6" />, title: "Community", desc: "We're a local Fredericksburg business, and we're proud to have served our neighbors for over 25 years." },
            ].map(({ icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-50 rounded-2xl border border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-4">{icon}</div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Come See Us in Fredericksburg, VA</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">2715 Lafayette Blvd, Fredericksburg, VA 22408 — call us or book an appointment online. Serving Fredericksburg, Stafford, and Spotsylvania for 25+ years.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5404186626">
                <Button size="lg" className="font-semibold w-full sm:w-auto"><Phone className="mr-2 h-4 w-4" /> Call 540-418-6626</Button>
              </a>
              <Link href="/appointment">
                <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">Book Appointment</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

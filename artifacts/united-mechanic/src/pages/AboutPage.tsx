import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Users, ArrowRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BoxedHero from "@/components/BoxedHero";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <BoxedHero
        category="About Us"
        title="About My Ride Service Center"
        locationLine="Fredericksburg, VA"
        description="Fredericksburg's trusted auto repair and collision body shop — built on honest service, certified expertise, and a commitment to our community. From routine maintenance to complex collision repairs, we handle it all under one roof."
        image="/myride-fredericksburg.jpg"
        imageAlt="My Ride Service Center Fredericksburg"
        stats={[
          { label: "Certified", sub: "Technicians" },
          { label: "All Makes", sub: "& Models" },
          { label: "Insurance", sub: "Approved" },
        ]}
        breadcrumb={[{ href: "/about", label: "About" }]}
        appointmentHref="/appointment"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Users className="h-4 w-4" /> Who We Are
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-5">
                Fredericksburg's Trusted Collision &amp; Auto Repair Experts
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                My Ride Service Center is Fredericksburg, Virginia's full-service auto repair and collision body shop. We serve the community with certified technicians, fast turnaround, and a commitment to honest, transparent service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Whether you've been in an accident, need routine maintenance, or are dealing with a complex mechanical issue, we handle it all under one roof — from brake repairs and engine diagnostics to frame straightening and auto painting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with all major insurance providers to make collision claims as smooth as possible. Our goal is simple: bring your car back to life and get you back on the road with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden h-80"
            >
              <img src="/myride-body-shop-hero.jpg" alt="My Ride Service Center shop" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-foreground mb-3">What We Stand For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The values that guide every repair we perform.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Honesty", desc: "We give you a straight answer and a fair estimate before any work begins." },
              { icon: <Wrench className="h-6 w-6" />, title: "Expertise", desc: "Certified technicians trained in both mechanical repair and collision bodywork." },
              { icon: <Car className="h-6 w-6" />, title: "Quality", desc: "Quality parts, proper techniques, and repairs done right the first time." },
              { icon: <Users className="h-6 w-6" />, title: "Community", desc: "We're a local Fredericksburg business committed to our neighbors." },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-foreground mb-5">Full-Service Shop Under One Roof</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              From AC repair to frame straightening — our team handles every type of vehicle repair with the same standard of quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auto-repair">
                <Button size="lg" className="font-semibold w-full sm:w-auto">
                  Auto Repair Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/body-shop">
                <Button size="lg" variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                  Body Shop Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Come See Us in Fredericksburg
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
              2715 Lafayette Blvd, Fredericksburg, VA 22408 — call us or book an appointment online.
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

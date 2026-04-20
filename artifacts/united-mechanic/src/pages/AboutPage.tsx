import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Wrench, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end overflow-hidden bg-zinc-950">
        <img src="/hero.png" alt="United Mechanic Shop" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">About United Mechanic</h1>
            <p className="text-lg text-zinc-300">A community fixture in Northern Virginia for over two decades</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">More than 20 years delivering safety and confidence.</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                United Mechanic isn't a chain — it's a community fixture. We are the shop where your neighbors have been bringing their cars for over two decades. Founded in Fredericksburg, Virginia, we built our reputation the old-fashioned way: by being honest, doing quality work, and standing behind every repair.
              </p>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                We specialize in transmission rebuilds, expert diagnostics, and general auto repair for all makes and models. When other shops turned away difficult jobs, we figured them out. That reputation for solving hard problems is what brought customers from all over Northern Virginia — and what keeps them coming back.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our growth into Woodbridge was driven by demand — customers who moved further north still wanted the United Mechanic experience. Today we operate two full-service facilities, each with the same commitment: fix it right the first time, with no surprises.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/transmission.png" alt="Mechanic at work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-5xl font-bold">20+</p>
                <p className="font-medium text-primary-foreground/80 mt-1">Years in Business</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">The principles that have guided us for more than two decades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Honesty",
                desc: "We tell you what your car needs — nothing more, nothing less. No upsells, no invented problems.",
              },
              {
                icon: Wrench,
                title: "Quality",
                desc: "We fix it right the first time. Every repair is backed by our commitment to lasting workmanship.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "We're your neighbors. We've served the same families for generations and take that trust seriously.",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "Award-winning work recognized by Business Rate as the top Transmission Shop in Fredericksburg, VA.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-white rounded-2xl border border-border shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-4 p-8 bg-yellow-50 border border-yellow-200 rounded-3xl">
              <div className="h-20 w-20 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                <Star className="h-10 w-10 text-yellow-600 fill-yellow-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-700 mb-1">Award</p>
                <h3 className="text-2xl font-bold text-zinc-900">Best of Business Rated</h3>
                <p className="text-muted-foreground">Transmission Shop — Fredericksburg, Virginia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Come see what 20+ years of experience looks like</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">Visit either of our locations or give us a call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/fredericksburg">
              <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 font-bold h-12 px-8 w-full sm:w-auto">
                Fredericksburg Location <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/locations/woodbridge">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-12 px-8 w-full sm:w-auto">
                Woodbridge Location <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

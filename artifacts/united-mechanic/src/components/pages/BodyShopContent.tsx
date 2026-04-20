"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Shield, Clock, FileCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoxedHero from "@/components/BoxedHero";
import { BODY_SHOP_SERVICES } from "@/data/services";

const FAQ = [
  { q: "Do you work with insurance companies?", a: "Yes — My Ride Service Center works directly with all major insurance carriers including State Farm, GEICO, Allstate, Progressive, USAA, and more. We prepare the estimate, document the damage, and coordinate the repair so you deal with as little stress as possible." },
  { q: "How do I get a collision repair estimate?", a: "Simply bring your vehicle to our Fredericksburg shop for a free damage assessment. We inspect all visible and underlying damage, photograph everything, and provide a detailed written estimate. For insurance claims, we can submit the estimate directly to your carrier." },
  { q: "Will my car look like it did before the accident?", a: "Our goal is always a repair that's indistinguishable from the factory. We use computer spectrophotometer color matching, professional panel preparation, and quality paint products to deliver a factory-quality finish — not a 'repaired' look." },
  { q: "How long does collision repair take?", a: "Timeline depends on the extent of the damage and parts availability. Minor cosmetic repairs like scratch or dent work can take 1–3 days. Major collision repairs involving frame straightening and multiple panels can take 1–2 weeks. We'll give you an accurate timeline during your estimate." },
  { q: "Do you provide a warranty on body shop work?", a: "Yes. All body shop repairs at My Ride Service Center are backed by a warranty covering both parts and labor. If you experience any issues with our workmanship, contact us and we'll make it right." },
  { q: "What should I do right after a collision?", a: "First, ensure everyone's safety and call 911 if needed. Document the scene with photos. Exchange insurance information with the other driver. Then call My Ride Service Center at 540-418-6626 — we'll walk you through the next steps and coordinate with your insurance company." },
];

const WHY_US = [
  { icon: Shield, title: "Warranty on All Repairs", body: "Every body shop repair is backed by a warranty on parts and labor — factory-quality results guaranteed." },
  { icon: FileCheck, title: "Insurance Claim Support", body: "We work directly with all major carriers — we handle the paperwork so you focus on what matters." },
  { icon: Palette, title: "Computer Color Matching", body: "Spectrophotometer technology ensures your paint matches perfectly — even on faded or weathered vehicles." },
  { icon: Clock, title: "Accurate Repair Timelines", body: "We give realistic timelines upfront and keep you informed throughout every stage of the repair." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-zinc-50 transition-colors">
        <h3 className="text-sm md:text-base pr-4">{q}</h3>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-primary" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border">{a}</div>}
    </div>
  );
}

export default function BodyShopContent() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <BoxedHero
        category="Body Shop"
        title="Collision & Body Shop"
        description="My Ride Service Center is Fredericksburg, VA's trusted collision repair and body shop — handling everything from parking lot dents and door dings to major collision damage, frame straightening, and complete vehicle repaints. We work directly with all major insurance companies and use computer color matching technology to restore your vehicle to factory condition."
        tagline="Professional collision repair, dent removal, painting, and glass replacement — with insurance support every step of the way."
        image="/myride-body-shop-hero.jpg"
        imageAlt="My Ride Service Center collision and body shop Fredericksburg VA"
        stats={[
          { label: "Insurance", sub: "All Major Carriers" },
          { label: "Color", sub: "Computer Matched" },
          { label: "Warranty", sub: "Parts & Labor" },
        ]}
        features={["Collision damage repair","Dent & scratch removal","Auto painting & refinishing","Frame straightening"]}
        extraFeaturesCount={4}
        breadcrumb={[{ href: "/body-shop", label: "Body Shop" }]}
      />

      <section className="py-16 bg-zinc-50" aria-labelledby="bodyshop-services-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Do</p>
            <h2 id="bodyshop-services-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">Body Shop Services in Fredericksburg, VA</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">From minor cosmetic damage to major structural collision repair — our body shop team restores every vehicle to the highest standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BODY_SHOP_SERVICES.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={`/body-shop/${service.slug}`}>
                  <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white cursor-pointer h-full">
                    <div className="relative h-44 overflow-hidden">
                      <img src={service.image} alt={`${service.title} in Fredericksburg VA`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.tagline}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">Learn More <ArrowRight className="h-4 w-4" /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="about-bodyshop-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Fredericksburg's Collision Specialists</p>
              <h2 id="about-bodyshop-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-5">Factory-Quality Collision Repair — Not Just "Fixed"</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">A proper collision repair restores more than your vehicle's appearance — it restores its structural integrity, its paint protection, and its safety systems. At My Ride Service Center, our body shop technicians are trained to the highest standards of collision repair, using professional-grade equipment including computerized frame straightening, spectrophotometer color matching, and ADAS sensor recalibration after windshield and bumper work.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">We work directly with all major insurance carriers, including State Farm, GEICO, Allstate, Progressive, and USAA. Our team handles the documentation, coordinates with adjusters, and keeps you informed through every stage of the repair.</p>
              <p className="text-muted-foreground leading-relaxed">Every collision repair at My Ride Service Center is backed by a warranty on parts and labor. We don't release a vehicle until we're confident the repair meets the same standard as the original factory workmanship.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-zinc-50 rounded-2xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3"><Icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50" aria-labelledby="why-bodyshop-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Why My Ride</p>
            <h2 id="why-bodyshop-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">Why Fredericksburg Drivers Trust My Ride for Collision Repair</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Works with all major insurance companies","Computerized frame straightening to factory specs","Computer spectrophotometer color matching","ADAS sensor recalibration after bumper and glass work","Paintless dent removal — preserves factory paint","Warranty on all collision repairs","Free damage estimates","OEM and OEM-equivalent replacement parts","Serving Fredericksburg, Spotsylvania, and Stafford County"].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-border">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="faq-bodyshop-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Common Questions</p>
            <h2 id="faq-bodyshop-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">Frequently Asked Questions About Collision Repair in Fredericksburg</h2>
          </div>
          <div className="space-y-3">{FAQ.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}</div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">My Ride Service Center</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Had an Accident? We're Here to Help.</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">We work with all major insurance companies to get your vehicle restored quickly and correctly. Call us today or book your free estimate online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5404186626"><Button size="lg" className="font-semibold w-full sm:w-auto"><Phone className="mr-2 h-4 w-4" /> 540-418-6626</Button></a>
            <Link href="/appointment"><Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">Book Appointment</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

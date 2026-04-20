"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Star, Car, CheckCircle2, ArrowRight, Wrench, PaintBucket, Shield, Clock, DollarSign, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[82vh] flex flex-col justify-between overflow-hidden bg-zinc-950">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img src="/myride-hero.jpg" alt="My Ride Service Center" className="w-full h-full object-cover" style={{ objectPosition: "65% 10%" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/55 to-zinc-950/85" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
            {/* Eyebrow */}
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
              My Ride Service Center
            </p>

            {/* Headline */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-4">
              Fredericksburg's Trusted Body Shop &amp; Auto Repair Experts
            </h1>

            {/* Accent Bar */}
            <div className="h-1 w-20 bg-primary mb-5 rounded-full" />

            {/* SEO Description */}
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
              Serving Fredericksburg, Stafford, and Spotsylvania, VA — we handle everything from
              oil changes, brake repairs, and engine diagnostics to full collision repair,
              dent removal, and auto painting. All makes and models accepted, with direct insurance billing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/appointment">
                <Button size="lg" className="w-full sm:w-auto font-bold text-base px-9">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:5404186626">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold border-2 border-white/80 text-white hover:bg-white/10 text-base px-9">
                  <Phone className="mr-2 h-5 w-5" /> 540-418-6626
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <div className="relative z-10 w-full bg-zinc-950/80 backdrop-blur-md border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:divide-x divide-white/20">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Experienced Technicians" },
                { icon: <Star className="w-5 h-5 text-primary" />, text: "5-Star Rated" },
                { icon: <Wrench className="w-5 h-5 text-primary" />, text: "All Makes & Models" },
                { icon: <Shield className="w-5 h-5 text-primary" />, text: "Insurance Accepted" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center justify-center gap-2 px-4">
                  {icon}
                  <span className="text-white font-semibold tracking-wide text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auto Repair Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Wrench className="h-4 w-4" /> Auto Repair
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Auto Repair Services in Fredericksburg, VA</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From routine oil changes and brake service to engine diagnostics and transmission repair — My Ride Service Center handles it all.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {AUTO_REPAIR_SERVICES.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={`/auto-repair/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 h-44 cursor-pointer">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <PaintBucket className="h-4 w-4" /> Body Shop
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Body Shop Services in Fredericksburg, VA</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Professional collision repair, dent removal, auto painting, and frame straightening — backed by direct insurance billing at My Ride Service Center.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BODY_SHOP_SERVICES.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={`/body-shop/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 h-44 cursor-pointer">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* Dealership Program */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/myride-dealership.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" /> Dealership Service Program
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                My Ride Dealership Service Program — Fredericksburg, VA
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                My Ride Service Center partners with automotive dealerships across Fredericksburg, Stafford, and Spotsylvania, VA for trade-in reconditioning, overflow mechanical repairs, collision claims, and customer vehicle service — fast turnaround, transparent pricing, one trusted local partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dealership-service-program">
                  <Button size="lg" className="font-semibold w-full sm:w-auto">
                    Learn About the Program <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:5404186626">
                  <Button size="lg" variant="outline" className="font-semibold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" /> 540-418-6626
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Clock className="h-5 w-5 text-primary" />, title: "Priority Scheduling", desc: "Fast turnaround to keep your reconditioning pipeline moving." },
                { icon: <DollarSign className="h-5 w-5 text-primary" />, title: "Volume Pricing", desc: "Competitive rates with transparent invoicing — no hidden fees." },
                { icon: <Wrench className="h-5 w-5 text-primary" />, title: "Full-Service Shop", desc: "Mechanical repairs, body work, and painting under one roof." },
                { icon: <Users className="h-5 w-5 text-primary" />, title: "Dedicated Support", desc: "A single point of contact who knows your dealership's needs." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="mb-3">{icon}</div>
                  <p className="text-white font-semibold mb-1">{title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star className="h-4 w-4" /> Why My Ride
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Why Choose My Ride Service Center in Fredericksburg, VA?</h2>
              <div className="space-y-4">
                {[
                  { title: "Experienced Auto & Body Shop Technicians", desc: "Our team is trained for both mechanical and collision repairs across all makes and models." },
                  { title: "Direct Insurance Billing", desc: "We work directly with your insurance company to make collision claims stress-free." },
                  { title: "Fast Turnaround Times", desc: "We respect your time — same-day service available on qualifying repairs in Fredericksburg." },
                  { title: "All Makes & Models Accepted", desc: "Domestic and foreign vehicles, from sedans to trucks and SUVs — we service them all." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden h-80">
              <img src="/myride-auto-repair.jpg" alt="Our shop" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Star className="h-4 w-4 fill-primary text-primary" /> Customer Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">5-Star Reviews — My Ride Service Center, Fredericksburg VA</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real Google reviews from drivers across Fredericksburg, Stafford, and Spotsylvania, VA.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Great Price",
                body: "I had body damage to my rear bumper and it was right before Christmas and they were able to look at my car, order parts and get it done within a week. The level of customer service they provided was more than I could have asked for. They were consistent with keeping me updated on everything and were cheaper than majority of everyone else. Very professional and if I ever need anything with my vehicle in the future I know exactly where I am going. Thank you guys again for going above and beyond for me.",
                name: "Daniel Withiam",
              },
              {
                title: "Exceptional Services",
                body: "This is the best auto body shop in Fredericksburg. Highly recommend this place! Took care of my car very well, the staff was nice and the service was exceptional. Services: Tires, Auto exhaust system repair, Electrical, Body & Trim, Transmission replacement, Brakes, Air conditioning, Auto maintenance.",
                name: "Bashir Ahmad Faqiri",
              },
              {
                title: "Amazing Service!",
                body: "Absolutely amazing service! My experience at the My Ride Service Center was 10/10. The staff was super friendly and really knew what they were doing. The whole process was quick, smooth, and professional. I highly recommend!",
                name: "Bahar",
              },
            ].map(({ title, body, name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-7 flex flex-col gap-4 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">{body}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-border flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      Google Review
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/My+Ride+Service+Center/@38.2662,-77.5183,15z/data=!4m8!3m7!1s0x0:0x0!8m2!3d38.2662!4d-77.5183!9m1!1b1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:shadow-md transition-shadow"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              See All Reviews on Google
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Schedule Auto Repair or Body Shop Service in Fredericksburg, VA</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">Call My Ride Service Center or book online — same-day appointments often available at 540-418-6626.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <Button size="lg" className="font-semibold w-full sm:w-auto">Book Appointment</Button>
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
    </div>
  );
}

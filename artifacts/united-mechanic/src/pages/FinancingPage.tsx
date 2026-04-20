import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, ExternalLink, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const FINANCE_PARTNERS = [
  {
    name: "Koalafi",
    tagline: "Flexible lease-to-own financing",
    color: "#1a1a2e",
    logo: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto" fill="none">
        <text x="4" y="27" fontFamily="Georgia, serif" fontWeight="800" fontSize="26" fill="#1a1a2e">
          K
        </text>
        <text x="22" y="27" fontFamily="Georgia, serif" fontWeight="400" fontSize="22" fill="#1a1a2e">
          oalafi
        </text>
        <circle cx="14" cy="20" r="6" fill="none" stroke="#1a1a2e" strokeWidth="2" />
      </svg>
    ),
    applyUrl: "https://koalafi.com",
    features: [
      "No credit needed to apply",
      "Simple lease-to-own options",
      "Fast approval decisions",
      "Multiple payment term choices",
    ],
  },
  {
    name: "Snap Finance",
    tagline: "More approvals, less hassle",
    color: "#00a651",
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="text-2xl font-black text-[#00a651]">'snap</span>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-bold text-[#00a651] tracking-widest uppercase">finance</span>
        </div>
      </div>
    ),
    applyUrl: "https://snapfinance.com",
    features: [
      "Up to $5,000 in financing",
      "All credit types considered",
      "100-day payment option",
      "Quick, easy online application",
    ],
  },
  {
    name: "EasyPay Finance",
    tagline: "Pay over time, drive today",
    color: "#0066cc",
    logo: (
      <div className="flex items-center gap-0.5">
        <span className="text-2xl font-light text-[#0066cc] italic">easy</span>
        <span className="text-2xl font-black text-[#0066cc]">pay</span>
      </div>
    ),
    applyUrl: "https://easypayfinance.com",
    features: [
      "Point-of-sale financing",
      "No prepayment penalties",
      "Revolving credit line available",
      "Fast digital approval process",
    ],
  },
];

const TECHNET_BENEFITS = [
  "24-month / 24,000-mile nationwide warranty",
  "Roadside assistance coverage included",
  "Trip interruption coverage",
  "Honored at TechNet locations nationwide",
  "Call 866-588-0728 for warranty claims",
  "Learn more at technetprofessional.com",
];

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4" /> Financing Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
              Don't let the cost wait.<br />Fix it today.
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
              We partner with three flexible financing companies so you can get your vehicle repaired now and pay over time — with options for all credit types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5046581818">
                <Button size="lg" className="h-12 px-8 font-bold">
                  <Phone className="mr-2 h-4 w-4" /> Fredericksburg: 504-658-1818
                </Button>
              </a>
              <a href="tel:5714587251">
                <Button size="lg" variant="outline" className="h-12 px-8 font-bold border-zinc-600 text-white hover:bg-zinc-800">
                  <Phone className="mr-2 h-4 w-4" /> Woodbridge: 571-458-7251
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Finance Partners Banner */}
      <section className="py-6 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold text-base">
            We provide financing with the following companies
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {FINANCE_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-3xl border border-border shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col"
              >
                {/* Logo placeholder */}
                <div className="h-16 flex items-center mb-2">
                  {partner.logo}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{partner.tagline}</p>

                <ul className="space-y-3 flex-1 mb-8">
                  {partner.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={partner.applyUrl} target="_blank" rel="noreferrer">
                  <Button className="w-full font-semibold" variant="outline">
                    Apply with {partner.name} <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">How Financing Works</h2>
            <p className="text-lg text-muted-foreground">Get approved and on the road in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Call or Visit Us",
                desc: "Let us know you're interested in financing. We'll walk you through the options available at your location.",
              },
              {
                step: "2",
                title: "Apply in Minutes",
                desc: "We'll connect you with the financing partner that fits your situation. Most applications take under 5 minutes.",
              },
              {
                step: "3",
                title: "Get Your Car Fixed",
                desc: "Once approved, we complete your repairs right away. You drive out today and pay over time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TechNet Warranty */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 py-8 px-4"
            >
              <img
                src="/technet-shield-warranty.png"
                alt="TechNet 24-Month / 24,000-Mile Nationwide Warranty"
                className="w-44 md:w-56 drop-shadow-xl"
              />
              <img
                src="/technet-shield-roadside.png"
                alt="TechNet Roadside Assistance"
                className="w-44 md:w-56 drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <Star className="h-4 w-4 fill-blue-700" /> TechNet Professional
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Warranty Protection Plans<br />
                <span className="text-muted-foreground font-normal text-2xl">What You Need To Know</span>
              </h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you choose a TechNet Professional Service Center, you choose peace of mind. Our repairs are backed by a nationwide warranty honored at thousands of locations across the country.
              </p>
              <ul className="space-y-3 mb-8">
                {TECHNET_BENEFITS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="https://technetprofessional.com" target="_blank" rel="noreferrer">
                <Button variant="outline" className="font-semibold">
                  Visit TechNet Professional <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Call us and we'll help you find the right financing option for your repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5046581818">
                <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 font-bold h-12 px-8">
                  <Phone className="mr-2 h-4 w-4" /> Fredericksburg
                </Button>
              </a>
              <a href="tel:5714587251">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-12 px-8">
                  <Phone className="mr-2 h-4 w-4" /> Woodbridge
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

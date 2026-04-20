import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  CheckCircle2,
  Phone,
  MapPin,
  ExternalLink,
  Car,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const coverageItems = [
  "Parts and labor on repairs performed at our facility",
  "Engine and drivetrain components",
  "Brake system repairs",
  "Electrical system work",
  "Air conditioning and heating repairs",
  "Steering and suspension repairs",
  "Fuel system repairs",
  "Exhaust system repairs",
  "Transmission service and repairs",
  "Cooling system repairs",
];

const notCovered = [
  "Normal wear and tear on consumable parts",
  "Damage caused by accident, misuse, or neglect",
  "Parts not repaired or replaced by our facility",
  "Oil changes and routine maintenance services",
];

const roadsideItems = [
  { icon: Car, label: "Lockout service" },
  { icon: Wrench, label: "Flat tire repair or change" },
  { icon: AlertTriangle, label: "Emergency fluid delivery" },
  { icon: Shield, label: "Battery jump start" },
  { icon: Car, label: "Towing to nearest facility" },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Shield className="h-4 w-4" /> TechNet Professional
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Warranty Protection<br />
              <span className="text-primary">You Can Count On</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Every repair we perform is backed by a nationwide TechNet warranty — 24 months or 24,000 miles,
              honored at over 15,000 locations across North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5046581818">
                <Button size="lg" className="font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Fredericksburg: 504-658-1818
                </Button>
              </a>
              <a href="tel:5714587251">
                <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Woodbridge: 571-458-7251
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Shields */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src="/technet-shield-warranty.png"
                alt="TechNet Nationwide Warranty"
                className="w-36 md:w-44 drop-shadow-2xl mb-4"
              />
              <p className="text-white font-semibold text-sm">Nationwide Warranty</p>
              <p className="text-zinc-400 text-xs mt-1">24 Months / 24,000 Miles</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/technet-shield-roadside.png"
                alt="TechNet Roadside Assistance"
                className="w-36 md:w-44 drop-shadow-2xl mb-4"
              />
              <p className="text-white font-semibold text-sm">Roadside Assistance</p>
              <p className="text-zinc-400 text-xs mt-1">Up to $150 reimbursement/year</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/technet-shield-hazard.png"
                alt="TechNet Road Hazard"
                className="w-36 md:w-44 drop-shadow-2xl mb-4"
              />
              <p className="text-white font-semibold text-sm">Road Hazard</p>
              <p className="text-zinc-400 text-xs mt-1">Tire & wheel protection</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* What's Covered */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                What the Warranty Covers
              </h2>
              <div className="w-10 h-1 bg-primary rounded mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you have service and repairs performed at our TechNet Professional facility, you are covered
                by a nationwide limited repair warranty that extends across North America — for 24 months or
                24,000 miles, whichever comes first.
              </p>
              <ul className="space-y-3">
                {coverageItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Covered + How to Claim */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What Is Not Covered</h3>
                <ul className="space-y-3">
                  {notCovered.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-red-400 flex items-center justify-center">
                        <span className="block h-1.5 w-1.5 rounded-full bg-red-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-950 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">How to Make a Warranty Claim</h3>
                <ol className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
                    Return to our location if you are reasonably able to do so.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
                    If you are away from home, call the National Warranty Administrator to find the nearest authorized TechNet facility.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
                    Present your original repair invoice as proof of service.
                  </li>
                </ol>
                <a
                  href="tel:8665880728"
                  className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  <Phone className="h-4 w-4" /> National Warranty Admin: (866) 588-0728
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadside Assistance Detail */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Roadside Assistance Coverage
            </h2>
            <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              With any repair or service at United Mechanic, you receive roadside assistance coverage —
              reimbursable up to $150 per year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roadsideItems.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-border shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honored Nationwide Banner */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
              Peace of Mind, Wherever You Go
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Honored at 15,000+ Locations in North America
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-base">
              Whether you travel across state lines or move across the country, your United Mechanic warranty
              travels with you and is honored at any authorized TechNet Professional service center.
            </p>
            <a
              href="https://technetprofessional.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-white/90 text-sm font-medium hover:text-white underline underline-offset-4"
            >
              Learn more at technetprofessional.com <ExternalLink className="h-3.5 w-3.5" />
            </a>
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
              Ready to Get Your Car Fixed Right?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
              Bring your vehicle to United Mechanic and drive away with a repair backed by our nationwide TechNet warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations/fredericksburg">
                <Button size="lg" className="font-semibold w-full sm:w-auto">
                  <MapPin className="mr-2 h-4 w-4" /> Fredericksburg Location
                </Button>
              </Link>
              <Link href="/locations/woodbridge">
                <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                  <MapPin className="mr-2 h-4 w-4" /> Woodbridge Location
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

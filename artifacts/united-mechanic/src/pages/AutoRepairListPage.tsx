import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Shield, Clock, Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BoxedHero from "@/components/BoxedHero";
import { AUTO_REPAIR_SERVICES } from "@/data/services";

const FAQ = [
  { q: "How do I know when my car needs repairs?", a: "Common warning signs include dashboard warning lights, unusual noises (grinding, squealing, knocking), changes in vehicle handling or ride quality, decreased fuel economy, or a burning smell. When in doubt, bring your vehicle in — we offer free visual inspections and honest recommendations." },
  { q: "Do you work on all car makes and models?", a: "Yes. My Ride Service Center in Fredericksburg, VA services all domestic, Asian, and European makes and models including Ford, Chevrolet, GMC, Dodge, Honda, Toyota, Nissan, Hyundai, BMW, Mercedes-Benz, Volkswagen, and more." },
  { q: "Do you offer same-day auto repair?", a: "We offer same-day service on many common repairs including oil changes, brake pad replacement, battery replacement, and minor electrical work. For more complex repairs, we'll give you a realistic time estimate when you drop off your vehicle." },
  { q: "Will you give me an estimate before starting work?", a: "Always. We provide a written estimate before any repair begins. We never start work on your vehicle without your approval, and if additional issues are discovered during the repair, we contact you before proceeding." },
  { q: "Do your repairs come with a warranty?", a: "Yes. All parts and labor at My Ride Service Center are backed by a warranty. Ask our service advisors for specific warranty details on your repair — we stand behind our work." },
  { q: "Do I need an appointment for auto repair?", a: "Appointments are recommended and help us get to your vehicle faster. That said, we accept walk-ins and will do our best to accommodate you. Call us at 540-418-6626 or use our online booking to schedule your visit." },
];

const WHY_US = [
  { icon: Shield, title: "Warranty-Backed Repairs", body: "Every repair is backed by a warranty on parts and labor — you leave confident the job is done right." },
  { icon: Clock, title: "Same-Day Service Available", body: "Most common repairs are completed same day so you're not without your vehicle any longer than necessary." },
  { icon: ThumbsUp, title: "Honest Estimates Always", body: "We provide written estimates before starting any work and never add charges without your explicit approval." },
  { icon: Star, title: "Certified Technicians", body: "Our team is trained on all makes and models — domestic, Asian, and European — with the tools to match." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-zinc-50 transition-colors"
      >
        <h3 className="text-sm md:text-base pr-4">{q}</h3>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-primary" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AutoRepairListPage() {
  useEffect(() => {
    document.title = "Auto Repair in Fredericksburg, VA | My Ride Service Center";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      (meta as HTMLMetaElement).name = "description";
      document.head.appendChild(meta);
    }
    (meta as HTMLMetaElement).content =
      "Expert auto repair in Fredericksburg, VA. My Ride Service Center offers brake service, oil changes, engine diagnostics, transmission repair, and more — all makes and models. Call 540-418-6626.";

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
    const existing = document.getElementById("faq-schema-ar");
    if (existing) existing.remove();
    const s = document.createElement("script");
    s.id = "faq-schema-ar";
    s.type = "application/ld+json";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.getElementById("faq-schema-ar")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <BoxedHero
        category="Auto Repair"
        title="Auto Repair Services"
        description="My Ride Service Center is Fredericksburg, VA's trusted auto repair shop for all makes and models. From routine oil changes and brake service to complex engine diagnostics and transmission repair, our certified technicians deliver honest, accurate repairs — backed by a warranty and completed with same-day service whenever possible."
        tagline="Complete mechanical repair and maintenance for all makes and models — performed by certified technicians with same-day service on most common repairs."
        image="/myride-auto-repair.jpg"
        imageAlt="My Ride Service Center auto repair shop Fredericksburg VA"
        stats={[
          { label: "Same-Day", sub: "Service Available" },
          { label: "All Makes", sub: "& Models" },
          { label: "Warranty", sub: "Parts & Labor" },
        ]}
        features={[
          "Brake repair & replacement",
          "Engine diagnostics & repair",
          "Oil changes & fluid service",
          "Transmission service",
        ]}
        extraFeaturesCount={4}
        breadcrumb={[{ href: "/auto-repair", label: "Auto Repair" }]}
      />

      {/* Service Cards */}
      <section className="py-16 bg-zinc-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Fix</p>
            <h2 id="services-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">
              Complete Auto Repair Services in Fredericksburg, VA
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
              Every service is performed by trained technicians using quality parts — we cover everything your vehicle needs to run reliably and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTO_REPAIR_SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/auto-repair/${service.slug}`}>
                  <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white cursor-pointer h-full">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} in Fredericksburg VA`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.tagline}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust Content */}
      <section className="py-16 bg-white" aria-labelledby="about-repair-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Fredericksburg's Trusted Shop</p>
              <h2 id="about-repair-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-5">
                Honest Auto Repair You Can Rely On
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At My Ride Service Center, we believe auto repair should be straightforward and stress-free. Our technicians perform a thorough diagnosis before recommending any repair — so you understand exactly what's wrong and what it will cost before we touch your vehicle. We never recommend repairs your car doesn't need.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serving Fredericksburg, Spotsylvania, Stafford, King George, and Culpeper counties, we're the area's go-to shop for everything from a simple oil change to a complex drivetrain repair. Our team stays current on all makes and models — including the latest diagnostic equipment for modern vehicles with advanced safety and emissions systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We stand behind every repair with a warranty on parts and labor. If something isn't right, we make it right — no arguments, no excuses. That's the My Ride promise to every driver we serve.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-zinc-50 rounded-2xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-zinc-50" aria-labelledby="why-repair-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Why My Ride</p>
            <h2 id="why-repair-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">
              Why Fredericksburg Drivers Choose My Ride Service Center
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "All makes and models — domestic, Asian, and European",
              "Certified technicians with ongoing training",
              "Professional-grade diagnostic equipment",
              "Written estimates before every repair",
              "Same-day service on most common repairs",
              "Warranty on all parts and labor",
              "No unnecessary repairs — ever",
              "Convenient Mon–Fri 8–6, Sat 9–3 hours",
              "Serving Fredericksburg and surrounding counties",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-border">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="faq-repair-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Common Questions</p>
            <h2 id="faq-repair-heading" className="text-2xl md:text-3xl font-extrabold text-foreground">
              Frequently Asked Questions About Auto Repair in Fredericksburg
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">My Ride Service Center</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get Your Vehicle Fixed?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            Call us or book online — same-day appointments often available. Serving Fredericksburg, Spotsylvania, Stafford, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5404186626">
              <Button size="lg" className="font-semibold w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" /> 540-418-6626
              </Button>
            </a>
            <Link href="/appointment">
              <Button size="lg" variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

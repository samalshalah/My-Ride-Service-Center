import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { ServiceData } from "@/data/services";

export type { ServiceData };

interface Props {
  service: ServiceData;
}

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

export default function ServicePage({ service }: Props) {
  const backHref = service.category === "body-shop" ? "/body-shop" : "/auto-repair";
  const backLabel = service.category === "body-shop" ? "Body Shop" : "Auto Repair";
  const locationKeyword = "Fredericksburg, VA";

  useEffect(() => {
    document.title = service.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = service.metaDescription;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faq.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    };
    const existingScript = document.getElementById("faq-schema");
    if (existingScript) existingScript.remove();
    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, [service]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <PageHero
        badge={<><span>{backLabel}</span></>}
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        imageAlt={service.title}
        actions={
          <>
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
          </>
        }
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to {backLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Main Content ── */}
            <div className="lg:col-span-2 space-y-14">

              {/* SEO Lede */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 py-1"
              >
                {service.description}
              </motion.p>

              {/* Sectioned Long-Form Content */}
              {service.sections.map((section, i) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  aria-labelledby={`section-heading-${i}`}
                >
                  <h2 id={`section-heading-${i}`} className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{section.body}</p>
                </motion.section>
              ))}

              {/* What's Included */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                aria-labelledby="included-heading"
              >
                <h2 id="included-heading" className="text-2xl font-bold text-foreground mb-5">
                  What's Included in Our {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 bg-zinc-50 rounded-xl px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Our Process */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                aria-labelledby="process-heading"
              >
                <h2 id="process-heading" className="text-2xl font-bold text-foreground mb-6">
                  Our {service.title} Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.step}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Why Choose My Ride */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                aria-labelledby="why-heading"
              >
                <h2 id="why-heading" className="text-2xl font-bold text-foreground mb-5">
                  Why {locationKeyword} Drivers Choose My Ride Service Center
                </h2>
                <ul className="space-y-3">
                  {service.whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* FAQ Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                aria-labelledby="faq-heading"
              >
                <h2 id="faq-heading" className="text-2xl font-bold text-foreground mb-6">
                  Frequently Asked Questions About {service.title}
                </h2>
                <div className="space-y-3">
                  {service.faq.map(({ q, a }) => (
                    <FAQItem key={q} q={q} a={a} />
                  ))}
                </div>
              </motion.section>

              {/* Bottom CTA */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-zinc-950 rounded-3xl p-8 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">My Ride Service Center</p>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Ready to Schedule Your {service.title}?
                </h2>
                <p className="text-zinc-400 text-sm mb-6">
                  Call us or book online — serving {locationKeyword} and surrounding areas Mon–Sat.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              </motion.section>
            </div>

            {/* ── Sidebar ── */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="bg-zinc-50 rounded-3xl border border-border p-6 sticky top-24">
                <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm text-muted-foreground mb-5">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">My Ride Service Center</p>
                      <p>2715 Lafayette Blvd</p>
                      <p>Fredericksburg, VA 22408</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href="tel:5404186626" className="font-medium text-foreground hover:text-primary">540-418-6626</a>
                  </div>
                </div>
                <a href="tel:5404186626" className="block mb-2">
                  <Button className="w-full font-semibold">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
                <Link href="/appointment">
                  <Button variant="outline" className="w-full font-semibold">
                    Book Appointment
                  </Button>
                </Link>

                <div className="mt-5 pt-5 border-t border-border">
                  <h3 className="font-bold text-foreground mb-3">Hours of Operation</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Mon – Fri</span><span className="font-medium text-foreground">8:00 AM – 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-foreground">9:00 AM – 3:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-red-500">Closed</span></li>
                  </ul>
                </div>

                <div className="mt-5 pt-5 border-t border-border">
                  <h3 className="font-bold text-foreground mb-2 text-sm">Service Area</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Proudly serving Fredericksburg, Spotsylvania, Stafford, King George, and Culpeper counties.
                  </p>
                </div>
              </div>
            </motion.aside>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SeoLandingPageData } from "@/data/seoLandingPages";

export default function SeoLandingContent({ page }: { page: SeoLandingPageData }) {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <p className="text-xs text-zinc-400">
            <Link href="/" className="hover:text-zinc-600">Home</Link>
            <span className="mx-2 text-zinc-300">/</span>
            <span className="text-zinc-600 font-medium">{page.title}</span>
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-zinc-950 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/15 text-primary border border-primary/25 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
                  <Wrench className="h-4 w-4" />
                  {page.heroLabel}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {page.title}
                </h1>
                <p className="text-zinc-300 text-base leading-relaxed mt-5">{page.summary}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                {[
                  ["Fredericksburg", "Local shop"],
                  ["540-418-6626", "Call today"],
                  ["All makes", "And models"],
                ].map(([label, sub]) => (
                  <div key={label} className="bg-zinc-800 rounded-xl px-4 py-3">
                    <p className="text-white text-sm font-extrabold">{label}</p>
                    <p className="text-zinc-500 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href="tel:5404186626">
                  <Button size="lg" className="w-full sm:w-auto font-semibold">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 540-418-6626
                  </Button>
                </a>
                <Link href="/appointment">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                    Appointment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden border border-border">
              <img src={page.image} alt={`${page.title} at My Ride Service Center`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 rounded-xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">2715 Lafayette Blvd</p>
                    <p className="text-sm text-muted-foreground">Fredericksburg, VA 22408</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-extrabold text-foreground mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-extrabold text-foreground mb-5">What You Can Expect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-zinc-50 rounded-xl px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-foreground mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {page.faq.map((item) => (
                  <div key={item.q} className="border border-border rounded-xl p-5">
                    <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="bg-zinc-950 rounded-2xl p-6 sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">My Ride Service Center</p>
              <h2 className="text-xl font-extrabold text-white mb-3">Schedule {page.primaryService}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">Call or book online for service in Fredericksburg, VA.</p>
              <div className="space-y-2">
                <a href="tel:5404186626">
                  <Button className="w-full font-semibold">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
                <Link href="/appointment">
                  <Button variant="outline" className="w-full font-semibold border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                    Appointment
                  </Button>
                </Link>
              </div>
              <div className="border-t border-zinc-800 mt-6 pt-5">
                <p className="text-sm font-bold text-zinc-300 mb-2">Related Services</p>
                <div className="space-y-2">
                  {page.relatedLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center justify-between text-sm text-zinc-400 hover:text-primary">
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-border py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1 text-primary mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">Need {page.primaryService} in Fredericksburg?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-7">My Ride Service Center serves Fredericksburg, Stafford, Spotsylvania, and nearby Virginia communities.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:5404186626">
              <Button size="lg" className="font-semibold w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                540-418-6626
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Stat {
  label: string;
  sub: string;
}

interface BoxedHeroProps {
  category: string;
  title: string;
  locationLine?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  stats: Stat[];
  features?: string[];
  extraFeaturesCount?: number;
  breadcrumb?: { href: string; label: string }[];
  appointmentHref?: string;
}

export default function BoxedHero({
  category,
  title,
  locationLine = "in Fredericksburg, VA",
  subtitle,
  image,
  imageAlt,
  stats,
  features = [],
  extraFeaturesCount = 0,
  breadcrumb = [],
  appointmentHref = "/appointment",
}: BoxedHeroProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      {breadcrumb.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-2">
          <p className="text-xs text-zinc-400">
            <Link href="/" className="hover:text-zinc-600 cursor-pointer">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.href}>
                <span className="mx-2 text-zinc-300">›</span>
                {i < breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-zinc-600 cursor-pointer">{crumb.label}</Link>
                ) : (
                  <span className="text-zinc-600 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      )}

      {/* ── Boxed Two-Column Hero ── */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-zinc-200 shadow-md grid grid-cols-1 lg:grid-cols-2"
          style={{ minHeight: 420 }}
        >
          {/* Left — full bleed image */}
          <div className="relative min-h-[260px] lg:min-h-0">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Category pill */}
            <div className="absolute top-5 left-5">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {category}
              </span>
            </div>
          </div>

          {/* Right — dark info panel */}
          <div className="bg-zinc-950 flex flex-col justify-between p-8 lg:p-9">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
                {title}
                <span className="block text-primary text-xl md:text-2xl mt-1">{locationLine}</span>
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-6">{subtitle}</p>

              {/* Stat chips */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {stats.map(({ label, sub }) => (
                  <div key={label} className="bg-zinc-800 rounded-xl px-3 py-3 text-center">
                    <p className="text-white text-xs font-extrabold leading-tight">{label}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              {features.length > 0 && (
                <div className="space-y-1.5 mb-6">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="text-zinc-400 text-xs">{f}</span>
                    </div>
                  ))}
                  {extraFeaturesCount > 0 && (
                    <span className="text-xs text-primary font-semibold">
                      + {extraFeaturesCount} more ↓
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mt-2">
              <a href="tel:5404186626" className="flex-1">
                <Button className="w-full font-semibold flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
              <Link href={appointmentHref} className="flex-1">
                <Button variant="outline" className="w-full font-semibold border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

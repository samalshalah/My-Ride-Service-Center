import React from "react";
import { Link } from "wouter";
import { Phone, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="https://www.myunitedmechanic.com/logo.png"
              alt="United Mechanic"
              className="h-10 opacity-80 grayscale mb-4"
            />
            <p className="text-sm leading-relaxed">
              More than 20 years delivering safety and confidence in every mile. Serving Fredericksburg and Woodbridge, VA.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Locations</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white text-sm font-medium mb-1">Fredericksburg</p>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span>31 Perchwood Dr<br />Fredericksburg, VA 22405</span>
                </div>
                <a href="tel:5046581818" className="flex items-center gap-2 mt-1 text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-primary shrink-0" /> 504-658-1818
                </a>
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1">Woodbridge</p>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span>1025 Cannons Ct Unit 2<br />Woodbridge, VA 22191</span>
                </div>
                <a href="tel:5714587251" className="flex items-center gap-2 mt-1 text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-primary shrink-0" /> 571-458-7251
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "Fredericksburg", href: "/locations/fredericksburg" },
                { label: "Woodbridge", href: "/locations/woodbridge" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} United Mechanic Auto Service LLC. All rights reserved.</p>
          <a
            href="https://wa.me/15046581818"
            target="_blank"
            rel="noreferrer"
            className="text-[#25D366] hover:underline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

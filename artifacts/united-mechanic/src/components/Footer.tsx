import React from "react";
import { Link } from "wouter";
import { Phone, MapPin, Facebook } from "lucide-react";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <img src="/myride-logo-horiz.jpg" alt="My Ride Service Center" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Fredericksburg's trusted auto repair and collision body shop — certified technicians, fast turnaround, and insurance support.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61583662515240"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#1877F2] hover:underline text-sm"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Auto Repair</h3>
            <ul className="space-y-2">
              {AUTO_REPAIR_SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/auto-repair/${s.slug}`} className="text-sm hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/auto-repair" className="text-sm text-primary hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Body Shop</h3>
            <ul className="space-y-2">
              {BODY_SHOP_SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/body-shop/${s.slug}`} className="text-sm hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/body-shop" className="text-sm text-primary hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">Fredericksburg, VA</p>
                  <p>2715 Lafayette Blvd</p>
                  <p>Fredericksburg, VA 22408</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:5404186626" className="hover:text-white transition-colors">540-418-6626</a>
              </div>
              <div className="text-sm">
                <p className="text-white font-medium mb-1">Hours</p>
                <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 3:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} My Ride Service Center. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
            <Link href="/appointment" className="text-zinc-400 hover:text-white transition-colors">Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

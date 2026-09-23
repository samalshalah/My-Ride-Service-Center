"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowStickyBar(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    pathname === path || (pathname?.startsWith(path + "/") ?? false);

  const linkColor = (path: string) =>
    isActive(path)
      ? "text-primary"
      : scrolled
      ? "text-white hover:text-primary"
      : "text-foreground hover:text-primary";

  const dropdownPanel = scrolled
    ? "bg-zinc-900 border border-zinc-700"
    : "bg-white border border-border";

  const dropdownHeading = scrolled
    ? "text-white hover:bg-zinc-800"
    : "text-foreground hover:bg-accent";

  const dropdownItem = scrolled
    ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
    : "text-foreground/80 hover:bg-accent hover:text-accent-foreground";

  const dropdownDivider = scrolled ? "bg-zinc-700" : "bg-border";

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-zinc-950 shadow-lg shadow-black/30"
          : "bg-white border-b border-border shadow-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex items-center shrink-0">
            <img
              src={scrolled ? "/myride-logo-white.png" : "/myride-logo-dark.png"}
              alt="My Ride Service Center"
              className="h-14 w-[180px] object-contain object-left transition-all duration-300"
            />
          </Link>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-6">
            <Link href="/" className={cn("text-base font-bold transition-colors", linkColor("/"))}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("auto-repair")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={cn("flex items-center gap-1 text-base font-bold transition-colors", linkColor("/auto-repair"))}>
                <Link href="/auto-repair/">Auto Repair</Link>
              <button
                type="button"
                className="p-1"
                aria-label="Toggle auto repair services"
                aria-expanded={activeDropdown === "auto-repair"}
                onClick={() => setActiveDropdown(activeDropdown === "auto-repair" ? null : "auto-repair")}
              >
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "auto-repair" && "rotate-180")} />
              </button>
              </div>
              {activeDropdown === "auto-repair" && (
                <div className={cn("absolute left-0 top-full mt-0 w-64 rounded-xl shadow-xl py-1 z-50", dropdownPanel)}>
                  <Link href="/auto-repair" className={cn("block px-4 py-2.5 text-sm font-bold transition-colors", dropdownHeading)} onClick={() => setActiveDropdown(null)}>
                    All Auto Repair Services
                  </Link>
                  <div className={cn("h-px mx-2 my-1", dropdownDivider)} />
                  {AUTO_REPAIR_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/auto-repair/${s.slug}`} className={cn("block px-4 py-2 text-sm font-medium transition-colors", dropdownItem)} onClick={() => setActiveDropdown(null)}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("body-shop")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={cn("flex items-center gap-1 text-base font-bold transition-colors", linkColor("/body-shop"))}>
                <Link href="/body-shop/">Body Shop</Link>
              <button
                type="button"
                className="p-1"
                aria-label="Toggle body shop services"
                aria-expanded={activeDropdown === "body-shop"}
                onClick={() => setActiveDropdown(activeDropdown === "body-shop" ? null : "body-shop")}
              >
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "body-shop" && "rotate-180")} />
              </button>
              </div>
              {activeDropdown === "body-shop" && (
                <div className={cn("absolute left-0 top-full mt-0 w-64 rounded-xl shadow-xl py-1 z-50", dropdownPanel)}>
                  <Link href="/body-shop" className={cn("block px-4 py-2.5 text-sm font-bold transition-colors", dropdownHeading)} onClick={() => setActiveDropdown(null)}>
                    All Body Shop Services
                  </Link>
                  <div className={cn("h-px mx-2 my-1", dropdownDivider)} />
                  {BODY_SHOP_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/body-shop/${s.slug}`} className={cn("block px-4 py-2 text-sm font-medium transition-colors", dropdownItem)} onClick={() => setActiveDropdown(null)}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/dealership-service-program" className={cn("text-base font-bold transition-colors", linkColor("/dealership-service-program"))}>
              Dealership Program
            </Link>
            <Link href="/about" className={cn("text-base font-bold transition-colors", linkColor("/about"))}>
              About
            </Link>
            <Link href="/contact" className={cn("text-base font-bold transition-colors", linkColor("/contact"))}>
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href="/appointment">
              <Button variant="outline" size="sm" className={cn("font-semibold gap-1.5 transition-all", scrolled ? "border-zinc-600 text-zinc-200 bg-transparent hover:bg-zinc-800 hover:border-zinc-500" : "border-primary text-primary hover:bg-primary hover:text-white")}>
                <Calendar className="h-3.5 w-3.5" /> Appointment
              </Button>
            </Link>
            <a href="tel:5404186626">
              <Button size="sm" className="font-semibold gap-1.5">
                <Phone className="h-3.5 w-3.5" /> 540-418-6626
              </Button>
            </a>
          </div>

          <button
            className={cn("lg:hidden p-2 rounded-md transition-colors", scrolled ? "text-zinc-300 hover:text-white hover:bg-zinc-800" : "text-foreground/80 hover:text-foreground hover:bg-secondary")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={cn("lg:hidden border-t", scrolled ? "border-zinc-800 bg-zinc-900" : "border-border bg-white")}>
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" className={cn("block px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}>
              Home
            </Link>

            <div>
              <button
                className={cn("w-full flex items-center justify-between px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}
                onClick={() => setMobileExpanded(mobileExpanded === "auto-repair" ? null : "auto-repair")}
              >
                Auto Repair <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === "auto-repair" && "rotate-180")} />
              </button>
              {mobileExpanded === "auto-repair" && (
                <div className="pl-4 mt-1 space-y-0.5">
                  <Link href="/auto-repair" className={cn("block px-3 py-1.5 text-sm font-semibold text-primary rounded", scrolled ? "hover:bg-zinc-800" : "hover:bg-secondary")}>
                    All Auto Repair
                  </Link>
                  {AUTO_REPAIR_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/auto-repair/${s.slug}`} className={cn("block px-3 py-1.5 text-sm rounded transition-colors", scrolled ? "text-zinc-400 hover:bg-zinc-800 hover:text-white" : "text-muted-foreground hover:bg-secondary")}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className={cn("w-full flex items-center justify-between px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}
                onClick={() => setMobileExpanded(mobileExpanded === "body-shop" ? null : "body-shop")}
              >
                Body Shop <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === "body-shop" && "rotate-180")} />
              </button>
              {mobileExpanded === "body-shop" && (
                <div className="pl-4 mt-1 space-y-0.5">
                  <Link href="/body-shop" className={cn("block px-3 py-1.5 text-sm font-semibold text-primary rounded", scrolled ? "hover:bg-zinc-800" : "hover:bg-secondary")}>
                    All Body Shop Services
                  </Link>
                  {BODY_SHOP_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/body-shop/${s.slug}`} className={cn("block px-3 py-1.5 text-sm rounded transition-colors", scrolled ? "text-zinc-400 hover:bg-zinc-800 hover:text-white" : "text-muted-foreground hover:bg-secondary")}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/dealership-service-program" className={cn("block px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}>
              Dealership Program
            </Link>
            <Link href="/about" className={cn("block px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}>
              About
            </Link>
            <Link href="/contact" className={cn("block px-3 py-2 text-base font-bold rounded-lg transition-colors", scrolled ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "hover:bg-secondary")}>
              Contact
            </Link>

            <div className={cn("pt-3 border-t flex flex-col gap-2", scrolled ? "border-zinc-800" : "border-border")}>
              <Link href="/appointment">
                <Button variant="outline" className={cn("w-full font-semibold gap-2", scrolled ? "border-zinc-600 text-zinc-200 bg-transparent hover:bg-zinc-800" : "border-primary text-primary hover:bg-primary hover:text-white")}>
                  <Calendar className="h-4 w-4" /> Appointment
                </Button>
              </Link>
              <a href="tel:5404186626" className="block">
                <Button className="w-full font-semibold gap-2">
                  <Phone className="h-4 w-4" /> Call 540-418-6626
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>

      <div
        className={cn(
          "lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border flex transition-transform duration-300",
          showStickyBar ? "translate-y-0" : "translate-y-full"
        )}
        style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" }}
      >
        <a
          href="tel:5404186626"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/appointment"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-primary border-l border-border hover:bg-zinc-50 transition-colors"
        >
          <Calendar className="h-4 w-4" />
          Appointment
        </Link>
      </div>
    </>
  );
}

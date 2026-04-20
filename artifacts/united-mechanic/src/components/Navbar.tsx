import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

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
    location === path || location.startsWith(path + "/");

  const navLinkClass = (path: string) =>
    cn(
      "text-sm font-medium transition-colors",
      isActive(path) ? "text-primary" : "text-foreground/80 hover:text-foreground"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-white border-b border-border"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/myride-logo.png"
              alt="My Ride Service Center"
              className="h-10 w-auto"
            />
          </Link>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-6">
            <Link href="/" className={cn("text-sm font-medium transition-colors", location === "/" ? "text-primary" : "text-foreground/80 hover:text-foreground")}>
              Home
            </Link>

            <div className="relative">
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  isActive("/auto-repair") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                )}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "auto-repair" ? null : "auto-repair")
                }
              >
                Auto Repair <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "auto-repair" && "rotate-180")} />
              </button>
              {activeDropdown === "auto-repair" && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                  <Link
                    href="/auto-repair"
                    className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    All Auto Repair Services
                  </Link>
                  <div className="h-px bg-border mx-2 my-1" />
                  {AUTO_REPAIR_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/auto-repair/${s.slug}`}
                      className="block px-4 py-1.5 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  isActive("/body-shop") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                )}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "body-shop" ? null : "body-shop")
                }
              >
                Body Shop <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "body-shop" && "rotate-180")} />
              </button>
              {activeDropdown === "body-shop" && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                  <Link
                    href="/body-shop"
                    className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    All Body Shop Services
                  </Link>
                  <div className="h-px bg-border mx-2 my-1" />
                  {BODY_SHOP_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/body-shop/${s.slug}`}
                      className="block px-4 py-1.5 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/dealership-service-program" className={navLinkClass("/dealership-service-program")}>
              Dealership Program
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href="/appointment">
              <Button variant="outline" size="sm" className="font-semibold gap-1.5 border-primary text-primary hover:bg-primary hover:text-white">
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
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              Home
            </Link>

            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "auto-repair" ? null : "auto-repair")}
              >
                Auto Repair <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === "auto-repair" && "rotate-180")} />
              </button>
              {mobileExpanded === "auto-repair" && (
                <div className="pl-4 mt-1 space-y-0.5">
                  <Link href="/auto-repair" className="block px-3 py-1.5 text-sm font-semibold text-primary rounded hover:bg-secondary">
                    All Auto Repair
                  </Link>
                  {AUTO_REPAIR_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/auto-repair/${s.slug}`} className="block px-3 py-1.5 text-sm text-muted-foreground rounded hover:bg-secondary">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "body-shop" ? null : "body-shop")}
              >
                Body Shop <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === "body-shop" && "rotate-180")} />
              </button>
              {mobileExpanded === "body-shop" && (
                <div className="pl-4 mt-1 space-y-0.5">
                  <Link href="/body-shop" className="block px-3 py-1.5 text-sm font-semibold text-primary rounded hover:bg-secondary">
                    All Body Shop Services
                  </Link>
                  {BODY_SHOP_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/body-shop/${s.slug}`} className="block px-3 py-1.5 text-sm text-muted-foreground rounded hover:bg-secondary">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/dealership-service-program" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              Dealership Program
            </Link>
            <Link href="/about" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              Contact
            </Link>

            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link href="/appointment">
                <Button variant="outline" className="w-full font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <Calendar className="h-4 w-4" /> Book Appointment
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
  );
}

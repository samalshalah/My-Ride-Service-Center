import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Fredericksburg", href: "/locations/fredericksburg" },
      { label: "Woodbridge", href: "/locations/woodbridge" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "Warranty", href: "/warranty" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  const isActive =
    location === href || children.some((c) => location.startsWith(c.href) && c.href !== "/");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-foreground/80"
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-xl shadow-xl py-2 z-50">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm hover:bg-zinc-50 hover:text-primary transition-colors font-medium"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="https://www.myunitedmechanic.com/logo.png"
            alt="United Mechanic"
            className="h-12 object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <DropdownMenu
                key={link.href}
                label={link.label}
                href={link.href}
                children={link.children}
              />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a href="tel:5046581818">
            <Button size="sm" className="font-semibold shadow-sm ml-2">
              <Phone className="mr-2 h-3.5 w-3.5" /> Call Now
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-2 text-sm font-semibold rounded-lg hover:bg-zinc-50 hover:text-primary transition-colors ${
                  location === link.href ? "text-primary bg-primary/5" : ""
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary/20 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-border">
            <a href="tel:5046581818" className="block">
              <Button className="w-full font-semibold">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

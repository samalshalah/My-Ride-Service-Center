import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Phone,
  MapPin,
  CheckCircle2,
  Car,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { AUTO_REPAIR_SERVICES, BODY_SHOP_SERVICES } from "@/data/services";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 30 }, (_, i) => String(CURRENT_YEAR - i));
const TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const ALL_SERVICE_OPTIONS = [
  { group: "Auto Repair", services: AUTO_REPAIR_SERVICES },
  { group: "Body Shop", services: BODY_SHOP_SERVICES },
];

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    year: "", make: "", model: "",
    service: "", date: "", time: "",
    notes: "",
  });

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment at My Ride Service Center.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n` +
      `Vehicle: ${form.year} ${form.make} ${form.model}\n` +
      `Service: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\n\n` +
      (form.notes ? `Notes: ${form.notes}` : "")
    );
    window.open(`tel:5404186626`);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <PageHero
        badge={<><Calendar className="h-4 w-4" /><span>Schedule a Visit</span></>}
        title="Book a Repair Appointment"
        subtitle="Tell us about your vehicle and we'll get you in as soon as possible — same-day appointments often available."
        image="/myride-body-shop.jpg"
        imageAlt="My Ride Service Center"
      />

      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-border shadow-sm p-8 space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">Your Contact Info</h2>
                  <p className="text-sm text-muted-foreground">We'll use this to confirm your appointment.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Jane Smith" value={form.name} onChange={(e) => set("name", e.target.value)} required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(540) 555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>

                <div className="border-t border-border pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">Vehicle Information</h2>
                  <p className="text-sm text-muted-foreground mb-4">Tell us about your car.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label>Year *</Label>
                      <Select onValueChange={(v) => set("year", v)} required>
                        <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                        <SelectContent>
                          {YEARS.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="make">Make *</Label>
                      <Input id="make" placeholder="Toyota" value={form.make} onChange={(e) => set("make", e.target.value)} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="model">Model *</Label>
                      <Input id="model" placeholder="Camry" value={form.model} onChange={(e) => set("model", e.target.value)} required />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">Service &amp; Timing</h2>
                  <p className="text-sm text-muted-foreground mb-4">What do you need and when?</p>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label>Service Needed *</Label>
                      <Select onValueChange={(v) => set("service", v)} required>
                        <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {ALL_SERVICE_OPTIONS.map(({ group, services }) => (
                            <React.Fragment key={group}>
                              <SelectItem value={`__group_${group}`} disabled className="font-semibold text-foreground">
                                — {group} —
                              </SelectItem>
                              {services.map((s) => (
                                <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                              ))}
                            </React.Fragment>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={form.date}
                          onChange={(e) => set("date", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Preferred Time *</Label>
                        <Select onValueChange={(v) => set("time", v)} required>
                          <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                          <SelectContent>
                            {TIME_SLOTS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <textarea
                        id="notes"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe any symptoms, warning lights, or additional details..."
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-2xl p-4 text-sm text-muted-foreground">
                  By submitting, you agree that My Ride Service Center may contact you to confirm your appointment.
                </div>

                <a href="tel:5404186626" className="block">
                  <Button type="button" size="lg" className="w-full font-semibold text-base">
                    <Phone className="mr-2 h-5 w-5" /> Call to Book: 540-418-6626
                  </Button>
                </a>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Hours of Operation</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <li key={day} className="flex justify-between">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-medium ${hours === "Closed" ? "text-red-500" : "text-foreground"}`}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Our Location</h3>
                </div>
                <p className="font-semibold text-sm text-foreground mb-0.5">Fredericksburg, VA</p>
                <p className="text-xs text-muted-foreground mb-1">2715 Lafayette Blvd, VA 22408</p>
                <a href="tel:5404186626" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                  <Phone className="h-3.5 w-3.5" /> 540-418-6626
                </a>
              </div>

              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">What to Expect</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Our team will call to confirm your appointment",
                    "Our technicians will inspect and diagnose",
                    "You'll get a clear estimate before any work begins",
                    "All repairs backed by our quality guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Prefer to Call?</p>
                <p className="text-sm text-muted-foreground mb-4">Same-day appointments often available when you call directly.</p>
                <a href="tel:5404186626" className="block">
                  <Button className="w-full font-semibold" size="sm">
                    <Phone className="mr-2 h-3.5 w-3.5" /> 540-418-6626
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

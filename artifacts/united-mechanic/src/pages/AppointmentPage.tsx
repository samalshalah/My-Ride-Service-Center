import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Phone,
  MapPin,
  CheckCircle2,
  Car,
  Wrench,
  Clock,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data/services";

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const YEARS = Array.from({ length: 30 }, (_, i) => String(new Date().getFullYear() - i));

interface FormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  year: string;
  make: string;
  model: string;
  date: string;
  time: string;
  notes: string;
}

const EMPTY: FormState = {
  name: "", phone: "", email: "", location: "", service: "",
  year: "", make: "", model: "", date: "", time: "", notes: "",
};

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";
const selectCls =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition appearance-none";

export default function AppointmentPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi United Mechanic! I'd like to schedule a repair appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Location: ${form.location}`,
      `Service: ${form.service}`,
      `Vehicle: ${form.year} ${form.make} ${form.model}`,
      form.date ? `Preferred Date: ${form.date}` : null,
      form.time ? `Preferred Time: ${form.time}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const wa = `https://wa.me/15046581818?text=${encodeURIComponent(msg)}`;
    window.open(wa, "_blank");
    setSubmitted(true);
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <PageHero
        badge={<><Calendar className="h-4 w-4" /><span>Schedule a Visit</span></>}
        title="Book a Repair Appointment"
        subtitle="Tell us about your vehicle and we'll get you in as soon as possible — same-day appointments often available."
        image="/brakes.png"
        imageAlt="Brake service"
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
              {submitted ? (
                <div className="bg-white rounded-3xl border border-border shadow-sm p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground mb-3">Request Sent!</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your appointment request has been sent via WhatsApp. We'll confirm your booking shortly.
                    If you need immediate assistance, give us a call.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:5046581818">
                      <Button size="lg" className="font-semibold w-full sm:w-auto">
                        <Phone className="mr-2 h-4 w-4" /> Call Fredericksburg
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" onClick={() => { setForm(EMPTY); setSubmitted(false); }} className="w-full sm:w-auto">
                      Book Another
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-border shadow-sm p-8 space-y-7"
                >
                  <div>
                    <h2 className="text-xl font-extrabold text-foreground mb-1">Your Information</h2>
                    <p className="text-sm text-muted-foreground">We'll use this to confirm your appointment.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input
                        className={inputCls}
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set("name")}
                        required
                      />
                    </Field>
                    <Field label="Phone Number" required>
                      <input
                        className={inputCls}
                        placeholder="(540) 555-0100"
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        required
                      />
                    </Field>
                    <Field label="Email Address">
                      <input
                        className={inputCls}
                        placeholder="you@example.com"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                      />
                    </Field>
                    <Field label="Location" required>
                      <div className="relative">
                        <select className={selectCls} value={form.location} onChange={set("location")} required>
                          <option value="">Select a location</option>
                          <option value="Fredericksburg — 31 Perchwood Dr">Fredericksburg — 31 Perchwood Dr</option>
                          <option value="Woodbridge — 1025 Cannons Ct Unit 2">Woodbridge — 1025 Cannons Ct Unit 2</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </Field>
                  </div>

                  <hr className="border-border" />

                  <div>
                    <h2 className="text-xl font-extrabold text-foreground mb-1">Your Vehicle</h2>
                    <p className="text-sm text-muted-foreground">Help us prepare for your visit.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <Field label="Year" required>
                      <div className="relative">
                        <select className={selectCls} value={form.year} onChange={set("year")} required>
                          <option value="">Year</option>
                          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </Field>
                    <Field label="Make" required>
                      <input
                        className={inputCls}
                        placeholder="Toyota"
                        value={form.make}
                        onChange={set("make")}
                        required
                      />
                    </Field>
                    <Field label="Model" required>
                      <input
                        className={inputCls}
                        placeholder="Camry"
                        value={form.model}
                        onChange={set("model")}
                        required
                      />
                    </Field>
                  </div>

                  <Field label="Service Needed" required>
                    <div className="relative">
                      <select className={selectCls} value={form.service} onChange={set("service")} required>
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Not sure / General inspection">Not sure / General inspection</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </Field>

                  <hr className="border-border" />

                  <div>
                    <h2 className="text-xl font-extrabold text-foreground mb-1">Preferred Appointment</h2>
                    <p className="text-sm text-muted-foreground">We'll do our best to accommodate your schedule.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Preferred Date">
                      <input
                        className={inputCls}
                        type="date"
                        min={minDateStr}
                        value={form.date}
                        onChange={set("date")}
                      />
                    </Field>
                    <Field label="Preferred Time">
                      <div className="relative">
                        <select className={selectCls} value={form.time} onChange={set("time")}>
                          <option value="">Any time</option>
                          {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </Field>
                  </div>

                  <Field label="Describe the Issue">
                    <textarea
                      className={`${inputCls} resize-none`}
                      rows={4}
                      placeholder="Briefly describe what's going on with your vehicle..."
                      value={form.notes}
                      onChange={set("notes")}
                    />
                  </Field>

                  <Button type="submit" size="lg" className="w-full font-bold text-base h-12">
                    <MessageSquare className="mr-2 h-5 w-5" /> Send Appointment Request
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Submitting will open WhatsApp with your request pre-filled. We'll confirm your booking shortly.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Hours */}
              <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Hours of Operation</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 3:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <li key={day} className="flex justify-between">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-medium ${hours === "Closed" ? "text-red-500" : "text-foreground"}`}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-3xl border border-border shadow-sm p-6 space-y-5">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Our Locations</h3>
                </div>
                {[
                  { name: "Fredericksburg", address: "31 Perchwood Dr, VA 22405", phone: "504-658-1818", tel: "5046581818", href: "/locations/fredericksburg" },
                  { name: "Woodbridge", address: "1025 Cannons Ct Unit 2, VA 22191", phone: "571-458-7251", tel: "5714587251", href: "/locations/woodbridge" },
                ].map((loc) => (
                  <div key={loc.name}>
                    <p className="font-semibold text-sm text-foreground mb-0.5">{loc.name}</p>
                    <p className="text-xs text-muted-foreground mb-1">{loc.address}</p>
                    <a href={`tel:${loc.tel}`} className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                      <Phone className="h-3.5 w-3.5" /> {loc.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-zinc-950 rounded-3xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">What to Expect</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "We'll confirm your appointment within a few hours",
                    "Bring your vehicle in at your scheduled time",
                    "Our technicians will inspect and diagnose",
                    "You'll get a clear estimate before any work begins",
                    "All repairs are backed by our TechNet warranty",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prefer to Call */}
              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Prefer to Call?</p>
                <p className="text-sm text-muted-foreground mb-4">Same-day appointments often available when you call directly.</p>
                <a href="tel:5046581818" className="block">
                  <Button className="w-full font-semibold mb-2" size="sm">
                    <Phone className="mr-2 h-3.5 w-3.5" /> Fredericksburg
                  </Button>
                </a>
                <a href="tel:5714587251" className="block">
                  <Button variant="outline" className="w-full font-semibold" size="sm">
                    <Phone className="mr-2 h-3.5 w-3.5" /> Woodbridge
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

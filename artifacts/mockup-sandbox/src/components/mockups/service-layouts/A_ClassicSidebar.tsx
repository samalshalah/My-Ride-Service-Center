import React from "react";

const service = {
  title: "Brake Repair & Replacement",
  tagline: "Maximum stopping power. Your safety depends on it.",
  category: "Auto Repair",
  image: "/myride-brakes.jpg",
  description:
    "Brake failure is one of the leading causes of road accidents. At My Ride Service Center, we perform thorough brake inspections and provide reliable repairs using quality parts. Whether you need new brake pads or a complete brake system overhaul, we make sure your vehicle stops when it needs to.",
  details: [
    "Brake pad and rotor replacement",
    "Brake caliper repair or replacement",
    "Brake fluid flush and bleeding",
    "ABS and brake system diagnostics",
    "Emergency brake adjustment",
    "Drum brake service",
  ],
  whyUs: [
    "Safety-first approach to every inspection",
    "Quality parts with nationwide warranty",
    "Fast turnaround — same-day service available",
    "Honest evaluation — repair vs. replace guidance",
  ],
};

export function A_ClassicSidebar() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="h-14 bg-white border-b border-zinc-100 flex items-center px-8 gap-6">
        <img src="/myride-logo.jpg" alt="My Ride" className="h-8 rounded" />
        <div className="flex gap-5 ml-4 text-sm font-medium text-zinc-500">
          <span>Home</span><span className="text-red-600">Auto Repair</span><span>Body Shop</span><span>Contact</span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="text-sm px-3 py-1.5 border border-red-600 text-red-600 rounded-md font-semibold">Appointment</button>
          <button className="text-sm px-3 py-1.5 bg-red-600 text-white rounded-md font-semibold">540-418-6626</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-2">{service.category}</span>
          <h1 className="text-4xl font-bold text-white mb-2">{service.title}</h1>
          <p className="text-zinc-300 text-base">{service.tagline}</p>
          <div className="flex gap-3 mt-4">
            <button className="px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg">📞 Call Now</button>
            <button className="px-5 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg">Book Appointment</button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-8">
          {/* Main */}
          <div className="col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">About This Service</h2>
              <p className="text-zinc-600 leading-relaxed text-sm">{service.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">What's Included</h2>
              <ul className="space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-zinc-600">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">Why Choose My Ride</h2>
              <ul className="space-y-2">
                {service.whyUs.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-sm text-zinc-600">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">✓</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-bold text-zinc-900 mb-3 text-sm">Contact Us</h3>
              <p className="text-xs text-zinc-500 mb-1">📍 2715 Lafayette Blvd</p>
              <p className="text-xs text-zinc-500 mb-3">Fredericksburg, VA 22408</p>
              <p className="text-xs font-medium text-zinc-900 mb-4">📞 540-418-6626</p>
              <button className="w-full py-2 bg-red-600 text-white text-sm font-semibold rounded-lg mb-2">Call Now</button>
              <button className="w-full py-2 border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-lg">Book Appointment</button>
            </div>
            <div className="bg-red-600 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-3 text-sm">Hours</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-white/70">Mon – Fri</span><span className="font-medium">8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/70">Saturday</span><span className="font-medium">9:00 AM – 3:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/70">Sunday</span><span className="text-red-200">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

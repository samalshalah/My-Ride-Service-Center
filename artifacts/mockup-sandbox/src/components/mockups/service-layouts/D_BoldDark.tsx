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

export function D_BoldDark() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans">
      {/* Navbar */}
      <nav className="h-14 border-b border-zinc-800 flex items-center px-8 gap-6">
        <img src="/myride-logo.jpg" alt="My Ride" className="h-8 rounded" />
        <div className="flex gap-5 ml-4 text-sm font-medium text-zinc-500">
          <span>Home</span><span className="text-red-500">Auto Repair</span><span>Body Shop</span><span>Contact</span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="text-sm px-4 py-1.5 bg-red-600 text-white rounded-md font-bold">540-418-6626</button>
        </div>
      </nav>

      {/* Hero block */}
      <div className="relative px-10 pt-10 pb-0">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500">{service.category}</span>
        <h1 className="text-5xl font-black text-white mt-2 leading-none">{service.title}</h1>
        <p className="text-zinc-400 mt-3 text-base max-w-lg">{service.tagline}</p>
        <div className="flex gap-3 mt-6">
          <button className="px-6 py-2.5 bg-red-600 text-white font-bold rounded-lg text-sm">📞 Call Now</button>
          <button className="px-6 py-2.5 border border-zinc-700 text-zinc-300 font-semibold rounded-lg text-sm">Book Appointment</button>
        </div>
      </div>

      {/* Full-width image strip */}
      <div className="mt-8 h-48 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80" />
      </div>

      {/* Content on dark */}
      <div className="max-w-5xl mx-auto px-10 py-8 grid grid-cols-3 gap-8">
        {/* Description */}
        <div className="col-span-2 space-y-7">
          <div>
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-red-600 inline-block" /> About This Service
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-red-600 inline-block" /> What's Included
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {service.details.map((d) => (
                <div key={d} className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-300 flex items-center gap-2">
                  <span className="text-red-500 text-base">✓</span> {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold text-white text-sm mb-1">Why My Ride</h3>
            <ul className="space-y-3 mt-3">
              {service.whyUs.map((w) => (
                <li key={w} className="text-xs text-zinc-400 flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>{w}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-600 rounded-2xl p-5">
            <h3 className="font-bold text-white text-sm mb-1">Contact Us</h3>
            <p className="text-xs text-white/70 mb-1">2715 Lafayette Blvd</p>
            <p className="text-xs text-white/70 mb-3">Fredericksburg, VA 22408</p>
            <button className="w-full py-2 bg-white text-red-600 text-sm font-bold rounded-lg mb-2">📞 Call Now</button>
            <button className="w-full py-2 border border-white/30 text-white text-sm font-semibold rounded-lg">Book Appointment</button>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs font-bold text-white mb-2">Hours</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-zinc-400"><span>Mon–Fri</span><span className="text-white">8:00–6:00</span></div>
              <div className="flex justify-between text-zinc-400"><span>Saturday</span><span className="text-white">9:00–3:00</span></div>
              <div className="flex justify-between text-zinc-400"><span>Sunday</span><span className="text-red-400">Closed</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export function C_Editorial() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="h-14 bg-white border-b border-zinc-100 flex items-center px-8 gap-6">
        <img src="/myride-logo.jpg" alt="My Ride" className="h-8 rounded" />
        <div className="flex gap-5 ml-4 text-sm font-medium text-zinc-500">
          <span>Home</span><span className="text-red-600 font-semibold">Auto Repair</span><span>Body Shop</span><span>Contact</span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="text-sm px-4 py-1.5 bg-red-600 text-white rounded-full font-semibold">📞 Call</button>
        </div>
      </nav>

      {/* Wide banner image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 flex items-end px-10 pb-8">
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{service.category}</span>
            <h1 className="text-3xl font-black text-white">{service.title}</h1>
            <p className="text-white/70 text-sm mt-1">{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* 3-col layout */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="col-span-1 space-y-4">
          <div className="bg-red-600 rounded-2xl p-4 text-white">
            <p className="font-bold text-sm mb-1">Ready to book?</p>
            <p className="text-xs text-white/70 mb-3">Same-day appointments often available.</p>
            <button className="w-full py-2 bg-white text-red-600 text-xs font-bold rounded-lg mb-1.5">📞 Call Now</button>
            <button className="w-full py-2 bg-red-700 text-white text-xs font-semibold rounded-lg">Book Online</button>
          </div>
          <div className="border border-zinc-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-zinc-700 mb-2">Hours</p>
            <div className="space-y-1 text-xs text-zinc-500">
              <div className="flex justify-between"><span>Mon–Fri</span><span className="font-medium text-zinc-800">8–6</span></div>
              <div className="flex justify-between"><span>Sat</span><span className="font-medium text-zinc-800">9–3</span></div>
              <div className="flex justify-between"><span>Sun</span><span className="text-red-400">Closed</span></div>
            </div>
          </div>
          <div className="border border-zinc-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-zinc-700 mb-2">Location</p>
            <p className="text-xs text-zinc-500 leading-relaxed">2715 Lafayette Blvd<br/>Fredericksburg, VA 22408</p>
          </div>
        </div>

        {/* Center: main content */}
        <div className="col-span-2 space-y-7">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2">About This Service</h2>
            <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2">What's Included</h2>
            <ul className="space-y-2.5">
              {service.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="text-red-600 font-bold shrink-0">→</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: why us */}
        <div className="col-span-1">
          <h2 className="text-sm font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2">Why My Ride</h2>
          <div className="space-y-3">
            {service.whyUs.map((w, i) => (
              <div key={w} className="bg-zinc-50 rounded-xl p-3">
                <div className="text-lg mb-1">{["🛡️", "⭐", "⚡", "💬"][i]}</div>
                <p className="text-xs text-zinc-600 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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

export function B_ImmersiveSplit() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="h-14 bg-zinc-950 flex items-center px-8 gap-6">
        <img src="/myride-logo.jpg" alt="My Ride" className="h-8 rounded" />
        <div className="flex gap-5 ml-4 text-sm font-medium text-zinc-400">
          <span>Home</span><span className="text-red-400">Auto Repair</span><span>Body Shop</span><span>Contact</span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="text-sm px-3 py-1.5 bg-red-600 text-white rounded-md font-semibold">540-418-6626</button>
        </div>
      </nav>

      {/* Full-bleed Split Hero */}
      <div className="grid grid-cols-2 h-72">
        {/* Left: Dark text panel */}
        <div className="bg-zinc-950 flex flex-col justify-center px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">{service.category}</span>
          <h1 className="text-3xl font-extrabold text-white leading-tight mb-3">{service.title}</h1>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{service.tagline}</p>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg">📞 Call Now</button>
            <button className="px-5 py-2.5 border border-zinc-600 text-zinc-300 text-sm font-semibold rounded-lg">Appointment</button>
          </div>
        </div>
        {/* Right: Service image */}
        <div className="overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 gap-10">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-red-600 rounded-full inline-block" />
              About This Service
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm">{service.description}</p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
            <h3 className="font-bold text-zinc-900 text-sm mb-3">📍 Visit Us</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-3">2715 Lafayette Blvd<br/>Fredericksburg, VA 22408</p>
            <p className="text-sm font-bold text-zinc-900 mb-4">540-418-6626</p>
            <button className="w-full py-2 bg-red-600 text-white text-sm font-bold rounded-lg mb-2">Call Now</button>
            <button className="w-full py-2 border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-lg">Book Appointment</button>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-red-600 rounded-full inline-block" />
              What's Included
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {service.details.map((d) => (
                <div key={d} className="flex items-center gap-3 py-2 border-b border-zinc-100">
                  <span className="text-red-600 text-xs font-bold">✓</span>
                  <span className="text-sm text-zinc-700">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-600 rounded-2xl p-5 text-white">
            <h3 className="font-bold mb-3 text-sm">Why Choose My Ride</h3>
            <ul className="space-y-2">
              {service.whyUs.map((w) => (
                <li key={w} className="text-xs text-white/85 flex items-start gap-2">
                  <span className="mt-0.5">⭐</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

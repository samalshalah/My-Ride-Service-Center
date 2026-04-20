import React from "react";

const service = {
  title: "Brake Repair & Replacement",
  tagline: "Maximum stopping power. Your safety depends on it.",
  category: "Auto Repair",
  image: "/myride-brakes.jpg",
  description:
    "My Ride Service Center in Fredericksburg, VA delivers reliable brake repair and replacement on all makes and models. We use quality parts, back every repair with a warranty, and offer same-day service so you're never waiting to be safe on the road.",
  sections: [
    { heading: "Why Brake Maintenance Is Your #1 Safety Priority", body: "Your brakes are the single most important safety system on your vehicle. At My Ride Service Center, we measure pad thickness, rotor depth, and caliper operation at every visit to give you an honest assessment — never an upsell, always an accurate picture." },
    { heading: "Warning Signs Your Brakes Need Attention", body: "Squealing, grinding, a soft pedal, or a vibrating steering wheel are all signals that your brake system needs attention. Catching wear early turns a simple pad replacement into a far less expensive repair." },
  ],
  details: ["Brake pad replacement", "Rotor resurfacing or replacement", "Brake caliper repair", "Brake fluid flush", "ABS diagnostics", "Emergency brake adjustment"],
  whyUs: ["Complimentary brake inspection with every visit", "Quality parts — warranty on parts and labor", "Same-day service available", "Honest pricing — no upsells"],
  faq: [
    { q: "How often should brake pads be replaced?", a: "Brake pads typically last 30,000–70,000 miles depending on driving habits and vehicle weight. We measure pad thickness at every visit." },
    { q: "What does it mean when my brakes squeal?", a: "Most brake pads have a built-in wear indicator that contacts the rotor when pads are low, producing a squealing sound. This is your warning that replacement is due soon." },
  ],
};

const Check = () => (
  <svg className="h-4 w-4 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const stats = [
  { label: "Same-Day", sub: "Service Available" },
  { label: "All Makes", sub: "& Models" },
  { label: "Warranty", sub: "Parts & Labor" },
];

export function F_BoxedCard() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="h-14 bg-zinc-950 flex items-center px-8 gap-6">
        <span className="font-extrabold text-white tracking-tight text-lg">My Ride</span>
        <div className="flex gap-5 text-sm text-zinc-400 ml-4">
          <span>Home</span>
          <span className="text-red-500 font-semibold">Auto Repair</span>
          <span>Body Shop</span>
          <span>Contact</span>
        </div>
        <div className="ml-auto flex gap-3">
          <button className="border border-zinc-600 text-zinc-300 text-xs font-bold px-4 py-1.5 rounded-lg">Appointment</button>
          <button className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg">540-418-6626</button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-2">
        <p className="text-xs text-zinc-400">
          <span className="hover:text-zinc-600 cursor-pointer">Home</span>
          <span className="mx-2 text-zinc-300">›</span>
          <span className="hover:text-zinc-600 cursor-pointer">Auto Repair</span>
          <span className="mx-2 text-zinc-300">›</span>
          <span className="text-zinc-600 font-medium">Brake Repair</span>
        </p>
      </div>

      {/* ── Boxed Card Hero — full image left, info panel right ── */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-md grid grid-cols-2" style={{ minHeight: 460 }}>
          {/* Left — full bleed image */}
          <div className="relative">
            <img src={service.image} alt="Brake repair" className="absolute inset-0 w-full h-full object-cover" />
            {/* Category pill on image */}
            <div className="absolute top-5 left-5">
              <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Auto Repair
              </span>
            </div>
          </div>

          {/* Right — info panel */}
          <div className="bg-zinc-950 flex flex-col justify-between p-9">
            <div>
              <h1 className="text-2xl font-extrabold text-white leading-tight mb-2">
                Brake Repair &amp; Replacement
                <span className="block text-red-500 text-xl mt-1">in Fredericksburg, VA</span>
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-6">{service.tagline} Our certified technicians use quality parts and back every repair with a warranty.</p>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-3 mb-7">
                {stats.map(({ label, sub }) => (
                  <div key={label} className="bg-zinc-800 rounded-xl px-3 py-3 text-center">
                    <p className="text-white text-sm font-extrabold">{label}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Top details */}
              <div className="space-y-1.5 mb-6">
                {service.details.slice(0, 4).map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                    <span className="text-zinc-400 text-xs">{d}</span>
                  </div>
                ))}
                <span className="text-xs text-red-500 font-semibold cursor-pointer">+ {service.details.length - 4} more services ↓</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>
                Call Now
              </button>
              <button className="flex-1 border border-zinc-600 text-zinc-300 text-sm font-semibold py-3 rounded-xl">
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-3 gap-7">
          {/* Main */}
          <div className="col-span-2 space-y-8">
            {/* Lede */}
            <p className="text-zinc-600 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Sections */}
            {service.sections.map((s, i) => (
              <div key={s.heading} className={i % 2 === 0 ? "bg-zinc-50 rounded-2xl p-6 border border-zinc-100" : ""}>
                <h2 className="text-lg font-bold text-zinc-900 mb-2">{s.heading}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}

            {/* What's Included */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">What's Included in Our Brake Service</h2>
              <div className="grid grid-cols-2 gap-2.5">
                {service.details.map((d) => (
                  <div key={d} className="flex items-start gap-2 border border-zinc-200 rounded-xl px-3.5 py-2.5 bg-white">
                    <Check />
                    <span className="text-xs text-zinc-600">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div className="bg-red-600 rounded-2xl p-6 text-white">
              <h2 className="text-lg font-bold mb-4">Why Fredericksburg Drivers Choose My Ride</h2>
              <div className="grid grid-cols-2 gap-3">
                {service.whyUs.map((w) => (
                  <div key={w} className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-red-200 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-red-100 text-xs leading-relaxed">{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {service.faq.map(({ q, a }) => (
                  <details key={q} className="border border-zinc-200 rounded-xl overflow-hidden group">
                    <summary className="px-4 py-3 text-sm font-semibold text-zinc-900 cursor-pointer list-none flex items-center justify-between hover:bg-zinc-50">
                      <h3>{q}</h3>
                      <span className="text-zinc-400 text-lg group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-4 pb-4 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="border border-zinc-200 rounded-2xl overflow-hidden sticky top-5">
              <div className="bg-zinc-950 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">My Ride Service Center</p>
                <p className="text-white text-sm font-bold">2715 Lafayette Blvd<br />Fredericksburg, VA 22408</p>
                <a href="tel:5404186626" className="block mt-3 text-red-400 font-bold text-sm">540-418-6626</a>
              </div>
              <div className="p-5 space-y-2">
                <button className="w-full bg-red-600 text-white text-sm font-bold py-2.5 rounded-xl">Call Now</button>
                <button className="w-full border border-zinc-300 text-zinc-700 text-sm font-semibold py-2.5 rounded-xl">Book Appointment</button>
              </div>
              <div className="px-5 pb-5 border-t border-zinc-100 pt-4">
                <p className="text-xs font-bold text-zinc-700 mb-2">Hours</p>
                <div className="space-y-1 text-xs text-zinc-500">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="font-semibold text-zinc-800">8:00 – 6:00</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-zinc-800">9:00 – 3:00</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-red-500 font-semibold">Closed</span></div>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-zinc-700 mb-3">Why My Ride</p>
              <ul className="space-y-2">
                {service.whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-2"><Check /><span className="text-xs text-zinc-500">{w}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

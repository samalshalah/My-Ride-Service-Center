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

export function E_BoxedSplit() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans">
      {/* Navbar */}
      <nav className="h-14 bg-white border-b border-zinc-200 flex items-center px-8 gap-6 shadow-sm">
        <span className="font-extrabold text-zinc-900 tracking-tight text-lg">My Ride</span>
        <div className="flex gap-5 text-sm text-zinc-500 ml-4">
          <span>Home</span>
          <span className="text-red-600 font-semibold">Auto Repair</span>
          <span>Body Shop</span>
          <span>Contact</span>
        </div>
        <div className="ml-auto flex gap-3">
          <button className="border border-red-600 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full">Appointment</button>
          <button className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">540-418-6626</button>
        </div>
      </nav>

      {/* ── Boxed Two-Column Hero ── */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 grid grid-cols-2 min-h-[420px]">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-10 py-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 mb-4">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
              Auto Repair
            </span>
            <h1 className="text-3xl font-extrabold text-zinc-900 leading-tight mb-3">
              Brake Repair &amp; Replacement<br />
              <span className="text-red-600">in Fredericksburg, VA</span>
            </h1>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-sm">
              {service.tagline} Certified technicians, warranty-backed parts, and same-day service available.
            </p>
            <div className="flex gap-3">
              <button className="bg-red-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>
                Call Now
              </button>
              <button className="border border-zinc-300 text-zinc-700 text-sm font-semibold px-5 py-2.5 rounded-xl">
                Book Appointment
              </button>
            </div>
            {/* Quick trust strip */}
            <div className="flex gap-5 mt-7 pt-6 border-t border-zinc-100">
              {["Same-day service", "Warranty-backed", "Free inspection"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative overflow-hidden">
            <img src={service.image} alt="Brake repair" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5" />
            {/* Floating stat card */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-zinc-100">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900">Warranty Included</p>
                <p className="text-xs text-zinc-400">Parts &amp; Labor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-3 gap-7">
          {/* Main */}
          <div className="col-span-2 space-y-8">
            {/* Lede */}
            <p className="text-zinc-600 text-sm leading-relaxed border-l-4 border-red-600 pl-4 py-0.5 bg-red-50 rounded-r-xl pr-4">
              {service.description}
            </p>

            {/* Sections */}
            {service.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-bold text-zinc-900 mb-2">{s.heading}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}

            {/* What's Included */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">What's Included</h2>
              <div className="grid grid-cols-2 gap-2.5">
                {service.details.map((d) => (
                  <div key={d} className="flex items-start gap-2 bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5">
                    <Check />
                    <span className="text-xs text-zinc-600">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {service.faq.map(({ q, a }) => (
                  <div key={q} className="bg-white border border-zinc-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-zinc-900 mb-1.5">{q}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 sticky top-5">
              <h3 className="font-bold text-zinc-900 text-sm mb-4">Contact Us</h3>
              <p className="text-xs text-zinc-500 mb-1 flex gap-2"><span>📍</span><span>2715 Lafayette Blvd, Fredericksburg VA 22408</span></p>
              <p className="text-xs text-zinc-500 mb-4 flex gap-2"><span>📞</span><a href="tel:5404186626" className="text-red-600 font-semibold">540-418-6626</a></p>
              <button className="w-full bg-red-600 text-white text-sm font-bold py-2.5 rounded-xl mb-2">Call Now</button>
              <button className="w-full border border-zinc-300 text-zinc-700 text-sm font-semibold py-2.5 rounded-xl">Book Appointment</button>
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <h3 className="font-bold text-zinc-900 text-sm mb-2">Hours</h3>
                <div className="space-y-1 text-xs text-zinc-500">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="font-semibold text-zinc-800">8:00 – 6:00</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-zinc-800">9:00 – 3:00</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-red-500 font-semibold">Closed</span></div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-5">
              <h3 className="font-bold text-zinc-900 text-sm mb-3">Why My Ride</h3>
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

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, ArrowLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  details: string[];
  whyUs: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "ac-heat",
    title: "AC & Heat Repair",
    tagline: "Stay comfortable year-round with expert climate control service.",
    image: "/ac-heat.png",
    description:
      "A properly functioning AC and heating system is essential for driving comfort and safety. United Mechanic's technicians are trained to diagnose and repair all makes and models, from refrigerant recharges to blower motor replacements and full compressor rebuilds.",
    details: [
      "AC refrigerant recharge and leak detection",
      "Compressor replacement and rebuild",
      "Heater core and blower motor service",
      "Cabin air filter replacement",
      "Climate control system diagnostics",
      "Evaporator and condenser repair",
    ],
    whyUs: [
      "20+ years servicing Northern Virginia vehicles",
      "Specialized equipment for all AC systems",
      "Transparent, upfront pricing — no surprises",
      "All makes & models, domestic and import",
    ],
  },
  {
    slug: "alignment",
    title: "Alignment",
    tagline: "Precision alignment for even tire wear and confident handling.",
    image: "/alignment.png",
    description:
      "Misaligned wheels cause uneven tire wear and can make your vehicle pull to one side, affecting both safety and fuel efficiency. Our computerized alignment equipment ensures your wheels are set to exact manufacturer specifications, restoring proper handling and extending tire life.",
    details: [
      "4-wheel computerized alignment",
      "Camber, caster, and toe adjustment",
      "Steering and suspension inspection",
      "Tire wear analysis",
      "Post-alignment test drive",
      "Printout before and after alignment report",
    ],
    whyUs: [
      "State-of-the-art alignment technology",
      "Experienced technicians with precision tooling",
      "Saves money by extending tire lifespan",
      "Fast turnaround — same-day service available",
    ],
  },
  {
    slug: "brakes",
    title: "Brakes",
    tagline: "Maximum stopping power. Your safety depends on it.",
    image: "/brakes.png",
    description:
      "Brake failure is one of the leading causes of road accidents. At United Mechanic, we perform thorough brake inspections and provide reliable repairs using quality parts. Whether you need new brake pads or a complete brake system overhaul, we ensure your vehicle stops when it needs to.",
    details: [
      "Brake pad and shoe replacement",
      "Rotor and drum resurfacing or replacement",
      "Brake caliper service and replacement",
      "Brake fluid flush and bleed",
      "ABS system diagnostics and repair",
      "Emergency brake adjustment",
    ],
    whyUs: [
      "Safety-first approach to every repair",
      "Quality OEM and aftermarket parts",
      "Thorough multi-point brake inspection",
      "Honest recommendations — only what you need",
    ],
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    tagline: "Find the problem fast with advanced diagnostic technology.",
    image: "/diagnostics.png",
    description:
      "Modern vehicles are sophisticated machines with hundreds of sensors and control modules. When a warning light appears, our advanced diagnostic equipment reads fault codes, pinpoints the root cause, and gives you a clear explanation — no guesswork, just accurate answers.",
    details: [
      "OBD-II scan for all fault codes",
      "Check engine light diagnosis",
      "Transmission and ABS module diagnostics",
      "Sensor and actuator testing",
      "Electrical system fault tracing",
      "Emissions diagnostic and pre-inspection check",
    ],
    whyUs: [
      "Latest scan tools for all manufacturers",
      "Clear explanation of every code and cause",
      "Accurate diagnosis saves unnecessary repair costs",
      "Works on all makes, models, and model years",
    ],
  },
  {
    slug: "diesel",
    title: "Diesel",
    tagline: "Specialized diesel expertise for trucks and heavy-duty vehicles.",
    image: "/diesel.png",
    description:
      "Diesel engines demand specialized knowledge and tools. United Mechanic in Fredericksburg services Cummins, Duramax, and Powerstroke engines along with medium-duty trucks. Our diesel technicians understand the unique demands of compression-ignition engines and keep your truck running at peak performance.",
    details: [
      "Diesel engine diagnostics and repair",
      "Cummins, Duramax, and Powerstroke service",
      "Fuel injection system repair and cleaning",
      "EGR, DPF, and turbocharger service",
      "Diesel transmission service",
      "Medium-duty truck repair",
    ],
    whyUs: [
      "Dedicated diesel expertise — not a generalist",
      "Proper tools for high-torque diesel work",
      "Familiar with commercial and fleet vehicles",
      "Honest service from diesel specialists",
    ],
  },
  {
    slug: "oil-changes",
    title: "Oil Changes",
    tagline: "The simplest investment in your engine's long-term health.",
    image: "/oil-change.png",
    description:
      "Regular oil changes are the single most important maintenance task for extending engine life. United Mechanic uses the right oil for your engine — conventional, synthetic, or high-mileage — and performs a complimentary multi-point check at every visit to catch small issues before they become costly repairs.",
    details: [
      "Conventional, synthetic, and high-mileage oil",
      "Oil filter replacement",
      "Multi-point vehicle inspection",
      "Tire pressure check",
      "Fluid top-off (washer fluid, coolant)",
      "Next service reminder sticker",
    ],
    whyUs: [
      "Fast service — in and out quickly",
      "Correct oil specification for your vehicle",
      "No upsells you don't need",
      "Complimentary inspection with every change",
    ],
  },
  {
    slug: "transmission",
    title: "Transmissions",
    tagline: "Expert transmission repair from the region's most trusted shop.",
    image: "/transmission.png",
    description:
      "Transmission repair is one of the most complex jobs in auto service — and it's what United Mechanic is best known for. Whether you're experiencing slipping, hard shifts, or a complete failure, our transmission specialists diagnose and repair both automatic and manual transmissions with precision.",
    details: [
      "Automatic and manual transmission repair",
      "Complete transmission rebuilds",
      "Transmission fluid flush and filter change",
      "Clutch replacement and adjustment",
      "Transfer case and differential service",
      "Transmission computer diagnostics",
    ],
    whyUs: [
      "Award-winning transmission shop — Best of Business Rated",
      "20+ years of specialized transmission expertise",
      "Transparent rebuild process with warranty",
      "Serving Fredericksburg and Woodbridge",
    ],
  },
  {
    slug: "electrical",
    title: "Electrical Repair",
    tagline: "Precision electrical diagnostics for today's complex vehicles.",
    image: "/electrical.png",
    description:
      "Modern vehicles contain miles of wiring and dozens of control modules. Electrical problems can be intermittent, hard to trace, and expensive if misdiagnosed. United Mechanic's technicians use specialized diagnostic tools to accurately identify and fix electrical faults — keeping your vehicle's systems running efficiently and reliably.",
    details: [
      "Battery testing and replacement",
      "Alternator and starter repair",
      "Wiring harness diagnosis and repair",
      "Control module programming and replacement",
      "Lighting system repair (headlights, signals)",
      "Power accessories (windows, locks, mirrors)",
    ],
    whyUs: [
      "Experienced with complex modern vehicle electronics",
      "Accurate diagnosis prevents wasted repairs",
      "Full wiring and module capability",
      "Honest assessment of electrical issues",
    ],
  },
];

function ServicePageLayout({ service }: { service: ServiceData }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="https://www.myunitedmechanic.com/logo.png" alt="United Mechanic" className="h-12 object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">All Services</Link>
            <Link href="/#locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</Link>
            <a href="tel:5046581818">
              <Button size="lg" className="font-semibold shadow-md">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden bg-zinc-950">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{service.title}</h1>
            <p className="text-xl text-zinc-300 max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What We Do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-border"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose United Mechanic</h3>
                <div className="space-y-4">
                  {service.whyUs.map((reason, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center shrink-0 text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-base font-medium pt-0.5">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-zinc-950 text-white rounded-3xl p-8 sticky top-28">
                <h3 className="text-xl font-bold mb-6">Contact a Location</h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="font-bold text-lg mb-3">Fredericksburg</h4>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-zinc-400 text-sm">31 Perchwood Dr<br />Fredericksburg, VA 22405</p>
                    </div>
                    <a href="tel:5046581818" className="block w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Phone className="mr-2 h-4 w-4" /> 504-658-1818
                      </Button>
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="font-bold text-lg mb-3">Woodbridge</h4>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-zinc-400 text-sm">1025 Cannons Ct Unit 2<br />Woodbridge, VA 22191</p>
                    </div>
                    <a href="tel:5714587251" className="block w-full">
                      <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                        <Phone className="mr-2 h-4 w-4" /> 571-458-7251
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                  <p className="text-sm text-zinc-400">
                    Or chat on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/15046581818"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-[#25D366] hover:underline"
                  >
                    <Settings className="h-4 w-4" /> Open WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-10 text-zinc-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="https://www.myunitedmechanic.com/logo.png" alt="United Mechanic" className="h-10 opacity-75 grayscale" />
          <p className="text-sm">© {new Date().getFullYear()} United Mechanic. All rights reserved.</p>
          <Link href="/" className="text-sm hover:text-white transition-colors">Back to Home</Link>
        </div>
      </footer>

      <a
        href="https://wa.me/15046581818"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.112 1.528 5.836L.057 23.929a.5.5 0 0 0 .622.607l6.248-1.637A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.534-5.21-1.457l-.374-.224-3.874 1.016 1.03-3.765-.244-.386A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}

export default ServicePageLayout;

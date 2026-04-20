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

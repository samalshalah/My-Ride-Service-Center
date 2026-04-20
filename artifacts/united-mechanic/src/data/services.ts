export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  details: string[];
  whyUs: string[];
  category: "auto-repair" | "body-shop";
}

export const AUTO_REPAIR_SERVICES: ServiceData[] = [
  {
    slug: "ac-heating",
    title: "AC & Heating System Service",
    tagline: "Stay comfortable year-round with expert climate control service.",
    image: "/ac-heat.png",
    category: "auto-repair",
    description:
      "A properly functioning AC and heating system is essential for driving comfort and safety. My Ride Service Center's technicians are trained to diagnose and repair all makes and models — from refrigerant recharges to blower motor replacements and full compressor rebuilds.",
    details: [
      "AC refrigerant recharge and leak detection",
      "Compressor replacement and rebuild",
      "Heater core and blower motor service",
      "Cabin air filter replacement",
      "Climate control system diagnostics",
      "Evaporator and condenser repair",
    ],
    whyUs: [
      "Certified technicians for all AC systems",
      "Specialized equipment for all makes and models",
      "Transparent, upfront pricing — no surprises",
      "Fast turnaround at our Fredericksburg location",
    ],
  },
  {
    slug: "battery-electrical",
    title: "Battery & Electrical System Repair",
    tagline: "Precision electrical diagnostics for today's complex vehicles.",
    image: "/electrical.png",
    category: "auto-repair",
    description:
      "Modern vehicles contain miles of wiring and dozens of control modules. Electrical problems can be intermittent and expensive if misdiagnosed. My Ride Service Center's technicians use specialized diagnostic tools to accurately identify and fix electrical faults — fast.",
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
      "Honest assessment of every electrical issue",
    ],
  },
  {
    slug: "brakes",
    title: "Brake Repair & Replacement",
    tagline: "Maximum stopping power. Your safety depends on it.",
    image: "/brakes.png",
    category: "auto-repair",
    description:
      "Brake failure is one of the leading causes of road accidents. At My Ride Service Center, we perform thorough brake inspections and provide reliable repairs using quality parts. Whether you need new brake pads or a complete brake system overhaul, we make sure your vehicle stops when it needs to.",
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
    slug: "engine-diagnostics",
    title: "Engine Diagnostics & Tune-Ups",
    tagline: "Find the problem fast with advanced diagnostic technology.",
    image: "/diagnostics.png",
    category: "auto-repair",
    description:
      "Modern vehicles are sophisticated machines with hundreds of sensors and control modules. When a warning light appears, our advanced diagnostic equipment reads fault codes, pinpoints the root cause, and gives you a clear explanation — no guesswork, just accurate answers.",
    details: [
      "OBD-II scan for all fault codes",
      "Check engine light diagnosis",
      "Transmission and ABS module diagnostics",
      "Spark plug and ignition system tune-up",
      "Sensor and actuator testing",
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
    slug: "exhaust-emissions",
    title: "Exhaust & Emissions Repairs",
    tagline: "Keep your exhaust system clean, quiet, and compliant.",
    image: "/engine.png",
    category: "auto-repair",
    description:
      "A damaged exhaust system affects performance, fuel efficiency, and air quality. My Ride Service Center handles everything from muffler replacements to catalytic converter repairs, ensuring your vehicle runs cleanly and passes Virginia emissions inspections.",
    details: [
      "Muffler and exhaust pipe repair or replacement",
      "Catalytic converter service",
      "O2 sensor testing and replacement",
      "Emissions inspection readiness check",
      "Exhaust leak detection and sealing",
      "DPF and EGR system service",
    ],
    whyUs: [
      "Full exhaust system capability",
      "Emissions expertise for VA inspection compliance",
      "Quality parts with lasting welds",
      "Honest evaluation — repair vs. replace guidance",
    ],
  },
  {
    slug: "oil-change",
    title: "Oil Change & Routine Maintenance",
    tagline: "The simplest investment in your engine's long-term health.",
    image: "/oil-change.png",
    category: "auto-repair",
    description:
      "Regular oil changes are the single most important maintenance task for extending engine life. My Ride Service Center uses the right oil for your engine — conventional, synthetic, or high-mileage — and performs a complimentary multi-point check at every visit.",
    details: [
      "Conventional, synthetic, and high-mileage oil",
      "Oil filter replacement",
      "Multi-point vehicle inspection",
      "Tire pressure check and rotation",
      "Fluid top-off (washer fluid, coolant)",
      "Next service reminder",
    ],
    whyUs: [
      "Fast service — in and out quickly",
      "Correct oil specification for your vehicle",
      "No upsells you don't need",
      "Complimentary inspection with every change",
    ],
  },
  {
    slug: "suspension-steering",
    title: "Suspension & Steering Repairs",
    tagline: "Smooth handling and a safe, comfortable ride.",
    image: "/alignment.png",
    category: "auto-repair",
    description:
      "A worn suspension system affects ride quality, tire wear, and vehicle safety. My Ride Service Center's technicians diagnose and repair everything from worn shocks and struts to damaged control arms and tie rods — restoring proper handling and stability.",
    details: [
      "Shock and strut replacement",
      "Control arm and ball joint service",
      "Tie rod and steering rack repair",
      "4-wheel computerized alignment",
      "Sway bar links and bushings",
      "Wheel bearing replacement",
    ],
    whyUs: [
      "State-of-the-art alignment equipment",
      "Full suspension system capability",
      "Saves money by extending tire lifespan",
      "Fast turnaround — same-day service available",
    ],
  },
  {
    slug: "transmission",
    title: "Transmission Repair & Service",
    tagline: "Expert transmission service you can count on.",
    image: "/transmission.png",
    category: "auto-repair",
    description:
      "Transmission repair is one of the most complex jobs in auto service. Whether you're experiencing slipping, hard shifts, or a complete failure, My Ride Service Center's specialists diagnose and repair both automatic and manual transmissions with precision.",
    details: [
      "Automatic and manual transmission repair",
      "Complete transmission rebuilds",
      "Transmission fluid flush and filter change",
      "Clutch replacement and adjustment",
      "Transfer case and differential service",
      "Transmission computer diagnostics",
    ],
    whyUs: [
      "Transmission specialists — not generalists",
      "Transparent rebuild process from start to finish",
      "Certified technicians with hands-on expertise",
      "Serving Fredericksburg, VA and surrounding areas",
    ],
  },
];

export const BODY_SHOP_SERVICES: ServiceData[] = [
  {
    slug: "auto-painting",
    title: "Auto Painting",
    tagline: "Factory-quality paint work that turns heads.",
    image: "/shop-exterior.jpg",
    category: "body-shop",
    description:
      "A flawless paint job requires proper surface preparation, precise color matching, and professional application. My Ride Service Center uses computer color matching to ensure your vehicle's new paint blends perfectly with existing panels — whether it's a full respray or a spot repair.",
    details: [
      "Computer color matching for all manufacturers",
      "Full vehicle and panel resprays",
      "Spot repair and blending",
      "Primer, base coat, and clear coat application",
      "Paint correction and polishing",
      "Insurance claim support",
    ],
    whyUs: [
      "Precision color matching technology",
      "Factory-quality finish on every job",
      "Experienced painters with automotive training",
      "All makes and models accepted",
    ],
  },
  {
    slug: "bumper-repair",
    title: "Bumper Repair",
    tagline: "Restore your bumper to like-new condition.",
    image: "/myride-body-shop.jpg",
    category: "body-shop",
    description:
      "Bumper damage is one of the most common collision issues we see. My Ride Service Center repairs and restores bumpers using professional-grade materials and techniques — saving you the cost of a full replacement when repair is the right choice.",
    details: [
      "Front and rear bumper repair",
      "Plastic bumper crack and split repair",
      "Bumper cover replacement and painting",
      "Sensor and camera reinstallation",
      "Color matching for seamless finish",
      "Insurance estimate assistance",
    ],
    whyUs: [
      "Repair vs. replace guidance — honest advice",
      "Perfect color match every time",
      "Fast turnaround on bumper repairs",
      "Insurance-approved repair facility",
    ],
  },
  {
    slug: "dent-repair",
    title: "Dent Repair",
    tagline: "Remove dents quickly without compromising your paint.",
    image: "/shop-interior.jpg",
    category: "body-shop",
    description:
      "Dents from parking lots, hail, or minor collisions don't have to mean a costly body panel replacement. My Ride Service Center offers both traditional dent repair and paintless dent removal — choosing the best method based on the damage to preserve your original paint finish.",
    details: [
      "Traditional dent repair with body filler",
      "Paintless dent removal (PDR)",
      "Hail damage repair",
      "Door ding and crease removal",
      "Panel alignment after impact",
      "Paint blending for repaired areas",
    ],
    whyUs: [
      "Right method for every type of dent",
      "Original paint preservation whenever possible",
      "Visible results — no guesswork",
      "Honest quote before any work begins",
    ],
  },
  {
    slug: "frame-straightening",
    title: "Frame Straightening",
    tagline: "Structural precision after a collision — your safety demands it.",
    image: "/hero.png",
    category: "body-shop",
    description:
      "After a significant collision, frame damage can affect how your vehicle drives and how it protects you in a future accident. My Ride Service Center uses professional frame straightening equipment to restore your vehicle's structural integrity to factory specifications.",
    details: [
      "Unibody and full-frame straightening",
      "Computer-measured alignment to factory specs",
      "Pre and post straightening measurement reports",
      "Structural component replacement",
      "Coordination with insurance adjusters",
      "Road test after all structural repairs",
    ],
    whyUs: [
      "Professional frame equipment — not guesswork",
      "Measured to manufacturer specifications",
      "Safety-first approach to every structural repair",
      "Full documentation for insurance claims",
    ],
  },
  {
    slug: "glass-replacement",
    title: "Glass Replacement",
    tagline: "Clear visibility. Safe, sealed, and professionally installed.",
    image: "/diesel.png",
    category: "body-shop",
    description:
      "A cracked windshield or broken side window is both a safety hazard and a security risk. My Ride Service Center provides professional auto glass replacement using quality glass with proper sealing — so you can see clearly and your vehicle stays weatherproof.",
    details: [
      "Windshield replacement and installation",
      "Side and rear window replacement",
      "Windshield chip and crack repair",
      "ADAS sensor recalibration after windshield replacement",
      "Proper urethane sealing and curing",
      "Insurance billing support",
    ],
    whyUs: [
      "OEM-quality glass options available",
      "Proper sensor recalibration for ADAS systems",
      "Weatherproof sealing on every installation",
      "Insurance-approved work",
    ],
  },
  {
    slug: "paintless-dent-removal",
    title: "Paintless Dent Removal",
    tagline: "The fastest way to remove dents without touching the paint.",
    image: "/oil-change.png",
    category: "body-shop",
    description:
      "Paintless dent removal (PDR) is the most cost-effective way to fix dents on undamaged paint. My Ride Service Center's PDR technicians use specialized tools to massage dents out from behind the panel — no filler, no repainting, and a fraction of the cost of traditional bodywork.",
    details: [
      "Hail damage PDR",
      "Door dings and parking lot dents",
      "Crease and depression repair",
      "Access from behind panels with no drilling",
      "Preserves original factory paint",
      "Same-day turnaround on qualifying damage",
    ],
    whyUs: [
      "No paint damage — preserves original finish",
      "Faster and more affordable than traditional repair",
      "Specialist PDR technicians",
      "Same-day service on qualifying damage",
    ],
  },
  {
    slug: "rust-repair",
    title: "Rust Repair",
    tagline: "Stop rust before it spreads — protect your vehicle's value.",
    image: "/engine.png",
    category: "body-shop",
    description:
      "Rust is more than cosmetic — left untreated, it eats through metal and compromises your vehicle's structural integrity. My Ride Service Center removes rust, treats affected areas, and applies protective coatings so the damage doesn't come back.",
    details: [
      "Surface rust removal and treatment",
      "Panel replacement for severe rust damage",
      "Anti-corrosion coating application",
      "Undercarriage rust protection",
      "Paint matching for repaired rust areas",
      "Rust prevention recommendations",
    ],
    whyUs: [
      "Thorough rust removal — not just a cover-up",
      "Long-term corrosion protection",
      "Panel replacement when repair isn't enough",
      "Honest assessment of damage extent",
    ],
  },
  {
    slug: "scratch-repair",
    title: "Scratch Repair",
    tagline: "From surface scuffs to deep scratches — we make it disappear.",
    image: "/alignment.png",
    category: "body-shop",
    description:
      "Scratches range from minor clear coat scuffs to deep gouges that expose bare metal. My Ride Service Center evaluates every scratch and applies the right solution — paint correction for light damage or professional respray for deeper cuts — to restore your finish.",
    details: [
      "Clear coat scratch repair and buffing",
      "Single-panel respray for deeper scratches",
      "Computer color matching for seamless blending",
      "Touch-up paint application",
      "Scratch prevention recommendations",
      "Multi-panel repair for keyed or collision damage",
    ],
    whyUs: [
      "Right repair level for every scratch type",
      "Perfect color matching — factory finish",
      "No unnecessary repainting",
      "Fast turnaround on minor scratch work",
    ],
  },
];

export const ALL_SERVICES: ServiceData[] = [
  ...AUTO_REPAIR_SERVICES,
  ...BODY_SHOP_SERVICES,
];

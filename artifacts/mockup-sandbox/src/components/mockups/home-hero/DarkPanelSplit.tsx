import { Phone, CheckCircle2, ShieldCheck, Wrench, Clock } from "lucide-react";

export function DarkPanelSplit() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-zinc-950 font-sans text-white">
      {/* Left Panel */}
      <div className="w-full lg:w-[45%] flex flex-col p-8 md:p-12 lg:p-16 xl:p-20 relative z-10 h-full justify-between min-h-screen lg:min-h-0">
        
        {/* Top: Logo */}
        <div className="mb-12">
          <img 
            src="/__mockup/images/myride-logo-white.png" 
            alt="My Ride Service Center" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Middle: Content */}
        <div className="flex-grow flex flex-col justify-center max-w-xl">
          <div className="inline-flex mb-6">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase bg-red-950/20 px-3 py-1.5 rounded-sm border border-red-900/30">
              Auto Repair & Body Shop
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-white">
            Fredericksburg's <br className="hidden md:block" />
            <span className="text-zinc-400">Trusted Repair</span> <br className="hidden md:block" />
            Experts
          </h1>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-md p-3 md:p-4 flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-bold text-red-500 mb-1">15+</div>
              <div className="text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-wider leading-tight">Years<br/>Experience</div>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-md p-3 md:p-4 flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-bold text-red-500 mb-1">5,000+</div>
              <div className="text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-wider leading-tight">Cars<br/>Repaired</div>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-md p-3 md:p-4 flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-bold text-red-500 mb-1">5★</div>
              <div className="text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-wider leading-tight">Top<br/>Rated</div>
            </div>
          </div>

          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            From routine maintenance to complex collision repairs, we deliver dealership-quality service without the dealership markup. Your vehicle is in the hands of certified master technicians dedicated to getting you back on the road safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg flex items-center justify-center shadow-lg shadow-red-900/20">
              Book Appointment
            </button>
            <a href="tel:5404186626" className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg flex items-center justify-center gap-3 border border-zinc-700">
              <Phone className="w-5 h-5 text-red-500" />
              <span>540-418-6626</span>
            </a>
          </div>
        </div>

        {/* Bottom: Trust Strip */}
        <div className="mt-auto pt-10 lg:pt-16 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-zinc-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>ASE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Warranty Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>OEM Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* 4px Red Vertical Stripe Divider */}
      <div className="hidden lg:block w-1 bg-red-600 flex-shrink-0 z-20"></div>
      
      {/* Mobile-only red divider (horizontal) */}
      <div className="lg:hidden h-1 w-full bg-red-600 flex-shrink-0 z-20"></div>

      {/* Right Panel - Hero Image */}
      <div className="w-full lg:w-[55%] h-[50vh] lg:h-auto min-h-[400px] lg:min-h-screen relative">
        <img 
          src="/__mockup/images/myride-hero.jpg" 
          alt="Mechanic working on car" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure the image doesn't clash with the dark theme */}
        <div className="absolute inset-0 bg-zinc-950/10 pointer-events-none"></div>
      </div>
    </div>
  );
}

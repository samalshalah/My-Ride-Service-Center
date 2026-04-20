import React from "react";
import { ShieldCheck, Star, Wrench, Shield } from "lucide-react";

export function CenteredBold() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950 font-sans">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/myride-hero.jpg"
          alt="Mechanic working on a car"
          className="w-full h-full object-cover"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950/90" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        
        {/* Logo (Optional, but included based on available images if we want to show it, though brief says 'Centered CTAs, eyebrow, etc', let's stick closely to brief) */}
        <div className="mb-8">
          <img 
            src="/__mockup/images/myride-logo-white.png" 
            alt="My Ride Service Center Logo" 
            className="h-16 w-auto mx-auto opacity-90"
          />
        </div>

        {/* Eyebrow */}
        <p className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-6">
          My Ride Service Center
        </p>

        {/* Headline */}
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] mb-6">
          Fredericksburg's Trusted Collision & Auto Repair Experts
        </h1>

        {/* Accent Bar */}
        <div className="h-1.5 w-24 bg-red-600 mb-8 mx-auto rounded-full" />

        {/* Subtitle */}
        <p className="text-zinc-300 text-lg sm:text-xl md:text-2xl max-w-3xl mb-12 font-medium">
          From minor dents to major repairs — we bring your car back to life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors flex items-center justify-center gap-2">
            Book Appointment
          </button>
          <button className="bg-transparent border-2 border-white/80 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors flex items-center justify-center gap-2">
            Call 540-418-6626
          </button>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 w-full bg-zinc-950/80 backdrop-blur-md border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-white/20">
            
            <div className="flex items-center justify-center gap-3 px-4">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              <span className="text-white font-semibold tracking-wide">Certified Experts</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 px-4">
              <Star className="w-6 h-6 text-red-500" />
              <span className="text-white font-semibold tracking-wide">5-Star Rated</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 px-4">
              <Wrench className="w-6 h-6 text-red-500" />
              <span className="text-white font-semibold tracking-wide">All Makes & Models</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 px-4">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="text-white font-semibold tracking-wide">Insurance Accepted</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

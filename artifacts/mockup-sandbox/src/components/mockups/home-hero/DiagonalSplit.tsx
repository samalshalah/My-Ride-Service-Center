import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Star, Car, Shield } from 'lucide-react';

export function DiagonalSplit() {
  return (
    <section className="relative min-h-screen w-full bg-zinc-950 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Right Side Image */}
      <div className="absolute inset-0 md:left-[35%] z-0">
        <img 
          src="/__mockup/images/myride-hero.jpg" 
          alt="Auto mechanic working in shop" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent md:hidden" />
      </div>

      {/* Red Accent Layer (Desktop Only) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[63%] bg-red-600 z-10 [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] shadow-2xl" />

      {/* Dark Main Panel Layer */}
      <div className="absolute top-0 bottom-0 left-0 w-full md:w-[62%] bg-zinc-950 z-20 md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]" />

      {/* Content Container */}
      <div className="relative z-30 flex flex-col min-h-screen w-full md:w-[55%] px-6 md:px-12 lg:px-20 py-10 lg:py-16">
        {/* Logo */}
        <div className="mb-auto">
          <img 
            src="/__mockup/images/myride-logo-white.png" 
            alt="My Ride Service Center" 
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Hero Text & CTAs */}
        <div className="my-16 lg:my-0 space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Fredericksburg's Trusted Collision & <span className="text-red-600 block mt-2">Auto Repair Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 font-medium max-w-md leading-relaxed">
            Certified technicians. Fast turnaround. Insurance support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0 font-bold px-8 py-6 text-base rounded uppercase tracking-wide transition-colors">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-zinc-950 bg-transparent font-bold px-8 py-6 text-base rounded uppercase tracking-wide transition-colors">
              Call 540-418-6626
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-auto pt-12 md:pt-16 md:-mr-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-zinc-100">Certified<br />Technicians</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-red-500 fill-red-500" />
              </div>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-zinc-100">5-Star<br />Rated</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <Car className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-zinc-100">All Makes<br />& Models</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-zinc-100">Insurance<br />Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

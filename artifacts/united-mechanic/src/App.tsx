import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { Wrench, Settings, MapPin, Phone, ShieldCheck, CheckCircle2, Car, Map, Clock, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="flex items-center">
          <img src="https://www.myunitedmechanic.com/logo.png" alt="United Mechanic" className="h-12 object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo('about')} className="text-sm font-medium hover:text-primary transition-colors">About Us</button>
          <button onClick={() => scrollTo('locations')} className="text-sm font-medium hover:text-primary transition-colors">Locations</button>
          <a href="tel:5046581818">
            <Button size="lg" className="font-semibold shadow-md">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero.png" alt="Auto Shop Interior" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <ShieldCheck className="mr-2 h-4 w-4" /> 20+ Years of Trusted Service
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Expert mechanics who fix it right the first time.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed">
              Serving Northern Virginia with dependable auto repair, transmission rebuilding, and state inspections. No nonsense, just honest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5046581818">
                <Button size="xl" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                  Call Fredericksburg
                </Button>
              </a>
              <a href="tel:5714587251">
                <Button size="xl" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Call Woodbridge
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  const features = [
    { icon: ShieldCheck, title: "20+ Years Experience", desc: "Decades of proven reliability" },
    { icon: Star, title: "Award Winning", desc: "Best of Business Rated" },
    { icon: Car, title: "All Makes & Models", desc: "Domestic and Import specialists" },
    { icon: CheckCircle2, title: "Certified Mechanics", desc: "Expert diagnostics & repair" },
  ];

  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">More than 20 years delivering safety and confidence.</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              United Mechanic isn't a chain—it's a community fixture. We are the shop where your neighbors have been bringing their cars for over two decades. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in transmission rebuilds, expert diagnostics, and general auto repair for all makes and models. Our philosophy is simple: we fix it right the first time, providing transparent pricing and honest advice.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                <Star className="h-8 w-8 text-yellow-600 fill-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Best of Business Rated</h4>
                <p className="text-muted-foreground">Transmission Shop in Fredericksburg, VA</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="/transmission.png" alt="Mechanic working on transmission" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="font-medium text-primary-foreground/80">Years in Business</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Transmission Repair & Rebuild", desc: "Expert transmission diagnostics, repairs, and complete rebuilds for lasting performance.", icon: Settings },
    { title: "Virginia State Inspection", desc: "Official VA state safety inspection station to keep your vehicle street legal.", icon: ShieldCheck },
    { title: "Engine Diagnostics & Repair", desc: "Advanced computer diagnostics to pinpoint engine issues accurately and quickly.", icon: Wrench },
    { title: "Brake Service", desc: "Comprehensive brake pad, rotor, and fluid replacement for ultimate stopping power.", icon: Car },
    { title: "Oil Change & Maintenance", desc: "Factory-scheduled maintenance and oil changes to extend your engine's life.", icon: Clock },
    { title: "All Makes & Models", desc: "Specialized service for both domestic and import vehicles of all brands.", icon: Map },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Auto Care</h2>
          <p className="text-lg text-muted-foreground">From routine maintenance to complex transmission rebuilds, our expert technicians handle it all.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-zinc-50 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
            <img src="/engine.png" alt="Engine repair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
            <img src="/brakes.png" alt="Brake service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-grid" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Two Convenient Locations</h2>
          <p className="text-lg text-zinc-400">Serving Northern Virginia with two fully equipped repair facilities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Fredericksburg</h3>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">VA Inspection Station</span>
            </div>
            
            <div className="space-y-6 mb-8 flex-1">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-lg">31 Perchwood Dr</p>
                  <p className="text-zinc-400">Fredericksburg, VA 22405</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-lg">504-658-1818</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Services:</p>
                  <p className="text-zinc-400">Virginia State Inspection, Auto Repair, Transmission</p>
                </div>
              </div>
            </div>

            <a href="tel:5046581818" className="mt-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                Call Fredericksburg
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Woodbridge</h3>
            </div>
            
            <div className="space-y-6 mb-8 flex-1">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-lg">1025 Cannons Ct Unit 2</p>
                  <p className="text-zinc-400">Woodbridge, VA 22191</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-lg">571-458-7251</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Services:</p>
                  <p className="text-zinc-400">Auto Repair, Transmission</p>
                </div>
              </div>
            </div>

            <a href="tel:5714587251" className="mt-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                Call Woodbridge
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img src="https://www.myunitedmechanic.com/logo.png" alt="United Mechanic" className="h-10 opacity-75 grayscale mb-4" />
            <p className="text-sm">© {new Date().getFullYear()} United Mechanic. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#locations" className="hover:text-white transition-colors">Locations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/15046581818" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:shadow-[#25D366]/50 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-8 w-8" />
    </a>
  );
}

function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <TrustSignals />
      <About />
      <Services />
      <Locations />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

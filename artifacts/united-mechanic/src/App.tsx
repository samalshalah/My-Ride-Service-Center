import React from "react";
import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ServicePageLayout, { SERVICES } from "@/pages/ServicePage";
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
        <Link href="/" className="flex items-center">
          <img src="https://www.myunitedmechanic.com/logo.png" alt="United Mechanic" className="h-12 object-contain" />
        </Link>
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

// Short one-sentence descriptions for homepage service cards
const SERVICES_WITH_DESC = SERVICES.map(s => ({
  ...s,
  desc: s.description.split('.')[0] + '.',
}));

function ServicesWithDesc() {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wide">Our Specialized Services</h2>
          <div className="h-1 w-16 bg-white/50 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_WITH_DESC.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{service.desc}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 flex items-center justify-center w-full h-10 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors"
                >
                  More Information
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:shadow-[#25D366]/50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.112 1.528 5.836L.057 23.929a.5.5 0 0 0 .622.607l6.248-1.637A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.534-5.21-1.457l-.374-.224-3.874 1.016 1.03-3.765-.244-.386A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
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
      <ServicesWithDesc />
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
      {SERVICES.map((service) => (
        <Route key={service.slug} path={`/services/${service.slug}`}>
          {() => <ServicePageLayout service={service} />}
        </Route>
      ))}
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

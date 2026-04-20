import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ServicesListPage from "@/pages/ServicesListPage";
import ServicePageLayout, { SERVICES } from "@/pages/ServicePage";
import LocationPage from "@/pages/LocationPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FinancingPage from "@/pages/FinancingPage";
import WarrantyPage from "@/pages/WarrantyPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesListPage} />
      {SERVICES.map((service) => (
        <Route key={service.slug} path={`/services/${service.slug}`}>
          {() => <ServicePageLayout service={service} />}
        </Route>
      ))}
      <Route path="/locations/fredericksburg">
        {() => <LocationPage slug="fredericksburg" />}
      </Route>
      <Route path="/locations/woodbridge">
        {() => <LocationPage slug="woodbridge" />}
      </Route>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/financing" component={FinancingPage} />
      <Route path="/warranty" component={WarrantyPage} />
      <Route component={NotFound} />
    </Switch>
    </>
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

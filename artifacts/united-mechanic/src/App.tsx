import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AutoRepairListPage from "@/pages/AutoRepairListPage";
import BodyShopListPage from "@/pages/BodyShopListPage";
import ServicePage from "@/pages/ServicePage";
import DealershipServiceProgramPage from "@/pages/DealershipServiceProgramPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AppointmentPage from "@/pages/AppointmentPage";
import { ALL_SERVICES } from "@/data/services";

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
        <Route path="/auto-repair" component={AutoRepairListPage} />
        <Route path="/body-shop" component={BodyShopListPage} />
        {ALL_SERVICES.map((service) => (
          <Route
            key={service.slug}
            path={`/${service.category}/${service.slug}`}
          >
            {() => <ServicePage service={service} />}
          </Route>
        ))}
        <Route path="/dealership-service-program" component={DealershipServiceProgramPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/appointment" component={AppointmentPage} />
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

import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomePage } from "@/pages/home-page";
import { AboutPage } from "@/pages/about-page";
import { ContactPage } from "@/pages/contact-page";
import { IndustriesPage } from "@/pages/industries-page";
import { InsightsPage } from "@/pages/insights-page";
import { ServicesPage } from "@/pages/services-page";
import {
  AgenticAiPage,
  AiDevelopmentPage,
  CyberCompliancePage,
  CybersecurityPage,
  IvvPage,
  TestingServicesPage,
} from "@/pages/service-detail-pages";
import { NotFoundPage } from "@/pages/not-found-page";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/agentic-ai" element={<AgenticAiPage />} />
        <Route path="/services/ai-development" element={<AiDevelopmentPage />} />
        <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/services/cyber-compliance" element={<CyberCompliancePage />} />
        <Route path="/services/ivv" element={<IvvPage />} />
        <Route path="/services/testing" element={<TestingServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
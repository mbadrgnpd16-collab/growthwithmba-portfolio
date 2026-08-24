import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AIPortfolio } from "./components/AIPortfolio";
import { GrowthPortfolio } from "./components/GrowthPortfolio";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// ScrollToTop helper on path change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden flex flex-col justify-between">
        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Route Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<AIPortfolio />} />
            <Route path="/growth" element={<GrowthPortfolio />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

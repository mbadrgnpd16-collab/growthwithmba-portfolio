import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

// Lazy-load non-home routes for optimal initial bundle performance
const AIPortfolio = lazy(() =>
  import("./components/AIPortfolio").then((m) => ({ default: m.AIPortfolio }))
);
const GrowthPortfolio = lazy(() =>
  import("./components/GrowthPortfolio").then((m) => ({ default: m.GrowthPortfolio }))
);
const AboutPage = lazy(() =>
  import("./components/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);
const CVSelector = lazy(() =>
  import("./components/CVSelector").then((m) => ({ default: m.CVSelector }))
);
const AICVPage = lazy(() =>
  import("./components/AICVPage").then((m) => ({ default: m.AICVPage }))
);
const GrowthCVPage = lazy(() =>
  import("./components/GrowthCVPage").then((m) => ({ default: m.GrowthCVPage }))
);

// Minimal background fallback without spinners or layout shift
function PageFallback() {
  return <div className="min-h-screen bg-[#09090b]" />;
}

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
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ai" element={<AIPortfolio />} />
              <Route path="/growth" element={<GrowthPortfolio />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cv" element={<CVSelector />} />
              <Route path="/cv/ai" element={<AICVPage />} />
              <Route path="/cv/growth" element={<GrowthCVPage />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

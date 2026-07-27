import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Results } from "./components/Results";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { AIProducts } from "./components/AIProducts";
import { TechStack } from "./components/TechStack";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <Results />
        <About />
        <Services />
        <TechStack />
        <Process />
        <AIProducts />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

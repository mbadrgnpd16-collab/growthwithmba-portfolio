import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailAddress = "growthwithmba@gmail.com";
  const whatsappUrl = "https://wa.me/923212594511?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20growth%20project.";

  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  GrowthWithMBA
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  M. Bin Amir
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Helping businesses grow through strategic social media management and performance marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2.5">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Navigation
              </div>
              <ul className="space-y-2">
                <li><a href="#results" className="hover:text-white transition-colors">Proven Results</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Capabilities
              </div>
              <ul className="space-y-2">
                <li><a href="#stack" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#ai-products" className="hover:text-white transition-colors">Technical Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Free Audit</a></li>
              </ul>
            </div>

            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Connect
              </div>
              <ul className="space-y-2">
                <li><a href={`mailto:${emailAddress}`} className="hover:text-white transition-colors">Email Direct</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp Direct</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} GrowthWithMBA (M. Bin Amir). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Built with React, Tailwind & Framer Motion.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

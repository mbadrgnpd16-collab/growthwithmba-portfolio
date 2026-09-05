import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailAddress = "growthwithmba@gmail.com";
  const whatsappUrl = "https://wa.me/923212594511?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-zinc-700 transition-colors">
                <Sparkles className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  GrowthWithMBA
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  M. Bin Amir
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              AI product building and performance growth marketing for businesses, startups, and entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2.5">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Portfolios
              </div>
              <ul className="space-y-2">
                <li><Link to="/ai" className="hover:text-white transition-colors">AI Products</Link></li>
                <li><Link to="/growth" className="hover:text-white transition-colors">Growth Marketing</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Pages
              </div>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white transition-colors">About Me</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Audit</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <div className="font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                Connect
              </div>
              <ul className="space-y-2">
                <li><a href={`mailto:${emailAddress}`} className="hover:text-white transition-colors">Email Direct</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Direct</a></li>
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
            <span className="text-zinc-400">M. Bin Amir Portfolio</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 transition-colors focus:outline-none cursor-pointer"
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Results", href: "#results" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Projects", href: "#ai-products" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
              GrowthWithMBA
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              M. Bin Amir
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-zinc-800/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Badge variant="live" ping className="hidden lg:inline-flex">
            Available for Q3 Projects
          </Badge>
          <Button
            variant="primary"
            size="sm"
            icon={Calendar}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Free Audit
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel border-b border-zinc-800 px-4 py-6 mt-2 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-col space-y-3">
              <Badge variant="live" ping className="justify-center py-2">
                Available for Selected Projects
              </Badge>
              <Button
                variant="emerald"
                icon={Calendar}
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

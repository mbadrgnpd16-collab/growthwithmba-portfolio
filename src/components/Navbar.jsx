import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const navLinks = [
    { name: "AI Products", path: "/ai" },
    { name: "Growth Marketing", path: "/growth" },
    { name: "About", path: "/about" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkStyle = (linkPath) => {
    const isActive = location.pathname === linkPath;
    if (!isActive) {
      return "text-zinc-400 hover:text-white hover:bg-zinc-800/50";
    }

    if (linkPath === "/growth") {
      return "bg-[#B17A0A]/10 text-[#D4991A] font-semibold border border-[#B17A0A]/30";
    }
    if (linkPath === "/ai") {
      return "bg-indigo-950/50 text-indigo-300 font-semibold border border-indigo-500/30";
    }
    return "bg-zinc-800/80 text-white font-semibold border border-zinc-700/60";
  };

  const isGrowthPage = location.pathname === "/growth";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Links to /) */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-zinc-700 transition-colors">
            <Sparkles className="w-4 h-4 text-zinc-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-zinc-200 transition-colors flex items-center gap-1.5">
              GrowthWithMBA
              <span className={`w-1.5 h-1.5 rounded-full ${isGrowthPage ? "bg-[#B17A0A]" : "bg-indigo-400"}`}></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              M. Bin Amir
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#0e0e11] px-3 py-1.5 rounded-full border border-zinc-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all ${getLinkStyle(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button
              variant={isGrowthPage ? "gold" : "indigo"}
              size="sm"
              icon={Calendar}
            >
              Get In Touch
            </Button>
          </Link>
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
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-4 py-5 space-y-4"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors ${getLinkStyle(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800 flex flex-col space-y-2">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isGrowthPage ? "gold" : "indigo"}
                  icon={Calendar}
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

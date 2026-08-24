import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { usePageSEO } from "../utils/usePageSEO";
import {
  Cpu,
  TrendingUp,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Eye,
  Zap,
  Box
} from "lucide-react";

export const Home = () => {
  usePageSEO(
    "M. Bin Amir | AI Product Building & Growth Marketing",
    "I'm M. Bin Amir. I work across AI-powered digital product development and growth marketing, helping turn ideas into practical products and businesses into stronger online brands."
  );

  const proofMetrics = [
    {
      label: "4+ Digital Products Built",
      sub: "Web Apps & Prototypes",
      icon: Box,
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10"
    },
    {
      label: "850+ Calls Generated",
      sub: "Jamia Campaign Lead Gen",
      icon: PhoneCall,
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    },
    {
      label: "+1400% Content Views",
      sub: "TheSkin.pk Scale",
      icon: Eye,
      accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
      label: "+700% Organic Reach",
      sub: "Mukaf Brand Reach",
      icon: Zap,
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/10"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro & Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>M. Bin Amir — Digital Portfolio Gateway</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            I Build Digital Products.{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent block sm:inline">
              I Help Brands Grow.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            I'm M. Bin Amir. I work across AI-powered digital product development and growth marketing, helping people turn ideas into practical products and businesses into stronger online brands.
          </p>
        </motion.div>

        {/* 2 Primary Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: AI Products & Vibe Coding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex"
          >
            <div className="glass-card rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/15 to-transparent blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <Badge variant="ai" icon={Sparkles}>
                    AI Product Builder
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    AI Products & Vibe Coding
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Websites, web apps, AI-powered tools, MVPs, digital products, and practical experiments built using modern AI development platforms.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-zinc-800/80 relative z-10">
                <Link to="/ai">
                  <Button
                    variant="emerald"
                    size="lg"
                    icon={ArrowRight}
                    className="w-full justify-between"
                  >
                    Explore AI & Product Building
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Social Media & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/15 to-transparent blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-inner">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <Badge variant="live" ping>
                    Growth Marketer
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    Social Media & Growth
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Social media management, Instagram growth, content strategy, brand growth, and Meta advertising.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-zinc-800/80 relative z-10">
                <Link to="/growth">
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={ArrowRight}
                    className="w-full justify-between hover:border-emerald-500/40"
                  >
                    Explore Growth Marketing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Compact Credibility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto pt-6"
        >
          <div className="glass-panel rounded-2xl p-5 border border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${item.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

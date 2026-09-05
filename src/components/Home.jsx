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
    },
    {
      label: "850+ Calls Generated",
      sub: "Jamia Lead Campaign",
      icon: PhoneCall,
    },
    {
      label: "+1400% Content Views",
      sub: "TheSkin.pk Organic Scale",
      icon: Eye,
    },
    {
      label: "+700% Brand Reach",
      sub: "Mukaf Brand Reach",
      icon: Zap,
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>M. Bin Amir — Personal Brand & Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            I Build Digital Products.{" "}
            <span className="text-zinc-400 block sm:inline font-bold">
              I Help Brands Grow.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            I'm M. Bin Amir. I work across AI-powered digital product development and growth marketing, helping people turn ideas into practical products and businesses into stronger online brands.
          </p>
        </motion.div>

        {/* 2 Primary Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Pathway 1: AI Products */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex"
          >
            <div className="bg-[#0d0d10] rounded-xl p-8 border border-zinc-800 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <Badge variant="ai">
                    AI Product Builder
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    AI Products & Vibe Coding
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    Websites, web apps, AI-powered tools, MVPs, digital products, and practical experiments built using modern AI development platforms.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-zinc-800/80">
                <Link to="/ai">
                  <Button
                    variant="indigo"
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

          {/* Pathway 2: Growth Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex"
          >
            <div className="bg-[#0d0d10] rounded-xl p-8 border border-zinc-800 hover:border-[#B17A0A]/40 transition-all duration-200 flex flex-col justify-between w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#B17A0A]/10 border border-[#B17A0A]/30 flex items-center justify-center text-[#D4991A]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <Badge variant="gold">
                    Growth Marketer
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Social Media & Growth
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    Social media management, Instagram growth, content strategy, brand growth, and targeted Meta advertising.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-zinc-800/80">
                <Link to="/growth">
                  <Button
                    variant="gold"
                    size="lg"
                    icon={ArrowRight}
                    className="w-full justify-between"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-4xl mx-auto pt-4"
        >
          <div className="bg-[#0e0e11] rounded-xl p-5 border border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
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

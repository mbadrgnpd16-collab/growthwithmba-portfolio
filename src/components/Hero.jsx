import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  PhoneCall,
  Zap,
  Bot,
  Cpu,
  CheckCircle2,
  Calendar,
  ShieldCheck
} from "lucide-react";

export const Hero = () => {
  const trustMetrics = [
    {
      icon: PhoneCall,
      label: "850+ Calls Generated",
      sublabel: "Jamia Dar ul Quran (PKR 60k)",
      accent: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: TrendingUp,
      label: "+1400% Views",
      sublabel: "TheSkin.pk E-Com Scale",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Zap,
      label: "+700% Total Reach",
      sublabel: "Mukaf Brand Scaling",
      accent: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Bot,
      label: "4 Production Apps",
      sublabel: "Antigravity & Lovable",
      accent: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#09090b]">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-indigo-600/18 via-cyan-500/8 to-emerald-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: 5-Second Clarity Headline & Conversion Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Authority Badge Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Badge variant="live" ping className="py-1.5 px-3.5 text-xs font-semibold">
                Available for Q3 Growth Projects
              </Badge>
              <Badge variant="ai" icon={Sparkles} className="py-1.5 px-3.5 text-xs font-semibold">
                Founder of Mukaf
              </Badge>
            </div>

            {/* 5-Second Core Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.10]">
              I Build Growth Systems That Turn{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Attention Into Revenue.
              </span>
            </h1>

            {/* Clear, Human Supporting Copy */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am <strong className="text-white font-semibold">M. Bin Amir</strong>, an AI Growth Marketer and Product Builder. I help startups and business owners scale through high-ROI Meta Ads, automated workflows, and custom AI software built for real business outcomes.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Button
                variant="emerald"
                size="lg"
                icon={Calendar}
                className="w-full sm:w-auto text-base py-3.5 px-7 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Free Discovery Call
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={TrendingUp}
                className="w-full sm:w-auto text-base py-3.5 px-7"
                onClick={() => {
                  const el = document.getElementById("results");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Verified Results
              </Button>
            </div>

            {/* Authority Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> High-ROI Meta Ad Funnels
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Lovable & Antigravity Products
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Zero Vanity Metrics Guarantee
              </span>
            </div>

            {/* Metrics Bar */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="glass-card p-3.5 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/80 transition-colors text-left"
                >
                  <div className={`w-7 h-7 rounded-lg ${item.bg} flex items-center justify-center ${item.accent} mb-2`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    {item.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: User's Real Photograph SaaS Display Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Ambient Reflection */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-20 blur-2xl group-hover:opacity-35 transition duration-1000" />

              {/* Main Card Container */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-700/60 shadow-2xl relative space-y-6">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                      Verified Specialist
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/50">
                    GrowthWithMBA
                  </span>
                </div>

                {/* Real User Photo Display Frame */}
                <div className="relative mx-auto w-52 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-indigo-500/40 bg-gradient-to-b from-zinc-800 to-zinc-950 p-1 shadow-2xl group">
                  <img
                    src="/m_bin_amir.jpg"
                    alt="M. Bin Amir — AI Growth Marketer & AI Product Builder"
                    className="w-full h-full object-cover rounded-xl filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <div className="text-sm font-extrabold text-white tracking-tight drop-shadow-md">
                      M. Bin Amir
                    </div>
                    <div className="text-[11px] text-indigo-300 font-mono drop-shadow-md">
                      AI Growth & Product Builder
                    </div>
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider text-center">
                    AI & Growth Stack
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {["Meta Ads", "Lovable", "Antigravity", "Supabase", "ChatGPT", "Claude"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono bg-zinc-900/90 text-zinc-300 rounded-md border border-zinc-800 hover:border-indigo-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Highlight Box */}
                <div className="bg-zinc-900/90 rounded-xl p-3.5 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Founder of Mukaf</div>
                      <div className="text-[11px] text-zinc-400">+700% Brand Reach Growth</div>
                    </div>
                  </div>
                  <Badge variant="live" ping>Verified</Badge>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-panel px-3.5 py-2 rounded-xl border border-indigo-500/30 shadow-2xl hidden sm:flex items-center gap-2 text-xs font-semibold text-white"
              >
                <div className="w-6 h-6 rounded-md bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Meta Ads Specialist</span>
              </motion.div>

              {/* Floating Badge 2 (Right Middle) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -right-4 sm:-right-6 glass-panel px-3.5 py-2 rounded-xl border border-cyan-500/30 shadow-2xl hidden sm:flex items-center gap-2 text-xs font-semibold text-white"
              >
                <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span>Lovable + Supabase</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  User,
  Sparkles,
  TrendingUp,
  Cpu,
  Bot,
  Zap,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Target
} from "lucide-react";

export const About = () => {
  const differentiators = [
    {
      title: "Full-Funnel Ownership",
      description:
        "I don't just run ads or build isolated tools. I architect end-to-end customer acquisition and product funnels designed for conversion.",
      icon: Target,
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Rapid AI Development",
      description:
        "Build and launch AI-powered solutions quickly using modern AI development platforms.",
      icon: Zap,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Zero Vanity Metrics",
      description:
        "Likes and impressions don't pay bills. Every ad campaign, workflow, and product feature is measured directly against revenue and qualified leads.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Dual-Threat Synergy",
      description:
        "Combining high-converting marketing psychology with hands-on AI product engineering. I build software that customers actually buy.",
      icon: Cpu,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
  ];

  const pillars = [
    {
      title: "Growth Marketing & Meta Ads",
      desc: "Data-backed performance advertising, precise demographic audience targeting, and high-converting ad copy that drives measurable ROI.",
      icon: TrendingUp,
      accent: "from-indigo-500 to-indigo-700",
    },
    {
      title: "AI Automations & Workflows",
      desc: "Custom intelligent systems using ChatGPT & Claude APIs to automate repetitive business operations and customer communications.",
      icon: Bot,
      accent: "from-cyan-500 to-blue-700",
    },
    {
      title: "AI Product Development",
      desc: "Building scalable web apps and internal tools using Antigravity, Lovable, and Supabase to solve real client business problems fast.",
      icon: Cpu,
      accent: "from-emerald-500 to-teal-700",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#0c0c0e]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="ABOUT M. BIN AMIR"
          badgeVariant="ai"
          badgeIcon={User}
          title="Bridging Growth Marketing &"
          highlightText="AI Product Development."
          description="Most businesses struggle with traditional agencies delivering vanity metrics or slow dev teams. I combine data-driven marketing with rapid AI development to deliver scalable revenue."
        />

        {/* Top Split Layout: Personal Introduction & Real Photo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Real Photo Display Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-700/60 shadow-2xl relative space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">M. Bin Amir</h3>
                  <p className="text-xs font-mono text-indigo-400">Founder, GrowthWithMBA</p>
                </div>
                <Badge variant="live" ping>Active Partner</Badge>
              </div>

              {/* Real User Photo Display Frame */}
              <div className="relative mx-auto w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-2 border-indigo-500/40 bg-gradient-to-b from-zinc-800 to-zinc-950 p-1 shadow-2xl group">
                <img
                  src="/m_bin_amir.jpg"
                  alt="M. Bin Amir — Founder GrowthWithMBA"
                  className="w-full h-full object-cover rounded-xl filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <div className="text-sm font-extrabold text-white tracking-tight drop-shadow-md">
                    M. Bin Amir
                  </div>
                  <div className="text-[11px] text-indigo-300 font-mono drop-shadow-md">
                    Founder of Mukaf • AI Builder
                  </div>
                </div>
              </div>

              {/* Core Discipline Stack */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider text-center">
                  Core Discipline Stack
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 font-medium text-zinc-200">
                    Meta Ads Funnels
                  </div>
                  <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 font-medium text-zinc-200">
                    AI Automations
                  </div>
                  <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 font-medium text-zinc-200">
                    Lovable + Supabase
                  </div>
                  <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 font-medium text-zinc-200">
                    Antigravity Systems
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Personal Introduction & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <Badge variant="ai" icon={Sparkles}>
              Personal Introduction
            </Badge>

            {/* Clear Heading for the Column */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Growth Engineering Driven by Measurable ROI.
            </h3>

            {/* Proper Body Paragraph Introduction (Not a Heading) */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">M. Bin Amir</strong>, founder of GrowthWithMBA. I help businesses grow by combining performance marketing, AI automation, and AI-powered product development.
            </p>

            <p className="text-base text-zinc-300 leading-relaxed">
              My goal is simple: build systems that generate measurable business results—not just more clicks or followers.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Growing a modern business requires more than running generic ad campaigns. It demands a cohesive strategy that connects your acquisition channels directly to functional, intelligent digital products built with tools like <span className="text-indigo-400 font-mono font-semibold">Antigravity, Lovable, and Supabase</span>.
            </p>

            {/* Credibility Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Meta Ads ROI & Lead Funnels</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Custom AI Product Development</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Automated Operations & Workflows</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Performance Content Strategy</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Skill Pillars */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 3 Pillars of GrowthWithMBA
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              How we transform business goals into scalable digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card hover={true} className="h-full border-zinc-800/80">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.accent} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg mb-2">{pillar.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </CardDescription>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* "Why Work With Me?" Section */}
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <Badge variant="live" ping className="mx-auto">
              Competitive Advantage
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Work With Me?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Four key differentiators that separate GrowthWithMBA from traditional agencies and generic freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card hover={true} className={`h-full border-zinc-800/80 hover:${diff.border}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${diff.bg} border ${diff.border} flex items-center justify-center ${diff.color} shrink-0 mt-1`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {diff.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="emerald"
            size="lg"
            icon={Calendar}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free Discovery Call
          </Button>
        </div>

      </div>
    </section>
  );
};

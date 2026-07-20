import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
  TrendingUp,
  Bot,
  Code2,
  Video,
  Sparkles,
  Layers,
  Cpu,
  Target,
  FileCode,
  Wand2
} from "lucide-react";

export const TechStack = () => {
  const categories = [
    {
      title: "Marketing & Growth",
      categoryBadge: "Acquisition",
      icon: TrendingUp,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      skills: [
        "Meta Ads Manager",
        "Growth Marketing",
        "Performance Marketing",
        "Brand Strategy",
        "Content Strategy",
        "Direct-Response Copywriting",
      ],
    },
    {
      title: "AI & Automations",
      categoryBadge: "AI Intelligence",
      icon: Bot,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      skills: [
        "ChatGPT & OpenAI API",
        "Claude API",
        "Prompt Engineering",
        "AI Workflow Automation",
        "Custom GPT Assistants",
        "LLM Integration",
      ],
    },
    {
      title: "Development Platforms",
      categoryBadge: "Product Stack",
      icon: Code2,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      skills: [
        "Antigravity Framework",
        "Lovable Platform",
        "Supabase Backend",
        "React & HTML5/JS",
        "Tailwind CSS v4",
        "PostgreSQL & REST APIs",
      ],
    },
    {
      title: "Creative & Media",
      categoryBadge: "Visual Assets",
      icon: Video,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      skills: [
        "Canva Pro",
        "CapCut Video Editor",
        "Filmora Suite",
        "Ad Creative Hooks",
        "Short-Form Video Production",
        "Visual Branding Assets",
      ],
    },
  ];

  return (
    <section id="stack" className="py-24 relative overflow-hidden bg-[#0c0c0e]">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="SKILLS & TECH STACK"
          badgeVariant="live"
          badgeIcon={Layers}
          title="Tools & Technologies That Drive"
          highlightText="Growth & AI Execution."
          description="A curated tech stack combining battle-tested growth marketing tools with modern AI development platforms."
        />

        {/* 4 Category Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card hover={true} className="h-full border-zinc-800/90 hover:border-indigo-500/40">
                  <div className="space-y-6">
                    
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cat.accent} shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-white tracking-tight">
                            {cat.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                        {cat.categoryBadge}
                      </span>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-2 text-xs font-mono font-medium bg-zinc-900/90 text-zinc-200 rounded-lg border border-zinc-800 hover:border-indigo-500/50 hover:text-white transition-all flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Wrench
} from "lucide-react";

export const TechStack = () => {
  const categories = [
    {
      title: "Marketing & Growth",
      categoryBadge: "Core Services",
      icon: TrendingUp,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      skills: [
        "Social Media Management",
        "Instagram Growth",
        "Meta Ads",
        "Content Strategy",
        "Brand Growth",
        "Analytics",
        "Content Planning",
        "Content Calendars",
        "Community Management",
        "Audience Research",
        "Brand Positioning",
        "Copywriting",
        "Facebook & Instagram Ads",
        "Lead Generation Campaigns",
        "Performance Marketing",
        "Conversion Optimization",
        "Competitor Analysis"
      ],
    },
    {
      title: "AI & Automation",
      categoryBadge: "Competitive Advantage",
      icon: Cpu,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      skills: [
        "AI Workflows",
        "Prompt Engineering",
        "AI Tools",
        "Automation Systems",
        "AI Product Development",
        "AI Workflow Design",
        "AI-Powered Content Systems",
        "AI Research & Strategy",
        "AI Tool Integration",
        "AI-Assisted Marketing Workflows",
        "Custom AI Solutions"
      ],
    },
    {
      title: "Tools & Platforms",
      categoryBadge: "Software Stack",
      icon: Wrench,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      skills: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Google AI Studio",
        "Lovable",
        "Antigravity",
        "Vercel",
        "Supabase",
        "Replit",
        "GitHub",
        "Notion",
        "Make.com / Zapier",
        "Canva",
        "CapCut"
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
          badge="SKILLS & AI CAPABILITIES"
          badgeVariant="live"
          badgeIcon={Layers}
          title="Skills & Curated"
          highlightText="Expertise."
          description="A strategic capability stack combining social media management and performance marketing with advanced AI & automation workflows."
        />

        {/* 3 Category Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex"
              >
                <Card hover={true} className="h-full w-full border-zinc-800/90 hover:border-indigo-500/40 flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cat.accent} shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-white tracking-tight">
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

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
  Search,
  Target,
  Wrench,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business goals, target audience, CAC targets, and existing operational bottlenecks.",
      icon: Search,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Architecting the exact Meta ad funnels, AI automations, or web app features required to generate measurable ROI.",
      icon: Target,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      number: "03",
      title: "Build",
      description: "Rapid execution of ad creatives, AI workflows, or web app development using modern AI platforms.",
      icon: Wrench,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      number: "04",
      title: "Launch",
      description: "Controlled deployment, live audience targeting, and real-time conversion tracking setup.",
      icon: Rocket,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Iterative scaling based on real conversion data, daily ROAS checks, and continuous performance tuning.",
      icon: TrendingUp,
      accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="THE GROWTH METHODOLOGY"
          badgeVariant="live"
          badgeIcon={Sparkles}
          title="My 5-Step Execution"
          highlightText="Process."
          description="A structured, data-driven workflow designed to move projects smoothly from concept to revenue."
        />

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex"
              >
                <Card hover={true} className="flex flex-col justify-between w-full border-zinc-800/90 hover:border-indigo-500/40 relative">
                  <div className="space-y-4">
                    
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-zinc-500">
                        {step.number}
                      </span>
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.accent} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>

                  {/* Step Connector Indicator */}
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                    <span>Phase {step.number}</span>
                    {idx < steps.length - 1 && <ArrowRight className="w-3 h-3 text-zinc-600 hidden lg:inline" />}
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

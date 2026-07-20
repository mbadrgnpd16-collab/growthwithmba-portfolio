import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  TrendingUp,
  Target,
  Bot,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Calendar
} from "lucide-react";

export const Services = () => {
  const servicesList = [
    {
      id: "growth-marketing",
      title: "Growth Marketing Strategy",
      badge: "Acquisition Funnels",
      badgeVariant: "live",
      icon: TrendingUp,
      accentBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      description:
        "Designing data-backed user acquisition and retention funnels that scale customer revenue predictably without burning capital.",
      deliverables: [
        "Full-Funnel Growth Architecture",
        "Conversion Rate Optimization (CRO)",
        "Multi-Channel Attribution & Analytics",
        "Market & Competitor Positioning Audit",
      ],
      expectedOutcome:
        "Lower Customer Acquisition Cost (CAC) and predictable month-over-month revenue growth.",
    },
    {
      id: "meta-advertising",
      title: "Meta Advertising",
      badge: "High ROI Campaigns",
      badgeVariant: "metric",
      icon: Target,
      accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      description:
        "High-performance Facebook & Instagram ad campaigns engineered to turn targeted ad spend into qualified phone calls, leads, and sales.",
      deliverables: [
        "Direct-Response Ad Copy & Creative Hooks",
        "Lookalike & Interest Audience Modeling",
        "Rapid A/B Creative & Angle Testing",
        "Daily ROAS & Lead Cost Optimization",
      ],
      expectedOutcome:
        "Maximum lead volume at ultra-low acquisition costs (e.g. 850+ calls generated on PKR 60k spend).",
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      badge: "Operations Scale",
      badgeVariant: "cyan",
      icon: Bot,
      accentBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      description:
        "Eliminating manual business bottlenecks by embedding intelligent custom AI workflows into your daily customer and team operations.",
      deliverables: [
        "Custom ChatGPT & Claude API Integrations",
        "Automated Lead Qualification & Follow-ups",
        "Operational Workflow Bottleneck Removal",
        "CRM & Multi-App Data Synchronization",
      ],
      expectedOutcome:
        "Savings of 20+ manual hours per week and 100% instant response time for incoming leads.",
    },
    {
      id: "ai-product-dev",
      title: "AI Product Development",
      badge: "Rapid Web Apps",
      badgeVariant: "ai",
      icon: Cpu,
      accentBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      description:
        "Building production-ready web applications, SaaS tools, and internal platforms rapidly using modern AI development stacks.",
      deliverables: [
        "Antigravity & Lovable Web App Architecture",
        "Supabase Database & Auth Integration",
        "Custom AI Dashboards & User Interfaces",
        "Cross-Device Responsive Deployment",
      ],
      expectedOutcome:
        "Launching functional, revenue-generating AI web products in weeks instead of traditional dev months.",
    },
    {
      id: "brand-content",
      title: "Brand & Content Strategy",
      badge: "Organic Distribution",
      badgeVariant: "default",
      icon: Zap,
      accentBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      description:
        "Engineering high-retention video content and sharp brand positioning that builds authority and sparks viral organic reach.",
      deliverables: [
        "Short-Form Video Hooks & Scripting",
        "Brand Identity & Messaging Playbook",
        "Organic Audience Engagement Triggers",
        "Multi-Platform Content Distribution",
      ],
      expectedOutcome:
        "Massive reach expansion (+1400% content view spikes) to consistently drive inbound customer inquiries.",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="GROWTH SERVICES"
          badgeVariant="live"
          badgeIcon={Layers}
          title="Growth Systems &"
          highlightText="AI Solutions."
          description="Designed to solve critical business bottlenecks, lower acquisition costs, and build high-value digital assets."
        />

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            // Make the 4th and 5th items span nicely or keep grid balanced
            const isFeatured = index === 3 || index === 4;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 3 ? "lg:col-span-1" : index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card hover={true} className="h-full flex flex-col justify-between border-zinc-800/90 hover:border-indigo-500/40">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${service.accentBg} shrink-0 shadow-inner`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant={service.badgeVariant}>
                        {service.badge}
                      </Badge>
                    </div>

                    {/* Service Title & Description */}
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="space-y-2.5 pt-2 border-t border-zinc-800/80">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                        Key Deliverables
                      </div>
                      <div className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expected Business Outcome Box */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 space-y-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Expected Outcome
                      </div>
                      <p className="text-xs font-medium text-zinc-200 leading-normal">
                        {service.expectedOutcome}
                      </p>
                    </div>

                  </div>

                  {/* Card Action CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">
                      Outcome Focused
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ArrowRight}
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40"
                    >
                      Discuss Strategy
                    </Button>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Services Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center space-y-4 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-extrabold text-white">
            Unsure Which Growth Service Fits Your Current Stage?
          </h3>
          <p className="text-sm text-zinc-400">
            Let's review your business goals on a quick call and determine the highest-ROI approach for your brand.
          </p>
          <div className="pt-2">
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
        </motion.div>

      </div>
    </section>
  );
};

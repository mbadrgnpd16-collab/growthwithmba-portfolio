import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  TrendingUp,
  PhoneCall,
  Zap,
  Eye,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Target,
  BarChart3,
  Calendar,
  Layers,
  Wrench
} from "lucide-react";

export const Results = () => {
  const [activeTab, setActiveTab] = useState("all");

  const caseStudies = [
    {
      id: "jamia",
      client: "Jamia Dar ul Quran",
      category: "Meta Advertising & Lead Generation",
      primaryMetric: "850+ Inquiries",
      secondaryMetric: "PKR 60,000 Ad Spend",
      badgeText: "Lead Generation",
      badgeVariant: "live",
      icon: PhoneCall,
      challenge:
        "Low student enrollment inquiries and high cost-per-lead for Quranic educational programs on a restricted ad budget.",
      strategy:
        "Shifted from generic awareness ads to direct-response click-to-call funnels targeting motivated demographic segments.",
      execution:
        "Crafted high-intent ad copy, optimized Meta lead forms, and set up instant WhatsApp/call conversion triggers.",
      results: [
        "Generated ~850 verified inbound call and chat inquiries",
        "Capped total ad spend at PKR 60,000, ensuring maximum resource efficiency",
        "Secured a significant volume of direct student enrollments from the campaigns",
      ],
      ctaText: "Scale Lead Generation",
    },
    {
      id: "theskin",
      client: "TheSkin.pk",
      category: "E-Commerce Performance Content",
      primaryMetric: "+1400% Views",
      secondaryMetric: "+461% Audience Reach",
      badgeText: "E-Commerce Growth",
      badgeVariant: "metric",
      icon: Eye,
      challenge:
        "Stagnant store traffic and high acquisition costs in a competitive e-commerce skincare market.",
      strategy:
        "Build a high-retention video content flywheel paired with custom lookalike retargeting ad sets.",
      execution:
        "Produced problem-solution short video clips, customer result showcases, and automated Facebook Pixel retargeting.",
      results: [
        "14x growth in paid and organic video views, driving direct storefront traffic",
        "Expanded reach to over 460% more unique customers within the target audience",
        "Generated a substantial increase in online sales conversions and repeat customers",
      ],
      ctaText: "Scale E-Com Traffic",
    },
    {
      id: "mukaf",
      client: "Mukaf",
      category: "Brand Strategy & Organic Scale",
      primaryMetric: "+700% Reach",
      secondaryMetric: "+320% Profile Activity",
      badgeText: "Brand Acceleration",
      badgeVariant: "cyan",
      icon: Zap,
      challenge:
        "Low profile engagement and limited distribution restricting brand authority and direct client inquiries.",
      strategy:
        "Redesign brand messaging and launch audience engagement triggers tailored to viral social formats.",
      execution:
        "Overhauled social profile architecture, published high-frequency educational posts, and enabled direct inquiry funnels.",
      results: [
        "Generated 7x growth in brand reach within 90 days",
        "Multiplied profile engagement by +320%, turning casual views into active inquiries",
        "Established a consistent stream of organic inbound partnership inquiries",
      ],
      ctaText: "Scale Brand Reach",
    },
    {
      id: "video-agency",
      client: "Video Editing Agency",
      category: "B2B Client Acquisition",
      primaryMetric: "+150% Out-of-Network",
      secondaryMetric: "+148% Impressions",
      badgeText: "B2B Client Growth",
      badgeVariant: "rose",
      icon: TrendingUp,
      challenge:
        "Agency content was restricted to existing followers, failing to acquire new high-ticket B2B clients.",
      strategy:
        "Deploy out-of-network short-form video hooks showcasing client case studies and workflow breakdowns.",
      execution:
        "Produced high-pacing short clips, targeted industry-specific decision-makers, and automated consultation booking.",
      results: [
        "Grew out-of-network audience reach by +150%, exposing the agency to thousands of new decision makers",
        "Expanded content impressions by +148% across organic search and video feeds",
        "Generated a steady stream of consultation bookings and high-ticket B2B clients",
      ],
      ctaText: "Acquire B2B Clients",
    },
  ];

  const filteredStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.id === activeTab);

  return (
    <section id="results" className="py-28 relative overflow-hidden bg-[#09090b]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="CASE STUDIES"
          badgeVariant="live"
          badgeIcon={BarChart3}
          title="Proven Results"
          highlightText="⭐"
          description="Real business outcomes from marketing campaigns, social media management, and growth strategies."
        />

        {/* Highlight Metrics Callout Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-5 rounded-2xl border border-indigo-500/30 text-center relative overflow-hidden group hover:border-indigo-500/60 transition-colors"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
              850+
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-1">Qualified Inquiries</div>
            <div className="text-[11px] font-mono text-indigo-400 mt-0.5">Jamia Dar ul Quran</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card p-5 rounded-2xl border border-emerald-500/30 text-center relative overflow-hidden group hover:border-emerald-500/60 transition-colors"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              +1400%
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-1">Content Views</div>
            <div className="text-[11px] font-mono text-emerald-400 mt-0.5">TheSkin.pk</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="glass-card p-5 rounded-2xl border border-cyan-500/30 text-center relative overflow-hidden group hover:border-cyan-500/60 transition-colors"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent">
              +700%
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-1">Brand Reach</div>
            <div className="text-[11px] font-mono text-cyan-400 mt-0.5">Mukaf</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="glass-card p-5 rounded-2xl border border-rose-500/30 text-center relative overflow-hidden group hover:border-rose-500/60 transition-colors"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-rose-400 to-yellow-200 bg-clip-text text-transparent">
              +150%
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-1">Out-of-Network Reach</div>
            <div className="text-[11px] font-mono text-rose-400 mt-0.5">Video Agency</div>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Case Studies" },
            { id: "jamia", label: "Jamia Dar ul Quran" },
            { id: "theskin", label: "TheSkin.pk" },
            { id: "mukaf", label: "Mukaf" },
            { id: "video-agency", label: "Video Agency" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/50"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid: Challenge, Strategy, Execution, Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full flex"
              >
                <Card hover={true} className="flex flex-col justify-between w-full border-zinc-800/90 hover:border-indigo-500/40">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge variant={study.badgeVariant} className="mb-2">
                          {study.badgeText}
                        </Badge>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                          {study.client}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          {study.category}
                        </p>
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Visually Dominant Metric Highlight */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white via-zinc-100 to-indigo-200 bg-clip-text text-transparent">
                          {study.primaryMetric}
                        </div>
                        <div className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                          {study.secondaryMetric}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-800/60 px-2.5 py-1 rounded self-start sm:self-auto border border-zinc-700/50">
                        Verified Result
                      </span>
                    </div>

                    {/* 4 Step Structure: Challenge -> Strategy -> Execution -> Results */}
                    <div className="space-y-4 text-xs sm:text-sm">
                      {/* Challenge */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" /> Challenge
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-xs">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Strategy */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" /> Strategy
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-xs">
                          {study.strategy}
                        </p>
                      </div>

                      {/* Execution */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5" /> Execution
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-xs">
                          {study.execution}
                        </p>
                      </div>

                      {/* Results */}
                      <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" /> Measured Business Outcomes
                        </span>
                        <div className="space-y-1.5">
                          {study.results.map((res, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{res}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">
                      Growth System
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ArrowUpRight}
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40"
                    >
                      {study.ctaText}
                    </Button>
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

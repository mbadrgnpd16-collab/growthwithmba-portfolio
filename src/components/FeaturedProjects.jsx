import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  FolderKanban,
  PhoneCall,
  Eye,
  Zap,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Sparkles
} from "lucide-react";

export const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "jamia-project",
      client: "Jamia Dar ul Quran",
      category: "Lead Generation",
      tagline: "High-Intent Student Inquiry Engine",
      overview:
        "Designed and scaled a targeted Meta ad campaign for educational and Quranic programs under strict budget constraints.",
      challenge:
        "High cost-per-lead and low phone inquiry volume for academic enrollments using traditional ad channels.",
      solution:
        "Deployed direct-response Meta ad creatives, granular demographic audience targeting, and click-to-call lead funnels.",
      results: [
        "Generated ~850 verified phone call leads",
        "Total ad spend capped at PKR 60,000",
        "Achieved industry-leading Cost-Per-Lead (CPL)",
      ],
      primaryMetric: "850+ Calls",
      secondaryMetric: "PKR 60k Spend",
      technologies: ["Meta Ads Manager", "Direct Call Funnels", "Audience Insights", "WhatsApp API"],
      badgeVariant: "live",
      icon: PhoneCall,
    },
    {
      id: "theskin-project",
      client: "TheSkin.pk",
      category: "E-Commerce Growth",
      tagline: "E-Commerce Content & Reach Expansion",
      overview:
        "Engineered a performance video content funnel and retargeting framework for a premier online skincare brand.",
      challenge:
        "High customer acquisition costs and low brand awareness in a fiercely competitive e-commerce skincare niche.",
      solution:
        "Created high-retention visual hooks, customer transformation video clips, and lookalike retargeting ad campaigns.",
      results: [
        "+1400% surge in total video content views",
        "+461% increase in unique customer reach",
        "Significant boost in e-commerce checkout conversions",
      ],
      primaryMetric: "+1400% Views",
      secondaryMetric: "+461% Reach",
      technologies: ["Meta Video Ads", "Custom Lookalikes", "Short-Form Video", "Pixel Analytics"],
      badgeVariant: "metric",
      icon: Eye,
    },
    {
      id: "mukaf-project",
      client: "Mukaf",
      category: "Brand Growth",
      tagline: "Social Profile Authority & Reach Acceleration",
      overview:
        "Executed a comprehensive social profile overhaul and content strategy to boost brand velocity and organic reach.",
      challenge:
        "Stagnant engagement rates and limited brand reach restricted overall business growth and inquiry volume.",
      solution:
        "Restructured brand positioning, implemented engagement trigger hooks, and developed high-frequency content formats.",
      results: [
        "+700% expansion in total brand reach",
        "+320% increase in profile engagement actions",
        "Consistent inbound customer inquiries unlocked",
      ],
      primaryMetric: "+700% Reach",
      secondaryMetric: "+320% Activity",
      technologies: ["Brand Strategy", "Engagement Funnels", "Content Architecture", "Lovable Platform"],
      badgeVariant: "cyan",
      icon: Zap,
    },
    {
      id: "agency-project",
      client: "Video Editing Agency",
      category: "B2B Client Acquisition",
      tagline: "Out-of-Network B2B Growth System",
      overview:
        "Built a B2B short-form video acquisition engine to break out of existing follower networks and attract agency clients.",
      challenge:
        "Agency organic content was trapped inside current follower loops, failing to reach new decision-makers.",
      solution:
        "Designed algorithmically optimized video hooks, portfolio case-study clips, and targeted B2B distribution funnels.",
      results: [
        "+150% growth in non-follower reach",
        "+148% increase in overall content impressions",
        "Pipeline of high-ticket B2B client inquiries created",
      ],
      primaryMetric: "+150% Non-Follower Reach",
      secondaryMetric: "+148% Views",
      technologies: ["B2B Funnels", "CapCut/Filmora", "Meta Retargeting", "Organic Growth"],
      badgeVariant: "ai",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0c0c0e]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="FEATURED PROJECTS"
          badgeVariant="live"
          badgeIcon={FolderKanban}
          title="Case Studies &"
          highlightText="Featured Campaigns."
          description="In-depth breakdown of client challenges, custom growth solutions, and verified ROI outcomes."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card hover={true} className="flex flex-col justify-between w-full border-zinc-800/90 hover:border-indigo-500/40">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge variant={project.badgeVariant} className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                          {project.client}
                        </h3>
                        <p className="text-xs font-mono text-indigo-400 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0 shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Metric Highlight Bar */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 flex items-center justify-between">
                      <div>
                        <div className="text-xl font-extrabold text-white tracking-tight">
                          {project.primaryMetric}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400">
                          {project.secondaryMetric}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider bg-zinc-800/60 px-2 py-1 rounded">
                        Verified Metric
                      </span>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="font-mono text-[11px] text-rose-400 uppercase font-semibold block">
                          Challenge
                        </span>
                        <p className="text-zinc-400 leading-relaxed text-xs">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-[11px] text-indigo-400 uppercase font-semibold block">
                          Solution
                        </span>
                        <p className="text-zinc-400 leading-relaxed text-xs">
                          {project.solution}
                        </p>
                      </div>

                      {/* Key Results */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                        <span className="font-mono text-[11px] text-emerald-400 uppercase font-semibold block">
                          Results Delivered
                        </span>
                        {project.results.map((res, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        Tech & Growth Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-400 rounded border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">
                      Case Study
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
                      Discuss Similar Project
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

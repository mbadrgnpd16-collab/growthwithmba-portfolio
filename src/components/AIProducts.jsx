import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  Cpu,
  Database,
  LayoutDashboard,
  Wallet,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Wrench,
  AlertCircle
} from "lucide-react";

export const AIProducts = () => {
  const products = [
    {
      id: "finance-tracker",
      title: "Finance & Expense Tracker",
      platform: "Antigravity Framework",
      category: "Financial System Prototype",
      badgeVariant: "ai",
      icon: Wallet,
      problemSolved:
        "Small businesses struggle to track complex expense receipts and predict cash flow without expensive accounting software.",
      buildApproach:
        "Built using Antigravity AI agents to process receipts via OCR, categorize transactions autonomously, and update real-time financial dashboards.",
      features: [
        "Automated receipt & invoice OCR parsing",
        "Predictive monthly cash flow & budget forecasting",
        "Interactive expense breakdown & analytics",
        "Real-time spending anomaly notifications",
      ],
      technologies: ["Antigravity Framework", "React", "Tailwind CSS", "Chart.js"],
      gradient: "from-indigo-600/20 via-cyan-500/10 to-transparent",
    },
    {
      id: "mukaf-site",
      title: "Mukaf Brand Web Application",
      platform: "Lovable Platform",
      category: "Web Application",
      badgeVariant: "live",
      icon: Globe,
      problemSolved:
        "Traditional web design agencies take months to build high-converting brand sites, leading to delayed product launches.",
      buildApproach:
        "Engineered rapidly on the Lovable platform, combining obsidian glassmorphism UI components with conversion-first page structures.",
      features: [
        "Sleek obsidian glassmorphism design system",
        "Mobile-optimized conversion funnels",
        "Smooth micro-interaction animations",
        "Lightning-fast static page generation",
      ],
      technologies: ["Lovable Platform", "React", "Tailwind CSS", "Framer Motion"],
      gradient: "from-cyan-600/20 via-indigo-500/10 to-transparent",
    },
    {
      id: "medicine-app",
      title: "Medicine Inventory App",
      platform: "Lovable + Supabase",
      category: "Full-Stack App",
      badgeVariant: "cyan",
      icon: Database,
      problemSolved:
        "Pharmacies and clinics face stockouts and financial loss from expired medicine batches due to manual inventory logs.",
      buildApproach:
        "Architected with Lovable for rapid UI development integrated directly with a Supabase PostgreSQL backend for real-time stock sync.",
      features: [
        "Supabase real-time database synchronization",
        "Automated low-stock & expiry notifications",
        "Role-based user authentication & permissions",
        "Barcode & batch tracking interface",
      ],
      technologies: ["Lovable", "Supabase", "React", "PostgreSQL"],
      gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    },
    {
      id: "mba-os",
      title: "MBA OS (Growth Operating System)",
      platform: "Lovable + Supabase",
      category: "Operating System Dashboard",
      badgeVariant: "metric",
      icon: LayoutDashboard,
      problemSolved:
        "Managing client acquisition, Meta ad metrics, and content workflows across multiple tools creates operational friction.",
      buildApproach:
        "Designed a centralized personal operating dashboard using Lovable frontend components connected to Supabase and Claude API endpoints.",
      features: [
        "Centralized client CRM & pipeline manager",
        "Automated Meta campaign metric tracking",
        "Integrated AI prompt workspace",
        "Task execution & project milestone board",
      ],
      technologies: ["Lovable", "Supabase", "Claude API", "Tailwind CSS"],
      gradient: "from-amber-600/20 via-indigo-500/10 to-transparent",
    },
  ];

  return (
    <section id="ai-products" className="py-28 relative overflow-hidden bg-[#09090b]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="TECHNICAL PROJECTS"
          badgeVariant="ai"
          badgeIcon={Cpu}
          title="Technical Projects."
          highlightText="Additional Capabilities."
          description="Beyond marketing, I build AI-powered tools and digital systems that improve workflows, automate processes, and solve practical business problems."
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex"
              >
                <Card hover={true} className="flex flex-col justify-between w-full border-zinc-800/90 hover:border-indigo-500/40 relative overflow-hidden">
                  
                  {/* Background Overlay */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${product.gradient} blur-3xl pointer-events-none`} />

                  <div className="space-y-6 relative z-10">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge variant={product.badgeVariant} icon={Sparkles} className="mb-2">
                          {product.platform}
                        </Badge>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                          {product.title}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          {product.category}
                        </p>
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* SaaS Interface Mockup Header */}
                    <div className="relative w-full h-36 rounded-xl bg-[#0c0c0e] border border-zinc-800 overflow-hidden flex flex-col justify-between p-3.5 group">
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {product.platform} Stack
                        </span>
                      </div>

                      {/* Mock Interface Bars */}
                      <div className="space-y-2 py-1">
                        <div className="h-2.5 w-3/4 bg-zinc-800 rounded" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-7 bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center justify-center text-[10px] font-mono text-indigo-300">
                            Dashboard
                          </div>
                          <div className="h-7 bg-zinc-800/60 rounded flex items-center justify-center text-[10px] font-mono text-zinc-400">
                            Metrics
                          </div>
                          <div className="h-7 bg-zinc-800/60 rounded flex items-center justify-center text-[10px] font-mono text-zinc-400">
                            Settings
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1 border-t border-zinc-800/60">
                        <span>Status: Operational Prototype</span>
                        <span className="text-emerald-400 font-semibold">100% Functional</span>
                      </div>
                    </div>

                    {/* Problem Solved & Build Approach */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> Problem Solved
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-xs">
                          {product.problemSolved}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5" /> Technical Approach
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-xs">
                          {product.buildApproach}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                          Core System Features
                        </span>
                        <div className="space-y-1.5">
                          {product.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-300 rounded border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-zinc-500">
                      Technical Showcase
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ArrowUpRight}
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40"
                    >
                      Request Code Audit
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

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { WhyWorkWithMe } from "./WhyWorkWithMe";
import { usePageSEO } from "../utils/usePageSEO";
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
  Code,
  Layers,
  ArrowRight,
  Bot,
  Puzzle
} from "lucide-react";

export const AIPortfolio = () => {
  usePageSEO(
    "AI Product Builder & Vibe Coder | M. Bin Amir",
    "M. Bin Amir builds practical websites, web apps, digital products, MVPs, and AI-powered tools using modern AI development platforms."
  );

  const services = [
    {
      title: "AI Product & MVP Development",
      description: "Helping turn ideas into functional web apps, dashboards, internal tools, and MVPs.",
      icon: Cpu,
    },
    {
      title: "Websites & Web Applications",
      description: "Building modern, responsive websites and web applications with clean design architectures.",
      icon: Globe,
    },
    {
      title: "AI-Powered Digital Solutions",
      description: "Building practical AI-powered tools and features based on real user or business needs.",
      icon: Sparkles,
    },
    {
      title: "Product Prototyping & Experiments",
      description: "Rapidly turning concepts into working prototypes that can be tested, evaluated, and improved.",
      icon: Wrench,
    }
  ];

  const projects = [
    {
      id: "finance-tracker",
      name: "AI Finance & Expense Tracker",
      status: "Built",
      statusVariant: "indigo",
      platform: "Antigravity Framework",
      purpose: "Simplifying receipt parsing and expense tracking for small businesses.",
      description:
        "Built locally using Antigravity. Processes transaction receipts using OCR, categorizes expenses, and presents clear financial summaries.",
      features: [
        "Automated receipt & invoice OCR parsing",
        "Predictive expense categorization",
        "Interactive analytics dashboard",
        "Real-time expense insights"
      ],
      tools: ["Antigravity Framework", "React", "Tailwind CSS", "Chart.js"],
      icon: Wallet
    },
    {
      id: "medicine-app",
      name: "Medicine Inventory Management App",
      status: "Built",
      statusVariant: "indigo",
      platform: "Lovable + Supabase",
      purpose: "Preventing stockouts and batch expirations for medicine inventory.",
      description:
        "Architected using Lovable for UI rapid development connected to a Supabase PostgreSQL backend for real-time stock sync.",
      features: [
        "Real-time Supabase database sync",
        "Low-stock & batch expiry alerts",
        "Role-based authentication",
        "Batch tracking interface"
      ],
      tools: ["Lovable", "Supabase", "React", "PostgreSQL"],
      icon: Database
    },
    {
      id: "mukaf-site",
      name: "Mukaf Website",
      status: "Built",
      statusVariant: "indigo",
      platform: "Lovable Platform",
      purpose: "Modern business e-commerce and brand web application.",
      description:
        "A modern business/e-commerce website built using Lovable, focusing on fast performance, responsive layout, and polished obsidian design.",
      features: [
        "Obsidian visual system",
        "Mobile-optimized page structure",
        "Micro-interaction UI animations",
        "Fast static page rendering"
      ],
      tools: ["Lovable Platform", "React", "Tailwind CSS", "Framer Motion"],
      icon: Globe
    },
    {
      id: "mba-os",
      name: "MBA OS",
      status: "In Development",
      statusVariant: "default",
      platform: "Lovable + Supabase",
      purpose: "Personal operating dashboard for client pipeline and project tracking.",
      description:
        "Designing a centralized personal operating dashboard connecting frontend components to Supabase and AI API helper endpoints.",
      features: [
        "Client CRM & pipeline tracking",
        "Campaign metric monitoring",
        "Prompt workspace & notes",
        "Task execution board"
      ],
      tools: ["Lovable", "Supabase", "Claude API", "Tailwind CSS"],
      icon: LayoutDashboard
    },
    {
      id: "chrome-extension",
      name: "Productivity Chrome Extension",
      status: "In Development",
      statusVariant: "default",
      platform: "Web Extensions API",
      purpose: "Browser utility extension currently under active development.",
      description:
        "A lightweight Chrome extension designed to streamline daily web research and quick bookmarking tasks directly from the browser bar.",
      features: [
        "In-development browser side-panel",
        "Quick web page snippet saver",
        "Minimal background script setup"
      ],
      tools: ["JavaScript", "HTML/CSS", "Chrome Extension API"],
      icon: Puzzle
    },
    {
      id: "ai-chatbot",
      name: "AI Knowledge Chatbot",
      status: "In Development",
      statusVariant: "default",
      platform: "Google AI Studio",
      purpose: "Custom conversational bot prototype for document query processing.",
      description:
        "An AI chatbot experiment in progress, exploring custom prompt templates and API integrations for domain-specific Q&A.",
      features: [
        "Google AI Studio API integration",
        "Conversational prompt tuning",
        "Clean chat interface UI"
      ],
      tools: ["Google AI Studio", "React", "Tailwind CSS"],
      icon: Bot
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand the Idea",
      desc: "Understand the problem, target users, goals, and requirements clearly."
    },
    {
      number: "02",
      title: "Plan the Solution",
      desc: "Define the product structure, features, user experience, and appropriate tools."
    },
    {
      number: "03",
      title: "Build",
      desc: "Turn the idea into a functional website, web app, tool, prototype, or product."
    },
    {
      number: "04",
      title: "Test & Refine",
      desc: "Test the product, improve the user experience, and fix issues."
    },
    {
      number: "05",
      title: "Launch",
      desc: "Deploy the product and prepare it for real users."
    }
  ];

  const skillGroups = [
    {
      title: "Product Building",
      badge: "Core Focus",
      skills: [
        "AI Product Development",
        "Vibe Coding",
        "Web App Building",
        "MVP Development",
        "Product Prototyping",
        "Prompt Engineering",
        "Digital Product Development"
      ]
    },
    {
      title: "AI Tools & Platforms",
      badge: "Platforms",
      skills: [
        "Antigravity",
        "Lovable",
        "Replit",
        "Google AI Studio",
        "Vercel",
        "Supabase",
        "GitHub",
        "Manus"
      ]
    },
    {
      title: "Additional Tools",
      badge: "Software",
      skills: ["ChatGPT", "Claude", "Gemini", "Notion", "Canva", "CapCut"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="flex justify-center">
            <Badge variant="ai" icon={Sparkles} className="py-1 px-3.5 text-xs">
              AI Product Builder • Vibe Coder
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
            I Turn Ideas Into{" "}
            <span className="text-indigo-400">
              Digital Products.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            I use modern AI development platforms to turn ideas into practical websites, web apps, digital tools, MVPs, and AI-powered products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact?service=ai">
              <Button variant="indigo" size="lg" icon={Code}>
                Let's Build Your Idea
              </Button>
            </Link>
            <a href="#ai-projects">
              <Button variant="secondary" size="lg" icon={Layers}>
                View Projects
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-[#0c0c0e] border-y border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="SERVICES"
            badgeVariant="ai"
            badgeIcon={Cpu}
            title="AI & Product Building Services"
            highlightText="Overview"
            highlightColor="indigo"
            description="Concise services focused on taking concepts from initial ideas to functional digital products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Card hover={true} className="h-full flex flex-col justify-between hover:border-indigo-500/40">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                        {srv.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured AI Projects */}
      <section id="ai-projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="SHOWCASE"
            badgeVariant="ai"
            badgeIcon={Layers}
            title="Featured AI & Product Work"
            highlightText="★"
            highlightColor="indigo"
            description="Real web applications, prototypes, and digital products built using modern platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => {
              const Icon = proj.icon;
              const isInDev = proj.status === "In Development";
              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="flex"
                >
                  <Card hover={true} className="flex flex-col justify-between w-full hover:border-indigo-500/40">
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Badge variant={isInDev ? "default" : "ai"} className="mb-2">
                            Status: {proj.status}
                          </Badge>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {proj.name}
                          </h3>
                          <p className="text-xs font-mono text-zinc-400 mt-0.5">
                            {proj.platform}
                          </p>
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-mono uppercase text-indigo-400 font-semibold">
                          Purpose / Problem
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                          {proj.purpose}
                        </p>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                        {proj.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                        <span className="text-[11px] font-mono text-zinc-400 font-semibold block uppercase">
                          Key Features
                        </span>
                        <div className="space-y-1">
                          {proj.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase">
                          Tools Used
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tools.map((t) => (
                            <span key={t} className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-300 rounded border border-zinc-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500">
                        {isInDev ? "In Progress" : "Built Showcase"}
                      </span>
                      <Link to="/contact?service=ai">
                        <Button variant="ghost" size="sm" icon={ArrowUpRight} className="text-indigo-400 hover:text-indigo-300">
                          {isInDev ? "Inquire Progress" : "Discuss Project"}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Product Building Process */}
      <section className="py-20 bg-[#0c0c0e] border-y border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="METHODOLOGY"
            badgeVariant="ai"
            badgeIcon={Wrench}
            title="AI Product Building Process"
            highlightText="5 Steps"
            highlightColor="indigo"
            description="A clear 5-step workflow designed to take ideas from concept to functional product."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Card hover={true} className="h-full flex flex-col justify-between hover:border-indigo-500/40">
                  <div className="space-y-3">
                    <span className="text-2xl font-extrabold font-mono text-indigo-400">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="STACK"
            badgeVariant="ai"
            badgeIcon={Cpu}
            title="AI Skills & Development Stack"
            highlightText="Overview"
            highlightColor="indigo"
            description="Balanced technical categories representing genuine product building experience and active software tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((grp, idx) => (
              <motion.div
                key={grp.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card hover={true} className="h-full border-zinc-800 hover:border-indigo-500/40">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {grp.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {grp.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {grp.skills.map((s) => (
                        <div key={s} className="px-2.5 py-1 text-xs font-mono bg-zinc-900/90 text-zinc-200 rounded border border-zinc-800 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <WhyWorkWithMe />

      {/* Subtle Cross-Link */}
      <div className="py-10 bg-[#0c0c0e] border-y border-zinc-800/80 text-center">
        <div className="max-w-md mx-auto px-4 space-y-2">
          <p className="text-xs font-mono text-zinc-400">
            Looking for help growing your brand instead?
          </p>
          <Link to="/growth" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4991A] hover:text-[#B17A0A] transition-colors">
            <span>Explore Growth Marketing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* AI Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Badge variant="ai" icon={Sparkles} className="mx-auto">
            Let's Collaborate
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have an Idea You Want to Build?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Tell me what you're thinking about building, and let's explore how we can turn it into something practical.
          </p>
          <div className="pt-2">
            <Link to="/contact?service=ai">
              <Button variant="indigo" size="lg" icon={Code}>
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

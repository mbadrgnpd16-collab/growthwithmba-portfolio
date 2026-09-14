import React from "react";
import { Link } from "react-router-dom";
import { usePageSEO } from "../utils/usePageSEO";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  Mail,
  Phone,
  Globe,
  Printer,
  Sparkles,
  Code,
  Cpu,
  GraduationCap,
  Wrench,
  MapPin,
  ArrowLeft
} from "lucide-react";

export const AICVPage = () => {
  usePageSEO(
    "M. Bin Amir — AI Product Builder CV",
    "CV of M. Bin Amir, an AI Product Builder and Vibe Coder building practical digital products through AI-assisted development and rapid prototyping."
  );

  const phone = "+92 321 2594511";
  const email = "growthwithmba@gmail.com";
  const website = "growthwithmba-portfolio.vercel.app";

  const aiProjects = [
    {
      num: "01",
      name: "MBA OS",
      description: "AI-powered personal operating system for organizing ideas, tasks, information, and workflows.",
      tools: ["Antigravity", "Supabase", "Gemini"]
    },
    {
      num: "02",
      name: "AI Finance & Expense Tracker",
      description: "AI-assisted product for simplifying personal finance and expense tracking.",
      tools: ["Antigravity", "Gemini"]
    },
    {
      num: "03",
      name: "Medicine Inventory",
      description: "Cloud-backed application for organizing and tracking medicines digitally.",
      tools: ["Lovable", "Supabase"]
    },
    {
      num: "04",
      name: "MUKAF Website",
      description: "E-commerce website focused on product discovery, brand presentation, and direct customer ordering.",
      tools: ["Antigravity", "Lovable"]
    },
    {
      num: "05",
      name: "AI Chatbot",
      description: "AI-powered conversational product currently being developed for practical user interaction.",
      tools: ["Cursor", "Perplexity"],
      status: "IN DEVELOPMENT"
    },
    {
      num: "06",
      name: "Chrome Extension",
      description: "AI/productivity-focused browser extension currently in development.",
      tools: ["Antigravity"],
      status: "IN DEVELOPMENT"
    }
  ];

  const education = [
    {
      degree: "Intermediate in Computer Science",
      field: "ICS — Statistics",
      institution: "Unique Academy",
      period: "2025–2027"
    },
    {
      degree: "Matriculation",
      field: "Biological Sciences",
      institution: "Government Central Model School",
      period: "2023–2025"
    }
  ];

  const capabilities = [
    "AI Product Building",
    "Vibe Coding",
    "Rapid Prototyping",
    "AI-Assisted Development",
    "Product Ideation"
  ];

  const toolsList = ["Antigravity", "Gemini", "Lovable", "Supabase", "Cursor", "Perplexity"];

  const technicalFocus = [
    "AI-Assisted Product Development",
    "Vibe Coding",
    "Rapid Prototyping",
    "Web Application Development",
    "AI Integration",
    "Product Ideation",
    "Database-Backed Applications",
    "AI-Assisted Workflows"
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 print:bg-white print:text-zinc-900 transition-colors">
      <style>{`
        .print-only-container {
          display: none !important;
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          header, footer, nav, .screen-only-container, .print-hide {
            display: none !important;
          }

          .print-only-container {
            display: block !important;
            background: #ffffff !important;
            color: #09090b !important;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            padding: 12mm 14mm !important;
            box-sizing: border-box !important;
          }

          body, main, html, #root, #root > div {
            background-color: #ffffff !important;
            color: #09090b !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            height: auto !important;
            min-height: 0 !important;
          }

          .cv-print-item {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      {/* ========================================================= */}
      {/* 1. SCREEN MODE CONTAINER (AI Product Builder CV)          */}
      {/* ========================================================= */}
      <div className="screen-only-container">
        
        {/* Top Action & Back Bar */}
        <div className="pt-28 pb-4 print-hide">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All CV Versions</span>
            </Link>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Main AI CV Content Wrapper */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-2">
          <div className="bg-[#0c0c0e] border border-zinc-800/90 rounded-2xl p-6 sm:p-10 space-y-10 shadow-2xl">
            
            {/* HEADER */}
            <header className="border-b border-zinc-800/80 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                  <img
                    src="/m_bin_amir.jpg"
                    alt="M. Bin Amir"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-indigo-500/30 shrink-0 shadow-lg"
                  />

                  <div className="space-y-1.5">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      M. BIN AMIR
                    </h1>
                    <p className="text-sm sm:text-base font-bold font-mono text-indigo-400 uppercase tracking-wide">
                      AI Product Builder • Vibe Coder
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                      Building practical digital products through AI-assisted development and rapid prototyping.
                    </p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col gap-2 text-xs text-zinc-300 font-mono items-center md:items-end w-full md:w-auto border-t md:border-t-0 border-zinc-800/60 pt-4 md:pt-0">
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{phone}</span>
                  </a>
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors break-all">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{email}</span>
                  </a>
                  <p className="inline-flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>Lahore, Pakistan</span>
                  </p>
                  <a href={`https://${website}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Globe className="w-3.5 h-3.5 shrink-0" />
                    <span>{website}</span>
                  </a>
                </div>

              </div>
            </header>

            {/* ASYMMETRIC GRID: MAIN PROJECTS vs SUPPORTING SIDEBAR */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* LEFT / MAIN COLUMN: SELECTED AI PRODUCTS (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                  <h2 className="text-base font-bold text-white tracking-tight uppercase flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    <span>Selected AI Products</span>
                  </h2>
                  <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">
                    Core Focus
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {aiProjects.map((proj) => (
                    <div
                      key={proj.num}
                      className="bg-[#09090b] border border-zinc-800/90 rounded-xl p-4 space-y-2 hover:border-indigo-500/40 transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-extrabold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                            {proj.num}
                          </span>
                          <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {proj.name}
                          </h3>
                        </div>
                        {proj.status && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                            {proj.status}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed pl-0 sm:pl-8">
                        {proj.description}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-indigo-300 pl-0 sm:pl-8 font-medium">
                        <span className="text-zinc-500">Tools:</span>
                        <span>{proj.tools.join(" • ")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT / SUPPORTING COLUMN: SUMMARY, CAPABILITIES, TECH FOCUS, ADDTL BG, EDUCATION */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Summary */}
                <div className="space-y-2 bg-[#09090b] border border-zinc-800/90 rounded-xl p-4">
                  <div className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">
                    Summary
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    AI-focused digital builder who turns ideas into practical digital products through AI-assisted development, rapid prototyping, and modern no-code/low-code workflows.
                  </p>
                </div>

                {/* Capabilities */}
                <div className="space-y-3">
                  <div className="border-b border-zinc-800/80 pb-1.5 text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Capabilities & Tools</span>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono text-zinc-400 block uppercase font-semibold">AI & Product</span>
                      <div className="flex flex-wrap gap-1.5">
                        {capabilities.map((c) => (
                          <span key={c} className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-200 rounded border border-zinc-800">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono text-zinc-400 block uppercase font-semibold">Tools & Platforms</span>
                      <div className="flex flex-wrap gap-1.5">
                        {toolsList.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-xs font-mono bg-indigo-950/30 text-indigo-300 rounded border border-indigo-500/30">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical / Product Focus */}
                <div className="space-y-3">
                  <div className="border-b border-zinc-800/80 pb-1.5 text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Technical / Product Focus</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {technicalFocus.map((tf) => (
                      <span key={tf} className="px-2 py-1 text-xs font-mono bg-zinc-900 text-zinc-300 rounded border border-zinc-800">
                        {tf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Background */}
                <div className="space-y-2 bg-[#09090b] border border-zinc-800/90 rounded-xl p-4">
                  <div className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">
                    Additional Background
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Experience in social media management, content strategy, audience growth, and Meta advertising.
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <div className="border-b border-zinc-800/80 pb-1.5 text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Education</span>
                  </div>

                  <div className="space-y-2">
                    {education.map((edu) => (
                      <div key={edu.degree} className="bg-[#09090b] border border-zinc-800/90 rounded-lg p-3 space-y-0.5">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>{edu.degree}</span>
                          <span className="text-[10px] font-mono text-zinc-400 font-normal">{edu.period}</span>
                        </div>
                        <div className="text-[11px] text-indigo-300 font-mono">{edu.field}</div>
                        <div className="text-[11px] text-zinc-400">{edu.institution}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* SCREEN CTA */}
          <section className="mt-12 text-center space-y-6 pt-8 border-t border-zinc-800/80">
            <div className="space-y-2">
              <Badge variant="ai" icon={Sparkles} className="mx-auto text-xs">
                Have a Product Idea?
              </Badge>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Let's turn it into something real.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/ai">
                <Button variant="indigo" size="sm" icon={Code}>
                  View AI Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="sm" icon={Mail}>
                  Contact Me
                </Button>
              </Link>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </button>
            </div>
          </section>

        </main>
      </div>

      {/* ========================================================= */}
      {/* 2. PRINT / PDF EXPORT CONTAINER (Spacious A4 Presentation) */}
      {/* ========================================================= */}
      <div className="print-only-container">
        
        {/* Header Block */}
        <div className="flex items-start justify-between border-b-2 border-indigo-600 pb-4 mb-5">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight uppercase">
              M. BIN AMIR
            </h1>
            <p className="text-sm font-bold text-indigo-700 font-mono leading-tight uppercase tracking-wider">
              AI Product Builder • Vibe Coder
            </p>
            <p className="text-xs text-zinc-600 font-mono pt-0.5">
              Phone: {phone} &nbsp;|&nbsp; Email: {email} &nbsp;|&nbsp; Lahore, Pakistan &nbsp;|&nbsp; Portfolio: {website}
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-5 text-xs text-zinc-800 leading-relaxed">
          <span className="font-bold uppercase text-xs font-mono text-zinc-900 mr-2 tracking-wide">Summary:</span>
          AI-focused digital builder who turns ideas into practical digital products through AI-assisted development, rapid prototyping, and modern no-code/low-code workflows.
        </div>

        {/* Selected AI Products */}
        <div className="mb-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-1.5 mb-3">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Selected AI Products
            </h2>
            <span className="text-[11px] font-mono text-indigo-700 font-semibold uppercase">
              Core Focus
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs">
            {aiProjects.map((proj) => (
              <div key={proj.num} className="space-y-1 cv-print-item">
                <div className="flex items-center justify-between font-bold text-zinc-900 text-xs">
                  <span><span className="text-indigo-700 font-mono mr-1.5">{proj.num}</span> {proj.name}</span>
                  {proj.status && (
                    <span className="text-[10px] font-mono font-normal text-zinc-600 italic">
                      ({proj.status})
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-700 leading-relaxed">
                  {proj.description}
                </p>
                <p className="text-[11px] font-mono text-indigo-800 font-semibold">
                  Tools: {proj.tools.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities & Tools */}
        <div className="mb-6 cv-print-item">
          <div className="border-b border-zinc-400 pb-1.5 mb-2.5">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Capabilities & Development Tools
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <span className="font-bold text-zinc-900 block mb-1">AI & PRODUCT DEVELOPMENT:</span>
              <span className="text-zinc-700 leading-relaxed block text-[11px]">{capabilities.join(", ")}</span>
            </div>
            <div>
              <span className="font-bold text-indigo-800 block mb-1">PLATFORMS & TOOLS:</span>
              <span className="text-zinc-700 leading-relaxed block text-[11px]">{toolsList.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Technical / Product Focus */}
        <div className="mb-6 cv-print-item">
          <div className="border-b border-zinc-400 pb-1.5 mb-2.5">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Technical / Product Focus
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-800 leading-relaxed">
            {technicalFocus.join(" • ")}
          </p>
        </div>

        {/* Additional Background & Education */}
        <div className="grid grid-cols-12 gap-6 text-xs cv-print-item">
          
          {/* Additional Background */}
          <div className="col-span-6 space-y-1.5">
            <div className="border-b border-zinc-400 pb-1.5 mb-2">
              <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
                Additional Background
              </h2>
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Experience in social media management, content strategy, audience growth, and Meta advertising.
            </p>
          </div>

          {/* Education */}
          <div className="col-span-6 space-y-1.5">
            <div className="border-b border-zinc-400 pb-1.5 mb-2">
              <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
                Education
              </h2>
            </div>
            {education.map((edu) => (
              <div key={edu.degree} className="space-y-0.5 text-xs">
                <div className="flex items-center justify-between font-bold text-zinc-900">
                  <span>{edu.degree}</span>
                  <span className="font-mono font-normal text-[11px] text-zinc-600">{edu.period}</span>
                </div>
                <div className="text-[11px] font-mono text-indigo-800">{edu.field} — {edu.institution}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AICVPage;


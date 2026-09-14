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
  TrendingUp,
  GraduationCap,
  Wrench,
  MapPin,
  ArrowLeft,
  Award,
  Layers
} from "lucide-react";

export const GrowthCVPage = () => {
  usePageSEO(
    "M. Bin Amir — Growth Marketer CV",
    "CV of M. Bin Amir, a Social Media Manager and Growth Marketer focused on content strategy, brand growth, and performance marketing."
  );

  const phone = "+92 321 2594511";
  const email = "growthwithmba@gmail.com";
  const website = "growthwithmba-portfolio.vercel.app";

  const resultsMetrics = [
    { value: "+1,400%", label: "Content Views" },
    { value: "+461%", label: "Reach" },
    { value: "+700%", label: "Reach" },
    { value: "+320%", label: "Profile Activity" },
    { value: "850+", label: "Calls" },
    { value: "PKR 60K", label: "Ad Spend" }
  ];

  const growthExperiences = [
    {
      num: "01",
      role: "Social Media Manager",
      context: "Skincare Niche Account",
      period: "2024–2025",
      description: "Delivered a full content growth strategy focused on brand consistency, audience targeting, and optimization.",
      result: "+1,400% Content Views • +461% Reach"
    },
    {
      num: "02",
      role: "Brand Content & Growth",
      context: "Perfume E-Commerce Brand",
      period: "2025–Present",
      description: "Strengthened brand presence through consistent visual identity, strategic content execution, and audience targeting.",
      result: "+700% Reach • +320% Profile Activity in one month"
    },
    {
      num: "03",
      role: "Content & Growth",
      context: "Video Editing Agency",
      period: "2025",
      description: "Created retention-focused video edits with strong storytelling structure and performance hooks.",
      result: "+148% Content Views • +150% Non-Follower Reach in one month"
    },
    {
      num: "04",
      role: "Digital Campaign Manager",
      context: "Jamia Dar ul Quran — Qurbani Campaign",
      period: "2025–2026",
      description: "Executed a direct click-to-call Meta advertising campaign with optimized creatives, precise targeting, and budget efficiency.",
      result: "850+ Calls • PKR 60,000 Ad Spend"
    }
  ];

  const capabilities = [
    {
      group: "SOCIAL MEDIA",
      skills: ["Social Media Management", "Content Strategy", "Content Planning", "Audience Engagement"]
    },
    {
      group: "GROWTH",
      skills: ["Growth Strategy", "Performance Marketing", "Meta Advertising", "Audience Targeting"]
    },
    {
      group: "BRAND",
      skills: ["Brand Positioning", "Creative Direction", "Content Execution", "Digital Presence"]
    }
  ];

  const aiTools = ["Antigravity", "Gemini", "Lovable", "Supabase", "Cursor", "Perplexity"];

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
      {/* 1. SCREEN MODE CONTAINER (Growth Marketer CV)             */}
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
              <Printer className="w-4 h-4 text-[#B17A0A]" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Main Growth CV Content Wrapper */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-2">
          <div className="bg-[#0c0c0e] border border-zinc-800/90 rounded-2xl p-6 sm:p-10 space-y-10 shadow-2xl">
            
            {/* HEADER */}
            <header className="border-b border-zinc-800/80 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                  <img
                    src="/m_bin_amir.jpg"
                    alt="M. Bin Amir"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#B17A0A]/40 shrink-0 shadow-lg"
                  />

                  <div className="space-y-1.5">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      M. BIN AMIR
                    </h1>
                    <p className="text-sm sm:text-base font-bold font-mono text-[#B17A0A] uppercase tracking-wide">
                      Social Media Manager • Growth Marketer
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                      Helping brands grow through better social media, content strategy, and performance marketing.
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
                  <a href={`https://${website}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#B17A0A] hover:text-amber-400 transition-colors">
                    <Globe className="w-3.5 h-3.5 shrink-0" />
                    <span>{website}</span>
                  </a>
                </div>

              </div>
            </header>

            {/* SUMMARY */}
            <section className="space-y-2 bg-[#09090b] border border-zinc-800/90 rounded-xl p-5">
              <div className="text-xs font-mono font-bold uppercase text-[#B17A0A] tracking-wider">
                Summary
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Growth-focused social media manager with experience in content strategy, audience targeting, brand positioning, and Meta advertising. I combine creative execution with performance-focused thinking to help brands build visibility and engagement.
              </p>
            </section>

            {/* PROMINENT SELECTED RESULTS METRIC BLOCKS */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <h2 className="text-base font-bold text-white tracking-tight uppercase flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B17A0A]" />
                  <span>Selected Results</span>
                </h2>
                <span className="text-xs font-mono text-[#B17A0A] uppercase font-semibold">
                  Key Metrics
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {resultsMetrics.map((res, idx) => (
                  <div
                    key={idx}
                    className="bg-[#09090b] border border-[#B17A0A]/30 rounded-xl p-3.5 text-center space-y-1 hover:border-[#B17A0A]/60 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-[#B17A0A] font-mono tracking-tight">
                      {res.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-zinc-300">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* GROWTH & SOCIAL MEDIA EXPERIENCE */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <h2 className="text-base font-bold text-white tracking-tight uppercase flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#B17A0A]" />
                  <span>Growth & Social Media Experience</span>
                </h2>
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  2024 – Present
                </span>
              </div>

              <div className="space-y-5">
                {growthExperiences.map((exp) => (
                  <div
                    key={exp.num}
                    className="bg-[#09090b] border border-zinc-800/90 rounded-xl p-5 space-y-2 hover:border-[#B17A0A]/40 transition-colors group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-800/60 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-extrabold text-[#B17A0A] bg-amber-950/40 px-2 py-0.5 rounded border border-[#B17A0A]/30">
                          {exp.num}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                          {exp.role}{" "}
                          <span className="text-zinc-400 font-normal">
                            — {exp.context}
                          </span>
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#B17A0A] shrink-0 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                      {exp.description}
                    </p>

                    <div className="pt-1 flex items-center gap-2 text-xs font-mono text-[#B17A0A] font-semibold">
                      <span className="text-zinc-500 font-normal">Result:</span>
                      <span>{exp.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CORE CAPABILITIES (3 GROUPS) */}
            <section className="space-y-4">
              <div className="border-b border-zinc-800/80 pb-2">
                <h2 className="text-base font-bold text-white tracking-tight uppercase flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#B17A0A]" />
                  <span>Core Capabilities</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {capabilities.map((grp) => (
                  <div key={grp.group} className="bg-[#09090b] border border-zinc-800/90 rounded-xl p-4 space-y-3">
                    <div className="text-xs font-mono font-bold text-[#B17A0A] border-b border-zinc-800 pb-1.5 uppercase tracking-wider">
                      {grp.group}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.skills.map((s) => (
                        <span key={s} className="px-2 py-1 text-xs font-mono bg-zinc-900 text-zinc-300 rounded border border-zinc-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* BOTTOM GRID: DIGITAL PRODUCT BACKGROUND & EDUCATION */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
              
              {/* Digital Product Background */}
              <section className="md:col-span-7 space-y-3">
                <div className="border-b border-zinc-800/80 pb-1.5">
                  <h2 className="text-xs font-mono font-bold text-white tracking-wider uppercase flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Digital Product Background</span>
                  </h2>
                </div>

                <div className="bg-[#09090b] border border-zinc-800/90 rounded-xl p-4 space-y-2">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Experience building AI-assisted digital products and websites using modern AI development tools.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {aiTools.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-400 rounded border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="md:col-span-5 space-y-3">
                <div className="border-b border-zinc-800/80 pb-1.5">
                  <h2 className="text-xs font-mono font-bold text-white tracking-wider uppercase flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Education</span>
                  </h2>
                </div>

                <div className="space-y-2">
                  {education.map((edu) => (
                    <div key={edu.degree} className="bg-[#09090b] border border-zinc-800/90 rounded-xl p-3 space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span>{edu.degree}</span>
                        <span className="text-[10px] font-mono text-zinc-400 font-normal">{edu.period}</span>
                      </div>
                      <div className="text-[11px] text-[#B17A0A] font-mono">{edu.field}</div>
                      <div className="text-[11px] text-zinc-400">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

          </div>

          {/* SCREEN CTA */}
          <section className="mt-12 text-center space-y-6 pt-8 border-t border-zinc-800/80">
            <div className="space-y-2">
              <Badge variant="growth" icon={Sparkles} className="mx-auto text-xs">
                Need Help Growing a Brand?
              </Badge>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Let's build a stronger digital presence.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/growth">
                <Button variant="gold" size="sm" icon={TrendingUp}>
                  View Growth Work
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
                <Printer className="w-4 h-4 text-[#B17A0A]" />
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
        <div className="flex items-start justify-between border-b-2 border-[#B17A0A] pb-4 mb-5">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight uppercase">
              M. BIN AMIR
            </h1>
            <p className="text-sm font-bold text-[#B17A0A] font-mono leading-tight uppercase tracking-wider">
              Social Media Manager • Growth Marketer
            </p>
            <p className="text-xs text-zinc-600 font-mono pt-0.5">
              Phone: {phone} &nbsp;|&nbsp; Email: {email} &nbsp;|&nbsp; Lahore, Pakistan &nbsp;|&nbsp; Portfolio: {website}
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-5 text-xs text-zinc-800 leading-relaxed">
          <span className="font-bold uppercase text-xs font-mono text-zinc-900 mr-2 tracking-wide">Summary:</span>
          Growth-focused social media manager with experience in content strategy, audience targeting, brand positioning, and Meta advertising. I combine creative execution with performance-focused thinking to help brands build visibility and engagement.
        </div>

        {/* Selected Results */}
        <div className="mb-6 cv-print-item">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-1.5 mb-3">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Selected Results
            </h2>
            <span className="text-[11px] font-mono text-[#B17A0A] font-semibold uppercase">
              Key Metrics
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2 text-center font-mono">
            {resultsMetrics.map((res, idx) => (
              <div key={idx} className="bg-amber-50/60 border border-amber-200 p-2 rounded-lg">
                <div className="text-base font-extrabold text-[#B17A0A] leading-none">{res.value}</div>
                <div className="text-[10px] font-semibold text-zinc-800 mt-1">{res.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth & Social Media Experience */}
        <div className="mb-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-1.5 mb-3">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Growth & Social Media Experience
            </h2>
            <span className="text-xs font-mono text-zinc-600">2024 – Present</span>
          </div>

          <div className="space-y-3.5 text-xs">
            {growthExperiences.map((exp) => (
              <div key={exp.num} className="space-y-1 cv-print-item">
                <div className="flex items-center justify-between font-bold text-zinc-900 text-xs">
                  <span><span className="text-[#B17A0A] font-mono mr-1.5">{exp.num}</span> {exp.role} — <span className="font-normal text-zinc-700">{exp.context}</span></span>
                  <span className="font-mono text-[11px] text-zinc-600">{exp.period}</span>
                </div>
                <p className="text-[11px] text-zinc-700 leading-relaxed">
                  {exp.description}
                </p>
                <div className="text-[11px] font-mono text-[#B17A0A] font-bold">
                  Result: {exp.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-6 cv-print-item">
          <div className="border-b border-zinc-400 pb-1.5 mb-2.5">
            <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
              Core Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 text-xs font-mono">
            {capabilities.map((grp) => (
              <div key={grp.group}>
                <span className="font-bold text-zinc-900 block border-b border-zinc-200 pb-1 mb-1">{grp.group}:</span>
                <span className="text-zinc-700 leading-relaxed block text-[11px]">{grp.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Product Background & Education Split */}
        <div className="grid grid-cols-12 gap-6 text-xs cv-print-item">
          
          {/* Digital Product Background */}
          <div className="col-span-6 space-y-1">
            <div className="border-b border-zinc-400 pb-1.5 mb-1.5">
              <h2 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight uppercase">
                Digital Product Background
              </h2>
            </div>
            <p className="text-[11px] text-zinc-700 leading-relaxed">
              Experience building AI-assisted digital products and websites using modern AI development tools.
            </p>
            <p className="text-[11px] font-mono text-[#B17A0A] font-semibold pt-0.5">
              Tools: {aiTools.join(" • ")}
            </p>
          </div>

          {/* Education */}
          <div className="col-span-6 space-y-1">
            <div className="border-b border-zinc-400 pb-1.5 mb-1.5">
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
                <div className="text-[11px] font-mono text-[#B17A0A]">{edu.field} — {edu.institution}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default GrowthCVPage;

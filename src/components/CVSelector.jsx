import React from "react";
import { Link } from "react-router-dom";
import { usePageSEO } from "../utils/usePageSEO";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Cpu, TrendingUp, Sparkles, ArrowRight, Layers, CheckCircle2 } from "lucide-react";

export const CVSelector = () => {
  usePageSEO(
    "M. Bin Amir — Specialized CV Versions",
    "Select specialized CV versions for M. Bin Amir: AI Product Builder & Vibe Coder or Social Media Manager & Growth Marketer."
  );

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-center pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
        
        {/* Header Intro */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="ai" icon={Sparkles} className="mx-auto text-xs py-1 px-3">
            CV & Resume Gateway
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            M. BIN AMIR
          </h1>
          
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Two focused versions of my CV — depending on the kind of work you're looking for.
          </p>
        </div>

        {/* 2 Specialized Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: AI Product Building */}
          <div className="bg-[#0c0c0e] border border-zinc-800/90 hover:border-indigo-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 transition-all group shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                  01 / AI PRODUCT BUILDING
                </span>
                <div className="w-9 h-9 rounded-lg bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  AI Product Builder <br className="hidden sm:inline" />
                  <span className="text-indigo-400">& Vibe Coder</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  Building practical digital products through AI-assisted development, rapid prototyping, and modern product workflows.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {["AI Products", "Rapid Prototyping", "Vibe Coding"].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-300 rounded-md border border-zinc-800 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800/80">
              <Link to="/cv/ai" className="block">
                <Button variant="indigo" size="md" icon={ArrowRight} className="w-full justify-between">
                  View AI CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Growth Marketing */}
          <div className="bg-[#0c0c0e] border border-zinc-800/90 hover:border-[#B17A0A]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 transition-all group shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#D4991A] uppercase tracking-wider">
                  02 / GROWTH MARKETING
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#B17A0A]/15 border border-[#B17A0A]/30 flex items-center justify-center text-[#D4991A]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                  Social Media Manager <br className="hidden sm:inline" />
                  <span className="text-[#D4991A]">& Growth Marketer</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  Helping brands grow through social media strategy, content execution, audience targeting, and performance marketing.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {["Social Media", "Content Strategy", "Meta Advertising"].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-300 rounded-md border border-zinc-800 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B17A0A]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800/80">
              <Link to="/cv/growth" className="block">
                <Button variant="gold" size="md" icon={ArrowRight} className="w-full justify-between">
                  View Growth CV
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="text-center pt-4">
          <p className="text-xs font-mono text-zinc-500">
            Both CVs are tailored to the type of work I do.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CVSelector;

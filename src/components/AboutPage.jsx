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
  User,
  Sparkles,
  CheckCircle2,
  Code,
  ArrowRight
} from "lucide-react";

export const AboutPage = () => {
  usePageSEO(
    "About M. Bin Amir | AI Product Building & Growth Marketing",
    "Learn about M. Bin Amir — building practical digital products with AI development platforms and helping businesses grow through social media management and performance marketing."
  );

  return (
    <div className="min-h-screen bg-[#09090b]">
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ABOUT M. BIN AMIR"
            badgeVariant="default"
            badgeIcon={User}
            title="Building Products & Growing Brands"
            description="Working at the intersection of practical digital product development and performance marketing."
          />
        </div>
      </section>

      {/* Main About Story */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo Frame */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#0d0d10] rounded-xl p-6 border border-zinc-800 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">M. Bin Amir</h3>
                    <p className="text-xs font-mono text-zinc-400">AI Product Builder & Marketer</p>
                  </div>
                  <Badge variant="default">GrowthWithMBA</Badge>
                </div>

                {/* Real User Photo Display Frame */}
                <div className="relative mx-auto w-52 h-64 sm:w-60 sm:h-72 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 p-1 group">
                  <img
                    src="/m_bin_amir.jpg"
                    alt="M. Bin Amir — AI Product Builder & Growth Marketer"
                    className="w-full h-full object-cover rounded filter brightness-[1.02] contrast-[1.05] group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-50" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <div className="text-sm font-bold text-white drop-shadow">
                      M. Bin Amir
                    </div>
                    <div className="text-[11px] text-zinc-300 font-mono drop-shadow">
                      GrowthWithMBA
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-300 font-medium">
                    AI Product Building
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-300 font-medium">
                    Growth Marketing
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Body Copy */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-zinc-300"
            >
              <Badge variant="default" icon={Sparkles}>
                My Background
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Where Product Building Meets Audience Growth.
              </h2>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                Hi, I'm <strong className="text-white font-semibold">M. Bin Amir</strong>. I build practical digital products using modern AI development platforms and help businesses grow through social media and performance marketing.
              </p>

              <p className="text-sm sm:text-base leading-relaxed font-normal">
                My work sits between building and growth. On one side, I enjoy turning ideas into functional websites, web apps, tools, and digital products. On the other, I bring hands-on experience in social media management, content strategy, Instagram growth, and Meta advertising.
              </p>

              <p className="text-sm sm:text-base leading-relaxed font-normal">
                This combination helps me think about both the product being built and the people or businesses it is meant to serve.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Practical Web & App Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Social Media & Instagram Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Performance Meta Advertising</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Outcome-Oriented Strategy</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Current Professional Experience */}
      <section className="py-20 bg-[#0c0c0e] border-y border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="default" className="mx-auto">
              Current Focus
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Current Professional Work
            </h2>
          </div>

          <Card hover={true} className="border-zinc-800 p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Social Media & Digital Growth</h3>
                <p className="text-xs font-mono text-zinc-400">Mukaf</p>
              </div>
              <Badge variant="gold">Current Work</Badge>
            </div>

            <p className="text-base text-white font-semibold leading-relaxed">
              Currently working on Mukaf's social media presence and digital growth.
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              I currently manage and work on Mukaf's social media presence, focusing on content strategy, brand visibility, audience engagement, and overall digital growth.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Work With Me */}
      <WhyWorkWithMe />

      {/* Cross Navigation CTAs */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Which experience would you like to explore?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai" className="w-full sm:w-auto">
              <Button variant="indigo" size="lg" icon={Code} className="w-full">
                AI Product Building →
              </Button>
            </Link>

            <Link to="/growth" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" icon={ArrowRight} className="w-full">
                Growth Marketing →
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

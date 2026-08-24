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
  TrendingUp,
  PhoneCall,
  Zap,
  Eye,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Target,
  BarChart3,
  Layers,
  Wrench,
  BookOpen,
  ArrowRight,
  Sparkles,
  Calendar
} from "lucide-react";

export const GrowthPortfolio = () => {
  usePageSEO(
    "Social Media Manager & Growth Marketer | M. Bin Amir",
    "M. Bin Amir helps businesses grow through social media management, Instagram growth, content strategy, and Meta advertising."
  );

  const services = [
    {
      id: "smm",
      title: "Social Media Management",
      badge: "Core Service",
      icon: Layers,
      accentBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      description: "Complete management of your brand's social platforms to ensure consistent, high-quality social media presence.",
      deliverables: [
        "Content planning",
        "Content scheduling",
        "Social media strategy",
        "Instagram management",
        "Profile optimization",
        "Community engagement",
        "Performance reporting"
      ]
    },
    {
      id: "content-strategy",
      title: "Content & Growth Strategy",
      badge: "Organic Growth",
      icon: BookOpen,
      accentBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      description: "Custom content roadmaps built to target reach, build brand authority, and grow target audiences.",
      deliverables: [
        "Content strategy",
        "Content pillars",
        "Instagram growth",
        "Audience research",
        "Competitor research",
        "Brand positioning",
        "Performance analysis"
      ]
    },
    {
      id: "meta-ads",
      title: "Meta Advertising",
      badge: "Paid Campaigns",
      icon: Target,
      accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      description: "Performance paid campaigns built to generate qualified inquiries, leads, and sales.",
      deliverables: [
        "Facebook Ads",
        "Instagram Ads",
        "Lead generation",
        "Audience targeting",
        "Campaign optimization",
        "Performance tracking"
      ]
    }
  ];

  const caseStudies = [
    {
      id: "jamia",
      client: "Jamia Dar ul Quran",
      category: "Meta Advertising & Lead Generation",
      primaryMetric: "850+ Calls Generated",
      secondaryMetric: "PKR 60,000 Ad Spend",
      badgeText: "Lead Generation",
      badgeVariant: "live",
      icon: PhoneCall,
      challenge: "Low student enrollment inquiries and high cost-per-lead for educational programs.",
      strategy: "Shifted to direct click-to-call funnels targeting interested demographics.",
      execution: "Crafted high-intent copy, direct call buttons, and optimized Meta lead forms.",
      results: [
        "Generated ~850 verified inbound call inquiries",
        "Capped total ad spend at PKR 60,000 for maximum ROI",
        "Secured a significant volume of direct student enrollments"
      ]
    },
    {
      id: "theskin",
      client: "TheSkin.pk",
      category: "E-Commerce Growth",
      primaryMetric: "+1400% Content Views",
      secondaryMetric: "+461% Reach",
      badgeText: "E-Com Scale",
      badgeVariant: "metric",
      icon: Eye,
      challenge: "Stagnant traffic and high customer acquisition cost in competitive skincare niche.",
      strategy: "Deployed problem-solution short videos with retargeting custom ad sets.",
      execution: "Produced short video hooks and automated pixel retargeting.",
      results: [
        "+1400% increase in content video views",
        "+461% expansion in total target audience reach",
        "Substantial increase in store sales conversions"
      ]
    },
    {
      id: "mukaf",
      client: "Mukaf",
      category: "Brand Growth & Engagement",
      primaryMetric: "+700% Reach",
      secondaryMetric: "+320% Profile Activity",
      badgeText: "Brand Scale",
      badgeVariant: "cyan",
      icon: Zap,
      challenge: "Limited organic distribution restricting brand authority and incoming inquiries.",
      strategy: "Redesigned profile content structure and engagement triggers.",
      execution: "Overhauled social profile, published consistent educational posts, and optimized call-to-actions.",
      results: [
        "+700% growth in organic brand reach",
        "+320% increase in active profile engagement",
        "Established a consistent stream of incoming client inquiries"
      ]
    },
    {
      id: "video-agency",
      client: "Video Editing Agency",
      category: "B2B Client Acquisition",
      primaryMetric: "+148% Content Views",
      secondaryMetric: "+150% Non-Follower Reach",
      badgeText: "B2B Growth",
      badgeVariant: "rose",
      icon: TrendingUp,
      challenge: "Content reach was restricted to current followers, limiting new B2B client acquisition.",
      strategy: "Published out-of-network video breakdowns showcasing workflows and client case studies.",
      execution: "Produced high-pacing short clips targeted at business decision makers.",
      results: [
        "+148% increase in total content views",
        "+150% growth in non-follower audience reach",
        "Steady stream of new consultation inquiries"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand Your Brand",
      desc: "Learn about the business, goals, audience, competitors, and current social media presence."
    },
    {
      number: "02",
      title: "Build the Strategy",
      desc: "Develop a practical content and growth strategy based on the business goals."
    },
    {
      number: "03",
      title: "Plan & Create",
      desc: "Plan content, ideas, messaging, and campaigns."
    },
    {
      number: "04",
      title: "Manage & Optimize",
      desc: "Execute the strategy, monitor performance, and improve what is working."
    },
    {
      number: "05",
      title: "Review & Grow",
      desc: "Analyze results and refine the strategy for continued growth."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="flex justify-center">
            <Badge variant="live" ping className="py-1.5 px-4 text-xs font-semibold">
              Social Media Manager • Growth Marketer
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Helping Brands Grow Through{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Better Social Media.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            I help businesses build stronger social media presence through content strategy, Instagram growth, social media management, and targeted Meta advertising.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact?service=growth">
              <Button variant="emerald" size="lg" icon={Calendar}>
                Let's Grow Your Brand
              </Button>
            </Link>
            <a href="#growth-results">
              <Button variant="secondary" size="lg" icon={BarChart3}>
                View Results
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Growth Services (3 Services) */}
      <section className="py-20 bg-[#0c0c0e] relative border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="SOLUTIONS"
            badgeVariant="live"
            badgeIcon={Layers}
            title="Growth Marketing Services"
            description="Three core service offerings designed to build consistent social media presence and drive real commercial outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <Card key={srv.id} hover={true} className="flex flex-col justify-between border-zinc-800/90 hover:border-emerald-500/40">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${srv.accentBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="live">{srv.badge}</Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-zinc-800/80">
                      <span className="text-xs font-mono uppercase text-zinc-300 font-semibold">
                        Includes
                      </span>
                      <div className="space-y-1.5">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800/80">
                    <Link to="/contact?service=growth">
                      <Button variant="ghost" size="sm" icon={ArrowRight} className="w-full justify-between text-emerald-400 hover:text-emerald-300">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Results & Case Studies (Single Proof Section) */}
      <section id="growth-results" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="VERIFIED PROOF"
            badgeVariant="live"
            badgeIcon={BarChart3}
            title="Growth & Marketing Results"
            description="Real results from social media strategy, content growth, and paid advertising."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex"
                >
                  <Card hover={true} className="flex flex-col justify-between w-full border-zinc-800/90 hover:border-emerald-500/40">
                    <div className="space-y-6">
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
                        <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            {study.primaryMetric}
                          </div>
                          <div className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                            {study.secondaryMetric}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                          Verified Case Study
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase text-rose-400 font-bold flex items-center gap-1">
                            <Target className="w-3.5 h-3.5" /> Challenge
                          </span>
                          <p className="text-zinc-300 leading-relaxed text-xs">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5" /> Strategy
                          </span>
                          <p className="text-zinc-300 leading-relaxed text-xs">
                            {study.strategy}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold flex items-center gap-1">
                            <Wrench className="w-3.5 h-3.5" /> Execution
                          </span>
                          <p className="text-zinc-300 leading-relaxed text-xs">
                            {study.execution}
                          </p>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                          <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> Key Results
                          </span>
                          <div className="space-y-1">
                            {study.results.map((res, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{res}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-zinc-800/80">
                      <Link to="/contact?service=growth">
                        <Button variant="ghost" size="sm" icon={ArrowUpRight} className="text-emerald-400 hover:text-emerald-300">
                          Discuss Similar Growth
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

      {/* Growth Process */}
      <section className="py-20 bg-[#0c0c0e] relative border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="WORKFLOW"
            badgeVariant="live"
            badgeIcon={Sparkles}
            title="Growth Process"
            description="5-step execution framework tailored specifically for social media management and brand growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card hover={true} className="h-full flex flex-col justify-between border-zinc-800/90">
                  <div className="space-y-3">
                    <span className="text-2xl font-black font-mono text-emerald-400">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
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
            Have a product or digital idea you want to build?
          </p>
          <Link to="/ai" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
            <span>Explore AI Product Building</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Growth Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <Badge variant="live" ping className="mx-auto">
            Start Growing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Tell me about your business and social media goals, and let's discuss how I can help.
          </p>
          <div className="pt-2">
            <Link to="/contact?service=growth">
              <Button variant="emerald" size="lg" icon={Calendar}>
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

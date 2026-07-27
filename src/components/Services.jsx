import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Card, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Calendar,
  BookOpen
} from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Services = () => {
  const servicesList = [
    {
      id: "smm",
      title: "Social Media Management",
      badge: "Brand Growth",
      badgeVariant: "live",
      icon: Layers,
      accentBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      description:
        "Complete organic management of your brand's social media platforms to increase visibility, engagement, and consistent content output.",
      deliverables: [
        "Monthly Content Management",
        "Content Scheduling",
        "Community Management",
        "Profile Optimization",
        "Monthly Reporting",
      ],
      expectedOutcome:
        "A polished, active online presence that builds brand credibility and organic reach.",
    },
    {
      id: "instagram-growth",
      title: "Instagram Growth",
      badge: "Organic Reach",
      badgeVariant: "cyan",
      icon: InstagramIcon,
      accentBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      description:
        "Targeted organic growth strategies designed to expand your Instagram footprint and attract high-value followers.",
      deliverables: [
        "Organic Growth Strategy",
        "Audience Research",
        "Competitor Analysis",
        "Engagement Strategy",
        "Growth Planning",
      ],
      expectedOutcome:
        "A growing, highly targeted follower base that actively interacts with your brand.",
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      badge: "Creative Pillars",
      badgeVariant: "default",
      icon: BookOpen,
      accentBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      description:
        "Blueprint development defining your content pillars, scheduling matrices, and engagement hooks to keep your audience hooked.",
      deliverables: [
        "Content Planning",
        "Monthly Content Calendar",
        "Caption Writing",
        "Reel Strategy",
        "Content Pillars",
      ],
      expectedOutcome:
        "A strategic content engine that removes all guesswork and establishes clear brand authority.",
    },
    {
      id: "meta-ads",
      title: "Meta Advertising",
      badge: "Paid Acquisition",
      badgeVariant: "metric",
      icon: Target,
      accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      description:
        "Performance paid advertising campaigns designed to turn targeted ad spend into qualified inquiries, leads, and direct conversions.",
      deliverables: [
        "Facebook & Instagram Ads",
        "Lead Generation Campaigns",
        "Campaign Retargeting Setups",
        "Ad Copy & Creative Direction",
        "Campaign Performance Optimization",
      ],
      expectedOutcome:
        "High conversion volume at lowest acquisition costs (850+ qualified inquiries generated).",
    },
    {
      id: "brand-growth",
      title: "Brand Growth Strategy",
      badge: "Marketing Roadmap",
      badgeVariant: "rose",
      icon: TrendingUp,
      accentBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
      description:
        "Complete high-level marketing roadmap establishing your brand positioning and visual content direction to win international clients.",
      deliverables: [
        "Brand Positioning Strategy",
        "Visual Content Direction",
        "Audience & Market Research",
        "Strategic Marketing Roadmap",
      ],
      expectedOutcome:
        "Clear brand differentiation and a structured marketing blueprint designed for high-paying clients.",
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
          title="Social Media &"
          highlightText="Growth Services."
          description="Designed to solve critical business bottlenecks, grow active social presence, and build high-value customer acquisition channels."
        />

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
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
            Let's review your business goals and determine the highest-ROI approach for your brand.
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
              Get Your Free Social Media Audit
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

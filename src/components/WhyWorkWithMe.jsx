import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Target, Zap, TrendingUp, MessageSquare } from "lucide-react";

export const WhyWorkWithMe = () => {
  const principles = [
    {
      title: "Practical Problem Solving",
      description:
        "I focus on understanding the actual goal before deciding what should be built or improved.",
      icon: Target,
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Fast, Modern Execution",
      description:
        "I use modern tools and platforms to move efficiently from idea to execution.",
      icon: Zap,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Growth Perspective",
      description:
        "My marketing experience helps me consider users, audiences, and business goals alongside the work itself.",
      icon: TrendingUp,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Clear Communication",
      description:
        "I keep the process straightforward and collaborative so clients always understand what is happening.",
      icon: MessageSquare,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="live" ping className="mx-auto">
            Approach & Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work With Me?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Clear principles that guide how I build digital products and help brands grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card hover={true} className={`h-full border-zinc-800/80 hover:${p.border}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center ${p.color} shrink-0 mt-1`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
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

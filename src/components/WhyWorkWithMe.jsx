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
    },
    {
      title: "Fast, Modern Execution",
      description:
        "I use modern tools and platforms to move efficiently from idea to execution.",
      icon: Zap,
    },
    {
      title: "Growth Perspective",
      description:
        "My marketing experience helps me consider users, audiences, and business goals alongside the work itself.",
      icon: TrendingUp,
    },
    {
      title: "Clear Communication",
      description:
        "I keep the process straightforward and collaborative so clients always understand what is happening.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="default" className="mx-auto">
            Approach & Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work With Me?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Clear principles that guide how I build digital products and help brands grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
              >
                <Card hover={true} className="h-full border-zinc-800">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
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

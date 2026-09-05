import React from "react";
import { cn } from "../../utils/cn";

export const Badge = ({
  children,
  variant = "default",
  icon: Icon,
  className,
  ping = false,
  ...props
}) => {
  const variants = {
    default:
      "bg-zinc-900 text-zinc-300 border border-zinc-800",
    gold:
      "bg-[#B17A0A]/10 text-[#D4991A] border border-[#B17A0A]/30",
    live:
      "bg-[#B17A0A]/10 text-[#D4991A] border border-[#B17A0A]/30",
    ai:
      "bg-indigo-950/50 text-indigo-300 border border-indigo-500/30",
    cyan:
      "bg-zinc-900 text-zinc-300 border border-zinc-800",
    metric:
      "bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium",
    rose:
      "bg-zinc-900 text-zinc-300 border border-zinc-800",
    tech:
      "bg-zinc-900/80 text-zinc-400 border border-zinc-800/80 font-mono text-xs hover:text-zinc-200 hover:border-zinc-700 transition-colors",
    outline:
      "bg-transparent text-zinc-400 border border-zinc-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {ping && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B17A0A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B17A0A]"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

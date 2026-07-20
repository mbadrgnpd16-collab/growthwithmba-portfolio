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
      "bg-zinc-900/90 text-zinc-300 border border-zinc-800",
    live:
      "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 shadow-sm shadow-emerald-500/10",
    ai:
      "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 shadow-sm shadow-indigo-500/10",
    cyan:
      "bg-cyan-950/60 text-cyan-300 border border-cyan-500/30",
    metric:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold",
    tech:
      "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 font-mono text-xs hover:text-zinc-200 hover:border-zinc-700 transition-colors",
    outline:
      "bg-transparent text-zinc-400 border border-zinc-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {ping && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

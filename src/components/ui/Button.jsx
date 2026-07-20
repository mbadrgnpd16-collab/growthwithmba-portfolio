import React from "react";
import { cn } from "../../utils/cn";

export const Button = React.forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 border border-indigo-400/30",
      secondary:
        "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/60 hover:border-zinc-500/60 shadow-sm backdrop-blur-md",
      emerald:
        "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 border border-emerald-400/30",
      outline:
        "bg-transparent text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50",
      ghost:
        "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40",
      glass:
        "glass-panel text-zinc-200 hover:text-white hover:border-indigo-500/40 shadow-inner",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2.5 text-sm gap-2",
      lg: "px-6 py-3 text-base font-semibold gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
      </button>
    );
  }
);

Button.displayName = "Button";

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
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-600/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]";

    const variants = {
      primary:
        "bg-white text-zinc-950 hover:bg-zinc-200 font-semibold shadow-sm border border-white/20",
      secondary:
        "bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 hover:border-zinc-700 shadow-sm",
      gold:
        "bg-[#B17A0A] hover:bg-[#966708] text-white font-semibold shadow-sm border border-[#B17A0A]/50",
      indigo:
        "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm border border-indigo-500/50",
      emerald:
        "bg-[#B17A0A] hover:bg-[#966708] text-white font-semibold shadow-sm border border-[#B17A0A]/50",
      outline:
        "bg-transparent text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50",
      ghost:
        "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40",
      glass:
        "bg-zinc-900/80 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-5 py-2.5 text-sm font-semibold gap-2",
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

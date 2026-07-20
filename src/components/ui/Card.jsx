import React from "react";
import { cn } from "../../utils/cn";

export const Card = ({
  children,
  className,
  hover = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group",
        hover && "glass-card-hover",
        glow && "glow-primary",
        className
      )}
      {...props}
    >
      {/* Top micro light reflection border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={cn("mb-4 space-y-1.5", className)}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={cn("text-xl font-bold text-white tracking-tight", className)}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className }) => (
  <p className={cn("text-sm text-zinc-400 leading-relaxed", className)}>
    {children}
  </p>
);

export const CardContent = ({ children, className }) => (
  <div className={cn("relative z-10", className)}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={cn("mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between", className)}>
    {children}
  </div>
);

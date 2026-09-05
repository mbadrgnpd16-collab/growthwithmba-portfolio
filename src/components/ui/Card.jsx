import React from "react";
import { cn } from "../../utils/cn";

export const Card = ({
  children,
  className,
  hover = true,
  _glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#0d0d10] border border-zinc-800 rounded-xl p-6 transition-all duration-200 relative overflow-hidden group",
        hover && "hover:border-zinc-700",
        className
      )}
      {...props}
    >
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
  <p className={cn("text-sm text-zinc-400 leading-relaxed font-normal", className)}>
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

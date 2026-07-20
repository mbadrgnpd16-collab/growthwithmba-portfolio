import React from "react";
import { cn } from "../../utils/cn";
import { Badge } from "./Badge";

export const SectionHeader = ({
  badge,
  badgeVariant = "ai",
  badgeIcon,
  title,
  highlightText,
  description,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16 space-y-4",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div>
          <Badge variant={badgeVariant} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
        {title}{" "}
        {highlightText && (
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

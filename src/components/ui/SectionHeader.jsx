import React from "react";
import { cn } from "../../utils/cn";
import { Badge } from "./Badge";

export const SectionHeader = ({
  badge,
  badgeVariant = "default",
  badgeIcon,
  title,
  highlightText,
  highlightColor = "gold",
  description,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";

  const highlightStyles = {
    gold: "text-[#B17A0A]",
    indigo: "text-indigo-400",
    white: "text-white",
  };

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

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
        {title}{" "}
        {highlightText && (
          <span className={highlightStyles[highlightColor] || "text-white"}>
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

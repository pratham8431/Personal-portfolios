"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen items-center justify-center bg-[#111113] text-[#F5F5F4] transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={cn(
              `
              [--aurora:repeating-linear-gradient(100deg,#7CFF6B_10%,#0a0a0a_15%,#0d2a0d_20%,#0a0a0a_25%,#4ade80_30%)]
              [background-image:var(--aurora)]
              [background-size:300%_200%]
              [background-position:50%_50%]
              filter blur-[10px] invert-0
              after:content-[""] after:absolute after:inset-0
              after:[background-image:var(--aurora)]
              after:[background-size:200%_100%]
              after:animate-aurora
              after:[background-attachment:fixed]
              after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-40 will-change-transform
              [animation:aurora_12s_linear_infinite]
              `,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,transparent_70%)]`
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

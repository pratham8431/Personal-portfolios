"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FixedPhoto() {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      // Flip B&W → color over the first 60vh of scroll
      setRotation(Math.min(1, y / (vh * 0.6)) * 180);

      // Fade out between 120vh–180vh so it disappears before Work section
      const fade = 1 - Math.max(0, Math.min(1, (y - vh * 1.2) / (vh * 0.6)));
      setOpacity(fade);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showingColor = rotation > 90;

  return (
    <div
      aria-hidden="true"
      className="hidden md:block"
      style={{
        position: "fixed",
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(220px, 22vw, 300px)",
        zIndex: 2,
        opacity,
        pointerEvents: opacity < 0.05 ? "none" : "auto",
      }}
    >
      {/* Flip card */}
      <div style={{ perspective: "1000px" }}>
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            position: "relative",
            aspectRatio: "3/4",
            borderRadius: "10px",
            boxShadow: "0 0 80px rgba(124,255,107,0.1), 0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Front — grayscale */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[10px]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src="/pratham.png"
              alt="Pratham Jadhav"
              fill
              className="object-cover object-top"
              sizes="300px"
              priority
              style={{ filter: "grayscale(1) contrast(1.08)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0.3) 60%, transparent 100%)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "#F5F5F4" }}>
                Pratham Jadhav
              </p>
              <p className="mono text-[10px] mt-0.5" style={{ color: "#9A9CA3" }}>
                Scroll to reveal
              </p>
            </div>
          </div>

          {/* Back — full color */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[10px]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              border: "1px solid rgba(124,255,107,0.2)",
            }}
          >
            <Image
              src="/pratham.png"
              alt="Pratham Jadhav"
              fill
              className="object-cover object-top"
              sizes="300px"
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0.3) 60%, transparent 100%)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "#F5F5F4" }}>
                Pratham Jadhav
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#7CFF6B]"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                <p className="mono text-[10px]" style={{ color: "#7CFF6B" }}>
                  Available for work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <p
        className="mono text-[10px] text-center mt-2 transition-opacity duration-300"
        style={{ color: "#9A9CA3", opacity: showingColor ? 0 : 0.5 }}
      >
        ↓ scroll
      </p>
    </div>
  );
}

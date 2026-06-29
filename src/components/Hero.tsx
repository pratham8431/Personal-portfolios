"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ScrollFlipPhoto() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Flip completes over the first 60vh of scroll
      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.6));
      setRotation(progress * 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Past 90deg we're looking at the back face — show color label
  const showingColor = rotation > 90;

  return (
    <div
      className="w-full max-w-xs mx-auto md:mx-0 md:ml-auto"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
          // No CSS transition — driven purely by scroll for precision
          position: "relative",
          aspectRatio: "3/4",
          borderRadius: "10px",
          boxShadow: "0 0 60px rgba(124,255,107,0.08), 0 24px 64px rgba(0,0,0,0.5)",
        }}
      >
        {/* ── FRONT — grayscale ── */}
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
            sizes="320px"
            priority
            style={{ filter: "grayscale(1) contrast(1.1)" }}
          />
          {/* overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-5"
            style={{
              background:
                "linear-gradient(to top, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0.3) 60%, transparent 100%)",
            }}
          >
            <p className="text-base font-semibold" style={{ color: "#F5F5F4" }}>
              Pratham Jadhav
            </p>
            <p className="mono text-xs mt-0.5" style={{ color: "#9A9CA3" }}>
              Scroll to reveal
            </p>
          </div>
        </div>

        {/* ── BACK — full color ── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[10px]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "1px solid rgba(124,255,107,0.18)",
          }}
        >
          <Image
            src="/pratham.png"
            alt="Pratham Jadhav"
            fill
            className="object-cover object-top"
            sizes="320px"
            priority
          />
          {/* overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-5"
            style={{
              background:
                "linear-gradient(to top, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0.3) 60%, transparent 100%)",
            }}
          >
            <p className="text-base font-semibold" style={{ color: "#F5F5F4" }}>
              Pratham Jadhav
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#7CFF6B] flex-shrink-0"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <p className="mono text-xs" style={{ color: "#7CFF6B" }}>
                Available for work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hint text below card */}
      <p
        className="mono text-[10px] text-center mt-3 transition-opacity duration-300"
        style={{ color: "#9A9CA3", opacity: showingColor ? 0 : 0.6 }}
      >
        ↓ scroll
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left — copy */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span
              className="mono text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#7CFF6B" }}
            >
              AI-Native Design Engineer
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ color: "#F5F5F4" }}
          >
            I turn designs into shipped,{" "}
            <span style={{ color: "#7CFF6B" }}>converting websites</span> — at AI speed.
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "#9A9CA3" }}>
            Frontend builder using React, Next.js, and TypeScript — with Claude Code and ChatGPT in
            the loop every day. I ship pixel-perfect, production-ready interfaces in days, not weeks.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-[#7CFF6B] text-black hover:bg-[#9dff8f] transition-colors"
            >
              View my work
            </a>
            <a
              href="mailto:prathamjadhav915@gmail.com"
              className="px-5 py-2.5 rounded-[4px] text-sm font-medium transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F4" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — scroll-flip photo */}
        <ScrollFlipPhoto />
      </motion.div>
    </section>
  );
}

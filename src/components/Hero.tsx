"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Text content — left side */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-6 py-16 md:max-w-[55%]"
      >
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
      </motion.div>

      {/* Photo — absolute right side, only on md+, scrolls away with hero */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "absolute",
          right: "4%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(200px, 20vw, 280px)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Float wrapper */}
        <div style={{ animation: "photo-float 4s ease-in-out infinite" }}>
          <div style={{ perspective: "1000px" }}>
            {/* Flip card */}
            <div
              style={{
                transformStyle: "preserve-3d",
                animation: "card-flip 4.5s ease-in-out infinite",
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: "10px",
                boxShadow: "0 0 80px rgba(124,255,107,0.12), 0 32px 80px rgba(0,0,0,0.7)",
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
                  sizes="280px"
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
                  <p className="text-sm font-semibold" style={{ color: "#F5F5F4" }}>Pratham Jadhav</p>
                  <p className="mono text-[10px] mt-0.5" style={{ color: "#9A9CA3" }}>AI Design Engineer</p>
                </div>
              </div>

              {/* Back — full color */}
              <div
                className="absolute inset-0 overflow-hidden rounded-[10px]"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  border: "1px solid rgba(124,255,107,0.22)",
                }}
              >
                <Image
                  src="/pratham.png"
                  alt="Pratham Jadhav"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0.3) 60%, transparent 100%)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#F5F5F4" }}>Pratham Jadhav</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#7CFF6B]"
                      style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                    />
                    <p className="mono text-[10px]" style={{ color: "#7CFF6B" }}>Available for work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
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
    </section>
  );
}

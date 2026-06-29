"use client";

import { useState } from "react";

const cards = [
  {
    tag: "01",
    title: "Speed vs. quality",
    question: "How do you ship fast without shipping broken pages?",
    answer:
      "AI handles the boilerplate so I can focus on what matters. I scaffold fast with Claude Code, then manually verify every interaction, breakpoint, and edge case before it ships. Speed comes from removing unnecessary steps — not from skipping QA.",
  },
  {
    tag: "02",
    title: "AI vs. craft",
    question: "When do you prompt, and when do you hand-code?",
    answer:
      "I prompt for structure, repetition, and first drafts. I hand-code for exact spacing, animation timing, brand-critical details, and anything where judgment matters more than speed. AI output always gets reviewed — I know what production-quality looks like.",
  },
  {
    tag: "03",
    title: "Design to deployment",
    question: "How do you turn a Figma file into a pixel-perfect, responsive build?",
    answer:
      "I extract design tokens first, then build components from the smallest unit up. I catch 1px misalignments, test on real devices, and check every breakpoint. The design file is the spec — the build matches it.",
  },
  {
    tag: "04",
    title: "Conversion",
    question: "How do you make a page that doesn't just look good, but performs?",
    answer:
      "Clear hierarchy above the fold, friction-free CTAs, fast LCP, and no layout shift. Performance and conversion are the same problem — a slow or confusing page loses both. I wire up analytics before launch so we can measure, not guess.",
  },
];

function FlipCard({ card }: { card: (typeof cards)[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: "900px", height: "220px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-[6px] p-6 flex flex-col gap-4"
          style={{
            background: "#18181b",
            border: "1px solid rgba(255,255,255,0.08)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span className="mono text-xs" style={{ color: "#7CFF6B" }}>{card.tag}</span>
          <h3 className="text-base font-semibold" style={{ color: "#F5F5F4" }}>
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#9A9CA3" }}>
            {card.question}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-[6px] p-6 flex flex-col gap-3"
          style={{
            background: "#0f1f0f",
            border: "1px solid rgba(124,255,107,0.25)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="mono text-xs" style={{ color: "#7CFF6B" }}>
            {card.tag} — My answer
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "#d4f5d0" }}>
            {card.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Challenge() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
          The Challenge
        </span>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mt-4 mb-4 max-w-2xl"
          style={{ color: "#F5F5F4" }}
        >
          Building a website is easy. Building one that{" "}
          <span style={{ color: "#7CFF6B" }}>converts, ships fast, and doesn&apos;t break</span> — is not.
        </h2>
        <p className="text-base mb-12 max-w-xl" style={{ color: "#9A9CA3" }}>
          These are the real tensions every frontend build runs into.{" "}
          <span style={{ color: "#7CFF6B" }}>Hover each card</span> for my answer.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <FlipCard key={card.tag} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

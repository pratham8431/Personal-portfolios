"use client";

const steps = [
  {
    number: "01",
    title: "From Figma to pixel-perfect, fast",
    phase: "Design → Code",
    desc: "I start from the source of truth — a Figma file or design intent from a stakeholder — and translate every spacing token, interaction state, and responsive breakpoint into production code. I catch 1px misalignments before they reach QA. Design fidelity is the baseline, not a stretch goal.",
    visual: {
      type: "code",
      content: `// Design token → production CSS
--spacing-4: 1rem;         /* 16px  ✓ */
--color-brand: #7CFF6B;    /* exact ✓ */
--radius-card: 6px;        /* consistent ✓ */
// No magic numbers. No guesses.`,
    },
  },
  {
    number: "02",
    title: "AI is my force multiplier, not my crutch",
    phase: "AI-Assisted Build",
    desc: "I use Claude Code and ChatGPT daily — for scaffolding, debugging, refactoring, and repetitive patterns. I hand-code for exact spacing, animation timing, architecture decisions, and anything brand-critical. Every AI output gets reviewed. I know what production-quality looks like, so I know when it isn't.",
    visual: {
      type: "flow",
      steps: ["Design intent", "AI scaffold", "Manual refinement", "Perf optimization", "Deploy"],
    },
  },
  {
    number: "03",
    title: "QA, deploy, measure, repeat",
    phase: "Ship & Iterate",
    desc: "Cross-device testing on real browsers, Lighthouse checks, analytics before launch. At Opraah and Speeedy.ai I owned features end-to-end — requirements through post-release. I don't hand off at PR merge; I follow through until it works in production.",
    visual: {
      type: "checklist",
      items: [
        "Cross-browser & device QA",
        "Lighthouse performance audit",
        "SEO + meta tags handled",
        "Post-launch iteration based on feedback",
      ],
    },
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
          How I Work
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mt-4 mb-16 max-w-xl"
          style={{ color: "#F5F5F4" }}
        >
          A repeatable process that ships quality, every time.
        </h2>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={step.number} className="grid md:grid-cols-2 gap-10 items-start">
              {/* Copy */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="mono text-xs font-bold" style={{ color: "#7CFF6B" }}>
                    {step.number}
                  </span>
                  <span
                    className="mono text-[10px] px-2 py-0.5 rounded-[3px] uppercase tracking-widest"
                    style={{
                      background: "rgba(124,255,107,0.08)",
                      color: "#7CFF6B",
                      border: "1px solid rgba(124,255,107,0.15)",
                    }}
                  >
                    {step.phase}
                  </span>
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ color: "#F5F5F4" }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#9A9CA3" }}>
                  {step.desc}
                </p>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className="rounded-[6px] p-5"
                  style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {step.visual.type === "code" && (
                    <pre
                      className="mono text-xs leading-relaxed overflow-x-auto"
                      style={{ color: "#9A9CA3" }}
                    >
                      <code>{step.visual.content}</code>
                    </pre>
                  )}

                  {step.visual.type === "flow" && (
                    <div className="flex flex-wrap gap-2 items-center">
                      {step.visual.steps!.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span
                            className="mono text-xs px-3 py-1.5 rounded-[3px]"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              color: "#F5F5F4",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            {s}
                          </span>
                          {idx < step.visual.steps!.length - 1 && (
                            <span style={{ color: "#9A9CA3" }}>→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {step.visual.type === "checklist" && (
                    <div className="space-y-3">
                      {step.visual.items!.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="mono text-xs" style={{ color: "#7CFF6B" }}>✓</span>
                          <span className="text-sm" style={{ color: "#F5F5F4" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

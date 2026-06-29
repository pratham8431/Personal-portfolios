"use client";

import Image from "next/image";

const experience = [
  {
    role: "AI Design Engineer",
    company: "Opraah",
    period: "Jan 2026 – Jun 2026",
    highlights: [
      "Built and maintained production React interfaces across 13+ business modules",
      "Used Claude Code and ChatGPT daily to accelerate implementation and debugging",
      "Worked directly with founders to translate ideas into production-ready features",
      "Owned features end-to-end — requirements through deployment and post-release",
    ],
  },
  {
    role: "AI Design Engineer",
    company: "Speeedy.ai",
    period: "Aug 2025 – Jan 2026",
    highlights: [
      "Shipped AI-powered product features using Claude Code and ChatGPT",
      "Built LLM integrations into production applications",
      "Converted evolving requirements into responsive UIs and reusable components",
      "Contributed to backend services supporting AI-powered user experiences",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
          About
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold mt-4 mb-12"
          style={{ color: "#F5F5F4" }}
        >
          Builder first, always learning.
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Photo card */}
          <div className="lg:col-span-1">
            <div
              className="relative overflow-hidden rounded-[8px]"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/pratham.png"
                alt="Pratham Jadhav"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
              {/* Bottom name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background: "linear-gradient(to top, rgba(17,17,19,0.95) 0%, transparent 100%)",
                }}
              >
                <p className="text-base font-semibold" style={{ color: "#F5F5F4" }}>
                  Pratham Jadhav
                </p>
                <p className="mono text-xs mt-0.5" style={{ color: "#7CFF6B" }}>
                  AI Design Engineer · Pune, India
                </p>
              </div>
            </div>
          </div>

          {/* Right — bio + experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#9A9CA3" }}>
              <p>
                I&apos;m Pratham — an AI Design Engineer based in Pune, India, currently completing a B.E.
                in Artificial Intelligence &amp; Data Science at SPPU. I got into AI-assisted development
                before it was obvious you should, and what I found was that the tools don&apos;t replace
                engineering judgment — they remove friction so you can focus on it.
              </p>
              <p>
                My work sits at the intersection of design and engineering. I&apos;ve shipped 3D interactive
                experiences with Three.js, AI-powered SaaS products, and production React interfaces
                across 13+ business modules at two AI startups — using Claude Code and ChatGPT as daily
                tools, not occasional helpers.
              </p>
            </div>

            {/* Currently exploring */}
            <div
              className="rounded-[6px] p-5"
              style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="mono text-[10px] uppercase tracking-widest block mb-3"
                style={{ color: "#7CFF6B" }}
              >
                Currently exploring
              </span>
              <div className="space-y-2">
                {[
                  "RAG pipelines and semantic search in production",
                  "Web animation performance at scale with Three.js",
                  "Agent orchestration patterns across Claude and Codex",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="mono text-xs mt-0.5" style={{ color: "#7CFF6B" }}>→</span>
                    <span className="text-sm" style={{ color: "#9A9CA3" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <span
                className="mono text-[10px] uppercase tracking-widest block"
                style={{ color: "#9A9CA3" }}
              >
                Experience
              </span>
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="rounded-[6px] p-5"
                  style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#F5F5F4" }}>
                        {job.role}
                      </p>
                      <p className="mono text-xs" style={{ color: "#7CFF6B" }}>{job.company}</p>
                    </div>
                    <span
                      className="mono text-[10px] flex-shrink-0 mt-0.5"
                      style={{ color: "#9A9CA3" }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span
                          className="mono text-[10px] mt-0.5 flex-shrink-0"
                          style={{ color: "#7CFF6B" }}
                        >
                          ✓
                        </span>
                        <span className="text-xs leading-relaxed" style={{ color: "#9A9CA3" }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Education */}
              <div
                className="rounded-[6px] p-5"
                style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="mono text-[10px] uppercase tracking-widest block mb-2"
                  style={{ color: "#9A9CA3" }}
                >
                  Education
                </span>
                <p className="text-sm font-medium" style={{ color: "#F5F5F4" }}>
                  B.E. in Artificial Intelligence &amp; Data Science
                </p>
                <p className="mono text-xs mt-0.5" style={{ color: "#9A9CA3" }}>
                  SPPU, Pune · Aug 2022 – Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

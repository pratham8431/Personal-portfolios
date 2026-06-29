"use client";

import { useEffect, useRef, useState } from "react";
import SocialCards from "@/components/ui/card-fan-carousel";

const projects = [
  {
    label: "Client Project · Industrial",
    title: "Janani Industries",
    subtitle: "3D Interactive Product Website",
    problem:
      "An industrial roofing supplier needed a marketing site that could showcase physical products — corrugated sheets, purlins, ventilators — in a way that felt premium and memorable, not a generic brochure.",
    built:
      "Fully custom 3D marketing site built end-to-end with Claude Code. Scroll-synchronized 3D scene (React Three Fiber) with a procedural factory building and a ventilator that flies toward the camera on scroll. All geometry built programmatically — no external 3D assets.",
    result:
      "Production-deployed on Vercel. Sub-second LCP via instanced meshes, dpr clamping, and GPU preference tuning. SEO and meta tags handled alongside the build.",
    stack: ["React", "Three.js", "React Three Fiber", "Tailwind CSS", "Vite", "Claude Code"],
    link: "https://janani-3-d.vercel.app",
    color: "#7CFF6B",
    imgUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=600&fit=crop",
    alt: "Janani Industries 3D site",
    videoUrl: undefined, // add your screen-recording URL here
  },
  {
    label: "AI Product · SaaS",
    title: "Influract",
    subtitle: "AI Contract Analyzer for Content Creators",
    problem:
      "Content creators signing brand deals have no easy way to understand what they're agreeing to. Legal language is dense, costly to review, and risks are buried in boilerplate.",
    built:
      "Serverless AI contract analysis API (FastAPI + Gemini 2.0 Flash). Parses PDF/DOCX, returns structured JSON risk assessments across 8 clause categories. Traffic-light scoring with plain-English explanations and AI-generated negotiation email drafts.",
    result:
      "Deployed on Vercel with a full Next.js frontend. Replaced file-system dependencies with a serverless-compatible pipeline for Vercel's runtime constraints.",
    stack: ["FastAPI", "Python", "Gemini 2.0 Flash", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://influract.vercel.app/",
    color: "#FFB020",
    imgUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=600&fit=crop",
    alt: "Influract AI contract analyzer",
    videoUrl: undefined,
  },
  {
    label: "AI Developer Tooling",
    title: "OpenRouter Intelligence",
    subtitle: "LLM Tracking & Cost Estimation Platform",
    problem:
      "Developers evaluating LLMs had no consolidated view of pricing, availability, and lifecycle changes across 400+ models on OpenRouter.",
    built:
      "Fully client-side platform (zero backend) tracking 400+ LLMs across 60+ providers. Client-side diffing via localStorage snapshots detects newly added, updated, and deprecated models. Cost estimation engine with Claude-powered recommendations.",
    result:
      "Ships with zero infrastructure cost. Claude API integration provides contextual model suggestions based on the user's described use case.",
    stack: ["Next.js", "TypeScript", "Node.js", "OpenRouter API", "Claude API"],
    link: "#",
    color: "#7CFF6B",
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    alt: "OpenRouter model intelligence platform",
    videoUrl: undefined,
  },
  {
    label: "AI Platform · Backend",
    title: "Forge",
    subtitle: "AI-Powered Engineering Productivity Platform",
    problem:
      "Engineering teams waste hours searching docs, writing incident reports, reviewing PRs, and generating SQL — all tasks a well-orchestrated AI system could handle.",
    built:
      "AI-powered developer productivity platform automating documentation search, code review, incident investigation, and SQL generation. REST APIs and backend services for auth, document processing, vector search, analytics, and workflow automation.",
    result:
      "Full-stack AI platform with pgvector-powered semantic search, end-to-end LLM integration, and modular workflow automation handling the repetitive parts of engineering ops.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LLM APIs"],
    link: "#",
    color: "#FFB020",
    imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop",
    alt: "Forge AI engineering platform",
    videoUrl: undefined,
  },
  {
    label: "Open Source · Agents",
    title: "Career-Ops",
    subtitle: "AI Workflow Automation Platform",
    problem:
      "Career-Ops was designed around Claude-only execution, limiting adoption for developers using other agent systems like Codex.",
    built:
      "Added Codex agent compatibility to Career-Ops, enabling the platform to run on agent execution systems beyond its original Claude-only design. Modular agent execution layer with reusable .agents/ abstractions and pluggable execution modes.",
    result:
      "Open source contribution that makes the platform provider-agnostic. The abstraction layer became a reference pattern for pluggable agent execution in the codebase.",
    stack: ["Python", "Agent Orchestration", "Claude API", "Codex"],
    link: "#",
    color: "#7CFF6B",
    imgUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5734f53e?w=400&h=600&fit=crop",
    alt: "Career-Ops AI automation",
    videoUrl: undefined,
  },
];

const CARDS = projects.map((p) => ({
  imgUrl: p.imgUrl,
  alt: p.alt,
  videoUrl: p.videoUrl,
}));

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const maxScroll = sectionRef.current.offsetHeight - window.innerHeight;

      if (scrolledIn < 0 || scrolledIn > maxScroll) return;

      const progress = scrolledIn / maxScroll;
      const raw = Math.floor(progress * projects.length);
      const newIndex = Math.min(raw, projects.length - 1);

      if (newIndex !== prevIndexRef.current) {
        prevIndexRef.current = newIndex;
        setAnimating(true);
        setTimeout(() => {
          setActiveIndex(newIndex);
          setAnimating(false);
        }, 140);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const project = projects[activeIndex];

  return (
    <section
      id="work"
      ref={sectionRef}
      // Each project gets ~100vh of scroll travel + 50vh buffer at top
      style={{ height: `${projects.length * 100 + 50}vh` }}
    >
      {/* Sticky inner */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Section header — fixed, doesn't animate */}
          <div className="mb-10">
            <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "#F5F5F4" }}>
              Selected projects.
            </h2>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — fan carousel (controlled by scroll) */}
            <div className="flex justify-center">
              <SocialCards cards={CARDS} activeIndex={activeIndex} />
            </div>

            {/* Right — animated project details */}
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.2s ease, transform 0.22s ease",
              }}
            >
              {/* Label + counter */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="mono text-[10px] px-2 py-0.5 rounded-[3px] uppercase tracking-widest"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#9A9CA3",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {project.label}
                </span>
                <span className="mono text-xs" style={{ color: "#9A9CA3" }}>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: "#F5F5F4" }}
              >
                {project.title}
              </h3>
              <p className="text-base mb-6" style={{ color: project.color }}>
                {project.subtitle}
              </p>

              {/* Details */}
              <div className="space-y-4 mb-7">
                <div>
                  <span className="mono text-[10px] text-[#9A9CA3] uppercase tracking-widest block mb-1">
                    The problem
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A9CA3" }}>
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="mono text-[10px] text-[#9A9CA3] uppercase tracking-widest block mb-1">
                    What I built
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A9CA3" }}>
                    {project.built}
                  </p>
                </div>
                <div>
                  <span
                    className="mono text-[10px] uppercase tracking-widest block mb-1"
                    style={{ color: project.color }}
                  >
                    Result
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#F5F5F4" }}>
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-7">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="mono text-[11px] px-2.5 py-1 rounded-[3px]"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "#9A9CA3",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mono text-sm font-medium px-4 py-2 rounded-[4px] transition-all duration-150"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}15`;
                  }}
                >
                  View live site →
                </a>
              )}
            </div>
          </div>

          {/* Scroll progress bar at bottom */}
          <div
            className="mt-10 h-px w-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-px transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / projects.length) * 100}%`,
                background: "#7CFF6B",
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}

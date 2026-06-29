"use client";

const items = [
  { label: "React 18" },
  { label: "Next.js" },
  { label: "TypeScript" },
  { label: "Three.js" },
  { label: "Claude Code" },
  { label: "Tailwind CSS" },
  { label: "FastAPI" },
  { label: "React Three Fiber" },
  { label: "ChatGPT" },
  { label: "PostgreSQL" },
  { label: "Framer Motion" },
  { label: "OpenAI API" },
  { label: "Docker" },
  { label: "Vercel" },
  { label: "pgvector" },
  { label: "GitHub Actions" },
  { label: "Claude API" },
  { label: "OpenRouter API" },
  { label: "Redux Toolkit" },
  { label: "Stitch" },
  { label: "21st.dev" },
  { label: "AWS Lambda" },
  { label: "GCP Cloud Run" },
  { label: "Prompt Engineering" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function StatsBar() {
  return (
    <div
      className="overflow-hidden py-5"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="flex gap-6 w-max"
        style={{ animation: "marquee 36s linear infinite" }}
      >
        {track.map((item, i) => (
          <div key={i} className="flex items-center gap-6 flex-shrink-0">
            <span
              className="mono text-xs px-3 py-1.5 rounded-[4px] whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#9A9CA3",
              }}
            >
              {item.label}
            </span>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "6px" }}>◆</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

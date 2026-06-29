"use client";

const categories = [
  {
    label: "Frontend",
    items: [
      "React 18", "Next.js", "TypeScript", "JavaScript",
      "Tailwind CSS", "HTML5 / CSS3", "Redux Toolkit", "Zod", "Vite",
    ],
  },
  {
    label: "AI Workflow",
    items: [
      "Claude Code", "ChatGPT", "Stitch", "21st.dev",
      "Claude API", "OpenAI API", "OpenRouter API",
      "RAG Pipelines", "Prompt Engineering",
    ],
  },
  {
    label: "Interactive & Backend",
    items: [
      "Three.js", "React Three Fiber",
      "FastAPI", "Node.js", "Flask", "REST API Design",
      "JWT", "Firebase Auth",
    ],
  },
  {
    label: "Data & Cloud",
    items: [
      "PostgreSQL (pgvector)", "MySQL", "MongoDB", "DynamoDB",
      "AWS Lambda / S3", "GCP Cloud Run", "Docker",
      "GitHub Actions CI/CD",
    ],
  },
  {
    label: "Design & Web",
    items: [
      "Figma", "Responsive Design", "Design-to-Code",
      "SEO Fundamentals", "Performance Optimization",
      "Cross-Browser Testing", "Component Libraries",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
          Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-16" style={{ color: "#F5F5F4" }}>
          What I build with.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <span
                className="mono text-[10px] uppercase tracking-widest mb-4 block"
                style={{ color: "#7CFF6B" }}
              >
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="mono text-xs px-3 py-1.5 rounded-[4px] transition-all duration-150 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#9A9CA3",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "#F5F5F4";
                      (e.currentTarget as HTMLSpanElement).style.borderColor =
                        "rgba(124,255,107,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "#9A9CA3";
                      (e.currentTarget as HTMLSpanElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

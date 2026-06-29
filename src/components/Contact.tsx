"use client";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,255,107,0.04) 0%, transparent 60%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="mono text-xs font-semibold tracking-[0.2em] uppercase text-[#7CFF6B]">
            Get in touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-4 mb-4 leading-tight"
            style={{ color: "#F5F5F4" }}
          >
            Have a project — or a role — in mind?
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "#9A9CA3" }}>
            I&apos;m currently available. If you&apos;re building something and need a frontend
            engineer who moves fast without cutting corners, let&apos;s talk.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:prathamjadhav915@gmail.com"
              className="px-6 py-3 rounded-[4px] text-sm font-semibold bg-[#7CFF6B] text-black hover:bg-[#9dff8f] transition-colors"
            >
              prathamjadhav915@gmail.com
            </a>
            <a
              href="tel:+918108862055"
              className="px-6 py-3 rounded-[4px] text-sm font-medium transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#F5F5F4" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.12)";
              }}
            >
              +91 8108862055
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/pratham-jadhav-019b79257/",
              },
              { label: "GitHub", href: "https://github.com/pratham8431" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs transition-colors"
                style={{ color: "#9A9CA3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5F5F4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#9A9CA3";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-10 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="mono text-sm font-semibold" style={{ color: "#F5F5F4" }}>
              PJ
            </span>
            <span className="text-xs" style={{ color: "#9A9CA3" }}>
              AI Design Engineer · Pune, India
            </span>
          </div>

          <nav className="flex gap-6">
            {["Work", "Process", "About", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs transition-colors"
                style={{ color: "#9A9CA3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5F5F4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#9A9CA3";
                }}
              >
                {l}
              </a>
            ))}
          </nav>

          <p className="mono text-xs" style={{ color: "#9A9CA3" }}>
            © 2026 Pratham Jadhav. Built with Next.js + Claude Code.
          </p>
        </div>
      </footer>
    </>
  );
}

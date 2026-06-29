"use client";

import { useEffect, useState } from "react";

const links = ["Work", "Process", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(17,17,19,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="mono text-sm font-semibold tracking-widest text-white hover:text-[#7CFF6B] transition-colors"
          style={{ letterSpacing: "0.15em" }}
        >
          PJ
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#9A9CA3] hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-[#7CFF6B]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="mono text-xs text-[#9A9CA3]">Available for work</span>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="mono text-xs font-medium px-3 py-1.5 rounded-[4px] bg-[#7CFF6B] text-black hover:bg-[#9dff8f] transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

    </header>
  );
}

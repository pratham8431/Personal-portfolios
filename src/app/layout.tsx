import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Jadhav — AI Design Engineer",
  description:
    "AI-native Design Engineer based in Pune. Building production-ready React interfaces with Three.js, Next.js, TypeScript, and AI tools (Claude Code, ChatGPT) at two AI startups and counting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased relative">
        {/* Global aurora — fixed behind everything */}
        <div className="aurora-bg" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { GOLD, RED } from "./tokens";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-800 bg-[#0A0A0A]/95 backdrop-blur-md"
          : "border-b border-gray-900 bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Yarl Table Toppers home"
        >
          <img
            src="/images/table-top-logo.png"
            alt="Yarl Table Toppers Logo"
            className="h-12 w-auto rounded-md"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: "Roundups", href: "/roundup" },
            { label: "Leaderboard", href: "#leaderboard" },
            { label: "Resources", href: "https://en.1jour-1jeu.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-gray-400 transition-colors duration-200 hover:bg-gray-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA pill */}
        <a
          href="https://www.seatsnaps.com"
          target="_blank"
          rel="noopener noreferrer"
          id="nav-join-cta"
          className="hidden rounded-lg px-3 py-1.5 text-xs font-medium text-white border border-gray-700 transition-colors duration-200 hover:bg-gray-800 md:inline-flex items-center gap-1"
        >
          <Sparkles size={12} style={{ color: GOLD }} />
          Join Next Event
        </a>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GOLD } from "./tokens";

const NAV_LINKS = [
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "Games", href: "/games" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "https://en.1jour-1jeu.com", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
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
          <a href="/" className="flex items-center transition-opacity hover:opacity-80" aria-label="Yarl Table Toppers home">
            <img src="/images/table-top-logo.png" alt="Yarl Table Toppers Logo" className="h-12 w-auto rounded-md" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && pathname === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors duration-200 hover:bg-gray-800/60 hover:text-white ${
                    isActive ? "text-white bg-gray-800/40" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
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

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-800 hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 border-b border-gray-800 bg-[#0A0A0A]/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = !link.external && pathname === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-2 pt-2 border-t border-gray-800">
                <a
                  href="https://www.seatsnaps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-black"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}
                >
                  <Sparkles size={14} />
                  Join Next Event
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, BookOpen, ChevronRight } from "lucide-react";
import { GOLD } from "./tokens";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: "url('/images/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.85) 100%)" }}
        aria-hidden="true" />

      {/* Radial gold glow */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(242,169,0,0.09) 0%, transparent 70%)" }}
        aria-hidden="true" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">

        {/* Next Event Badge */}
        <motion.a
          variants={itemVariants}
          href="https://www.seatsnaps.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:border-[#F2A900]/40"
          style={{
            borderColor: `${GOLD}30`,
            background: `${GOLD}10`,
            color: GOLD,
          }}
        >
          <Calendar size={12} />
          Next Event: June 13th, 2026
          <ChevronRight size={12} />
        </motion.a>

        {/* Community Badge */}
        <motion.div variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#111111]/80 px-4 py-1.5 text-xs text-gray-400 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: GOLD }} aria-hidden="true" />
          Now open for new members · Jaffna, Sri Lanka
        </motion.div>

        {/* H1 */}
        <motion.h1 variants={itemVariants} id="hero-heading"
          className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          The official hub for{" "}
          <span className="inline-block" style={{
            background: `linear-gradient(135deg, ${GOLD} 0%, #FFD166 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Jaffna&apos;s
          </span>{" "}
          tabletop community.
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="max-w-2xl text-lg leading-relaxed text-gray-400">
          Play, connect, and strategize. Join the fastest-growing community of
          tabletop gamers in Sri Lanka.
        </motion.p>

        {/* CTA Row */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/blogs"
            id="hero-primary-cta"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-100 hover:scale-[1.05] active:scale-95 shadow-lg"
          >
            <BookOpen size={15} />
            Read Latest Blogs
          </a>
          <a
            href="https://www.seatsnaps.com"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-secondary-cta"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:border-gray-600 active:scale-95"
          >
            <Calendar size={15} />
            Join Next Event
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-gray-500" />
        <ChevronRight size={12} className="rotate-90 text-gray-500" />
      </motion.div>
    </section>
  );
}

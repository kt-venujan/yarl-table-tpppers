"use client";

import { motion } from "framer-motion";
import { GOLD } from "./tokens";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
  variant?: "default" | "large";
}

export function CTABanner({ title, subtitle, buttonText, onClick, variant = "default" }: CTABannerProps) {
  const isLarge = variant === "large";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-5xl px-6"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border ${
          isLarge ? "border-[#F2A900]/20" : "border-gray-800"
        }`}
        style={{
          background: isLarge
            ? `linear-gradient(135deg, #1a1400 0%, #111111 50%, #1a1000 100%)`
            : "#111111",
        }}
      >
        {/* Decorative glow */}
        {isLarge && (
          <>
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full blur-[100px]"
              style={{ background: `${GOLD}20` }} />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full blur-[100px]"
              style={{ background: `${GOLD}10` }} />
          </>
        )}

        <div className={`relative z-10 flex flex-col items-center text-center ${isLarge ? "px-8 py-16 md:py-20" : "px-8 py-12"}`}>
          <h2 className={`font-bold tracking-tight text-white mb-3 ${isLarge ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
            {title}
          </h2>
          <p className={`text-gray-400 mb-6 max-w-xl ${isLarge ? "text-base" : "text-sm"}`}>
            {subtitle}
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`rounded-lg font-bold text-black transition-all hover:brightness-110 ${
              isLarge ? "px-8 py-3.5 text-sm" : "px-6 py-3 text-sm"
            }`}
            style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

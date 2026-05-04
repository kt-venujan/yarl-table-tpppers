"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: "1" | "2";
  id?: string;
}

export function BentoCard({
  children,
  className = "",
  colSpan = "1",
  id,
}: BentoCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`
        relative rounded-xl border border-gray-800 bg-[#111111] p-6
        transition-colors duration-300 ease-out
        hover:border-gray-600 hover:bg-[#141414]
        group overflow-hidden
        ${colSpan === "2" ? "md:col-span-2" : ""}
        ${className}
      `}
    >
      {/* Subtle hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(242,169,0,0.03), transparent 40%)",
        }}
      />
      {children}
    </motion.div>
  );
}

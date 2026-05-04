import React from "react";

interface TagProps {
  children: React.ReactNode;
  variant?: "gold" | "red" | "gray";
}

export function Tag({ children, variant = "gold" }: TagProps) {
  const styles: Record<string, string> = {
    gold: "bg-[#F2A900]/10 text-[#F2A900] border border-[#F2A900]/20",
    red: "bg-[#E02B20]/10 text-[#E02B20] border border-[#E02B20]/20",
    gray: "bg-white/5 text-gray-400 border border-gray-800",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

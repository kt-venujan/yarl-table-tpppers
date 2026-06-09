"use client";

import { motion } from "framer-motion";
import { Dice5 } from "lucide-react";
import Image from "next/image";
import { StarRating } from "./StarRating";
import { GOLD } from "./tokens";

export interface GameData {
  id: number;
  title: string;
  rating: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  players: string;
  duration: string;
  image?: string;
}

const difficultyColors: Record<string, { bg: string; text: string; border: string }> = {
  Easy: { bg: "#22c55e15", text: "#22c55e", border: "#22c55e30" },
  Medium: { bg: "#f2a90015", text: "#F2A900", border: "#f2a90030" },
  Hard: { bg: "#ef444415", text: "#ef4444", border: "#ef444430" },
  Expert: { bg: "#a855f715", text: "#a855f7", border: "#a855f730" },
};

export function GameCard({ game, index = 0 }: { game: GameData; index?: number }) {
  const dc = difficultyColors[game.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-xl border border-gray-800 bg-[#111111] p-5 transition-colors duration-300 hover:border-gray-600 hover:bg-[#141414] overflow-hidden h-full flex flex-col"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(242,169,0,0.04), transparent 50%)",
        }}
      />

      {/* Game visual */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        {game.image ? (
          <div className="relative h-44 w-full bg-[#1a1a1a]">
            <Image
              src={game.image}
              alt={game.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl"
            style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}25` }}
          >
            <Dice5 size={26} style={{ color: GOLD }} />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-bold text-white tracking-tight">
        {game.title}
      </h3>

      {/* Star Rating */}
      <div className="mb-3">
        <StarRating rating={game.rating} />
      </div>

      {/* Meta row */}
      <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
        <span>{game.players} players</span>
        <span className="h-0.5 w-0.5 rounded-full bg-gray-700" />
        <span>{game.duration}</span>
      </div>

      {/* Difficulty tag */}
      <span
        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border mt-auto self-start"
        style={{
          background: dc.bg,
          color: dc.text,
          borderColor: dc.border,
        }}
      >
        {game.difficulty}
      </span>
    </motion.div>
  );
}

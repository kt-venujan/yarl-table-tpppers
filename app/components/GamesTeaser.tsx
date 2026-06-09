"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GameCard, GameData } from "./GameCard";
import { GOLD } from "./tokens";

const TOP_GAMES: GameData[] = [
  { id: 1, title: "Catan", rating: 5, difficulty: "Medium", players: "3-4", duration: "60-90 min" },
  { id: 2, title: "Ticket to Ride", rating: 4, difficulty: "Easy", players: "2-5", duration: "45-60 min" },
  { id: 3, title: "Chess", rating: 5, difficulty: "Hard", players: "2", duration: "30-60 min" },
  { id: 4, title: "Dixit", rating: 4, difficulty: "Easy", players: "3-6", duration: "30 min" },
];

export function GamesTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="games-teaser-heading">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-600 mb-2 block">Our Collection</span>
          <h2 id="games-teaser-heading" className="text-3xl font-bold tracking-tight text-white">Games We Have</h2>
        </div>
        <a href="/games" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium underline decoration-gray-600 underline-offset-4 transition-all hover:decoration-white"
          style={{ color: GOLD }}>
          View All Games <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TOP_GAMES.map((game, i) => (
          <motion.div key={game.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
            <GameCard game={game} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <a href="/games" className="inline-flex items-center gap-1 text-sm font-medium underline decoration-gray-600 underline-offset-4"
          style={{ color: GOLD }}>
          View All Games <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

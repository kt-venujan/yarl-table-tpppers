"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GameCard, GameData } from "../components/GameCard";
import { Library, Filter } from "lucide-react";

const ALL_GAMES: GameData[] = [
  { id: 1, title: "Catan", rating: 5, difficulty: "Medium", players: "3-4", duration: "60-90 min", image: "https://m.media-amazon.com/images/I/61U-PZZ90sL.jpg" },
  { id: 2, title: "Ticket to Ride", rating: 5, difficulty: "Easy", players: "2-5", duration: "30-60 min", image: "/images/tickettoride.png" },
  { id: 3, title: "Monopoly Deal", rating: 5, difficulty: "Easy", players: "2-5", duration: "15-20 min", image: "/images/monopoly%20deal.jpg" },
  { id: 4, title: "Risk", rating: 4, difficulty: "Hard", players: "2-6", duration: "120+ min", image: "/images/risk.jpg" },
  { id: 5, title: "Azul", rating: 5, difficulty: "Medium", players: "2-4", duration: "30-45 min", image: "/images/azhul.jpg" },
  { id: 6, title: "Cluedo", rating: 4, difficulty: "Easy", players: "3-6", duration: "45 min", image: "/images/cludo.jpeg" },
  { id: 7, title: "Monopoly", rating: 3, difficulty: "Easy", players: "2-6", duration: "60-120 min", image: "/images/monopoly.jpg" },
  { id: 8, title: "Coup", rating: 5, difficulty: "Medium", players: "2-6", duration: "15 min", image: "/images/coup.jpg" },
  { id: 9, title: "Uno", rating: 4, difficulty: "Easy", players: "2-10", duration: "20 min", image: "/images/uno.jpeg" },
  { id: 10, title: "Uno - No Mercy", rating: 5, difficulty: "Easy", players: "2-10", duration: "20-40 min", image: "/images/uno%20no%20mercy.webp" },
  { id: 11, title: "Exploding Kittens", rating: 4, difficulty: "Easy", players: "2-5", duration: "15 min", image: "/images/exlpoding%20kitten.jpg" },
  { id: 12, title: "BattleShip", rating: 3, difficulty: "Easy", players: "2", duration: "30 min", image: "/images/battleship.webp" },
  { id: 13, title: "Code Breaker", rating: 4, difficulty: "Medium", players: "2-8", duration: "15-30 min", image: "/images/code%20breaker.jpeg" },
  { id: 14, title: "These Cards Will Get you Drunk", rating: 4, difficulty: "Easy", players: "2-8", duration: "20-40 min", image: "/images/These%20Cards%20Will%20Get%20you%20Drunk.jpg" },
  { id: 15, title: "Cluedo Suspect", rating: 4, difficulty: "Easy", players: "3-4", duration: "15-30 min", image: "/images/cludo%20suspect.webp" },
];

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard", "Expert"] as const;

export default function GamesPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? ALL_GAMES : ALL_GAMES.filter((g) => g.difficulty === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Library size={20} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Our Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Game Shelf</h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Browse our library of {ALL_GAMES.length} games available to play at every meetup.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-8 flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-gray-600" />
            {DIFFICULTIES.map((d) => (
              <button key={d} onClick={() => setFilter(d)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-200 ${
                  filter === d
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-800 bg-[#111111] text-gray-500 hover:border-gray-700 hover:text-gray-300"
                }`}>
                {d}
              </button>
            ))}
          </div>

          {/* Games grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((game, i) => (
              <motion.div key={game.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}>
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Library size={40} className="text-gray-800 mb-4" />
              <p className="text-gray-500 text-sm">No games in this category yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Dice5,
  Library,
} from "lucide-react";
import { BentoCard } from "./BentoCard";
import { Tag } from "./Tag";
import { GOLD, RED } from "./tokens";

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section
      id="grid"
      aria-label="Community overview"
      className="mx-auto max-w-5xl px-6 pb-24"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {/* 1 ── Next Event (col-span-2) */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <BentoCard id="next-event-card">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${GOLD}15` }}
                  aria-hidden="true"
                >
                  <Dice5 size={18} style={{ color: GOLD }} />
                </div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                  Next Event
                </span>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <Tag variant="gold">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: GOLD }}
                    aria-hidden="true"
                  />
                  Upcoming
                </Tag>
                <span className="text-xs text-gray-500">May 30, 2026</span>
              </div>
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Round 2 Meetup 🎲
            </h2>
            <p className="mb-6 text-gray-400 leading-relaxed text-sm">
              Gather your party. We are bringing more games, more tables, and
              starting the{" "}
              <span className="text-white font-medium">10-Meetup Swag Challenge</span>.
            </p>

            <a
              href="https://www.seatsnaps.com"
              target="_blank"
              rel="noopener noreferrer"
              id="event-rsvp-link"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-gray-600 underline-offset-4 transition-all duration-200 hover:decoration-white hover:text-white"
            >
              Join Next Event
              <ArrowUpRight size={14} />
            </a>
          </BentoCard>
        </motion.div>

        {/* 2 ── Community Stats (col-span-1) */}
        <motion.div variants={itemVariants}>
          <BentoCard id="stats-card">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: `${RED}15` }}
                aria-hidden="true"
              >
                <Users size={18} style={{ color: RED }} />
              </div>
              <h2 className="text-sm font-semibold text-white tracking-tight">
                Community at a Glance
              </h2>
            </div>

            <ul className="flex flex-col gap-3 mb-5">
              {[
                { icon: <Users size={14} />, text: "50+ Active Players" },
                { icon: <Trophy size={14} />, text: "10-Meetup Challenge Live" },
                { icon: <BookOpen size={14} />, text: "1 Roundup Published" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2.5 text-sm text-gray-300"
                >
                  <span className="text-gray-500 flex-shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-800 pt-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
                Connect
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/KJ9suk1FSgW9N42JfJFKUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Community"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#111111] text-gray-400 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-[#25D366]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.41-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* 3 ── Resources (col-span-1) */}
        <motion.div variants={itemVariants}>
          <BentoCard id="resources-card">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: `${GOLD}15` }}
                aria-hidden="true"
              >
                <Library size={18} style={{ color: GOLD }} />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                Resources
              </span>
            </div>

            <h2 className="mb-2 text-xl font-bold tracking-tight text-white">
              Rulebooks &amp; Guides
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              Learn how to play our most popular games before you arrive.
            </p>

            <a
              href="https://en.1jour-1jeu.com"
              target="_blank"
              rel="noopener noreferrer"
              id="resources-browse-link"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-gray-600 underline-offset-4 transition-all duration-200 hover:decoration-white"
            >
              Browse Library
              <ArrowUpRight size={14} />
            </a>
          </BentoCard>
        </motion.div>

        {/* 4 ── Latest Roundup (col-span-2) */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <BentoCard id="roundup-card">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${RED}15` }}
                  aria-hidden="true"
                >
                  <BookOpen size={18} style={{ color: RED }} />
                </div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                  Community Roundup
                </span>
              </div>
              <Tag variant="gray">April 2026</Tag>
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Latest Roundup
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Scenes from our very first Jaffna meetup. We played{" "}
              <span className="text-white font-medium">Catan</span>, shared laughs,
              and built a foundation for the community.
            </p>

            <div className="mb-6 flex gap-2 flex-wrap">
              {["Catan", "Chess", "Ticket to Ride", "Dixit"].map((game) => (
                <span
                  key={game}
                  className="rounded-md border border-gray-800 bg-[#0A0A0A] px-2.5 py-1 text-xs text-gray-500"
                >
                  {game}
                </span>
              ))}
            </div>

            <a
              href="/roundup"
              id="roundup-gallery-link"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-gray-600 underline-offset-4 transition-all duration-200 hover:decoration-white"
            >
              View Photo Gallery
              <ArrowUpRight size={14} />
            </a>
          </BentoCard>
        </motion.div>

      </motion.div>
    </section>
  );
}

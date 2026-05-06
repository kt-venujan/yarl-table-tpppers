"use client";

import { motion, Variants } from "framer-motion";
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.41-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@yarlboardgamers?si=7snPgarpMEk1yLDU"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube Channel"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#111111] text-gray-400 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-[#FF0000]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/yarlboardgamers?igsh=MWIwcHpmOW5sb3pueA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#111111] text-gray-400 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-[#E4405F]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.164.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.164-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.164-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.164 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.172 1.384c.766.296 1.636.499 2.913.558 1.28.059 1.689.072 4.948.072s3.668-.014 4.948-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.059-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324M12 16a4 4 0 110-8 4 4 0 010 8m6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@yarl_table_toppers"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#111111] text-gray-400 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.75-.29-4.36 3.35-8.31 7.71-8.31.29 0 .58.02.86.06V9c-2.31-.31-4.63.78-5.65 2.87-1.14 2.11-.63 4.96 1.25 6.46 1.17.96 2.77 1.26 4.23 1.02 1.66-.23 3.09-1.51 3.51-3.15.15-.55.22-1.12.21-1.69.01-4.28 0-8.56.01-12.84z" />
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
              href="/gallery"
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

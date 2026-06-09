"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { EventCard, EventData } from "../components/EventCard";
import { Calendar, Clock } from "lucide-react";
import { GOLD } from "../components/tokens";

const EVENTS: EventData[] = [
  {
    id: 1, title: "Round 2 Meetup 🎲", date: "2026-07-12", month: "JUL", day: "12",
    time: "2:00 PM", location: "Jaffna, Sri Lanka",
    description: "Our biggest meetup yet — more tables, more games, and the Swag Challenge continues! New members welcome.",
    attendees: null, games: ["Catan", "Wingspan", "Codenames"], type: "upcoming",
    rsvpLink: "https://www.seatsnaps.com",
  },
  {
    id: 2, title: "Round 1 Meetup 🎲", date: "2026-04-19", month: "APR", day: "19",
    time: "2:00 PM", location: "Jaffna, Sri Lanka",
    description: "Our very first community meetup! We played Catan, shared laughs, and built the foundation for the community.",
    attendees: 10, games: ["Catan", "Chess", "Ticket to Ride", "Dixit"], type: "completed",
    galleryLink: "/gallery",
  },
  {
    id: 3, title: "Founders' Game Night 🌙", date: "2026-03-15", month: "MAR", day: "15",
    time: "6:00 PM", location: "Jaffna, Sri Lanka",
    description: "The night it all began — a casual session that sparked the idea for Yarl Table Toppers.",
    attendees: 5, games: ["Chess", "Monopoly Deal"], type: "completed",
  },
  {
    id: 4, title: "Board Game Intro Session 📚", date: "2026-02-22", month: "FEB", day: "22",
    time: "3:00 PM", location: "Jaffna, Sri Lanka",
    description: "Teaching newcomers the basics of modern board games. We covered strategy, cooperative, and party games.",
    attendees: 8, games: ["Ticket to Ride", "Dixit", "Codenames"], type: "completed",
  },
];

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "completed">("upcoming");
  const filtered = EVENTS.filter((e) => e.type === tab);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Calendar size={20} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Community Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Events</h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Join us for board game meetups, tournaments, and community gatherings in Jaffna.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="inline-flex rounded-lg border border-gray-800 bg-[#111111] p-1">
              {(["upcoming", "completed"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)}
                  className={`rounded-md px-5 py-2 text-sm font-medium capitalize transition-all duration-200 ${
                    tab === t ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300"
                  }`}>
                  {t === "upcoming" ? "Upcoming Events" : "Completed Events"}
                </button>
              ))}
            </div>
          </div>

          {/* Events list */}
          <div className="flex flex-col gap-4">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Clock size={40} className="text-gray-800 mb-4" />
                <p className="text-gray-500 text-sm">No {tab} events right now.</p>
                <p className="text-gray-600 text-xs mt-1">Check back soon!</p>
              </div>
            ) : (
              filtered.map((event, i) => (
                <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <EventCard event={event} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

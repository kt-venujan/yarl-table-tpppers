"use client";

import { motion } from "framer-motion";
import { MapPin, Users, ArrowUpRight, Camera } from "lucide-react";
import { GOLD } from "./tokens";

export interface EventData {
  id: number;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  description: string;
  attendees: number | null;
  games: string[];
  type: "upcoming" | "completed";
  rsvpLink?: string;
  galleryLink?: string;
}

export function EventCard({ event }: { event: EventData }) {
  const isUpcoming = event.type === "upcoming";

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative flex gap-5 rounded-xl border border-gray-800 bg-[#111111] p-5 transition-all duration-300 hover:border-gray-600 hover:bg-[#141414] overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at 50% 50%, rgba(242,169,0,0.03), transparent 40%)",
        }}
      />

      {/* Date pill */}
      <div
        className="flex flex-col items-center justify-center rounded-xl px-3 py-2 min-w-[60px] flex-shrink-0 border"
        style={{
          background: isUpcoming ? `${GOLD}10` : "#0d0d0d",
          borderColor: isUpcoming ? `${GOLD}25` : "#2a2a2a",
        }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: isUpcoming ? GOLD : "#666" }}
        >
          {event.month}
        </span>
        <span
          className="text-2xl font-black leading-none"
          style={{ color: isUpcoming ? "#fff" : "#999" }}
        >
          {event.day}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-lg font-bold text-white tracking-tight">{event.title}</h3>
          {isUpcoming && (
            <span
              className="inline-flex items-center gap-1 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border"
              style={{
                background: `${GOLD}15`,
                borderColor: `${GOLD}30`,
                color: GOLD,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: GOLD }}
              />
              Upcoming
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 mb-2 line-clamp-2">{event.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={11} /> {event.location}
          </span>
          <span>{event.time}</span>
          {event.attendees && (
            <span className="flex items-center gap-1">
              <Users size={11} /> {event.attendees}+ attended
            </span>
          )}
        </div>

        {/* Games played */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {event.games.map((g) => (
            <span
              key={g}
              className="rounded-md border border-gray-800 bg-[#0A0A0A] px-2 py-0.5 text-xs text-gray-500"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Action link */}
        {isUpcoming && event.rsvpLink && (
          <a
            href={event.rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-white underline decoration-gray-600 underline-offset-4 transition-all hover:decoration-white"
          >
            RSVP Now <ArrowUpRight size={13} />
          </a>
        )}
        {!isUpcoming && event.galleryLink && (
          <a
            href={event.galleryLink}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 underline decoration-gray-700 underline-offset-4 transition-all hover:text-white hover:decoration-white"
          >
            <Camera size={13} /> View Gallery <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  LayoutGrid,
  List,
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  BookOpen,
} from "lucide-react";
import { GOLD } from "../components/tokens";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MeetupEntry {
  id: number;
  date: Date;
  time: string;
  title: string;
  organizer: string;
  location: string;
  games: string[];
  attendees: number | null;
  emoji: string;
  type: "past" | "upcoming";
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ENTRIES: MeetupEntry[] = [
  {
    id: 1,
    date: new Date(2026, 3, 19),
    time: "2:00 PM",
    title: "Round 1 Meetup 🎲",
    organizer: "Yarl Table Toppers",
    location: "Jaffna, Sri Lanka",
    games: ["Catan", "Chess", "Ticket to Ride", "Dixit"],
    attendees: 10,
    emoji: "🎲",
    type: "past",
  },
  {
    id: 2,
    date: new Date(2026, 5, 7),
    time: "2:00 PM",
    title: "Round 2 Meetup 🎲",
    organizer: "Yarl Table Toppers",
    location: "Jaffna, Sri Lanka",
    games: ["TBD"],
    attendees: null,
    emoji: "♟️",
    type: "upcoming",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_LABELS = ["S","M","T","W","T","F","S"];

function buildCalendarCells(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const cells: { day: number; current: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({ day: prevDays - i, current: false });
  for (let i = 1; i <= daysInMonth; i++)
    cells.push({ day: i, current: true });
  for (let i = 1; cells.length < 42; i++)
    cells.push({ day: i, current: false });
  return cells;
}

function groupByDate(entries: MeetupEntry[]) {
  const map = new Map<string, MeetupEntry[]>();
  entries.forEach((e) => {
    const key = e.date.toDateString();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  });
  return Array.from(map.entries()).map(([k, items]) => ({
    date: new Date(k),
    items,
  }));
}

// ─── Meetup Card ─────────────────────────────────────────────────────────────

function MeetupCard({ entry }: { entry: MeetupEntry }) {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-800 bg-[#111111] p-5 transition-all duration-200 hover:border-gray-700 hover:bg-[#141414]">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 mb-1.5">{entry.time}</p>
        <h3 className="text-lg font-bold text-white mb-1.5">{entry.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          By <span className="text-gray-300">{entry.organizer}</span>
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          <MapPin size={11} />
          {entry.location}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {entry.games.map((g) => (
            <span
              key={g}
              className="rounded-md border border-gray-800 bg-[#0A0A0A] px-2 py-0.5 text-xs text-gray-500"
            >
              {g}
            </span>
          ))}
        </div>
        {entry.attendees !== null ? (
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Users size={11} />
            {entry.attendees}+ members attended
          </div>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border"
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
      <div className="hidden sm:flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-[#0D0D0D] text-4xl">
        {entry.emoji}
      </div>
    </div>
  );
}

// ─── Calendar Sidebar ─────────────────────────────────────────────────────────

function CalendarSidebar({
  tab,
  onTabChange,
}: {
  tab: "upcoming" | "past";
  onTabChange: (t: "upcoming" | "past") => void;
}) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const eventDays = useMemo(() => {
    const s = new Set<number>();
    ENTRIES.forEach((e) => {
      if (e.date.getFullYear() === year && e.date.getMonth() === month)
        s.add(e.date.getDate());
    });
    return s;
  }, [year, month]);

  const cells = buildCalendarCells(year, month);

  const prev = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-[#111111] overflow-hidden w-64 flex-shrink-0">
      {/* Month nav */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-sm font-semibold text-white">{MONTHS[month]}</span>
        <div className="flex items-center gap-1">
          <button onClick={prev} className="p-1 rounded text-gray-500 hover:text-white hover:bg-gray-800 transition-colors" aria-label="Previous month">
            <ChevronLeft size={14} />
          </button>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
          <button onClick={next} className="p-1 rounded text-gray-500 hover:text-white hover:bg-gray-800 transition-colors" aria-label="Next month">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 px-4 pb-1">
        {DAY_LABELS.map((d, i) => (
          <div key={i} className="text-center text-[10px] font-medium text-gray-600 py-1">{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 px-4 pb-4 gap-y-0.5">
        {cells.map((cell, i) => {
          const isToday =
            cell.current &&
            cell.day === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth();
          const hasEvent = cell.current && eventDays.has(cell.day);
          return (
            <div key={i} className="flex flex-col items-center">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors
                  ${!cell.current ? "text-gray-700" : "text-gray-400 hover:bg-gray-800 cursor-pointer"}
                  ${isToday ? "font-bold" : ""}
                `}
                style={isToday ? { backgroundColor: `${GOLD}25`, color: GOLD } : {}}
              >
                {cell.day}
              </span>
              {hasEvent && (
                <span className="h-1 w-1 rounded-full mt-0.5" style={{ backgroundColor: GOLD }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Past / Upcoming toggle */}
      <div className="border-t border-gray-800 p-3">
        <div className="flex rounded-lg bg-[#0A0A0A] p-1">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => onTabChange(t)}
              className={`flex-1 rounded-md py-1.5 text-xs font-medium capitalize transition-all duration-200
                ${tab === t ? "bg-[#1A1A1A] text-white" : "text-gray-500 hover:text-gray-300"}
              `}
            >
              {t === "upcoming" ? "Upcoming" : "Past"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function RoundupPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const filtered = ENTRIES.filter((e) => e.type === tab);
  const grouped = groupByDate(filtered);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-20 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="flex items-center justify-between py-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">Roundups</h1>
            <div className="flex items-center gap-1 rounded-lg border border-gray-800 bg-[#111111] p-1">
              {[
                { mode: "grid" as const, Icon: LayoutGrid, label: "Grid view" },
                { mode: "list" as const, Icon: List, label: "List view" },
              ].map(({ mode, Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  aria-label={label}
                  className={`rounded-md p-1.5 transition-colors ${
                    viewMode === mode ? "bg-gray-700 text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                </button>
              ))}
              <button className="rounded-md p-1.5 text-gray-500 hover:text-white transition-colors" aria-label="Search">
                <Search size={14} />
              </button>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-6 items-start">
            {/* Left: grouped list */}
            <div className="flex-1 min-w-0">
              {grouped.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                  <BookOpen size={36} className="text-gray-700 mb-4" />
                  <p className="text-gray-500 text-sm">No roundups here yet.</p>
                  <p className="text-gray-600 text-xs mt-1">Check back after our next meetup!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {grouped.map(({ date, items }) => (
                    <div key={date.toDateString()}>
                      {/* Date group header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="h-2 w-2 rounded-full bg-gray-700 flex-shrink-0" />
                        <h2 className="text-sm font-semibold text-white">
                          {date.toLocaleString("default", { month: "long" })} {date.getDate()}{" "}
                          <span className="text-gray-500 font-normal">
                            {date.toLocaleString("default", { weekday: "long" })}
                          </span>
                        </h2>
                      </div>
                      <div className="flex flex-col gap-3 pl-5">
                        {items.map((entry) => (
                          <MeetupCard key={entry.id} entry={entry} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: calendar sidebar */}
            <div className="hidden md:block">
              <CalendarSidebar tab={tab} onTabChange={setTab} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

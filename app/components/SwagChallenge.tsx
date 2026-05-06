"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { Check, Sparkles, Lock, Gamepad2, Target, Gift } from "lucide-react";
import { GOLD } from "./tokens";

// ─── Demo: how many meetups the current user has completed ───────────────────
const COMPLETED = 1; // change this to test different states
const TOTAL = 10;

// ─── Palette ────────────────────────────────────────────────────────────────
const GOLD_DIM = "#7a560a";
const LOCKED_BG = "#111111";
const LOCKED_BORDER = "#333333";
const CONNECTOR = "#222222";

// ─── Loot Box SVG (inline, no extra dep) ─────────────────────────────────────
function LootBox({ glow }: { glow: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="26"
      height="26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {glow && (
        <circle cx="24" cy="24" r="22" fill={GOLD} opacity="0.15" />
      )}
      {/* box body */}
      <rect x="6" y="20" width="36" height="22" rx="3" fill={glow ? GOLD : "#555"} />
      {/* lid */}
      <rect x="4" y="14" width="40" height="8" rx="2" fill={glow ? "#e09900" : "#444"} />
      {/* ribbon horizontal */}
      <rect x="4" y="14" width="40" height="8" rx="2" fill="none"
        stroke={glow ? "#fff8" : "#666"} strokeWidth="0.5" />
      {/* ribbon vertical */}
      <rect x="20" y="14" width="8" height="28" rx="2" fill={glow ? "#fff3" : "#3a3a3a"} />
      {/* bow top-left */}
      <ellipse cx="16" cy="14" rx="7" ry="4" fill={glow ? "#e09900" : "#444"}
        transform="rotate(-20 16 14)" />
      {/* bow top-right */}
      <ellipse cx="32" cy="14" rx="7" ry="4" fill={glow ? "#e09900" : "#444"}
        transform="rotate(20 32 14)" />
      {/* bow centre */}
      <circle cx="24" cy="14" r="3" fill={glow ? "#fff" : "#666"} />
    </svg>
  );
}

// ─── Single skill-tree node ───────────────────────────────────────────────────
function SkillNode({
  index,
  state,
  delay,
}: {
  index: number;
  state: "completed" | "next" | "locked";
  delay: number;
}) {
  const isLast = index === TOTAL - 1;
  const pulseControls = useAnimationControls();

  useEffect(() => {
    if (state === "next") {
      const loop = async () => {
        while (true) {
          await pulseControls.start({
            boxShadow: `0 0 0px 0px ${GOLD}00`,
            scale: 1,
            transition: { duration: 0 },
          });
          await pulseControls.start({
            boxShadow: `0 0 28px 8px ${GOLD}88`,
            scale: 1.1,
            transition: { duration: 1.1, ease: "easeInOut" },
          });
          await pulseControls.start({
            boxShadow: `0 0 0px 0px ${GOLD}00`,
            scale: 1,
            transition: { duration: 1.1, ease: "easeInOut" },
          });
        }
      };
      loop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // Node appearance by state
  const nodeSize = isLast ? 60 : 44;

  const bgColor =
    state === "completed"
      ? GOLD
      : state === "next"
      ? "#1a1400"
      : LOCKED_BG;

  const borderColor =
    state === "completed"
      ? GOLD
      : state === "next"
      ? GOLD
      : LOCKED_BORDER;

  const shadowStyle =
    state === "completed"
      ? { boxShadow: `0 0 18px 4px ${GOLD}66` }
      : state === "next"
      ? {}
      : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center gap-2"
    >
      {/* Meetup number label */}
      <span
        className="text-[10px] font-bold tracking-widest uppercase"
        style={{
          color:
            state === "completed"
              ? GOLD
              : state === "next"
              ? `${GOLD}cc`
              : "#444",
        }}
      >
        {isLast ? "FINALE" : `#${index + 1}`}
      </span>

      {/* Node circle */}
      <motion.div
        animate={state === "next" ? pulseControls : undefined}
        style={{
          width: nodeSize,
          height: nodeSize,
          borderRadius: "50%",
          background: bgColor,
          border: `2px solid ${borderColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
          ...shadowStyle,
        }}
      >
        {state === "completed" && !isLast && (
          <Check size={20} color="#111" strokeWidth={3} />
        )}
        {state === "completed" && isLast && (
          <LootBox glow={true} />
        )}
        {state === "next" && (
          <Target size={20} color={GOLD} strokeWidth={2.5} />
        )}
        {state === "locked" && !isLast && (
          <Lock size={14} color={LOCKED_BORDER} />
        )}
        {state === "locked" && isLast && (
          <LootBox glow={false} />
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Connector line between nodes ────────────────────────────────────────────
function Connector({ filled }: { filled: boolean }) {
  return (
    <div className="flex items-center justify-center" style={{ flex: 1, minWidth: 8, marginTop: 28 }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          height: 3,
          width: "100%",
          borderRadius: 4,
          background: filled
            ? `linear-gradient(90deg, ${GOLD}, ${GOLD_DIM})`
            : CONNECTOR,
          transformOrigin: "left",
          boxShadow: filled ? `0 0 8px ${GOLD}55` : "none",
        }}
      />
    </div>
  );
}

// ─── Passport card (the tracker itself) ──────────────────────────────────────
function PassportCard() {
  const nodes = Array.from({ length: TOTAL }, (_, i) => {
    if (i < COMPLETED) return "completed" as const;
    if (i === COMPLETED) return "next" as const;
    return "locked" as const;
  });

  return (
    <div
      className="relative rounded-2xl border overflow-hidden"
      style={{
        borderColor: "#2a2a2a",
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #141414 60%, #0d0d0d 100%)",
        boxShadow: `0 0 60px ${GOLD}0d`,
      }}
    >
      {/* Decorative corner glow */}
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full blur-[80px]"
        style={{ background: `${GOLD}18` }}
      />
      <div
        className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full blur-[80px]"
        style={{ background: `${GOLD}0d` }}
      />

      {/* Passport header */}
      <div className="relative z-10 flex items-center justify-between border-b px-6 py-4"
        style={{ borderColor: "#1f1f1f" }}>
        <div className="flex items-center gap-3">
          {/* Passport stamp icon */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: `${GOLD}20`,
              border: `1.5px solid ${GOLD}55`,
            }}
          >
            <Gamepad2 size={20} style={{ color: GOLD }} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Gamer Passport
            </p>
            <p className="text-[11px] text-gray-600 mt-0.5">10-Meetup Streak Tracker</p>
          </div>
        </div>

        {/* Progress fraction */}
        <div className="text-right">
          <p className="text-2xl font-black text-white">
            {COMPLETED}
            <span className="text-base font-normal text-gray-600">/{TOTAL}</span>
          </p>
          <p className="text-[10px] uppercase tracking-widest" style={{ color: GOLD }}>
            Meetups Attended
          </p>
        </div>
      </div>

      {/* Skill tree */}
      <div className="relative z-10 px-6 py-8">
        <div className="flex items-start">
          {nodes.map((state, i) => (
            <div key={i} className="flex items-start" style={{ flex: i < TOTAL - 1 ? 1 : undefined }}>
              <SkillNode index={i} state={state} delay={i * 0.06} />
              {i < TOTAL - 1 && (
                <Connector filled={i < COMPLETED} />
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {([
            { color: GOLD,          label: "Completed",      Icon: Check,    pulse: false, iconColor: GOLD },
            { color: GOLD,          label: "Next up – RSVP!", Icon: Target,   pulse: true,  iconColor: GOLD },
            { color: LOCKED_BORDER, label: "Locked",          Icon: Lock,     pulse: false, iconColor: LOCKED_BORDER },
            { color: GOLD,          label: "Grand Reward",    Icon: Gift,     pulse: false, iconColor: GOLD },
          ] as const).map(({ color, label, Icon, pulse, iconColor }) => (
            <div key={label} className="flex items-center gap-1.5">
              <motion.div
                animate={pulse ? { scale: [1, 1.15, 1] } : {}}
                transition={pulse ? { repeat: Infinity, duration: 1.8 } : {}}
              >
                <Icon size={13} color={iconColor} strokeWidth={2.5} />
              </motion.div>
              <span className="text-[11px] font-medium" style={{ color }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer ribbon */}
      <div
        className="relative z-10 flex items-center justify-between border-t px-6 py-3"
        style={{ borderColor: "#1f1f1f" }}
      >
        <p className="text-[11px] text-gray-600 flex items-center gap-1">
          {TOTAL - COMPLETED} meetups left to unlock the Loot Box
          <Gift size={12} style={{ color: GOLD }} />
        </p>
        <a
          href="https://www.seatsnaps.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-80"
          style={{ background: GOLD }}
        >
          RSVP Next →
        </a>
      </div>
    </div>
  );
}

// ─── Main section export ──────────────────────────────────────────────────────
export function SwagChallenge() {
  return (
    <section
      id="swag-challenge"
      aria-labelledby="challenge-heading"
      className="mx-auto max-w-5xl px-6 pb-24"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-gray-400 mb-4"
          style={{ borderColor: "#2a2a2a", background: "#0d0d0d" }}
        >
          <Sparkles size={12} style={{ color: GOLD }} />
          Active Challenge
        </div>

        <h2
          id="challenge-heading"
          className="text-3xl md:text-4xl font-black tracking-tight text-white"
        >
          10-Meetup Challenge
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Attend&nbsp;<span className="text-white font-semibold">10 consecutive meetups</span>&nbsp;to
          unlock exclusive community swag. Your progress lives here — level up your streak!
        </p>
      </motion.div>

      {/* Passport card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <PassportCard />
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { GOLD } from "./tokens";

const ratings = [
  { emoji: "😫", label: "Poor" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😊", label: "Great" },
  { emoji: "😍", label: "Amazing" },
];

export function Feedback() {
  const [selectedRating, setSelectedRating] = useState<number | null>(2); // Default to neutral
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="rounded-xl border border-gray-800 bg-[#111111] p-12 text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500"
            >
              <Send size={32} />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-gray-400">
              Your feedback helps us make the community even better.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setComment("");
                setSelectedRating(2);
              }}
              className="mt-6 text-sm font-medium text-gray-500 underline decoration-gray-700 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Send another response
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -20 }}
            className="rounded-xl border border-gray-800 bg-[#111111] p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-white/5 text-gray-400">
                <MessageSquare size={24} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                How are you feeling?
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed">
                Your input is valuable in helping us better understand your
                needs and tailor our community events accordingly.
              </p>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex justify-between items-center w-full max-w-md mx-auto mb-10 relative">
                  {ratings.map((r, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedRating(i)}
                      className="group relative flex flex-col items-center"
                    >
                      <motion.div
                        animate={{
                          scale: selectedRating === i ? 1.25 : 1,
                          opacity: selectedRating === i ? 1 : 0.4,
                          filter:
                            selectedRating === i ? "grayscale(0%)" : "grayscale(100%)",
                        }}
                        className="text-3xl md:text-4xl transition-all duration-300"
                      >
                        {r.emoji}
                      </motion.div>

                      {selectedRating === i && (
                        <motion.div
                          layoutId="ratingLabel"
                          className="absolute -bottom-8 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap"
                          style={{ backgroundColor: GOLD }}
                        >
                          {r.label}
                        </motion.div>
                      )}

                      {selectedRating === i && (
                        <motion.div
                          layoutId="ratingGlow"
                          className="absolute inset-0 -z-10 blur-xl opacity-20 rounded-full"
                          style={{ backgroundColor: GOLD }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="w-full mb-6">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a Comment..."
                    rows={4}
                    className="w-full rounded-xl border border-gray-800 bg-[#0A0A0A] p-4 text-sm text-white placeholder-gray-600 transition-all focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-3 rounded-lg font-bold text-sm transition-all duration-200 active:scale-95 shadow-lg hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD} 0%, #FFD166 100%)`,
                    color: "#000",
                  }}
                >
                  Submit Now
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

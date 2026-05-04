"use client";

import { motion } from "framer-motion";
import { Sparkles, Gift } from "lucide-react";
import { GOLD } from "./tokens";

export function SwagChallenge() {
  return (
    <section
      id="swag-challenge"
      aria-labelledby="challenge-heading"
      className="mx-auto max-w-5xl px-6 pb-24"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as any }}
        className="rounded-2xl border border-gray-800 bg-[#111111] p-8 md:p-12 relative overflow-hidden group"
      >
        {/* Decorative background glow */}
        <div 
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-10 transition-opacity group-hover:opacity-20"
          style={{ backgroundColor: GOLD }}
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Visual Icon Box */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-700 bg-white/5 text-white"
            style={{ boxShadow: `0 0 40px ${GOLD}10` }}
          >
            <Gift size={48} style={{ color: GOLD }} />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-400 mb-4"
            >
              <Sparkles size={12} style={{ color: GOLD }} />
              Active Challenge
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              id="challenge-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
            >
              10-Meetup Challenge
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Consistency is key! You can win <span className="text-white font-semibold">exclusive community swags</span> if you attend <span className="text-white font-semibold">10 meetups continuously</span>.
            </motion.p>
          </div>

          {/* CTA/Status */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-sm font-medium text-gray-500">Next meetup in:</div>
            <div className="text-2xl font-bold text-white">May 30</div>
            <div 
              className="mt-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-widest text-black"
              style={{ background: GOLD }}
            >
              Join Now
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

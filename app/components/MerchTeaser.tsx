"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { GOLD } from "./tokens";

const SHOP_PREVIEW = [
  { id: 10, title: "Ticket to Ride", price: 11000, image: "/images/tickettoride.png" },
  { id: 11, title: "Monopoly Deal", price: 2800, image: "/images/monopoly%20deal.jpg" },
  { id: 16, title: "Coup", price: 4200, image: "/images/coup.jpg" },
];

export function MerchTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="merch-heading">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-600 mb-2 block">Latest in Store</span>
          <h2 id="merch-heading" className="text-3xl font-bold tracking-tight text-white">Buy Games</h2>
        </div>
        <a href="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium underline decoration-gray-600 underline-offset-4 transition-all hover:decoration-white"
          style={{ color: GOLD }}>
          Visit Shop <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SHOP_PREVIEW.map((item, i) => (
          <a
            key={item.id}
            href="/shop"
            className="group block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-xl border border-gray-800 bg-[#111111] overflow-hidden transition-all duration-300 hover:border-gray-600 hover:bg-[#141414]"
            >
              <div className="relative flex items-center justify-center h-48 bg-white border-b border-gray-800/50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#F2A900] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">
                    <span className="text-xs text-gray-600">LKR </span>{item.price.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1.5 rounded-lg bg-[#161616] px-3 py-1.5 text-xs font-bold text-gray-400 border border-gray-800 transition-all duration-300 group-hover:border-[#F2A900]/40 group-hover:bg-[#1a1a1a] group-hover:text-[#F2A900] group-hover:scale-105">
                    <span>Buy</span>
                    <ShoppingBag size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <a href="/shop" className="inline-flex items-center gap-1 text-sm font-medium underline decoration-gray-600 underline-offset-4"
          style={{ color: GOLD }}>
          Visit Shop <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

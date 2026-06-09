"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Package } from "lucide-react";
import { GOLD } from "./tokens";

export interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  emoji: string;
  image?: string;
}

interface ProductCardProps {
  product: ProductData;
  onAddToCart: (product: ProductData) => void;
}

export function ProductCard({ product, onAddToCart, index = 0 }: ProductCardProps & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col h-full rounded-xl border border-gray-800 bg-[#111111] overflow-hidden transition-colors duration-300 hover:border-gray-600 hover:bg-[#141414]"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(242,169,0,0.04), transparent 50%)",
        }}
      />

      {/* Product visual */}
      <div className="relative flex items-center justify-center h-44 bg-gradient-to-b from-[#151515] to-[#111111] border-b border-gray-800/50 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-5xl">{product.emoji}</span>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 rounded-full border border-gray-800 bg-[#0A0A0A] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gray-500">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-base font-bold text-white tracking-tight mb-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-black text-white">
            <span className="text-sm font-normal text-gray-500">LKR </span>
            {product.price.toLocaleString()}
          </span>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold text-black transition-all duration-200 hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}
          >
            <ShoppingCart size={13} />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

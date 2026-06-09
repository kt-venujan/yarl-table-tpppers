"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductCard, ProductData } from "../components/ProductCard";
import { CartDrawer, CartItem } from "../components/CartDrawer";
import { ShoppingCart, Store, Filter } from "lucide-react";
import { GOLD } from "../components/tokens";

const PRODUCTS: ProductData[] = [
  // Existing merchandise/accessories
  
  // Board Games & Card Games to buy
  { id: 9, title: "Catan", price: 12500, category: "Board Games", description: "Build, trade, and settle the island of Catan. The ultimate modern classic.", emoji: "🎲", image: "https://m.media-amazon.com/images/I/61U-PZZ90sL.jpg" },
  { id: 10, title: "Ticket to Ride", price: 11000, category: "Board Games", description: "Cross-country train adventure game where players claim railway routes.", emoji: "🚂", image: "/images/tickettoride.png" },
  { id: 11, title: "Monopoly Deal", price: 2800, category: "Card Games", description: "Fast-paced property trading card game. All the fun of Monopoly in 15 minutes!", emoji: "🃏", image: "/images/monopoly%20deal.jpg" },
  { id: 12, title: "Risk", price: 9500, category: "Board Games", description: "The classic game of strategic conquest. Lead your troops and take over the world.", emoji: "🎖️", image: "/images/risk.jpg" },
  { id: 13, title: "Azul", price: 9800, category: "Board Games", description: "Beautiful tile-drafting game. Strategically place mosaic tiles to score points.", emoji: "🎨", image: "/images/azhul.jpg" },
  { id: 14, title: "Cluedo", price: 6800, category: "Board Games", description: "The classic murder mystery board game. Who did it? Where? And with what weapon?", emoji: "🔎", image: "/images/cludo.jpeg" },
  { id: 15, title: "Monopoly", price: 7200, category: "Board Games", description: "The fast-dealing property trading board game. Buy, sell, and scheme to win.", emoji: "🎩", image: "/images/monopoly.jpg" },
  { id: 16, title: "Coup", price: 4200, category: "Card Games", description: "Incorporate bluffing, deduction, and deception to eliminate all rivals.", emoji: "⚔️", image: "/images/coup.jpg" },
  { id: 17, title: "Uno", price: 1800, category: "Card Games", description: "The classic card game of matching colors and numbers. Easy and fun for everyone.", emoji: "🔴", image: "/images/uno.jpeg" },
  { id: 18, title: "Uno - No Mercy", price: 2950, category: "Card Games", description: "The brutal, action-packed version of Uno with tougher penalties and wilder action.", emoji: "🔥", image: "/images/uno%20no%20mercy.webp" },
  { id: 19, title: "Exploding Kittens", price: 5500, category: "Card Games", description: "A highly-strategic, kitty-powered version of Russian Roulette. Avoid exploding!", emoji: "🐱", image: "/images/exlpoding%20kitten.jpg" },
  { id: 20, title: "BattleShip", price: 4800, category: "Board Games", description: "The classic naval combat game. Search, scan, and sink enemy ships.", emoji: "🚢", image: "/images/battleship.webp" },
  { id: 21, title: "Code Breaker", price: 4500, category: "Board Games", description: "Deduction and logic word game. Decode secret words to find your team's agents.", emoji: "🕵️", image: "/images/code%20breaker.jpeg" },
  { id: 22, title: "These Cards Will Get you Drunk", price: 3800, category: "Card Games", description: "The hilarious adult drinking card game that keeps everyone laughing.", emoji: "🍻", image: "/images/These%20Cards%20Will%20Get%20you%20Drunk.jpg" },
  { id: 23, title: "Cluedo Suspect", price: 3200, category: "Card Games", description: "A faster, card-based version of Cluedo. Use deduction and ask the right questions.", emoji: "🃏", image: "/images/cludo%20suspect.webp" },
];

const CATEGORIES = ["All", "Apparel", "Board Games", "Card Games", "Accessories", "Stickers", "Lifestyle"];

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const addToCart = useCallback((product: ProductData) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, quantity: 1, emoji: product.emoji, image: product.image }];
    });
  }, []);

  const updateQuantity = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i)
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Store size={20} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Community Store</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Store & Games</h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Buy official tabletop games and YTT merchandise directly through us.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-8 flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-gray-600" />
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-800 bg-[#111111] text-gray-500 hover:border-gray-700 hover:text-gray-300"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} index={i} />
            ))}
          </div>
        </div>

        {/* Floating cart button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${GOLD}, #FFD166)`,
            boxShadow: `0 4px 20px ${GOLD}40`,
          }}
          aria-label="Open cart"
        >
          <ShoppingCart size={22} className="text-black" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </motion.button>
      </main>
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} items={cart}
        onUpdateQuantity={updateQuantity} onRemove={removeItem} />
    </>
  );
}

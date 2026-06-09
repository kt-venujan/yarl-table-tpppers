"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { GOLD } from "./tokens";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  emoji: string;
  image?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[95] w-full max-w-md border-l border-gray-800 bg-[#0A0A0A] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} style={{ color: GOLD }} />
                <h2 className="text-lg font-bold text-white">Cart</h2>
                {count > 0 && (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-black" style={{ backgroundColor: GOLD }}>
                    {count}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-800 hover:text-white" aria-label="Close cart">
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart size={40} className="text-gray-800 mb-4" />
                  <p className="text-gray-500 text-sm">Your cart is empty</p>
                  <p className="text-gray-600 text-xs mt-1">Add some merch to get started!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#111111] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] text-2xl flex-shrink-0 overflow-hidden relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-contain p-1"
                          />
                        ) : (
                          item.emoji
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.title}</p>
                        <p className="text-xs text-gray-500">LKR {item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white">
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-bold text-white min-w-[20px] text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white">
                          <Plus size={12} />
                        </button>
                        <button onClick={() => onRemove(item.id)} className="flex h-7 w-7 items-center justify-center rounded-md text-gray-600 hover:text-red-400 ml-1">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-800 px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Total</span>
                  <span className="text-xl font-black text-white">LKR {total.toLocaleString()}</span>
                </div>
                <button className="w-full rounded-lg py-3 text-sm font-bold text-black transition-all hover:brightness-110 active:scale-[0.98]"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}>
                  Checkout (Mock)
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

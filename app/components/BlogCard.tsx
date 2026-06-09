"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { GOLD } from "./tokens";

export interface BlogData {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorInitial: string;
  date: string;
  readTime: string;
  tag: string;
}

export function BlogCard({ post }: { post: BlogData }) {
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-xl border border-gray-800 bg-[#111111] overflow-hidden transition-colors duration-300 hover:border-gray-600 hover:bg-[#141414]"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at 50% 30%, rgba(242,169,0,0.04), transparent 50%)",
        }}
      />

      {/* Top color bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${GOLD}, #FFD166)` }} />

      <div className="flex flex-col flex-1 p-5">
        {/* Tag */}
        <span className="inline-flex self-start items-center rounded-full border border-gray-800 bg-[#0A0A0A] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gray-500 mb-3">
          {post.tag}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-white tracking-tight mb-2 line-clamp-2 group-hover:text-gray-100">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Author & meta */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
          <div className="flex items-center gap-2">
            {/* Avatar */}
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
              style={{ background: `${GOLD}20`, color: GOLD }}
            >
              {post.authorInitial}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-300">{post.author}</p>
              <p className="text-[10px] text-gray-600">{post.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-gray-600">
            <Clock size={10} />
            {post.readTime}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

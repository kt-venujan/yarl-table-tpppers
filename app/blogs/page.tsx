"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogCard, BlogData } from "../components/BlogCard";
import { Modal } from "../components/Modal";
import { BookOpen, PenLine } from "lucide-react";
import { GOLD } from "../components/tokens";

const BLOG_POSTS: BlogData[] = [
  {
    id: 1, title: "Why Catan is the Perfect Gateway Game",
    excerpt: "If you've never played a modern board game before, Catan is where we recommend you start. Here's why this classic continues to win hearts.",
    author: "Venujan", authorInitial: "V", date: "May 28, 2026", readTime: "4 min read", tag: "Strategy",
  },
  {
    id: 2, title: "Our First Meetup: A Photo Story",
    excerpt: "10 strangers walked into a room. 3 hours later, they walked out as friends. Here's what went down at our very first community gathering.",
    author: "Rispit", authorInitial: "R", date: "Apr 22, 2026", readTime: "3 min read", tag: "Community",
  },
  {
    id: 3, title: "Top 5 Party Games for Large Groups",
    excerpt: "Got 6+ people? These party games guarantee laughs, arguments (the fun kind), and unforgettable moments at your next game night.",
    author: "Thenu", authorInitial: "T", date: "Apr 15, 2026", readTime: "5 min read", tag: "Recommendations",
  },
  {
    id: 4, title: "The Rise of Board Gaming in Sri Lanka",
    excerpt: "From Carrom to Catan — the Sri Lankan board gaming scene is evolving. We explore the growing movement and what it means for communities like ours.",
    author: "Venujan", authorInitial: "V", date: "Mar 30, 2026", readTime: "6 min read", tag: "Culture",
  },
  {
    id: 5, title: "How to Teach a Board Game in 5 Minutes",
    excerpt: "Nobody wants a 20-minute rules explanation. Master these techniques to get your friends playing faster and enjoying the learning process.",
    author: "Rispit", authorInitial: "R", date: "Mar 18, 2026", readTime: "4 min read", tag: "Tips",
  },
  {
    id: 6, title: "Building a Community From Scratch",
    excerpt: "Lessons learned from starting Yarl Table Toppers — from finding the first 5 members to growing into Jaffna's tabletop hub.",
    author: "Venujan", authorInitial: "V", date: "Mar 5, 2026", readTime: "7 min read", tag: "Behind the Scenes",
  },
];

export default function BlogsPage() {
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postSubmitted, setPostSubmitted] = useState(false);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPostSubmitted(true);
    setTimeout(() => {
      setWriteModalOpen(false);
      setPostSubmitted(false);
      setPostTitle("");
      setPostBody("");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <BookOpen size={20} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Community Writing</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Blogs</h1>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                  Stories, guides, and insights from the Yarl Table Toppers community.
                </p>
              </div>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setWriteModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-black transition-all hover:brightness-110 shrink-0"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}>
                <PenLine size={15} />
                Write a Post
              </motion.button>
            </div>
          </motion.div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Write Post Modal */}
      <Modal isOpen={writeModalOpen} onClose={() => setWriteModalOpen(false)} title="Write a Post">
        {postSubmitted ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✍️</div>
            <p className="text-white font-bold text-lg mb-1">Post Submitted!</p>
            <p className="text-gray-400 text-sm">Our team will review and publish it soon.</p>
          </div>
        ) : (
          <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Post Title</label>
              <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Give your post a title..." required
                className="w-full rounded-lg border border-gray-800 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Content</label>
              <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)}
                placeholder="Write your thoughts..." rows={6} required
                className="w-full rounded-lg border border-gray-800 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700" />
            </div>
            <button type="submit" className="rounded-lg py-3 text-sm font-bold text-black transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}>
              Submit Post
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}

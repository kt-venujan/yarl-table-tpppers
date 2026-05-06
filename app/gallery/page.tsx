"use client";

import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';
import { GOLD } from '../components/tokens';

export default function GalleryPage() {
  const photos = [
    { id: 1, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.23_lsqfeh.jpg", title: "The Gathering", date: "April 2026" },
    { id: 2, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_2_awqc3r.jpg", title: "Catan Clash", date: "April 2026" },
    { id: 3, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_1_jsfxab.jpg", title: "Strategy Night", date: "April 2026" },
    { id: 4, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_tfakwf.jpg", title: "Dice Roll", date: "April 2026" },
    { id: 5, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_1_nkfcox.jpg", title: "Victory Point", date: "April 2026" },
    { id: 6, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_2_yo8joa.jpg", title: "Board Game Bliss", date: "April 2026" },
    { id: 7, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_kwst4o.jpg", title: "Community Spirit", date: "April 2026" },
    { id: 8, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040785/WhatsApp_Image_2026-05-05_at_23.40.26_1_fft4rb.jpg", title: "Tabletop Tactics", date: "April 2026" },
    { id: 9, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040785/WhatsApp_Image_2026-05-05_at_23.40.27_1_iedzua.jpg", title: "Game On", date: "April 2026" },
    { id: 10, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040785/WhatsApp_Image_2026-05-05_at_23.40.26_zo377z.jpg", title: "The Final Score", date: "April 2026" },
    { id: 11, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.26_2_q51uy0.jpg", title: "Epic Moves", date: "April 2026" },
    { id: 12, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040785/WhatsApp_Image_2026-05-05_at_23.40.27_2_p5k2zp.jpg", title: "Social Gaming", date: "April 2026" },
    { id: 13, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040786/WhatsApp_Image_2026-05-05_at_23.40.28_ze5grm.jpg", title: "Friendly Rivals", date: "April 2026" },
    { id: 14, src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040785/WhatsApp_Image_2026-05-05_at_23.40.27_wxls8i.jpg", title: "The Winner's Circle", date: "April 2026" }
  ];

  // Split into two rows for better visibility with 14 images
  const row1 = photos.slice(0, 7);
  const row2 = photos.slice(7, 14);

  const GalleryRow = ({ items, delayOffset = 0 }: { items: typeof photos, delayOffset?: number }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 + delayOffset }}
      className="flex flex-col md:flex-row w-full h-[1200px] md:h-[450px] gap-2 md:gap-3 overflow-hidden mb-4 md:mb-6"
    >
      {items.map((photo, index) => (
        <motion.div 
          key={photo.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index + delayOffset }}
          // Mobile: flex-1 expands vertically on hover (if device supports) or just provides more height.
          // Desktop: flex-1 expands horizontally on hover.
          className="relative flex-1 hover:flex-[10] md:hover:flex-[6] transition-all duration-700 ease-in-out cursor-pointer group rounded-xl md:rounded-3xl overflow-hidden border border-gray-900 hover:border-gray-700"
        >
          <Image 
            src={photo.src} 
            alt={photo.title}
            fill 
            className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
            unoptimized // Using Cloudinary URLs directly, avoid double optimization issues if any
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-y-8 group-hover:translate-y-0 w-full">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-1 block" style={{ color: GOLD }}>
                {photo.date}
              </span>
              <h3 className="text-white text-lg md:text-2xl font-black whitespace-nowrap mb-1 md:mb-2">
                {photo.title}
              </h3>
              <div className="h-0.5 md:h-1 w-8 md:w-12 rounded-full" style={{ backgroundColor: GOLD }} />
            </div>
          </div>
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-300">
             <span className="text-gray-700 text-xs md:text-sm font-black">{photo.id}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        <section className="max-w-[1400px] mx-auto px-6 py-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                 <Camera size={20} className="text-gray-400" />
               </div>
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Visual Archive</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Roundup Gallery</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Capturing the best moments from our community meetups. Every game tells a story.
            </p>
          </motion.div>

          {/* Gallery Rows */}
          <GalleryRow items={row1} />
          <GalleryRow items={row2} delayOffset={0.4} />

          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="h-px w-24 bg-gray-800" />
            <a 
              href="/" 
              className="group flex items-center gap-3 border border-gray-800 text-gray-400 px-8 py-4 rounded-2xl text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Back to Community Hub
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

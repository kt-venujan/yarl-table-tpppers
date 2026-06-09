"use client";

import Image from "next/image";
import { GOLD } from "./tokens";

const photos = [
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.23_lsqfeh.jpg", title: "The Gathering" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_2_awqc3r.jpg", title: "Monopoly Deal" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_1_jsfxab.jpg", title: "Strategy Night" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040783/WhatsApp_Image_2026-05-05_at_23.40.24_tfakwf.jpg", title: "Cludo" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_1_nkfcox.jpg", title: "Victory Point" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_2_yo8joa.jpg", title: "Board Game Bliss" },
  { src: "https://res.cloudinary.com/dr3dhkvwq/image/upload/v1778040784/WhatsApp_Image_2026-05-05_at_23.40.25_kwst4o.jpg", title: "Community Spirit" },
];

// Duplicate set for seamless infinite loop
const marqueePhotos = [...photos, ...photos];

export function ImageSlider() {
  return (
    <section className="w-full overflow-hidden py-12" aria-label="Past event photos">
      {/* Section label */}
      <div className="mx-auto max-w-5xl px-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-800" />
          <span className="text-xs font-medium uppercase tracking-widest text-gray-600">
            Meetup Moments
          </span>
          <div className="h-px flex-1 bg-gray-800" />
        </div>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

        {/* Inline keyframes + marquee track */}
        <style>{`
          @keyframes ytt-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ytt-marquee-track {
            display: flex;
            gap: 1rem;
            width: max-content;
            animation: ytt-marquee 35s linear infinite;
          }
          .ytt-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="ytt-marquee-track">
          {marqueePhotos.map((photo, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600"
              style={{ width: 288, height: 192 }}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-xs font-bold text-white">{photo.title}</p>
                <div className="h-0.5 w-8 rounded-full mt-1" style={{ backgroundColor: GOLD }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

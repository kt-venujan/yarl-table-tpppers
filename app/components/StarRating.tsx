"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export function StarRating({ rating, maxRating = 5, size = 14 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={`transition-colors duration-200 ${
            i < rating
              ? "fill-[#F2A900] text-[#F2A900]"
              : "fill-transparent text-gray-700"
          }`}
        />
      ))}
    </div>
  );
}

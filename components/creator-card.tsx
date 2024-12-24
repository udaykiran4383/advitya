"use client";

import { useState } from "react";

import { cn } from "@/lib/utils"; // Ensure 'cn' utility is implemented correctly

interface CreatorCardProps {
  name: string;
  title: string;
  image: string;
}

export default function CreatorCard({ name, title, image }: CreatorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "p-4 transition-colors duration-300 h-full flex flex-col",
          isHovered ? "bg-black" : "bg-white"
        )}
      >
        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="flex-grow flex flex-col justify-between space-y-2">
          <div>
            <h2
              className={cn(
                "text-lg font-bold tracking-tight line-clamp-1",
                isHovered ? "text-white" : "text-black"
              )}
            >
              {name}
            </h2>
            <p
              className={cn(
                "text-sm line-clamp-2 h-10",
                isHovered ? "text-gray-400" : "text-gray-600"
              )}
            >
              {title}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#7CC0F1] px-2 py-1 text-xs font-medium text-white">
                Speaker
              </span>
              {/* You can add a meaningful label or remove this empty span */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

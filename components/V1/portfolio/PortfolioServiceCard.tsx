"use client";
import { useState } from "react";

export interface Service {
  title: string;
  description: string;
  featured?: boolean;
  size?: string;
}

interface PortfolioServiceCardProps {
  service: Service;
  index: number;
  className?: string;
  hasPlaceholder?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  imageUrl?: string;
}

export const PortfolioServiceCard = ({
  service,
  index,
  className = "",
  hasPlaceholder = false,
  imageHeight,
  imageWidth,
  imageUrl,
}: PortfolioServiceCardProps) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={`${className} relative group cursor-pointer overflow-hidden rounded-sm aspect-square transition-all duration-700 ease-out hover:shadow-2xl hover:z-10 flex flex-col`}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      {/* base dark overlay (behind placeholder/content) */}
      <div className="absolute inset-0 bg-black transition-transform duration-1000 group-hover:scale-110 z-0" />

      {/* Render image if imageUrl is provided */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={service.title}
          className="absolute top-0 left-0 w-full h-[60%] object-cover z-10 opacity-80"
          style={{
            height: imageHeight ?? undefined,
            width: imageWidth ?? undefined,
          }}
        />
      )}

      {/* decorative placeholder rendered in-flow at the top when requested */}
      {hasPlaceholder && !imageUrl && (
        <div
          className={`flex items-center justify-center border border-white/10 text-white/60 text-sm font-medium pointer-events-none relative z-10 ${
            imageHeight || imageWidth ? "" : "w-full h-[60%]"
          }`}
          style={{
            height: imageHeight ?? undefined,
            width: imageWidth ?? undefined,
          }}
        >
          Image
        </div>
      )}

      <div className="relative p-6 md:p-8 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105 z-20 flex-1">
        <div>
          <h3
            className={`text-white font-light mb-4 transition-all duration-500 group-hover:tracking-wide ${
              index % 5 === 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            }`}
          >
            {service.title}
          </h3>

          <p
            className={`text-white/70 leading-relaxed mb-6 transition-all duration-700`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
  };
  index: number;
  className?: string;
  hasPlaceholder?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  imageUrl?: string;
}

export const ServiceCard = ({
  service,
  index,
  className = "",
  hasPlaceholder = false,
  imageHeight,
  imageWidth,
  imageUrl,
}: ServiceCardProps) => {
  const [active, setActive] = useState<number | null>(null);

  const imageFlexBasis = imageHeight || "60%";

  return (
    <div
      className={`${className} relative group cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:shadow-2xl hover:z-10 h-full flex flex-col`}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      {/* base dark overlay */}
      <div className="absolute inset-0 bg-black transition-transform duration-1000 group-hover:scale-110 z-0" />

      {/* Image area uses flex-basis so it scales with parent height (prevents collapse on zoom) */}
      {imageUrl ? (
        <div
          className="w-full overflow-hidden z-10"
          style={{
            flexBasis: imageFlexBasis,
          }}
        >
          <img
            src={imageUrl}
            alt={service?.title ?? "service image"}
            className="w-full h-full object-cover"
            style={{ height: "100%" }}
          />
        </div>
      ) : hasPlaceholder ? (
        <div
          className="w-full flex items-center justify-center border border-white/10 text-white/60 text-sm font-medium pointer-events-none z-10"
          style={{
            flexBasis: imageFlexBasis,
          }}
        >
          Image
        </div>
      ) : null}

      {/* Content area fills remaining space and scrolls when needed */}
      <div className="p-4 sm:p-6 md:p-4 z-20 overflow-y-auto scrollbar-hide flex-1">
        <div>
          <h3
            className={`text-white font-light mb-2 sm:mb-4 transition-all duration-500 group-hover:tracking-wide ${
              index % 5 === 2
                ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                : "text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }`}
          >
            {service.title}
          </h3>

          <p className="text-white/70 leading-relaxed transition-all duration-700 whitespace-pre-line text-xs sm:text-sm md:text-base">
            {service.description.trim()}
          </p>
        </div>
      </div>
    </div>
  );
};

import { ServiceCard } from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  featured?: boolean;
  size?: string;
  videoUrl?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="p-2 sm:p-4 md:p-6 mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
          {/* Subtle Fibonacci spiral watermark */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 sm:w-32 h-24 sm:h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50,50 m0,0 a20,20 0 0,1 20,20 a30,30 0 0,1 -30,30 a50,50 0 0,1 50,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-black"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            Nos solutions
          </h2>

          {/* <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Services de rénovation aux proportions du{" "}
            <span className="font-semibold text-black">nombre d&apos;or (Φ)</span>
          </p> */}
        </div>

        {/* One-column layout for all service cards */}
          <div className="flex flex-col gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                service={service}
                index={idx}
                videoUrl={service.videoUrl}
                hasPlaceholder={idx === 0}
              />
            ))}
          </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs tracking-wider uppercase">
            Disposition inspirée de la suite de Fibonacci • Φ ≈ 1.618
          </p>
        </div> */}
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl text-black font-light mb-6 sm:mb-8">
          Envie de rêver ?
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          Discutons de votre projet et donnons vie à vos idées. Planifiez une
          consultation gratuite dès aujourd'hui.
        </p>

        <button className="group relative bg-[#cbe425] text-black px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-8 sm:hover:px-12 md:hover:px-16 w-full sm:w-auto max-w-[320px] sm:max-w-none">
          <span className="relative z-10 flex items-center gap-2 sm:gap-4 mx-auto justify-center">
            <span className="hidden sm:inline">RÉVÉLER VOTRE INTÉRIEUR</span>
            <span className="sm:hidden">RÉVÉLER</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-700 group-hover:translate-x-2 sm:w-[18px] sm:h-[18px]"
            />
          </span>

          {/* Golden rectangle expanding border */}
          <span className="absolute inset-0 border-2 border-black scale-100 group-hover:scale-[1.05] transition-transform duration-700"></span>
        </button>

        {/* Fibonacci dots indicator - hidden on very small screens */}
        <div className="hidden xs:flex gap-2 sm:gap-3 justify-center mt-8 sm:mt-10 md:mt-12">
          {(
            [
              6,
              10,
              16,
              22,
              16,
              10,
              6, // smaller sizes for mobile
            ] as const
          ).map((size, i, arr) => (
            <div
              key={i}
              className={`bg-gray-300 transition-all duration-500 hover:bg-black cursor-pointer ${
                i === Math.floor(arr.length / 2) ? "shadow-lg scale-110" : ""
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          ))}
        </div>
        {/* Larger Fibonacci dots for desktop */}
        <div className="hidden md:flex gap-3 justify-center mt-12">
          {(
            [
              8,
              13,
              21,
              28,
              21,
              13,
              8, // symmetric, 28px center
            ] as const
          ).map((size, i, arr) => (
            <div
              key={i}
              className={`bg-gray-300 transition-all duration-500 hover:bg-black cursor-pointer ${
                i === Math.floor(arr.length / 2) ? "shadow-lg scale-110" : ""
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

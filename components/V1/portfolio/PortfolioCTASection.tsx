"use client";
import { ArrowRight } from "lucide-react";

export const PortfolioCTASection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl text-gray-500 font-light mb-8">
          Envie de rêver ?
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Discutons de votre projet et donnons vie à vos idées. Planifiez une
          consultation gratuite dès aujourd'hui.
        </p>

        <button className="group relative bg-black text-white px-12 py-6 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-16">
          <span className="relative z-10 flex items-center gap-4 mx-auto justify-center">
            RÉVÉLER VOTRE INTÉRIEUR
            <ArrowRight
              size={18}
              className="transition-transform duration-700 group-hover:translate-x-2"
            />
          </span>

          {/* Golden rectangle expanding border */}
          <span className="absolute inset-0 border-2 border-black scale-100 group-hover:scale-[1.05] transition-transform duration-700"></span>
        </button>

        {/* Fibonacci dots indicator */}
        <div className="flex gap-3 justify-center mt-12">
          {[8, 13, 21, 28, 21, 13, 8].map((size, i, arr) => (
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

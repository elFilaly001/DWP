"use client";
import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function HeroFibo() {
    const [isReady, setIsReady] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        setTimeout(() => setIsReady(true), 300);
        setTimeout(() => setShowScroll(true), 2000);
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleEnter = () => {
        document.body.style.overflow = 'auto';
        const nextSection = document.getElementById('projets');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">

                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    >
                        <source src="https://dwp-front.vercel.app/dwp-video.webm" type="video/mp4" />
                    </video>
                    {/* <img
                        src="http://randylewiscreative.com/wp-content/uploads/2016/08/eeee.jpg"
                        alt="Hero background"
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                    /> */}

                    {/* Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
                </div>

                {/* Fibonacci Spiral Overlay - Subtle artistic element */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 1000 1000" className="w-full h-full">
                        <path
                            d="M 500 500 Q 500 300, 700 300 Q 900 300, 900 500 Q 900 700, 700 700 Q 500 700, 500 500"
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                    </svg>
                </div>

                {/* Content - Using Golden Ratio Proportions */}
                <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

               
                    <h1 className="text-white font-serif text-[clamp(56px,10vw,144px)] leading-[0.95] mb-8 tracking-tight">
                        Ton intérieur,
                        <br />
                        <span className="font-normal italic">en mieux.</span>
                    </h1>

                    <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>

                    <p className="text-white/70 text-base md:text-xl font-light mb-16 tracking-wide max-w-2xl mx-auto leading-relaxed">
                        L'innovation dans chaque ligne.
                        <br />
                        Solidité dans chaque réalisation.
                    </p>

                    {/* CTA */}
                    <button
                        onClick={() => { redirect('/services'); }}
                        className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-xs font-bold tracking-[0.2em] hover:bg-white/90 transition-all duration-500 hover:gap-6"
                    >
                        DÉCOUVRIR
                        <ChevronDown size={16} className="transition-transform duration-500 group-hover:translate-y-1" />
                    </button>
                </div>

                {/* {showScroll && (
                    <button
                        onClick={handleEnter}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 animate-bounce"
                    >
                        <span className="text-xs tracking-[0.2em] font-light">SCROLL</span>
                        <ChevronDown size={20} />
                    </button>
                )} */}

                {/* Corner Accent - Fibonacci inspired */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-full border-t border-r border-white/20"></div>
                    <div className="absolute top-4 right-4 w-40 h-40 border-t border-r border-white/20"></div>
                    <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-white/20"></div>
                </div>

                {/* Project Count - Golden Ratio positioned (optional) */}
                <div className="absolute bottom-12 right-12 text-white/50 text-right hidden md:block">
                    <div className="text-4xl font-light mb-1">500+</div>
                    <div className="text-xs tracking-[0.2em]">PROJETS RÉALISÉS</div>
                </div>

                {/* Years - Golden Ratio positioned (optional) */}
                <div className="absolute bottom-12 left-12 text-white/50 text-left hidden md:block">
                    <div className="text-4xl font-light mb-1">15+</div>
                    <div className="text-xs tracking-[0.2em]">ANNÉES D'EXPERTISE</div>
                </div>
            </section>
        </>
    );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const BlogPage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #cbe425 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="text-[#cbe425] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 uppercase">
            Journal de l&apos;interieur
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95] mb-6 sm:mb-8">
            Le Blog DWP.
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Explorations, reflexions et regards d&apos;experts sur
            l&apos;architecture interieure, la lumiere et le design.
          </p>
        </div>
      </section>

      {/* Blog post grid */}
      <section className="relative pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-[#cbe425]/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Cover image */}
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.heroTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#cbe425] text-[0.65rem] tracking-[0.25em] uppercase">
                      {post.category}
                    </span>
                    <span className="text-white/30 text-xs"></span>
                    <span className="text-white/40 text-[0.65rem]">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-serif mb-3 group-hover:text-[#cbe425] transition-colors duration-300 leading-snug">
                    {post.heroTitle}
                  </h2>

                  <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[#cbe425] text-xs tracking-[0.15em] uppercase">
                    Lire l&apos;article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

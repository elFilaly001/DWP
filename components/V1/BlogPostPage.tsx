import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface BlogPostPageProps {
  post: BlogPost;
}

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
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
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#cbe425] text-xs sm:text-sm tracking-[0.2em] uppercase mb-8 hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Retour au blog
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#cbe425] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              {post.heroLabel}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-xs sm:text-sm">
              {post.date}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-xs sm:text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95] mb-6 sm:mb-8">
            {post.heroTitle}
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {post.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="relative pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-20 md:space-y-24">
          {post.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = post.images[index];

            return (
              <article
                key={section.id}
                className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
                id={section.id}
              >
                {/* Text */}
                <div
                  className={isEven ? "order-1" : "order-2 md:order-1 md:pl-8"}
                >
                  <div className="text-[#cbe425] text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase mb-3">
                    {section.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-5">
                    {section.title}
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                    {section.body}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={isEven ? "order-2" : "order-1 md:order-2 md:pr-8"}
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
                    <div className="relative z-10 h-full w-full flex items-end justify-between p-4 sm:p-5 md:p-6">
                      <div className="text-[0.65rem] sm:text-xs text-white/60">
                        © DWP
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;

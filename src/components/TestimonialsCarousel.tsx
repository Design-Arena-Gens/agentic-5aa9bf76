"use client";

import { useMemo } from "react";
import { testimonials } from "@/data/content";

export function TestimonialsCarousel() {
  const duplicated = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sand-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sand-500">Voices from the maison</p>
          <h2 className="mt-4 font-display text-3xl text-ebony sm:text-4xl">
            Every exchange becomes a cherished story
          </h2>
        </div>
      </div>
      <div className="mt-12 flex animate-[scroll_30s_linear_infinite] gap-6 px-6 sm:px-10">
        {duplicated.map((testimonial, index) => (
          <figure
            key={`${testimonial.author}-${index}`}
            className="w-[320px] flex-shrink-0 rounded-[2rem] border border-sand-200/70 bg-white/80 p-6 shadow-[0_18px_45px_-30px_rgba(49,31,21,0.45)] backdrop-blur"
          >
            <blockquote className="text-sm text-ebony/75">“{testimonial.message}”</blockquote>
            <figcaption className="mt-4">
              <p className="font-display text-lg text-ebony">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-500">{testimonial.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

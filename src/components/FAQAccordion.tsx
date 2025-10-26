"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sand-500">Questions & Rituals</p>
          <h2 className="mt-4 font-display text-3xl text-ebony sm:text-4xl">
            Everything your stylist agent can orchestrate
          </h2>
        </div>
        <div className="mt-10 divide-y divide-sand-200/60 rounded-[2rem] border border-sand-200/80 bg-white/80 shadow-[0_20px_45px_-35px_rgba(49,31,21,0.45)]">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <button
                key={faq.question}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full px-6 py-5 text-left transition hover:bg-sand-100/40 focus:outline-none focus-visible:bg-sand-100/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl text-ebony">{faq.question}</h3>
                  <span className="text-2xl text-sand-600">{isOpen ? "−" : "+"}</span>
                </div>
                <div
                  className={`overflow-hidden text-sm text-ebony/70 transition-[max-height,opacity] duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-4 pr-8">{faq.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/site-data";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section py-12 md:py-16">
      <div className="mx-auto max-w-xl text-center">
        <Reveal direction="up">
          <span className="eyebrow">FAQ</span>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Good to Know</h2>
        </Reveal>
      </div>

      <Reveal direction="up" delay={250} className="mx-auto mt-10 max-w-xl">
        <div className="divide-y divide-[var(--surface-line)] border-y border-[var(--surface-line)]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <span
                    className={`shrink-0 text-xl text-green transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-ink-soft">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

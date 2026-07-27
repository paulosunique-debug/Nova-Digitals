"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jason T.",
    role: "E-commerce Brand Owner",
    // Replace with your client's headshot
    avatar: "/testimonials/person-1.svg",
    quote:
      "Their ad edits increased our ROAS by 2x in just two weeks. Absolute game-changer.",
  },
  {
    name: "Sophie M.",
    role: "Marketing Director",
    avatar: "/testimonials/person-2.svg",
    quote:
      "The UGC-style videos felt so natural and converted way better than our old content.",
  },
  {
    name: "Daniel K.",
    role: "DTC Founder",
    avatar: "/testimonials/person-3.svg",
    quote:
      "Professional, fast, and always delivers. Our go-to team for all video content.",
  },
  {
    name: "Maria L.",
    role: "Growth Lead",
    avatar: "/testimonials/person-4.svg",
    quote:
      "Nova Digitals feels like an extension of our in-house team, not an outside vendor.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const shown = Array.from(
    { length: visible },
    (_, i) => TESTIMONIALS[(index + i) % TESTIMONIALS.length]
  );

  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title mt-3">What Our Clients Say</h2>
        </div>

        <div className="relative mt-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((t, i) => (
                <motion.div
                  key={`${t.name}-${index}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className={`card-surface p-6 ${
                    i > 0 ? "hidden lg:block" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-ink-100">{t.name}</p>
                      <p className="text-xs text-ink-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-lime-400 text-lime-400"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-base-700 text-ink-300 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-lime-400" : "w-1.5 bg-base-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-base-700 text-ink-300 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

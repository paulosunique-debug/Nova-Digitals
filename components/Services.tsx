"use client";

import { motion } from "framer-motion";
import { Scissors, Clapperboard, Sparkles, Compass } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Ad Editing Specialist",
    description: "Scroll-stopping ad edits for Meta, TikTok, YouTube and more.",
    items: ["Short-form Ads", "Product Ads", "Retargeting Ads", "Hooks & Cutdowns"],
  },
  {
    icon: Clapperboard,
    title: "VSL & UGC Specialist",
    description:
      "High-converting VSLs and UGC-style videos that build trust and drive sales.",
    items: ["UGC Videos", "VSL Editing", "Spokesperson Videos", "Testimonial Videos"],
  },
  {
    icon: Sparkles,
    title: "AI Video Specialist",
    description:
      "AI-generated videos that save time and boost impact.",
    items: ["AI Avatars", "Text-to-Video", "Product Visuals", "AI Ad Concepts"],
  },
  {
    icon: Compass,
    title: "Creative & Strategy Support",
    description:
      "Data-backed creative insights to make your ads perform better.",
    items: ["Ad Strategy", "Hook & Concept", "Competitor Analysis", "Creative Guidance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-base-700/40 bg-base-900 py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title mt-3">Specialized in What Converts</h2>
          <p className="mt-4 text-ink-500">
            Premium video solutions designed to drive real business results.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface group p-6 transition-colors hover:border-lime-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400/10">
                <service.icon size={20} className="text-lime-400" />
              </div>
              <h3 className="mt-5 font-display tracking-tight text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-base-700/60 pt-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

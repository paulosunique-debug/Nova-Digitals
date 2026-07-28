"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const FILTERS = ["All", "Ad Edits", "UGC Content", "VSLs", "AI Videos"] as const;
type Filter = (typeof FILTERS)[number];

const WORK: {
  title: string;
  category: Exclude<Filter, "All">;
  tag: string;
  // Replace with your portfolio video thumbnail
  thumb: string;
}[] = [
  { title: "Skincare Brand Ad", category: "Ad Edits", tag: "Ad Edit", thumb: "/portfolio/portfolio-1.jpg" },
  { title: "Fitness Supplement VSL", category: "VSLs", tag: "VSL Video", thumb: "/portfolio/portfolio-2.jpg" },
  { title: "UGC for Home Gadget", category: "UGC Content", tag: "UGC Video", thumb: "/portfolio/portfolio-3.jpg" },
  { title: "Food Delivery Ad", category: "Ad Edits", tag: "Ad Edit", thumb: "/portfolio/portfolio-4.jpg" },
  { title: "AI Product Explainer", category: "AI Videos", tag: "AI Video", thumb: "/portfolio/portfolio-5.jpg" },
  { title: "Fashion Brand Ad", category: "UGC Content", tag: "Ad Edit", thumb: "/portfolio/portfolio-6.jpg" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const filtered =
    active === "All" ? WORK : WORK.filter((w) => w.category === active);

  return (
    <section id="portfolio" className="border-t border-base-700/40 bg-base-900 py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title mt-3">A Selection of Our Best Work</h2>
          <p className="mt-4 text-ink-500">
            A selection of ad videos, VSLs, and UGC content we&apos;ve created
            for amazing brands.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "bg-lime-400 text-base-950"
                  : "border border-base-700 text-ink-300 hover:border-lime-400/50 hover:text-lime-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-xl2 border border-base-700 bg-base-800"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play size={22} className="ml-0.5 fill-lime-400 text-lime-400" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-ink-100">{item.title}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{item.tag}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Link href="/#contact" className="btn-secondary">
            View More Work
          </Link>
        </div>
      </div>
    </section>
  );
}

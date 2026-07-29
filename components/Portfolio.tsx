"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const FILTERS = [
  "All",
  "Ad Edits",
  "UGC Content",
  "VSLs",
  "AI Videos",
] as const;

type Filter = (typeof FILTERS)[number];

const WORK: {
  title: string;
  category: Exclude<Filter, "All">;
  tag: string;
  thumb: string;
  video: string;
}[] = [
  {
    title: "Premium Skincare Meta Ad",
    category: "Ad Edits",
    tag: "Meta Ads",
    thumb: "/portfolio/portfolio-1.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
  {
    title: "Fitness Supplement VSL",
    category: "VSLs",
    tag: "VSL Video",
    thumb: "/portfolio/portfolio-2.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
  {
    title: "UGC for Home Gadget",
    category: "UGC Content",
    tag: "UGC Video",
    thumb: "/portfolio/portfolio-3.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
  {
    title: "Food Delivery Ad",
    category: "Ad Edits",
    tag: "Meta Ads",
    thumb: "/portfolio/portfolio-4.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
  {
    title: "AI Product Explainer",
    category: "AI Videos",
    tag: "AI Video",
    thumb: "/portfolio/portfolio-5.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
  {
    title: "Fashion Brand Ad",
    category: "UGC Content",
    tag: "UGC Video",
    thumb: "/portfolio/portfolio-6.jpg",
    video: "https://www.youtube.com/embed/JJlEzmNsnBg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? WORK
      : WORK.filter((item) => item.category === active);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

    return (
    <>
      <section
        id="portfolio"
        className="border-t border-base-700/40 bg-base-900 py-24"
      >
        <div className="container-px mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Our Work</p>

            <h2 className="section-title mt-3">
              A Selection of Our Best Work
            </h2>

            <p className="mt-4 text-ink-500">
              A selection of ad videos, VSLs and UGC content we've created
              for ambitious ecommerce brands.
            </p>
          </div>

          {/* FILTERS */}

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === filter
                    ? "bg-lime-400 text-black"
                    : "border border-base-700 text-ink-300 hover:border-lime-400 hover:text-lime-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* PORTFOLIO */}

          <div
            className="
              mt-12
              flex
              gap-6
              overflow-x-auto
              snap-x
              snap-mandatory
              pb-4
              lg:grid
              lg:grid-cols-3
              lg:overflow-visible
            "
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: .35 }}

                  onClick={() => setSelectedVideo(item.video)}

                  className="
                    group
                    relative
                    min-w-[320px]
                    lg:min-w-0
                    snap-center
                    cursor-pointer
                    overflow-hidden
                    rounded-xl2
                    border
                    border-base-700
                    bg-base-800
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-lime-400/40
                    hover:shadow-[0_0_70px_rgba(216,255,47,.18)]
                  "
                >

                  {/* CINEMATIC GLOW */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-[radial-gradient(circle_at_center,rgba(216,255,47,.14),transparent_70%)]
                      pointer-events-none
                      z-10
                    "
                  />

                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:brightness-110
                      "
                    />

                    {/* DARK OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/20
                        transition-all
                        duration-500
                        group-hover:bg-black/45
                      "
                    />

                    {/* PLAY BUTTON */}

                    <div className="absolute inset-0 flex items-center justify-center">

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .95 }}
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/60
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:bg-lime-400
                          group-hover:shadow-[0_0_40px_rgba(216,255,47,.5)]
                        "
                      >
                        <Play
                          size={24}
                          className="
                            ml-1
                            fill-lime-400
                            text-lime-400
                            transition-colors
                            duration-300
                            group-hover:fill-black
                            group-hover:text-black
                          "
                        />
                      </motion.div>

                    </div>

                  </div>

                  <div className="relative z-20 p-5">

                    <h3 className="font-semibold text-lg text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-lime-400">
                      {item.tag}
                    </p>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

                    <div className="mt-14 text-center">
            <a href="/#contact" className="btn-secondary">
              View More Work
            </a>
          </div>

        </div>
      </section>

      {/* ===========================
          VIDEO MODAL
      ============================ */}

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-lime-400/10 blur-3xl" />

              {/* Close */}

              <button
                onClick={() => setSelectedVideo(null)}
                className="
                  absolute
                  -top-14
                  right-0
                  z-50
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-lime-400
                  hover:bg-lime-400
                  hover:text-black
                "
              >
                <X size={20} />
              </button>

              {/* Video */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-black
                  shadow-[0_0_120px_rgba(216,255,47,.15)]
                "
              >
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`${selectedVideo}?autoplay=1&rel=0`}
                    title="Nova Digitals Portfolio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
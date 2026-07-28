"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const POINTS = [
  "Creative storytelling",
  "Performance-driven edits",
  "Fast turnaround",
  "Data-focused strategy",
];

const STATS = [
  { value: "3+", label: "Years of Experience" },
  { value: "100+", label: "Brands Worked With" },
  { value: "300+", label: "Projects Completed" },
  { value: "$10M+", label: "Revenue Generated" },
];

export default function AboutUs() {
  return (
    <section id="about" className="border-t border-base-700/40 py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title mt-3">
              We&apos;re a team of creative minds, editors, and strategists
              passionate about helping brands win with scroll-stopping ads.
            </h2>

            <ul className="mt-8 grid grid-cols-2 gap-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/15">
                    <Check size={12} className="text-lime-400" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="card-surface p-4">
                  <p className="font-display tracking-tight text-xl font-semibold text-lime-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl2 border border-base-700"
          >
            {/* Replace with a real photo of your team or workspace */}
            <Image
              src="/about/about-placeholder2.png"
              alt="Nova Digitals team workspace"
              width={560}
              height={440}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

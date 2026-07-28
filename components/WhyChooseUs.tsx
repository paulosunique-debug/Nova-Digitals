"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "100+", label: "Brands Served" },
  { value: "300+", label: "Projects Completed" },
  { value: "$10M+", label: "Revenue Generated" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl2 border border-base-700"
        >
          {/* Replace with a photo of your studio/team setup */}
          <Image
            src="/about/about-placeholder.png"
            alt="Nova Digitals editing workstation"
            width={560}
            height={440}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Why Nova Digitals</p>
          <h2 className="section-title mt-3">
            <span className="text-lime-400">We&apos;re not just editors.</span>
            <br />
            We&apos;re your growth partners.
          </h2>
          <p className="mt-5 max-w-lg text-ink-500">
            We blend creative editing, AI tools, and performance strategy to
            turn your product into content that sells.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-base-700/60 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display tracking-tight text-2xl font-semibold text-lime-400 md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-500 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Users, PenTool, SlidersHorizontal, PackageCheck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Users,
    title: "Discover",
    description: "We learn about your brand, audience, and goals.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Create",
    description: "We craft high-converting videos tailored to your goals.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Refine",
    description: "We optimize based on feedback and data.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Deliver",
    description: "You get scroll-stopping content that converts.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="section-title mt-3">Simple. Strategic. Effective.</h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line — visualizes the four-step sequence */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-base-700 lg:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-base-700 bg-base-800">
                <step.icon size={22} className="text-lime-400" />
              </div>
              <p className="mt-5 font-display tracking-tight text-sm font-semibold text-lime-400">
                {step.number}
              </p>
              <p className="mt-1 font-medium text-ink-100">{step.title}</p>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-ink-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

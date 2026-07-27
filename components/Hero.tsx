"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com/your-agency/intro-call"; // Replace with your Calendly booking URL

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid-fade pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display tracking-tight text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-[3.75rem]"
          >
            We Edit Ads.
            <br />
            You Get
            <br />
            <span className="text-lime-400">Results.</span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-md text-base text-ink-300 md:text-lg"
          >
            High-converting ad edits, VSLs, UGC content and AI-powered visuals
            that drive attention, build trust, and sell.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Call
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Our Work
            </a>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {["person-1", "person-2", "person-3", "person-4"].map((p) => (
                <Image
                  key={p}
                  src={`/testimonials/${p}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full ring-2 ring-base-950"
                />
              ))}
            </div>
            <p className="text-sm text-ink-500">
              Trusted by 100+ brands to create winning ads
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto flex justify-center"
        >
          {/* Replace with your hero illustration / product shot */}
          <Image
            src="/hero/hero-placeholder.svg"
            alt="Nova Digitals — ad editing showcase"
            width={480}
            height={480}
            priority
            className="max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

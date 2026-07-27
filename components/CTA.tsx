"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendly.com/your-agency/intro-call"; // Replace with your Calendly booking URL

export default function CTA() {
  return (
    <section className="border-t border-base-700/40 bg-base-900 py-16">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 rounded-xl2 border border-lime-400/20 bg-base-800 p-8 shadow-glow md:flex-row md:p-10"
        >
          <h3 className="font-display tracking-tight text-2xl font-semibold md:text-3xl">
            Ready to Create <span className="text-lime-400">Winning Ads</span>?
          </h3>
          <p className="hidden max-w-xs text-sm text-ink-500 md:block">
            Book a free call and let&apos;s talk about how we can grow your
            brand.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Book a Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

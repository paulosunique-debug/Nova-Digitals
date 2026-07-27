"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BOOKING_URL = "https://calendly.com/your-agency/intro-call"; // Replace with your Calendly booking URL

const PLANS = {
  monthly: [
    {
      name: "Starter",
      price: "$499",
      unit: "/month",
      description: "Perfect for small brands and startups.",
      features: ["2 Ad Edits / Month", "1 UGC Video", "1 Revision", "7 Days Delivery"],
      featured: false,
    },
    {
      name: "Growth",
      price: "$999",
      unit: "/month",
      description: "For brands ready to scale their ads.",
      features: [
        "4 Ad Edits / Month",
        "2 UGC/VSL Videos",
        "3 Revisions",
        "5 Days Delivery",
      ],
      featured: true,
    },
    {
      name: "Pro",
      price: "$1,999",
      unit: "/month",
      description: "For brands that want the best results.",
      features: [
        "8+ Ad Edits / Month",
        "4+ UGC/VSL Videos",
        "Unlimited Revisions",
        "3 Days Delivery",
      ],
      featured: false,
    },
  ],
  project: [
    {
      name: "Starter",
      price: "$299",
      unit: "/project",
      description: "A single high-quality ad edit, done right.",
      features: ["1 Ad Edit", "1 Revision", "5 Days Delivery", "Source File Included"],
      featured: false,
    },
    {
      name: "Growth",
      price: "$599",
      unit: "/project",
      description: "A small batch to test what converts.",
      features: ["3 Ad Edits", "2 Revisions", "4 Days Delivery", "Performance Notes"],
      featured: true,
    },
    {
      name: "Pro",
      price: "$1,199",
      unit: "/project",
      description: "A full creative sprint for a launch.",
      features: ["6 Ad Edits", "Unlimited Revisions", "3 Days Delivery", "Strategy Call"],
      featured: false,
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "project">("monthly");
  const plans = PLANS[billing];

  return (
    <section id="pricing" className="border-t border-base-700/40 bg-base-900 py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title mt-3">Simple Pricing for Every Stage</h2>

          <div className="mx-auto mt-6 inline-flex rounded-full border border-base-700 p-1">
            {(["monthly", "project"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                  billing === option
                    ? "bg-lime-400 text-base-950"
                    : "text-ink-300 hover:text-lime-400"
                }`}
              >
                {option === "monthly" ? "Monthly" : "Project Based"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col rounded-xl2 p-8 ${
                plan.featured
                  ? "border-2 border-lime-400 bg-base-800 shadow-glow"
                  : "border border-base-700 bg-base-800"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-base-950">
                  Most Popular
                </span>
              )}
              <h3 className="font-display tracking-tight text-lg font-semibold">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-display tracking-tight text-4xl font-semibold">
                  {plan.price}
                </span>
                <span className="text-ink-500">{plan.unit}</span>
              </p>
              <p className="mt-3 text-sm text-ink-500">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-base-700/60 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-ink-300">
                    <Check size={14} className="shrink-0 text-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`}
              >
                Book a Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

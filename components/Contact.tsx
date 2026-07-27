"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Clock, Send } from "lucide-react";

// Replace with your contact email
const CONTACT_EMAIL = "hello@novadigitals.com";
// Replace with your Instagram handle/link
const INSTAGRAM_HANDLE = "@novadigitals";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
  { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only demo: no backend is wired up.
    // Replace this with your form endpoint (e.g. Formspree, a Next.js API route, etc.)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title mt-3">Let&apos;s Talk</h2>
            <p className="mt-4 max-w-md text-ink-500">
              Book a free 15-minute call and let&apos;s discuss how we can
              grow your brand.
            </p>

            <div className="mt-10 space-y-5">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400/10">
                    <item.icon size={16} className="text-lime-400" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-500">{item.label}</p>
                    <p className="text-sm text-ink-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface space-y-4 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Brand name" placeholder="Your brand name" />
            <Field label="What do you need help with?" placeholder="Ad edits, VSL, UGC..." />
            <div>
              <label className="mb-1.5 block text-xs text-ink-500">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about your project"
                className="w-full rounded-lg border border-base-700 bg-base-900 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-lime-400/60"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Book My Call
              <Send size={15} />
            </button>

            {submitted && (
              <p className="text-center text-sm text-lime-400" role="status">
                Thanks — we&apos;ll be in touch within 24 hours.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-ink-500">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-base-700 bg-base-900 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-lime-400/60"
      />
    </div>
  );
}

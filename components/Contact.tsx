"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Instagram, Clock, ArrowRight } from "lucide-react";
import { BOOKING_PAGE_URL } from "@/lib/constants";

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
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // No backend here — instead we carry these details straight into the
    // Calendly embed on /book-a-call, so the booking form opens pre-filled.
    // (a1/a2 map to Calendly's custom question fields — set those question
    // names to "Brand name" and "Project details" in your Calendly event.)
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const brand = formData.get("brand") as string;
    const details = formData.get("details") as string;

    if (name) params.set("name", name);
    if (email) params.set("email", email);
    if (brand) params.set("a1", brand);
    if (details) params.set("a2", details);

    router.push(`${BOOKING_PAGE_URL}?${params.toString()}`);
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
              <Field name="name" label="Full name" placeholder="Your name" required />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <Field name="brand" label="Brand name" placeholder="Your brand name" />
            <div>
              <label className="mb-1.5 block text-xs text-ink-500">
                What do you need help with?
              </label>
              <textarea
                name="details"
                rows={4}
                placeholder="Ad edits, VSL, UGC — tell us a bit about your project"
                className="w-full rounded-lg border border-base-700 bg-base-900 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-lime-400/60"
              />
            </div>

            <button type="submit" className="btn-primary w-full" disabled={submitting}>
              {submitting ? "Taking you to the calendar…" : "Continue to Book a Call"}
              <ArrowRight size={15} />
            </button>

            <p className="text-center text-xs text-ink-700">
              You&apos;ll pick your exact time on the next step.
            </p>
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

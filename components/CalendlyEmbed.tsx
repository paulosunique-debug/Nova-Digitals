"use client";

import Script from "next/script";
import { CALENDLY_URL, CALENDLY_EMBED_PARAMS } from "@/lib/constants";

interface CalendlyEmbedProps {
  /** Prefills the invitee's name field on Calendly */
  name?: string;
  /** Prefills the invitee's email field on Calendly */
  email?: string;
  /**
   * Prefills Calendly's first custom question (a1). In your Calendly event
   * setup, add a custom question — e.g. "Brand name" — for this to land in
   * the right field. Without a matching question, Calendly ignores it.
   */
  a1?: string;
  /** Prefills Calendly's second custom question (a2) — e.g. project details */
  a2?: string;
}

export default function CalendlyEmbed({ name, email, a1, a2 }: CalendlyEmbedProps) {
  const params = new URLSearchParams(CALENDLY_EMBED_PARAMS);
  if (name) params.set("name", name);
  if (email) params.set("email", email);
  if (a1) params.set("a1", a1);
  if (a2) params.set("a2", a2);

  const embedUrl = `${CALENDLY_URL}?${params.toString()}`;

  return (
    <>
      <div
        className="calendly-inline-widget w-full overflow-hidden rounded-xl2 border border-base-700 bg-base-800"
        data-url={embedUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
      {/* Loads Calendly's widget script once, after the page becomes interactive */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}

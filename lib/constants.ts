// Replace with your real Calendly (or other scheduling tool) URL.
// This is the ONLY place it needs to be updated — every "Book a Call"
// button links to the internal /book-a-call page, which embeds this URL.
export const CALENDLY_URL = "https://calendly.com/paulosunique/book-a-call";

// Calendly's inline-widget theme params — kept separate from prefill params
// (name/email/answers) so both can be merged cleanly in CalendlyEmbed.
export const CALENDLY_EMBED_PARAMS = {
  background_color: "08090a",
  text_color: "f1f1f1",
  primary_color: "b6ff3c",
};

// Internal route that hosts the inline Calendly embed.
export const BOOKING_PAGE_URL = "/book-a-call";

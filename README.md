# Nova Digitals — Marketing Site

A production-ready Next.js + Tailwind CSS + Framer Motion frontend for an ad-editing agency, built from the provided UI reference. Frontend only — no backend, auth, CMS, or database.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx       — fonts, metadata
  page.tsx         — assembles all sections in order
  globals.css      — design tokens & shared utility classes
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx       ("Specialized in What Converts")
  WhyChooseUs.tsx    ("We're your growth partners")
  Portfolio.tsx      ("Our Work" — filterable grid)
  Testimonials.tsx   (carousel)
  Process.tsx        ("Simple. Strategic. Effective.")
  CTA.tsx
  AboutUs.tsx
  Pricing.tsx        (monthly / project toggle)
  Contact.tsx        ("Let's Talk" form)
  Footer.tsx
public/
  logo/        — brand mark
  hero/        — hero illustration
  portfolio/   — portfolio thumbnails
  clients/     — client / trusted-by logos
  testimonials/— client avatars
  about/       — about/studio photo
```

## Replacing placeholder assets

Everything is a placeholder SVG so the site runs out of the box. Swap files 1:1, keeping the same filename (or update the `src` in the relevant component):

| Placeholder | Replace with | Used in |
|---|---|---|
| `public/logo/logo-placeholder.svg` | Your logo | `Navbar.tsx`, `Footer.tsx` |
| `public/hero/hero-placeholder.svg` | Hero product shot / illustration | `Hero.tsx` |
| `public/portfolio/portfolio-1.svg` … `-6.svg` | Portfolio video thumbnails | `Portfolio.tsx` |
| `public/clients/client-1.svg` … `-4.svg` | Client logos (add a "Trusted By" strip if desired) | — |
| `public/testimonials/person-1.svg` … `-4.svg` | Client headshots | `Hero.tsx`, `Testimonials.tsx` |
| `public/about/about-placeholder.svg` | Studio / team photo | `WhyChooseUs.tsx`, `AboutUs.tsx` |

Search the codebase for `Replace with` comments — every spot that needs your real content (logo, booking link, contact email, social links, portfolio videos) is flagged inline.

## Booking flow

Every "Book a Call" button (Navbar, Hero, CTA banner, Pricing cards) links to the internal `/book-a-call` page, which embeds Calendly directly on the page (no new tab, no external redirect).

- **Set your Calendly URL once** in `lib/constants.ts` (`CALENDLY_URL`) — every button and the embed itself read from this single constant. Theming (`background_color`, `text_color`, `primary_color`) lives right next to it in `CALENDLY_EMBED_PARAMS`.
- The embed lives in `components/CalendlyEmbed.tsx` and loads Calendly's official widget script (`assets.calendly.com/assets/external/widget.js`) via `next/script`.
- The page itself is `app/book-a-call/page.tsx` if you want to adjust its heading/copy or add testimonials/FAQs alongside the calendar.

### Contact form → Calendly prefill

The "Let's Talk" form (`components/Contact.tsx`) doesn't submit anywhere on its own — there's no backend in this project. Instead, on submit it carries the visitor's details straight into the booking page as URL query params (`?name=...&email=...&a1=...&a2=...`), and `/book-a-call` passes those into the Calendly embed so it opens pre-filled with their name, email, brand name, and project details.

**One setup step on Calendly's side:** `a1` and `a2` only land in the right fields if your Calendly event has matching custom questions configured (e.g. "Brand name" and "Project details") — otherwise Calendly just ignores them. Name and email prefill automatically with no setup needed.

### Cross-page navigation

Since `/book-a-call` is a separate page, all in-page anchor links (`Home`, `Services`, `Portfolio`, etc. in the Navbar and Footer) now point to `/#section` rather than `#section`, so they always route back to the homepage and scroll to the right section — whether you're already on the homepage or on `/book-a-call`.

## Key things to update before launch

- **Booking link** — set `CALENDLY_URL` once in `lib/constants.ts`. Every "Book a Call" button already points to the internal `/book-a-call` page, which embeds this URL.
- **Contact email / Instagram handle** — top of `Contact.tsx`.
- **Social links** — `SOCIALS` array in `Footer.tsx`.
- **Contact form** — currently a frontend-only demo (no backend wired). Connect it to a form service (e.g. Formspree) or a Next.js API route in `Contact.tsx`'s `handleSubmit`.
- **Portfolio videos** — thumbnails link nowhere yet; wire the `Play` button in `Portfolio.tsx` to your video modal/player of choice.

## Design tokens

Colors, fonts, shadows, and radii live in `tailwind.config.ts` and `app/globals.css` — update the `lime`, `base`, and `ink` color scales there to adjust the whole palette in one place.

### Fonts — Coolvetica + Manrope

- **Manrope** (body copy + UI) loads automatically via `next/font/google` in `app/layout.tsx` — no setup needed.
- **Coolvetica** (headings + logotype) is **not** on Google Fonts and is free for personal use only — commercial use needs a license from [typodermicfonts.com/coolvetica](https://typodermicfonts.com/coolvetica/). Drop your licensed `.woff2`/`.woff` files into `public/fonts/` (see `public/fonts/README.md` for exact filenames expected by the `@font-face` rule in `app/globals.css`).
- Until those files are added, headings gracefully fall back to Manrope Bold, so the site looks fully designed either way — nothing breaks if you skip this step.

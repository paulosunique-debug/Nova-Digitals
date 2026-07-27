"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_PAGE_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-700/60 bg-base-950/80 backdrop-blur-md">
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your official Nova Digitals logo */}
          <Image
            src="/logo/logo-placeholder.svg"
            alt="Nova Digitals logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-display tracking-tight text-lg font-semibold text-ink-100">
            Nova Digitals
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-ink-300 transition-colors hover:text-lime-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={BOOKING_PAGE_URL}
          className="btn-primary hidden md:inline-flex"
        >
          Book a Call
        </Link>

        <button
          className="md:hidden text-ink-100"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-base-700/60 bg-base-950 md:hidden">
          <ul className="container-px mx-auto flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-300 hover:text-lime-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={BOOKING_PAGE_URL}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

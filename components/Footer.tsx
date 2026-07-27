import Image from "next/image";
import Link from "next/link";
import { Instagram, Music2, Youtube, Linkedin } from "lucide-react";

const NAVIGATION = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

const SERVICES = [
  { label: "Ad Editing", href: "/#services" },
  { label: "VSL & UGC Content", href: "/#services" },
  { label: "AI Video Creation", href: "/#services" },
  { label: "Creative Strategy", href: "/#services" },
];

const RESOURCES = [
  { label: "Case Studies", href: "/#portfolio" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "/#contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

// Replace with your social media links
const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Music2, href: "https://tiktok.com/", label: "TikTok" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-700/40 bg-base-950 py-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            {/* Replace with your official Nova Digitals logo */}
            <Image
              src="/logo/logo-placeholder.svg"
              alt="Nova Digitals logo"
              width={36}
              height={36}
            />
            <p className="mt-4 max-w-xs text-sm text-ink-500">
              We help e-commerce brands and businesses grow through
              high-converting ad videos, UGC content, and AI-powered
              creations.
            </p>
          </div>

          <FooterColumn title="Navigation" links={NAVIGATION} />
          <FooterColumn title="Services" links={SERVICES} />
          <FooterColumn title="Resources" links={RESOURCES} />
          <FooterColumn title="Legal" links={LEGAL} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-base-700/60 pt-8 sm:flex-row">
          <p className="text-xs text-ink-700">
            © {new Date().getFullYear()} Nova Digitals. All rights reserved.
          </p>
          <p className="text-xs text-ink-700">Built with passion.</p>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-ink-500 transition-colors hover:text-lime-400"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-ink-100">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink-500 transition-colors hover:text-lime-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

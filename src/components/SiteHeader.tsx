"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#process", label: "Consultation Process" },
  { href: "#contact", label: "Book a Visit" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-line/70 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-[1.05rem] leading-tight text-charcoal">
            Dr. Priya Agarwal
            <span className="block text-[0.6rem] font-sans font-medium tracking-[0.18em] text-sage-deep uppercase">
              Ayurveda · BAMS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.9rem] font-medium text-charcoal-soft transition hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-sage px-5 py-2.5 text-[0.85rem] font-medium tracking-wide text-ivory transition hover:bg-sage-deep"
          >
            Book a Visit
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-line text-charcoal md:hidden"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
              <path d="M0 1H18M0 6.5H18M0 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand-line/70 bg-ivory px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-charcoal-soft transition hover:bg-sand/60 hover:text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="16" stroke="var(--sage)" strokeWidth="1.2" />
      <path
        d="M9 18c2-7 6-10 8-10s6 3 8 10c-2 5-5 7-8 7s-6-2-8-7Z"
        stroke="var(--gold-deep)"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="17" cy="17" r="2.1" fill="var(--sage-deep)" />
    </svg>
  );
}

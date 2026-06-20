# Dr. Priya Agarwal — Ayurveda Practice Website

A personal consultation/booking site for Dr. Priya Agarwal, BAMS — built with
Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Design

- **Palette**: sage green + ivory, with a warm gold accent — calm and
  clinical, distinct from the cluttered template look of typical Ayurveda
  clinic sites.
- **Type**: Fraunces (display serif, self-hosted) + Inter (body, self-hosted).
  Both are open-source (SIL OFL) and bundled locally in `src/app/fonts/` —
  no external font requests, so the site loads fast and works even on
  restricted networks.
- **Signature motif**: a thin "pulse line" SVG divider (`PulseLine.tsx`)
  referencing Nadi Pariksha (pulse diagnosis), used between sections instead
  of generic decorative waves. It draws itself on scroll, then a single soft
  point travels the path once — like one heartbeat passing through.
- **Motion**: sections fade/rise into view on scroll (`Reveal.tsx`), practice
  cards lift gently on hover, and the "Nadi Pariksha" step in the consultation
  process has a slow breathing-dot animation. All motion respects
  `prefers-reduced-motion`.
- **Botanical graphics**: a hand-built leaf-sprig watermark (`LeafSprig.tsx`,
  loosely referencing tulsi/neem) sits at very low opacity in section
  backgrounds, and a slow-rotating mandala-ring motif (`MandalaRing.tsx`)
  sits behind the hero portrait — both pure line-art SVG, no external
  image assets.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Building for production

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — it deploys to **Vercel** or **Netlify**
with zero extra configuration:

- **Vercel**: push this folder to a GitHub repo, then "Import Project" on
  vercel.com. It auto-detects Next.js.
- **Netlify**: same — connect the repo, Netlify's Next.js runtime handles
  the rest.

## Before going live — replace these placeholders

1. **Photo** — `src/app/page.tsx`, hero section. Replace the "Portrait
   placeholder" block with an actual `<Image>` of Dr. Priya.
2. **Clinic address & phone** — in `SiteFooter.tsx` and the contact section
   of `page.tsx`. Currently placeholder text.
3. **Email** — `hello@priyaagarwal.example` in `SiteFooter.tsx`.
4. **Contact form submission** — `ConsultationForm.tsx` currently *simulates*
   a submission (no email is actually sent). Wire it up to a real backend —
   easiest options:
   - A serverless function using [Resend](https://resend.com) or similar to
     email the form contents to the clinic.
   - A form service like Formspree (paste their endpoint in, minimal code
     change).
5. **Credentials section** — verify the exact wording of degrees, college
   name, and prior clinical experience with Dr. Priya before publishing.
6. **Favicon** — `src/app/icon.svg` is a simple placeholder logo mark (sage
   circle + leaf). Swap for a real logo if she has one.

## Project structure

```
src/
  app/
    layout.tsx          — fonts, metadata
    page.tsx            — all page sections (hero, about, practice, process, contact)
    globals.css         — color tokens, typography utilities
    fonts/               — self-hosted Fraunces + Inter (OFL licensed)
  components/
    SiteHeader.tsx       — sticky nav with mobile menu
    SiteFooter.tsx
    PulseLine.tsx        — signature SVG divider motif (draws on scroll)
    LeafSprig.tsx        — botanical watermark graphic
    MandalaRing.tsx      — slow-rotating ring motif (hero background)
    Reveal.tsx           — scroll-triggered fade/rise wrapper
    ConsultationForm.tsx — booking form with validation
```

## Accessibility

All text/background color pairs in the design meet WCAG AA contrast
(verified ≥4.5:1). Focus states are visible on all interactive elements, and
animations respect `prefers-reduced-motion`.

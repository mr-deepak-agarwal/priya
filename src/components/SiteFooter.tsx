export default function SiteFooter() {
  return (
    <footer className="border-t border-sand-line bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg text-charcoal">
              Dr. Priya Agarwal
            </p>
            <p className="mt-1 text-sm text-charcoal-soft">
              Ayurveda Physician, BAMS
              <br />
              GAMRC, Jaipur (Alumna)
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Consult</p>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              Video — anywhere, any timezone
              <br />
              In-person — Jaipur, Rajasthan
              <br />
              Mon–Sat · 10:00am – 6:00pm IST
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Reach Out</p>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              +91 00000 00000
              <br />
              hello@priyaagarwal.example
            </p>
            <a
              href="#contact"
              className="mt-3 inline-block text-sm font-medium text-sage-deep underline decoration-sand-line decoration-2 underline-offset-4 transition hover:text-charcoal"
            >
              Book a video consultation →
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-sand-line pt-6 text-xs text-charcoal-soft/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Priya Agarwal. All rights
            reserved.
          </p>
          <p>Placeholder contact details — update before launch.</p>
        </div>
      </div>
    </footer>
  );
}

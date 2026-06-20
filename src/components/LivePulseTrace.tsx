"use client";

/**
 * A continuously running EKG-style pulse trace — unlike PulseLine (which
 * draws once on scroll, used as a section divider), this one runs forever
 * like an actual heart monitor: a glowing point sweeps left-to-right,
 * tracing the same waveform on a loop. Used once, in the hero, as the
 * "this page is alive" signal a visitor sees in the first second.
 */
export default function LivePulseTrace({ className = "" }: { className?: string }) {
  const pathD =
    "M0,60 L60,60 L80,60 C90,60 95,20 102,20 C109,20 113,98 122,98 C129,98 134,60 146,60 L260,60 L280,60 C290,60 295,20 302,20 C309,20 313,98 322,98 C329,98 334,60 346,60 L460,60";

  return (
    <svg
      viewBox="0 0 460 120"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pulseFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--sage)" stopOpacity="0" />
          <stop offset="15%" stopColor="var(--sage)" stopOpacity="0.9" />
          <stop offset="85%" stopColor="var(--sage)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--sage)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint static baseline so the trace always has something to sit on */}
      <path
        d={pathD}
        fill="none"
        stroke="var(--sand-line)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* the moving glow trace — looped via repeated dasharray offset */}
      <path
        d={pathD}
        fill="none"
        stroke="url(#pulseFade)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="90 370"
        className="pulse-trace-sweep"
      />

      {/* a soft leading dot riding just ahead of the trace */}
      <circle r="4.5" fill="var(--gold-deep)" className="pulse-trace-dot">
        <animateMotion dur="3.2s" repeatCount="indefinite" path={pathD} rotate="auto" />
      </circle>
    </svg>
  );
}

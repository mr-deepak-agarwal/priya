type PulseLineProps = {
  className?: string;
  color?: string;
  flip?: boolean;
};

/**
 * Signature motif: a single continuous line that behaves like a pulse trace —
 * mostly a calm, slow wave, rising into one or two deliberate peaks (referencing
 * Nadi Pariksha / pulse diagnosis, central to Dr. Priya's clinical practice).
 * Used sparingly as a structural divider between sections, never as decoration.
 */
export default function PulseLine({
  className = "",
  color = "var(--sage)",
  flip = false,
}: PulseLineProps) {
  return (
    <svg
      viewBox="0 0 1200 80"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0,40
           C60,40 90,40 120,40
           C150,40 160,40 175,40
           C190,40 195,10 205,10
           C215,10 220,68 232,68
           C242,68 248,40 262,40
           C320,40 380,40 440,40
           C470,40 480,40 495,40
           C510,40 515,15 525,15
           C535,15 540,62 552,62
           C562,62 568,40 582,40
           C660,40 740,40 820,40
           C850,40 860,40 875,40
           C890,40 895,8 906,8
           C917,8 923,70 935,70
           C945,70 951,40 965,40
           C1030,40 1090,40 1150,40
           C1170,40 1185,40 1200,40"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

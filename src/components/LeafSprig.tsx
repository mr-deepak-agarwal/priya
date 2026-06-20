type LeafSprigProps = {
  className?: string;
};

const LEAVES = [
  { y: 300, size: 1.0 },
  { y: 250, size: 0.95 },
  { y: 200, size: 0.85 },
  { y: 155, size: 0.7 },
  { y: 115, size: 0.55 },
  { y: 80, size: 0.4 },
];

/**
 * A subtle botanical sprig — loosely referencing tulsi/neem, herbs central
 * to Ayurvedic practice. Meant to sit as a low-opacity watermark in section
 * backgrounds, never as a loud foreground graphic. Pure line art, single
 * stroke color, so it always recolors cleanly via currentColor/CSS vars.
 */
export default function LeafSprig({ className = "" }: LeafSprigProps) {
  return (
    <svg
      viewBox="0 0 240 360"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* central stem */}
      <path
        d="M120 350 C118 280 122 200 120 130 C119 90 121 50 124 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* leaf pairs, alternating sides, sized smaller toward the tip */}
      {LEAVES.map((leaf, i) => (
        <g key={i}>
          <LeafShape cx={121} cy={leaf.y} size={leaf.size} dir={-1} />
          <LeafShape cx={121} cy={leaf.y} size={leaf.size} dir={1} />
        </g>
      ))}
      {/* small bud at tip */}
      <circle cx="124" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function LeafShape({
  cx,
  cy,
  size,
  dir,
}: {
  cx: number;
  cy: number;
  size: number;
  dir: 1 | -1;
}) {
  const length = 42 * size * dir;
  const width = 13 * size;
  const rise = -8 * size;
  const tipX = cx + length;
  const tipY = cy + rise;

  return (
    <>
      <path
        d={`M${cx} ${cy} Q${cx + length * 0.35} ${cy - width}, ${tipX} ${tipY} Q${cx + length * 0.35} ${cy + width}, ${cx} ${cy} Z`}
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d={`M${cx} ${cy} Q${cx + length * 0.4} ${cy + rise * 0.3}, ${tipX} ${tipY}`}
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
      />
    </>
  );
}


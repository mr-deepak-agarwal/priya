type MandalaRingProps = {
  className?: string;
};

/**
 * A minimal concentric-ring motif with small petal ticks — a restrained
 * nod to mandala/dosha-balance symbolism, not a literal ornate mandala.
 * Pure line art, single stroke color via currentColor. Intended to sit at
 * low opacity behind the hero portrait, never as a loud focal graphic.
 */
export default function MandalaRing({ className = "" }: MandalaRingProps) {
  const ticks = Array.from({ length: 24 }, (_, i) => i * (360 / 24));

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
      {ticks.map((deg, i) => (
        <line
          key={i}
          x1="200"
          y1="30"
          x2="200"
          y2="48"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          transform={`rotate(${deg} 200 200)`}
        />
      ))}
    </svg>
  );
}

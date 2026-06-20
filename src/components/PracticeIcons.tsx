"use client";

type IconProps = {
  active: boolean;
  className?: string;
};

const drawStyle = (active: boolean, length: number, delay = 0) => ({
  strokeDasharray: length,
  strokeDashoffset: active ? 0 : length,
  transition: `stroke-dashoffset 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
});

/** General consultation — a single balanced leaf, referencing prakriti/whole-person assessment. */
export function LeafIcon({ active, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 42 C24 30 24 18 24 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={drawStyle(active, 36)}
      />
      <path
        d="M24 26 C16 24 10 16 10 8 C20 8 26 16 26 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={drawStyle(active, 56, 0.08)}
      />
      <path
        d="M24 18 C32 16 38 10 38 4 C28 4 22 10 22 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={drawStyle(active, 50, 0.16)}
      />
    </svg>
  );
}

/** Panchakarma & detox — a drop with a spiral core, referencing cleansing. */
export function DropIcon({ active, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 6 C30 18 36 24 36 31 C36 39.4 30.6 44 24 44 C17.4 44 12 39.4 12 31 C12 24 18 18 24 6 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={drawStyle(active, 92)}
      />
      <path
        d="M24 36 C19 36 19 30 24 30 C28 30 28 25 24 25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        style={drawStyle(active, 34, 0.18)}
      />
    </svg>
  );
}

/** Women's health & fertility — a lotus bloom, classical symbol of fertility/renewal. */
export function LotusIcon({ active, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 40 C24 40 10 34 10 22 C16 22 21 27 24 33 C27 27 32 22 38 22 C38 34 24 40 24 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        style={drawStyle(active, 78)}
      />
      <path
        d="M24 33 C24 33 16 26 16 14 C22 16 24 22 24 27 C24 22 26 16 32 14 C32 26 24 33 24 33 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        style={drawStyle(active, 62, 0.12)}
      />
    </svg>
  );
}

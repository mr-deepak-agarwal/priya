type SectionDividerProps = {
  className?: string;
};

/**
 * A quiet, confident section break: two hairlines tapering toward a small
 * botanical mark at the centre (echoing the leaf motif used elsewhere on
 * the page). Replaces the earlier EKG-style "pulse" divider, which read as
 * busy and clinical rather than calm and considered.
 */
export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-full max-w-[8rem] bg-gradient-to-r from-transparent to-sand-line sm:max-w-[14rem]" />
      <svg viewBox="0 0 32 32" className="h-4 w-4 shrink-0 text-sage-deep">
        <path
          d="M16 27c0-7 -1.5-12 0-22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M16 14c2.5-1.5 5-1.5 7 0.5-2 2-4.5 2.3-7-0.5Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M16 19c-2.5-1.5-5-1.5-7 0.5 2 2 4.5 2.3 7-0.5Z"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
      <span className="h-px w-full max-w-[8rem] bg-gradient-to-l from-transparent to-sand-line sm:max-w-[14rem]" />
    </div>
  );
}

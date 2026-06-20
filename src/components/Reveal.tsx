"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal animation starts, once visible. */
  delay?: number;
  /** Animation style. "rise" fades up, "in" is a plain fade. */
  variant?: "rise" | "in";
};

/**
 * Reveals children with a calm fade (+ slight rise) the first time they
 * scroll into view. Uses IntersectionObserver directly rather than a
 * library — this is the only motion primitive the site needs.
 * Respects prefers-reduced-motion via the CSS in globals.css, which forces
 * all transition/animation durations to ~0.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = variant === "rise" ? "translateY(22px)" : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : hiddenTransform,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

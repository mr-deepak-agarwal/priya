"use client";

import { useEffect, useRef, useState } from "react";

type PulseLineProps = {
  className?: string;
  color?: string;
  flip?: boolean;
};

const PATH_D =
  "M0,40 C60,40 90,40 120,40 C150,40 160,40 175,40 C190,40 195,10 205,10 C215,10 220,68 232,68 C242,68 248,40 262,40 C320,40 380,40 440,40 C470,40 480,40 495,40 C510,40 515,15 525,15 C535,15 540,62 552,62 C562,62 568,40 582,40 C660,40 740,40 820,40 C850,40 860,40 875,40 C890,40 895,8 906,8 C917,8 923,70 935,70 C945,70 951,40 965,40 C1030,40 1090,40 1150,40 C1170,40 1185,40 1200,40";

/**
 * Signature motif: a single continuous line that behaves like a pulse trace —
 * mostly a calm, slow wave, rising into one or two deliberate peaks (referencing
 * Nadi Pariksha / pulse diagnosis, central to Dr. Priya's clinical practice).
 *
 * On first scroll into view, the line draws itself left-to-right. Once drawn,
 * a soft glowing point travels the path once, like a single heartbeat passing
 * through — then settles. Used sparingly as a structural divider, never as
 * background decoration.
 */
export default function PulseLine({
  className = "",
  color = "var(--sage)",
  flip = false,
}: PulseLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drawn) return;
    // Let the draw-on animation finish (~1.4s), then run the travelling
    // pulse point once.
    const t = setTimeout(() => setPulsed(true), 1300);
    return () => clearTimeout(t);
  }, [drawn]);

  return (
    <div ref={wrapRef} className={className}>
      <svg
        viewBox="0 0 1200 80"
        className="block h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1000}
          strokeDasharray={1000}
          strokeDashoffset={drawn ? 0 : 1000}
          style={{
            transition: "stroke-dashoffset 1.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        {pulsed && (
          <circle r="4" fill="var(--gold-deep)" opacity={0.9}>
            <animateMotion
              dur="2.6s"
              path={PATH_D}
              fill="freeze"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;0.9;0.9;0"
              keyTimes="0;0.08;0.85;1"
              dur="2.6s"
              fill="freeze"
            />
          </circle>
        )}
      </svg>
    </div>
  );
}

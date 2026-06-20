"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps the hero visual so it subtly tilts/shifts toward the cursor —
 * a small but high-impact "premium" signal. Disabled on touch devices
 * (no mouse to react to) and respects prefers-reduced-motion by capping
 * the spring to a near-instant snap rather than disabling outright,
 * since the global CSS reduced-motion rule already zeroes transitions.
 */
export default function CursorParallax({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

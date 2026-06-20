"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Animates the hero headline in on load: each line/word rises and
 * sharpens into focus with a stagger, rather than the page simply
 * appearing. This is the first thing a visitor sees, so it carries
 * the "this feels considered" first impression.
 */
export default function AnimatedHeadline() {
  const lines: { text: string; italic?: boolean }[][] = [
    [{ text: "Healing" }, { text: "that" }, { text: "begins" }],
    [{ text: "with" }, { text: "listening", italic: true }, { text: "—" }],
    [{ text: "not" }, { text: "prescribing." }],
  ];

  return (
    <motion.h1
      initial="hidden"
      animate="show"
      variants={container}
      className="font-display text-[2.6rem] leading-[1.08] text-charcoal sm:text-[3.4rem]"
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((w, wi) => (
            <motion.span
              key={wi}
              variants={word}
              className={`inline-block ${w.italic ? "italic text-clay-deep" : ""}`}
              style={{ marginRight: "0.28em" }}
            >
              {w.text}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

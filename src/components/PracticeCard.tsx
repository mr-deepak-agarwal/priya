"use client";

import { useState } from "react";
import { LeafIcon, DropIcon, LotusIcon } from "./PracticeIcons";

const ICONS = { leaf: LeafIcon, drop: DropIcon, lotus: LotusIcon } as const;

export default function PracticeCard({
  icon,
  title,
  description,
  points,
}: {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
  points: string[];
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[icon];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="lift-card flex h-full flex-col rounded-2xl border border-sand-line bg-ivory p-7"
    >
      <Icon active={hovered} className="h-10 w-10 text-sage-deep" />
      <h3 className="font-display mt-4 text-xl text-moss">{title}</h3>
      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-moss-soft">
        {description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-sand-line pt-5">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[0.85rem] text-moss-soft"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

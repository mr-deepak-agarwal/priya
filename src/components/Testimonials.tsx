const TESTIMONIALS = [
  {
    quote:
      "I consulted from Bangalore over video for chronic acidity. Dr. Priya asked more questions in 20 minutes than any doctor had in two years — the diet plan actually worked within weeks.",
    name: "Ananya R.",
    detail: "Online consultation · Acidity & digestion",
  },
  {
    quote:
      "Booked a video call from Dubai on a whim. The pulse-reading questions over call felt thorough, not rushed, and the follow-up message with my plan arrived the same evening.",
    name: "Rohit S.",
    detail: "Online consultation · General wellness",
  },
  {
    quote:
      "Three months of Panchakarma guidance, mostly over video with two in-clinic visits. My sleep and energy changed more than they had in years of trying things on my own.",
    name: "Meera K.",
    detail: "Hybrid care · Panchakarma & detox",
  },
];

export default function Testimonials() {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <figure
          key={t.name}
          className="lift-card flex h-full flex-col rounded-2xl border border-sand-line bg-white p-7 shadow-[0_2px_10px_-4px_rgba(42,33,23,0.08)]"
        >
          <span className="font-display text-3xl leading-none text-sage/40">
            &ldquo;
          </span>
          <blockquote className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-charcoal-soft">
            {t.quote}
          </blockquote>
          <figcaption className="mt-5 border-t border-sand-line pt-4">
            <p className="text-sm font-medium text-charcoal">{t.name}</p>
            <p className="mt-0.5 text-xs text-charcoal-soft/80">{t.detail}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

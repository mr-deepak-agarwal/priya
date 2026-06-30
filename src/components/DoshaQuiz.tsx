"use client";

import { useState } from "react";

type Dosha = "vata" | "pitta" | "kapha";

type Question = {
  prompt: string;
  options: { label: string; dosha: Dosha }[];
};

const QUESTIONS: Question[] = [
  {
    prompt: "How would you describe your build, most of the time?",
    options: [
      { label: "Slim, light, I gain weight slowly", dosha: "vata" },
      { label: "Medium, athletic, fairly proportionate", dosha: "pitta" },
      { label: "Solid, larger frame, I gain weight easily", dosha: "kapha" },
    ],
  },
  {
    prompt: "When you're under stress, what's your first reaction?",
    options: [
      { label: "Anxious, restless, my mind races", dosha: "vata" },
      { label: "Irritable, impatient, I want to fix it now", dosha: "pitta" },
      { label: "Withdrawn, sluggish, I want to be left alone", dosha: "kapha" },
    ],
  },
  {
    prompt: "How is your digestion, generally?",
    options: [
      { label: "Irregular — bloating, gas, variable appetite", dosha: "vata" },
      { label: "Strong — sharp appetite, occasional acidity", dosha: "pitta" },
      { label: "Slow — heaviness after meals, low appetite", dosha: "kapha" },
    ],
  },
  {
    prompt: "And your sleep?",
    options: [
      { label: "Light, easily disturbed, mind active at night", dosha: "vata" },
      { label: "Moderate, but I wake up if too warm", dosha: "pitta" },
      { label: "Deep and long — I could sleep more if allowed", dosha: "kapha" },
    ],
  },
  {
    prompt: "Which describes your energy through the day?",
    options: [
      { label: "Comes in bursts, then I crash", dosha: "vata" },
      { label: "Steady and intense, driven by goals", dosha: "pitta" },
      { label: "Slow to start, but I have stamina once going", dosha: "kapha" },
    ],
  },
];

const RESULTS: Record<
  Dosha,
  { name: string; tagline: string; description: string; focus: string[] }
> = {
  vata: {
    name: "Vata",
    tagline: "Air & Space — movement, change, creativity",
    description:
      "Your answers lean Vata-dominant — quick-thinking and adaptable, but prone to anxiety, irregular digestion, and a nervous system that tires faster than it admits to. Vata imbalance tends to show up as restlessness, dryness, and disrupted sleep before anything else.",
    focus: [
      "Grounding daily routine (dinacharya)",
      "Warm, moist, well-spiced food",
      "Nervous-system support & sleep repair",
    ],
  },
  pitta: {
    name: "Pitta",
    tagline: "Fire & Water — intensity, focus, transformation",
    description:
      "Your answers lean Pitta-dominant — sharp, driven, and decisive, with a digestive fire that runs hot. Left unchecked, Pitta imbalance often shows up as acidity, inflammation, irritability, or burnout from running at full intensity for too long.",
    focus: [
      "Cooling, moderated diet & routine",
      "Acidity & inflammation management",
      "Pacing intensity before burnout hits",
    ],
  },
  kapha: {
    name: "Kapha",
    tagline: "Earth & Water — stability, strength, steadiness",
    description:
      "Your answers lean Kapha-dominant — steady, resilient, and calm under pressure, with a slower metabolism and digestion. Kapha imbalance tends to build quietly as heaviness, sluggish digestion, congestion, or low motivation rather than sudden symptoms.",
    focus: [
      "Stimulating digestion & metabolism",
      "Active daily movement",
      "Light, warm, spiced food choices",
    ],
  },
};

export default function DoshaQuiz() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<Dosha, number>>({
    vata: 0,
    pitta: 0,
    kapha: 0,
  });

  const isResult = step >= QUESTIONS.length;
  const progress = Math.min(step, QUESTIONS.length) / QUESTIONS.length;

  function choose(dosha: Dosha) {
    setTally((t) => ({ ...t, [dosha]: t[dosha] + 1 }));
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setTally({ vata: 0, pitta: 0, kapha: 0 });
  }

  const dominant = (Object.entries(tally) as [Dosha, number][]).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] as Dosha | undefined;

  return (
    <div className="overflow-hidden rounded-3xl border border-sand-line bg-white shadow-[0_30px_60px_-30px_rgba(34,29,20,0.25)]">
      {/* Progress rail */}
      <div className="h-1 w-full bg-ivory-deep">
        <div
          className="h-full bg-sage transition-[width] duration-500 ease-out"
          style={{ width: `${(isResult ? 1 : progress) * 100}%` }}
        />
      </div>

      <div className="p-7 sm:p-10">
        {!isResult ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="eyebrow">Free Dosha Assessment</p>
              <p className="text-xs font-medium text-charcoal-soft">
                Question {step + 1} of {QUESTIONS.length}
              </p>
            </div>

            <h3 className="font-display text-xl leading-snug text-charcoal sm:text-2xl">
              {QUESTIONS[step].prompt}
            </h3>

            <div className="mt-7 space-y-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => choose(opt.dosha)}
                  className="lift-card group flex w-full items-center justify-between gap-4 rounded-2xl border border-sand-line bg-ivory/60 px-5 py-4 text-left text-[0.95rem] text-charcoal-soft transition hover:bg-sage/10 hover:text-charcoal"
                >
                  {opt.label}
                  <span className="shrink-0 text-sage-deep opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="mt-6 text-xs font-medium text-charcoal-soft underline decoration-sand-line underline-offset-4 transition hover:text-charcoal"
              >
                ← Back
              </button>
            )}
          </>
        ) : dominant ? (
          <div>
            <p className="eyebrow mb-3">Your Result</p>
            <h3 className="font-display text-2xl text-charcoal sm:text-3xl">
              You lean{" "}
              <span className="italic text-clay-deep">
                {RESULTS[dominant].name}
              </span>
            </h3>
            <p className="mt-1 text-sm font-medium text-sage-deep">
              {RESULTS[dominant].tagline}
            </p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-charcoal-soft">
              {RESULTS[dominant].description}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
              {RESULTS[dominant].focus.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border border-sand-line bg-ivory/70 px-4 py-3 text-[0.82rem] leading-snug text-charcoal-soft"
                >
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl text-[0.85rem] leading-relaxed text-charcoal-soft/80">
              This quick self-check points to a tendency, not a diagnosis.
              Dr. Priya confirms your true constitution (Prakriti) and
              current imbalance (Vikriti) through Nadi Pariksha (pulse
              diagnosis) during your consultation.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-sage px-7 py-3.5 text-sm font-medium tracking-wide text-ivory shadow-[0_10px_24px_-10px_rgba(28,74,45,0.5)] transition hover:scale-[1.03] hover:bg-sage-deep"
              >
                Book a video consultation
              </a>
              <button
                type="button"
                onClick={reset}
                className="text-sm font-medium text-sage-deep underline decoration-sand-line decoration-2 underline-offset-4 transition hover:text-charcoal"
              >
                Retake the quiz
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

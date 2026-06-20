import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PulseLine from "@/components/PulseLine";
import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/Reveal";
import LeafSprig from "@/components/LeafSprig";
import MandalaRing from "@/components/MandalaRing";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import CursorParallax from "@/components/CursorParallax";
import LivePulseTrace from "@/components/LivePulseTrace";
import PracticeCard from "@/components/PracticeCard";
import CountUp from "@/components/CountUp";

const SPECIALTIES = [
  {
    icon: "leaf" as const,
    title: "General Ayurveda Consultation",
    description:
      "Whole-person assessment rooted in classical diagnosis — pulse, prakriti, and lifestyle — to address the root cause, not just the symptom.",
    points: [
      "Prakriti & dosha assessment",
      "Chronic & lifestyle conditions",
      "Personalised diet & dinacharya",
    ],
  },
  {
    icon: "drop" as const,
    title: "Panchakarma & Detoxification",
    description:
      "Structured cleansing protocols to clear accumulated toxins and reset digestion, immunity, and energy — guided and monitored throughout.",
    points: [
      "Customised Panchakarma plans",
      "Seasonal detox programs",
      "Post-treatment diet guidance",
    ],
  },
  {
    icon: "lotus" as const,
    title: "Women's Health & Fertility",
    description:
      "Sensitive, evidence-informed care for menstrual health, hormonal balance, and fertility — combining classical therapies with modern understanding.",
    points: [
      "Hormonal & menstrual health",
      "Pre-conception care",
      "PCOS & fertility support",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Your Concern",
    description:
      "Fill out a short form telling us what brings you in. Dr. Priya's team reviews it before your visit so no time is wasted.",
  },
  {
    step: "02",
    title: "Nadi Pariksha & History",
    description:
      "Your first visit begins with pulse diagnosis and a detailed history — physical, dietary, and emotional — to understand your constitution.",
  },
  {
    step: "03",
    title: "A Personalised Plan",
    description:
      "You leave with a clear plan: herbs, diet, daily routine, and — where needed — a Panchakarma protocol, explained in plain language.",
  },
  {
    step: "04",
    title: "Ongoing Care",
    description:
      "Follow-up consultations track your progress and adjust the plan as your body responds. Healing is a process, not a single visit.",
  },
];

const CREDENTIALS = [
  "BAMS — Bachelor of Ayurvedic Medicine & Surgery",
  "Alumna, GAMRC, Jaipur",
  "Clinical experience — Chakrapani Ayurveda",
  "Clinical experience — Oorja Wellness",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden px-6 pt-16 pb-10 sm:px-8 sm:pt-24 sm:pb-14">
          {/* Botanical watermark, top-right corner — very low opacity */}
          <LeafSprig className="pointer-events-none absolute -top-8 right-0 h-[26rem] w-auto text-sage opacity-[0.07] sm:-top-12 sm:h-[32rem]" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="eyebrow mb-5">Ayurveda · Jaipur</p>
              </Reveal>

              <AnimatedHeadline />

              <Reveal delay={500}>
                <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-moss-soft">
                  Dr. Priya Agarwal offers personal Ayurveda consultations
                  grounded in classical diagnosis — for everyday wellness,
                  Panchakarma detox, and women&apos;s health — right here in
                  Jaipur.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-moss px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition hover:scale-[1.03] hover:bg-sage-deep"
                  >
                    Book a Consultation
                  </a>
                  <a
                    href="#process"
                    className="text-sm font-medium text-sage-deep underline decoration-sand-line decoration-2 underline-offset-4 transition hover:text-moss"
                  >
                    How it works
                  </a>
                </div>

                {/* Live pulse trace — runs continuously, the "this page is alive" signal */}
                <LivePulseTrace className="mt-10 h-12 w-full max-w-sm text-sage" />
              </Reveal>
            </div>

            <Reveal delay={150}>
              <CursorParallax className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                {/* Slow-rotating mandala ring, sitting behind the portrait card */}
                <MandalaRing className="absolute inset-[-12%] h-[124%] w-[124%] text-sage opacity-[0.16] animate-slow-spin" />
                <div className="absolute inset-0 rounded-[2.5rem] bg-sand" />
                <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-sand-line bg-ivory-deep text-center">
                  <span className="font-display text-sm tracking-wide text-sage-deep">
                    Portrait placeholder
                  </span>
                  <span className="max-w-[12rem] text-xs leading-relaxed text-moss-soft/70">
                    Swap this block for Dr. Priya&apos;s photograph
                  </span>
                </div>
              </CursorParallax>
            </Reveal>
          </div>
        </section>

        <PulseLine className="mx-auto block h-10 w-full max-w-6xl px-6" />

        {/* ============ ABOUT ============ */}
        <section id="about" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">About Dr. Priya</p>
              <h2 className="font-display text-3xl leading-tight text-moss sm:text-4xl">
                Trained in the classics.
                <br />
                Practiced in the real world.
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-[1.02rem] leading-relaxed text-moss-soft">
              <p>
                Dr. Priya Agarwal is a BAMS-qualified Ayurveda physician, an
                alumna of the Government Ayurved Medical &amp; Research
                College (GAMRC), Jaipur. Her training combined classical
                Ayurvedic texts with hands-on clinical practice across general
                medicine, Panchakarma, and women&apos;s health.
              </p>
              <p>
                She went on to build her clinical experience at two of the
                region&apos;s established wellness centres — Chakrapani
                Ayurveda and Oorja Wellness — where she worked closely with
                patients on chronic conditions, detoxification protocols, and
                fertility-related care.
              </p>
              <p>
                Today, Dr. Priya sees patients personally in Jaipur, with a
                practice built on one principle: every treatment plan should
                be as individual as the person receiving it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ PRACTICE / SPECIALTIES ============ */}
        <section
          id="practice"
          className="relative overflow-hidden bg-ivory-deep px-6 py-20 sm:px-8 sm:py-28"
        >
          <LeafSprig className="pointer-events-none absolute -bottom-16 -left-10 h-[24rem] w-auto rotate-[18deg] text-sage opacity-[0.06] sm:h-[30rem]" />

          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">Areas of Practice</p>
              <h2 className="font-display text-3xl leading-tight text-moss sm:text-4xl">
                Care tailored to where you are
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SPECIALTIES.map((item, i) => (
                <Reveal key={item.title} delay={i * 110}>
                  <PracticeCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    points={item.points}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <PulseLine
          className="mx-auto block h-10 w-full max-w-6xl px-6"
          flip
        />

        {/* ============ PROCESS ============ */}
        <section id="process" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">What to Expect</p>
              <h2 className="font-display text-3xl leading-tight text-moss sm:text-4xl">
                Your consultation, step by step
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {PROCESS.map((item, i) => (
                <Reveal key={item.step} delay={i * 90}>
                  <div className="flex gap-5">
                    <span className="relative font-display text-3xl text-sage shrink-0">
                      {item.step}
                      {item.step === "02" && (
                        <span className="absolute -right-3 top-1.5 inline-flex h-3.5 w-3.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-gold-deep animate-ripple" />
                          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gold-deep animate-breathe" />
                        </span>
                      )}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-moss">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-moss-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CREDENTIALS ============ */}
        <section className="bg-ivory-deep px-6 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <div className="mb-10 grid grid-cols-3 gap-6 border-b border-sand-line pb-10 sm:max-w-xl sm:mx-auto">
              <div className="text-center">
                <p className="font-display text-3xl text-sage-deep sm:text-4xl">
                  <CountUp to={3} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-moss-soft">Areas of Care</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-sage-deep sm:text-4xl">
                  <CountUp to={2} />
                </p>
                <p className="mt-1 text-xs text-moss-soft">Clinics Trained At</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-sage-deep sm:text-4xl">
                  <CountUp to={1} />
                </p>
                <p className="mt-1 text-xs text-moss-soft">BAMS Degree</p>
              </div>
            </div>

            <p className="eyebrow mb-6 text-center">
              Education &amp; Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {CREDENTIALS.map((credential) => (
                <span
                  key={credential}
                  className="text-sm font-medium text-moss-soft"
                >
                  {credential}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="relative overflow-hidden px-6 py-20 sm:px-8 sm:py-28">
          <LeafSprig className="pointer-events-none absolute -top-10 right-[-4rem] h-[22rem] w-auto -rotate-12 text-sage opacity-[0.06] sm:h-[28rem]" />

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Book a Visit</p>
              <h2 className="font-display text-3xl leading-tight text-moss sm:text-4xl">
                Start with a conversation.
              </h2>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-moss-soft">
                Tell us a little about what you&apos;re looking for, and Dr.
                Priya&apos;s team will reach out to confirm a time that works
                for you.
              </p>

              <div className="mt-8 space-y-4 text-sm text-moss-soft">
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Jaipur, Rajasthan, India
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Mon–Sat · 10:00am – 6:00pm
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-3xl border border-sand-line bg-ivory-deep p-7 sm:p-10">
                <ConsultationForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

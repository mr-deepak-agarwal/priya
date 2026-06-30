import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionDivider from "@/components/SectionDivider";
import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/Reveal";
import LeafSprig from "@/components/LeafSprig";
import MandalaRing from "@/components/MandalaRing";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import CursorParallax from "@/components/CursorParallax";
import PracticeCard from "@/components/PracticeCard";
import CountUp from "@/components/CountUp";
import DoshaQuiz from "@/components/DoshaQuiz";
import Testimonials from "@/components/Testimonials";

const SPECIALTIES = [
  {
    icon: "leaf" as const,
    title: "General Ayurveda Consultation",
    description:
      "Whole-person assessment rooted in classical diagnosis — pulse, prakriti, and lifestyle — to address the root cause, not just the symptom. Done as easily over video as in person.",
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
      "Structured cleansing protocols to clear accumulated toxins and reset digestion, immunity, and energy — planned over video, with guidance through every stage at home.",
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
      "Sensitive, evidence-informed care for menstrual health, hormonal balance, and fertility — combining classical therapies with modern understanding, from the privacy of home.",
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
    title: "Take the Dosha Quiz",
    description:
      "Two minutes, five questions. Get a first read on your constitution before you even book — it's the fastest way to know what to bring up in your consultation.",
  },
  {
    step: "02",
    title: "Book Your Video Slot",
    description:
      "Pick a time that works for you, anywhere in the world. You'll get a confirmed video link by email and SMS — no app to install, just a click to join.",
  },
  {
    step: "03",
    title: "Nadi Pariksha & History — On Camera",
    description:
      "Your consultation begins with a detailed pulse-informed history — physical, dietary, and emotional — adapted for video so nothing is lost in translation to a screen.",
  },
  {
    step: "04",
    title: "A Plan, Sent to Your Inbox",
    description:
      "You leave the call with a clear written plan: herbs, diet, daily routine, and — where needed — a Panchakarma protocol, explained in plain language and easy to follow at home.",
  },
];

const CREDENTIALS = [
  "BAMS — Bachelor of Ayurvedic Medicine & Surgery",
  "Alumna, GAMRC, Jaipur",
  "Clinical experience — Chakrapani Ayurveda",
  "Clinical experience — Oorja Wellness",
];

const TRUST_POINTS = [
  "Secure video call — Google Meet or Zoom, your choice",
  "Consultations in Hindi & English",
  "Written plan after every visit, not just verbal advice",
  "Follow-ups priced lower than first consultations",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden px-6 pt-16 pb-10 sm:px-8 sm:pt-24 sm:pb-14">
          <LeafSprig className="pointer-events-none absolute -top-8 right-0 h-[26rem] w-auto text-sage opacity-[0.06] sm:-top-12 sm:h-[32rem]" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="eyebrow mb-5">
                  Ayurveda · Online &amp; In-Person · Jaipur
                </p>
              </Reveal>

              <AnimatedHeadline />

              <Reveal delay={500}>
                <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-charcoal-soft">
                  Dr. Priya Agarwal offers personal Ayurveda consultations
                  over secure video — grounded in classical diagnosis, not
                  generic advice — for patients across India and abroad. A
                  Jaipur clinic remains open for those who prefer to visit.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-sage px-7 py-3.5 text-sm font-medium tracking-wide text-ivory shadow-[0_10px_24px_-10px_rgba(28,74,45,0.5)] transition hover:scale-[1.03] hover:bg-sage-deep"
                  >
                    Book a Video Consultation
                  </a>
                  <a
                    href="#quiz"
                    className="text-sm font-medium text-sage-deep underline decoration-sand-line decoration-2 underline-offset-4 transition hover:text-charcoal"
                  >
                    Take the free dosha quiz
                  </a>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  {TRUST_POINTS.slice(0, 2).map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-charcoal-soft"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <CursorParallax className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <MandalaRing className="absolute inset-[-12%] h-[124%] w-[124%] text-sage opacity-[0.15] animate-slow-spin" />
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sand via-sand to-gold/30 shadow-[0_24px_48px_-20px_rgba(42,33,23,0.35)]" />
                <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-sand-line bg-ivory-deep text-center">
                  <span className="font-display text-sm tracking-wide text-clay-deep">
                    Portrait placeholder
                  </span>
                  <span className="max-w-[12rem] text-xs leading-relaxed text-charcoal-soft/70">
                    Swap this block for Dr. Priya&apos;s photograph
                  </span>
                </div>
                <div className="absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-sand-line bg-white px-5 py-3.5 shadow-[0_18px_36px_-16px_rgba(34,29,20,0.3)]">
                  <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-sage animate-ripple" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage animate-breathe" />
                  </span>
                  <p className="text-xs font-medium leading-snug text-charcoal-soft">
                    Video consultations open — across India &amp; abroad
                  </p>
                </div>
              </CursorParallax>
            </Reveal>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <section className="border-y border-sand-line bg-ivory-deep px-6 py-5 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <p
                key={point}
                className="flex items-center gap-2 text-xs font-medium text-charcoal-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                {point}
              </p>
            ))}
          </div>
        </section>

        {/* ============ DOSHA QUIZ ============ */}
        <section id="quiz" className="relative overflow-hidden px-6 py-20 sm:px-8 sm:py-28">
          <LeafSprig className="pointer-events-none absolute -bottom-16 -left-10 h-[24rem] w-auto rotate-[18deg] text-sage opacity-[0.06] sm:h-[30rem]" />

          <div className="mx-auto max-w-3xl">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow mb-4">Start Here — 2 Minutes</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                What&apos;s your dosha?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-charcoal-soft">
                Answer five quick questions about your body, digestion, and
                stress response to get a first read on your Ayurvedic
                constitution — then bring it straight into your consultation.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <DoshaQuiz />
            </Reveal>
          </div>
        </section>

        <SectionDivider className="mx-auto max-w-6xl px-6 py-2" />

        {/* ============ PROCESS ============ */}
        <section id="process" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">How Online Consultation Works</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                Real diagnosis, over video
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal-soft">
                First-time online patients often ask if a video call can
                really replace an in-person visit. Here&apos;s exactly what
                happens.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {PROCESS.map((item, i) => (
                <Reveal key={item.step} delay={i * 90}>
                  <div className="flex gap-5">
                    <span className="relative font-display text-3xl text-sage shrink-0">
                      {item.step}
                      {item.step === "03" && (
                        <span className="absolute -right-3 top-1.5 inline-flex h-3.5 w-3.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-gold-deep animate-ripple" />
                          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gold-deep animate-breathe" />
                        </span>
                      )}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-charcoal-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRACTICE / SPECIALTIES ============ */}
        <section
          id="practice"
          className="relative overflow-hidden bg-ivory-deep px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">Areas of Practice</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
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

        {/* ============ ABOUT ============ */}
        <section id="about" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">About Dr. Priya</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                Trained in the classics.
                <br />
                Practiced in the real world.
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-[1.02rem] leading-relaxed text-charcoal-soft">
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
                Today, Dr. Priya sees patients personally — over video for
                those anywhere in the world, and in person for those in
                Jaipur — with a practice built on one principle: every
                treatment plan should be as individual as the person
                receiving it.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionDivider className="mx-auto max-w-6xl px-6 py-2" />

        {/* ============ REVIEWS ============ */}
        <section id="reviews" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">In Their Words</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                Care that holds up over video
              </h2>
            </Reveal>
            <Testimonials />
            <p className="mx-auto mt-6 max-w-xl text-center text-xs text-charcoal-soft/70">
              Representative patient feedback — replace with verified reviews
              before launch.
            </p>
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
                <p className="mt-1 text-xs text-charcoal-soft">Areas of Care</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-sage-deep sm:text-4xl">
                  <CountUp to={2} />
                </p>
                <p className="mt-1 text-xs text-charcoal-soft">Clinics Trained At</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-sage-deep sm:text-4xl">
                  <CountUp to={1} />
                </p>
                <p className="mt-1 text-xs text-charcoal-soft">BAMS Degree</p>
              </div>
            </div>

            <p className="eyebrow mb-6 text-center">
              Education &amp; Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {CREDENTIALS.map((credential) => (
                <span
                  key={credential}
                  className="text-sm font-medium text-charcoal-soft"
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
              <p className="eyebrow mb-4">Book Online</p>
              <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                Start with a conversation.
              </h2>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-charcoal-soft">
                Tell us a little about what you&apos;re looking for, and Dr.
                Priya&apos;s team will reach out to confirm a video — or
                in-clinic — time that works for you.
              </p>

              <div className="mt-8 space-y-4 text-sm text-charcoal-soft">
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Video consultations — anywhere, any timezone
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  In-person clinic — Jaipur, Rajasthan
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Mon–Sat · 10:00am – 6:00pm IST
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

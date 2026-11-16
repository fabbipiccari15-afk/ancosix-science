import { useEffect, useRef, useState } from "react";
import { GoldOrnament } from "./Ornament";
import { TiltButton } from "./TiltButton";
import { useI18n, t, L } from "./i18n";

function OliveBranch() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="float-slow h-32 w-32 opacity-30 md:h-44 md:w-44"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="oklch(0.6737 0.0562 131.46)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M40 170 C 70 130, 110 90, 170 40" />
        <path d="M70 150 C 80 145, 88 140, 95 132" />
        <path d="M100 120 C 110 115, 118 110, 125 102" />
        <path d="M130 90 C 140 85, 148 80, 155 72" />
      </g>
      {[
        [78, 138, 16],
        [108, 108, 18],
        [138, 78, 16],
        [60, 158, 13],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={r}
          ry={r * 0.42}
          transform={`rotate(-45 ${cx} ${cy})`}
          fill="oklch(0.6737 0.0562 131.46 / 35%)"
          stroke="oklch(0.6737 0.0562 131.46 / 60%)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

const SLIDES_SRC = [
  "https://vibe.filesafe.space/1790897558817574139/assets/16c471fe-1b11-4d6b-929c-17427c65b2be.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/3059d66a-ab61-4795-bdf1-e5b3d1a91e7f.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/cd371762-e1e2-441b-8773-2c7a88f75a29.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/e81a61a0-350f-413d-8124-dfc4399981db.png",
];

function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES_SRC.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {SLIDES_SRC.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={src}
            alt=""
            className={
              i === active ? "kenburns h-full w-full object-cover" : "h-full w-full object-cover"
            }
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Cinematic overlays so text stays legible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.04 0.005 168 / 38%) 0%, oklch(0.04 0.005 168 / 14%) 30%, oklch(0.04 0.005 168 / 22%) 62%, oklch(0.04 0.005 168 / 62%) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, oklch(0.04 0.005 168 / 6%) 0%, oklch(0.04 0.005 168 / 38%) 100%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const captions = t.hero.slides[lang];

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES_SRC.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-24"
      style={{ backgroundColor: "var(--ancosix-dark)" }}
    >
      {/* Full-bleed cinematic slideshow background */}
      <HeroSlideshow />

      {/* Olive branch accent — desktop only, avoids overlapping text on phones */}
      <div className="absolute right-6 top-24 z-10 hidden md:right-16 md:top-20 md:block">
        <OliveBranch />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p className="label-uc mb-5 text-ancosix-olive sm:mb-6">{L(lang, t.hero.label)}</p>
        <GoldOrnament className="mb-6 sm:mb-8" />
        <h1 className="font-display text-[2.1rem] leading-[1.08] text-ancosix-amber drop-shadow-[0_2px_20px_oklch(0.04_0.005_168/0.6)] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {L(lang, t.hero.title)}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base font-medium text-ancosix-olive sm:mt-8 sm:text-lg md:text-xl">
          {L(lang, t.hero.subtitle)}
        </p>
        <div
          className="mx-auto mt-6 h-px w-24 sm:mt-7 sm:w-28"
          style={{
            background: "linear-gradient(90deg, transparent, var(--ancosix-amber), transparent)",
          }}
        />
        <p className="mx-auto mt-6 max-w-2xl text-[0.92rem] leading-relaxed text-ancosix-amber sm:mt-7 sm:text-[0.95rem] text-pretty">
          {L(lang, t.hero.desc)}
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <TiltButton href="#problema" className="px-7 py-3 sm:px-8 sm:py-3.5">
            {L(lang, t.hero.cta1)}
          </TiltButton>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-full border border-ancosix-cream/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-ancosix-cream transition-colors hover:bg-ancosix-cream/10 sm:px-8"
          >
            {L(lang, t.ctaContact)}
          </a>
        </div>
      </div>

      {/* Caption + gold progress indicators pinned to the bottom of the hero */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center gap-2.5 px-5 text-center sm:bottom-7 sm:px-6">
        <p
          key={active}
          className="font-display text-sm font-semibold text-ancosix-amber sm:text-base md:text-lg"
          style={{ animation: "fadeUp 0.8s ease-out" }}
        >
          {captions[active]}
        </p>
        <div className="flex items-center gap-2.5">
          {SLIDES_SRC.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
              style={{
                width: i === active ? 36 : 14,
                background:
                  i === active
                    ? "oklch(0.7518 0.0682 75.49 / 35%)"
                    : "oklch(0.7518 0.0682 75.49 / 22%)",
              }}
            >
              {i === active && (
                <span
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    width: "100%",
                    background: "var(--ancosix-amber)",
                    animation: "heroProgress 5s linear forwards",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-line absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}

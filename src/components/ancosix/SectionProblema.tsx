import { useEffect, useRef, useState } from "react";
import { useCountUp } from "./hooks";
import { VideoSlideshow } from "./VideoSlideshow";
import { GoldOrnament } from "./Ornament";
import { useI18n, t, L } from "./i18n";
import { PROBLEMA_VIDEO_IMAGES, PROBLEMA_VIDEO_CAPTIONS } from "./problema-video";

function StatCard({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix?: string;
  label: string;
  run: boolean;
}) {
  const v = useCountUp(value, run);
  const display = value >= 1 ? Math.round(v).toLocaleString("it-IT") : v.toFixed(0);
  return (
    <div className="glass-dark card-glow rounded-2xl p-6 text-center sm:p-7">
      <div className="font-display text-3xl font-bold text-ancosix-amber sm:text-4xl md:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="mx-auto mt-3 h-px w-8" style={{ background: "var(--ancosix-amber)" }} />
      <p className="mt-3 text-[0.85rem] leading-relaxed text-ancosix-cream/80 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function SectionProblema() {
  const { lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const stats = t.problema.stats[lang];
  const values = [21, 1.2, 0];

  return (
    <section
      id="problema"
      ref={ref}
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{
        backgroundColor: "var(--ancosix-dark)",
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, oklch(0.3745 0.0776 136.09 / 12%) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, oklch(0.7518 0.0682 75.49 / 7%) 0%, transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-8">
          <div
            className="hidden w-px shrink-0 md:block"
            style={{
              background: "linear-gradient(180deg, var(--ancosix-olive), transparent)",
            }}
          />
          <div className="reveal">
            <h2 className="gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-amber sm:text-3xl md:text-5xl text-balance">
              {L(lang, t.problema.title)}
            </h2>
            <GoldOrnament className="mt-6" />
            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-3">
              {stats.map((s, i) => (
                <StatCard key={i} value={values[i]} suffix={s.suffix} run={run} label={s.label} />
              ))}
            </div>
            <p className="drop-cap mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-ancosix-cream/85 sm:mt-10 sm:text-base text-pretty">
              {L(lang, t.problema.body)}
            </p>
            <VideoSlideshow
              images={PROBLEMA_VIDEO_IMAGES}
              captions={PROBLEMA_VIDEO_CAPTIONS[lang]}
              label={L(lang, t.problema.videoLabel)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

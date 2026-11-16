import type { ReactNode } from "react";
import { GoldOrnament } from "./Ornament";
import { useI18n, t, L } from "./i18n";

function WorkPackage({
  tag,
  accent,
  title,
  text,
}: {
  tag: string;
  accent: "deep" | "garnet";
  title: string;
  text: ReactNode;
}) {
  const color = accent === "deep" ? "var(--ancosix-deep)" : "var(--ancosix-garnet)";
  return (
    <div
      className="reveal rounded-2xl border bg-white/70 p-6 backdrop-blur-sm transition-shadow duration-500 hover:shadow-xl sm:p-8"
      style={{ borderColor: `color-mix(in oklab, ${color} 25%, transparent)` }}
    >
      <span
        className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
        style={{ backgroundColor: color }}
      >
        {tag}
      </span>
      <h3 className="mt-5 font-display text-2xl font-bold text-ancosix-ink">{title}</h3>
      <div
        className="mt-3 h-px w-10"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
      <p className="mt-4 text-base leading-relaxed text-ancosix-ink/85 text-pretty">{text}</p>
    </div>
  );
}

export function SectionProgetto() {
  const { lang } = useI18n();
  return (
    <section
      id="progetto"
      className="px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{ backgroundColor: "var(--ancosix-light)" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-ink sm:text-3xl md:text-5xl text-balance">
          {L(lang, t.progetto.title)}
        </h2>
        <GoldOrnament className="reveal mt-6" />
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          <WorkPackage
            tag="WP4"
            accent="deep"
            title={L(lang, t.progetto.wp4Title)}
            text={L(lang, t.progetto.wp4Text)}
          />
          <WorkPackage
            tag="WP5"
            accent="garnet"
            title={L(lang, t.progetto.wp5Title)}
            text={L(lang, t.progetto.wp5Text)}
          />
        </div>
      </div>
    </section>
  );
}

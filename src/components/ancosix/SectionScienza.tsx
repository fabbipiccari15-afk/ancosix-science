import { useState } from "react";
import { GoldOrnament, GoldMark } from "./Ornament";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePointerParallax } from "./hooks";
import { useI18n, t, L } from "./i18n";

type Pub = {
  title: string;
  venue: string;
  intro: string;
  points: string[];
};

function PubCard({
  pub,
  onOpen,
  readLabel,
}: {
  pub: Pub;
  onOpen: (p: Pub) => void;
  readLabel: string;
}) {
  const { ref, pos } = usePointerParallax<HTMLElement>();
  const px = (pos.x - 0.5) * 2;
  const py = (pos.y - 0.5) * 2;
  const active = pos.active;

  return (
    <article
      ref={ref}
      onClick={() => onOpen(pub)}
      className="reveal card-glow group relative cursor-pointer overflow-hidden rounded-xl border-l-[3px] border-ancosix-amber bg-ancosix-dark/40 p-6 backdrop-blur-sm sm:p-7"
      style={{
        perspective: "700px",
        transform: active
          ? `rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale(1.02)`
          : "rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Glow that follows the pointer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.7518 0.0682 75.49 / 22%) 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-10">
        <h3 className="font-display text-xl font-semibold text-ancosix-cream">{pub.title}</h3>
        <p className="mt-3 text-sm uppercase tracking-wider text-ancosix-amber/80">{pub.venue}</p>
        <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ancosix-cream/55 transition-colors group-hover:text-ancosix-amber">
          {readLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
    </article>
  );
}

export function SectionScienza() {
  const { lang } = useI18n();
  const [open, setOpen] = useState<Pub | null>(null);
  const publications = t.scienza.pubs[lang] as Pub[];

  return (
    <section
      id="scienza"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{ backgroundColor: "var(--ancosix-dark)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, oklch(0.6737 0.0562 131.46 / 20%) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, oklch(0.7518 0.0682 75.49 / 16%) 0%, transparent 52%), linear-gradient(180deg, oklch(0.12 0.01 168 / 35%) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-cream sm:text-3xl md:text-5xl text-balance">
          {L(lang, t.scienza.title)}
        </h2>
        <p className="reveal mt-4 text-[0.95rem] text-ancosix-amber sm:mt-5 sm:text-base md:text-lg">
          {L(lang, t.scienza.subtitle)}
        </p>
        <GoldOrnament className="reveal mt-6" />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {publications.map((pub) => (
            <PubCard
              key={pub.title}
              pub={pub}
              onOpen={setOpen}
              readLabel={L(lang, t.scienza.readStudy)}
            />
          ))}
        </div>

        <p className="reveal mt-8 max-w-3xl text-[0.95rem] italic leading-relaxed text-ancosix-cream/60 sm:mt-10 sm:text-base text-pretty">
          {L(lang, t.scienza.note)}
        </p>
      </div>

      {/* Publication detail modal */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent
          className="max-w-lg border-ancosix-amber/30 bg-ancosix-dark p-0 text-ancosix-cream sm:rounded-2xl"
          style={{ backgroundColor: "var(--ancosix-dark)" }}
        >
          {open && (
            <div className="p-7">
              <p className="label-uc text-ancosix-olive">{L(lang, t.scienza.modalLabel)}</p>
              <DialogTitle className="mt-3 font-display text-2xl font-bold text-ancosix-amber">
                {open.title}
              </DialogTitle>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ancosix-cream/70">
                {open.venue}
              </p>
              <div className="mt-2">
                <GoldMark />
              </div>
              <DialogDescription asChild>
                <p className="mt-5 text-base leading-relaxed text-ancosix-cream/85 text-pretty">
                  {open.intro}
                </p>
              </DialogDescription>
              <ul className="mt-6 space-y-3">
                {open.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ancosix-cream/80"
                  >
                    <span
                      className="mt-1.5 inline-block shrink-0 rounded-full"
                      style={{
                        width: 7,
                        height: 7,
                        background: "var(--ancosix-amber)",
                        boxShadow: "0 0 8px oklch(0.7518 0.0682 75.49 / 70%)",
                      }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs italic text-ancosix-cream/55">
                {L(lang, t.scienza.modalSource)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

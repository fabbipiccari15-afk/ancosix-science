import { useState } from "react";
import { VideoSlideshow } from "./VideoSlideshow";
import { GoldMark, GoldOrnament } from "./Ornament";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePointerParallax } from "./hooks";
import { useI18n, t, L, type Lang } from "./i18n";
import { SOLUZIONE_VIDEO_IMAGES, SOLUZIONE_VIDEO_CAPTIONS } from "./soluzione-video";

/* The new jewel macro image, on dark velvet */
const POMEGRANATE =
  "https://vibe.filesafe.space/1790897558817574139/assets/9ae32be8-398e-4cd1-9963-dcab68d8eea9.png";

type Badge = {
  icon: string;
  label: string;
  title: string;
  intro: string;
  points: string[];
};

/* A single badge with the same pointer-driven tilt + glow as the pomegranate gem */
function BadgeButton({ badge, onOpen }: { badge: Badge; onOpen: (b: Badge) => void }) {
  const { ref, pos } = usePointerParallax<HTMLButtonElement>();
  const px = (pos.x - 0.5) * 2;
  const py = (pos.y - 0.5) * 2;
  const active = pos.active;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(badge)}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ancosix-garnet px-4 py-2 text-sm font-medium text-white"
      style={{
        perspective: "600px",
        transform: active
          ? `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) scale(1.04)`
          : "rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: active
          ? "0 14px 30px -10px oklch(0.5 0.19 25 / 65%)"
          : "0 8px 22px -10px oklch(0.5 0.19 25 / 50%)",
      }}
    >
      {/* Glow that follows the pointer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.7518 0.0682 75.49 / 30%) 0%, transparent 55%)`,
        }}
      />
      <span aria-hidden="true" className="relative z-10">
        {badge.icon}
      </span>
      <span className="relative z-10">{badge.label}</span>
      <span className="relative z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-70">
        ↗
      </span>
    </button>
  );
}

export function SectionSoluzione() {
  const { lang } = useI18n();
  const [open, setOpen] = useState<Badge | null>(null);
  const { ref, pos } = usePointerParallax<HTMLDivElement>();
  // Subtle parallax + tilt offsets driven by the pointer (-1..1)
  const px = (pos.x - 0.5) * 2;
  const py = (pos.y - 0.5) * 2;
  const active = pos.active;

  const badges = t.soluzione.badges[lang] as Badge[];
  const callouts = t.soluzione.callouts[lang];
  // Each callout points to a precise anatomical zone of the cut pomegranate.
  // anchor = the spot ON the fruit the marker dot sits on (x%, y% of the image box)
  // label  = where the text panel sits (pinned to an edge); an SVG line connects label → anchor
  // side   = which edge the label panel sits on
  // Exact anatomical coordinates matching the pomegranate in the photo:
  // 1. Punica granatum (Buccia/Pericarpo) -> outer peel at top left of the fruit:
  //    Peel top-left rim is around (27%, 20%).
  // 2. Punicalagina (Principio attivo) -> the inner yellowish/white membrane wall between seed clusters on the right side:
  //    Right inner membrane is at (62.5%, 42%).
  // 3. Semi · arilli (Semi rubino / rubí) -> the glistening ruby seeds clustered in the center/lower-left of the fruit interior:
  //    Center-lower seed cluster is at (38%, 46%).
  const calloutLayout = [
    // Top-left: Buccia / pericarpo
    { anchor: { x: 26, y: 20 }, label: { x: 4, y: 14 }, side: "left" as const },
    // Right: Punicalagina / membrana interna
    { anchor: { x: 63, y: 41 }, label: { x: 96, y: 41 }, side: "right" as const },
    // Left-center: Semi · arilli / semi di rubino (sitting right on the ruby seeds inside the fruit)
    { anchor: { x: 37, y: 45 }, label: { x: 4, y: 55 }, side: "left" as const },
  ];

  return (
    <section
      id="soluzione"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{ backgroundColor: "var(--ancosix-light)" }}
    >
      <div
        className="absolute right-0 top-0 h-full w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--ancosix-garnet) 40%, transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <p className="label-uc reveal mb-4 text-ancosix-garnet">{L(lang, t.soluzione.patent)}</p>
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-ink sm:text-3xl md:text-5xl text-balance">
          {L(lang, t.soluzione.title)}
        </h2>
        <GoldOrnament className="reveal mt-6" />

        <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
          {/* LEFT — the gem on a velvet plinth in a gold frame, with scientific annotations overlaid */}
          <div className="reveal relative">
            <div
              ref={ref}
              className="jewel-plinth relative rounded-2xl gold-frame p-3"
              style={{
                perspective: "1200px",
                transform: active
                  ? `rotateY(${px * 4}deg) rotateX(${-py * 4}deg)`
                  : "rotateY(0deg) rotateX(0deg)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Glow that follows the pointer */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  background: `radial-gradient(circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.7518 0.0682 75.49 / 22%) 0%, transparent 45%)`,
                }}
              />
              {/* Image + annotations share one box so callouts always sit ON the fruit */}
              <div className="relative z-10 mx-auto aspect-[3/4] w-full overflow-hidden rounded-xl">
                <img
                  src={POMEGRANATE}
                  alt={L(lang, t.soluzione.subtitle)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  style={{
                    transform: active
                      ? `scale(1.05) translate3d(${px * 10}px, ${py * 10}px, 0)`
                      : "scale(1) translate3d(0,0,0)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                {/* SVG connector lines from each label to its anatomical anchor point */}
                <svg
                  className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--ancosix-amber)" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="var(--ancosix-amber)" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="var(--ancosix-amber)" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  {calloutLayout.map((lay, idx) => (
                    <line
                      key={`line-${idx}`}
                      x1={lay.side === "left" ? 18 : 82}
                      y1={lay.label.y}
                      x2={lay.anchor.x}
                      y2={lay.anchor.y}
                      stroke="url(#goldLineGrad)"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
                {/* Anchor dots placed exactly on each anatomical zone of the fruit */}
                {callouts.map((c, idx) => {
                  const lay = calloutLayout[idx];
                  return (
                    <span
                      key={`dot-${c.label}`}
                      className="pointer-events-none absolute z-30 flex items-center justify-center"
                      style={{
                        left: `${lay.anchor.x}%`,
                        top: `${lay.anchor.y}%`,
                        width: 14,
                        height: 14,
                        marginLeft: -7,
                        marginTop: -7,
                      }}
                    >
                      {/* Pulse ring */}
                      <span
                        className="absolute inset-0 animate-ping rounded-full opacity-60"
                        style={{
                          background: "var(--ancosix-amber)",
                          animationDuration: "2.8s",
                        }}
                      />
                      {/* Solid inner pearl */}
                      <span
                        className="relative block rounded-full"
                        style={{
                          width: 8,
                          height: 8,
                          background: "var(--ancosix-amber)",
                          boxShadow:
                            "0 0 0 2px oklch(0.1 0.02 140 / 70%), 0 0 10px oklch(0.7518 0.0682 75.49 / 95%)",
                        }}
                      />
                    </span>
                  );
                })}
                {/* Labels pinned to the sides, connected to their dots by the line */}
                {callouts.map((c, idx) => {
                  const lay = calloutLayout[idx];
                  const isLeft = lay.side === "left";
                  return (
                    <div
                      key={c.label}
                      className="pointer-events-none absolute z-30"
                      style={{
                        left: isLeft ? "3%" : undefined,
                        right: !isLeft ? "3%" : undefined,
                        top: `${lay.label.y}%`,
                        transform: "translateY(-50%)",
                        maxWidth: "48%",
                      }}
                    >
                      <span className="inline-block rounded-md border border-ancosix-amber/30 bg-ancosix-dark/90 px-2 py-1 shadow-lg backdrop-blur-md sm:px-2.5 sm:py-1.5">
                        <span className="block font-display text-[0.68rem] font-bold leading-tight text-ancosix-amber sm:text-sm">
                          {c.label}
                        </span>
                        <span className="block text-[0.48rem] uppercase tracking-[0.14em] text-ancosix-cream/80 sm:text-[0.62rem] sm:tracking-[0.18em]">
                          {c.sub}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="reveal">
            <h3 className="font-display text-xl font-bold text-ancosix-garnet sm:text-2xl">
              {L(lang, t.soluzione.subtitle)}
            </h3>
            <div className="mt-2">
              <GoldMark />
            </div>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ancosix-ink/90 sm:text-base text-pretty">
              {L(lang, t.soluzione.body1)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              {badges.map((b) => (
                <BadgeButton key={b.label} badge={b} onOpen={setOpen} />
              ))}
            </div>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ancosix-ink/90 sm:text-base text-pretty">
              {L(lang, t.soluzione.body2)}
            </p>
          </div>
        </div>

        <VideoSlideshow
          images={SOLUZIONE_VIDEO_IMAGES}
          captions={SOLUZIONE_VIDEO_CAPTIONS[lang]}
          label={L(lang, t.soluzione.videoLabel)}
          oilDrops
        />
      </div>

      {/* Property detail modal */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent
          className="max-w-lg border-ancosix-amber/30 bg-ancosix-dark p-0 text-ancosix-cream sm:rounded-2xl"
          style={{ backgroundColor: "var(--ancosix-dark)" }}
        >
          {open && (
            <div className="p-7">
              <p className="label-uc text-ancosix-olive">{L(lang, t.soluzione.modalLabel)}</p>
              <DialogTitle className="mt-3 font-display text-2xl font-bold text-ancosix-amber">
                <span className="mr-2" aria-hidden="true">
                  {open.icon}
                </span>
                {open.title}
              </DialogTitle>
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
                {L(lang, t.soluzione.modalSource)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

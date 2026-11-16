import { useEffect, useRef, useState } from "react";
import { GoldOrnament, GoldMark } from "./Ornament";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePointerParallax } from "./hooks";
import { useI18n, t, L } from "./i18n";

type Media = { src: string; alt: string; caption: string };
type App = {
  icon: string;
  title: string;
  text: string;
  media: Media[];
  intro: string;
  points: string[];
};

/* Media stays language-neutral (images), captions are localized */
const MEDIA: Record<string, Media[]> = {
  Agrofarmaco: [
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/9507a443-d689-451b-96c6-19ff040d4980.png",
      alt: "Olive grove",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/cd371762-e1e2-441b-8773-2c7a88f75a29.png",
      alt: "Pomegranate",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/e81a61a0-350f-413d-8124-dfc4399981db.png",
      alt: "Ancient olive",
      caption: "",
    },
  ],
  "Agricoltura biologica": [
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/47db3a0d-51f8-4e61-950d-867101f07ed6.png",
      alt: "Greenhouse",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/3059d66a-ab61-4795-bdf1-e5b3d1a91e7f.png",
      alt: "Pomegranate on branch",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/16c471fe-1b11-4d6b-929c-17427c65b2be.png",
      alt: "Pomegranates by olive",
      caption: "",
    },
  ],
  "Cosmetica e nutraceutica": [
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/d5da6d9f-a636-47b4-be15-79f65622d178.png",
      alt: "Luxury serum",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/cd371762-e1e2-441b-8773-2c7a88f75a29.png",
      alt: "Pomegranate",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/3059d66a-ab61-4795-bdf1-e5b3d1a91e7f.png",
      alt: "Pomegranate on branch",
      caption: "",
    },
  ],
  "Nano-formulazione": [
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/5598e424-57d6-446c-80b0-3e49c78373d3.png",
      alt: "Endotherapy injection",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/e81a61a0-350f-413d-8124-dfc4399981db.png",
      alt: "Ancient olive",
      caption: "",
    },
    {
      src: "https://vibe.filesafe.space/1790897558817574139/assets/cd371762-e1e2-441b-8773-2c7a88f75a29.png",
      alt: "Pomegranate",
      caption: "",
    },
  ],
};

/* Map localized app titles to their media key (Italian titles are the canonical keys) */
const MEDIA_KEY: Record<string, string> = {
  Agrofarmaco: "Agrofarmaco",
  "Agro-pharmaceutical": "Agrofarmaco",
  "Agricoltura biologica": "Agricoltura biologica",
  "Organic farming": "Agricoltura biologica",
  "Cosmetica e nutraceutica": "Cosmetica e nutraceutica",
  "Cosmetics & nutraceuticals": "Cosmetica e nutraceutica",
  "Nano-formulazione": "Nano-formulazione",
  "Nano-formulation": "Nano-formulazione",
};

/* Cinematic auto-playing slideshow (video-like, Ken Burns + crossfade) */
function AppSlideshow({ media }: { media: Media[] }) {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % media.length);
    }, 4200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [media.length]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-ancosix-amber/25">
      {media.map((m, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={m.src}
            alt={i === active ? m.alt : ""}
            className={
              i === active ? "kenburns h-full w-full object-cover" : "h-full w-full object-cover"
            }
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* legibility overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.04 0.005 168 / 30%) 0%, transparent 35%, oklch(0.04 0.005 168 / 55%) 100%)",
        }}
      />
      {/* progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1.5">
          {media.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 22 : 8,
                background:
                  i === active ? "var(--ancosix-amber)" : "oklch(0.7518 0.0682 75.49 / 35%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppCard({
  app,
  onOpen,
  watchLabel,
}: {
  app: App;
  onOpen: (a: App) => void;
  watchLabel: string;
}) {
  const { ref, pos } = usePointerParallax<HTMLElement>();
  const px = (pos.x - 0.5) * 2;
  const py = (pos.y - 0.5) * 2;
  const active = pos.active;

  return (
    <article
      ref={ref}
      onClick={() => onOpen(app)}
      className="reveal glass-dark card-glow group relative cursor-pointer overflow-hidden rounded-2xl p-6 sm:p-7"
      style={{
        perspective: "700px",
        transform: active
          ? `rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale(1.03)`
          : "rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.7518 0.0682 75.49 / 22%) 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-10">
        <div className="text-3xl">{app.icon}</div>
        <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-ancosix-amber">
          {app.title}
        </h3>
        <div className="mt-2 h-px w-6" style={{ background: "var(--ancosix-amber)" }} />
        <p className="mt-3 text-sm leading-relaxed text-ancosix-cream/80 text-pretty">{app.text}</p>
        <p className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ancosix-cream/55 transition-colors group-hover:text-ancosix-amber">
          {watchLabel}
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

export function SectionApplicazioni() {
  const { lang } = useI18n();
  const [open, setOpen] = useState<App | null>(null);
  const apps = t.applicazioni.apps[lang] as App[];

  // Attach media to each app based on its localized title
  const appsWithMedia = apps.map((a) => ({
    ...a,
    media: MEDIA[MEDIA_KEY[a.title]] ?? MEDIA["Agrofarmaco"],
  }));

  return (
    <section
      id="applicazioni"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{
        backgroundColor: "var(--ancosix-dark)",
        backgroundImage:
          "linear-gradient(180deg, oklch(0.3745 0.0776 136.09 / 8%) 0%, transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-amber sm:text-3xl md:text-5xl text-balance">
          {L(lang, t.applicazioni.title)}
        </h2>
        <GoldOrnament className="reveal mt-6" />
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {appsWithMedia.map((a) => (
            <AppCard
              key={a.title}
              app={a}
              onOpen={setOpen}
              watchLabel={L(lang, t.applicazioni.watchVideo)}
            />
          ))}
        </div>
      </div>

      {/* Application detail modal with cinematic slideshow */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent
          className="max-w-2xl border-ancosix-amber/30 bg-ancosix-dark p-0 text-ancosix-cream sm:rounded-2xl"
          style={{ backgroundColor: "var(--ancosix-dark)" }}
        >
          {open && (
            <div className="p-6 md:p-7">
              <p className="label-uc text-ancosix-olive">{L(lang, t.applicazioni.modalLabel)}</p>
              <DialogTitle className="mt-3 font-display text-2xl font-bold text-ancosix-amber">
                {open.icon} {open.title}
              </DialogTitle>
              <div className="mt-2">
                <GoldMark />
              </div>

              <div className="mt-5">
                <AppSlideshow media={open.media} />
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
                {L(lang, t.applicazioni.modalSource)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

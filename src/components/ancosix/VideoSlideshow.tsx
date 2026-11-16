import { useEffect, useRef, useState } from "react";
import { useAmbientAudio } from "./useAmbientAudio";
import { OilDrops } from "./OilDrops";

/**
 * Cinematic auto-playing slideshow that mimics video:
 * crossfade between stills + slow Ken Burns zoom, looping forever.
 * Shows traducible captions that change with the active slide.
 * Optional soft ambient soundtrack (synthesized, no external files).
 */
export function VideoSlideshow({
  images,
  captions,
  label,
  intervalMs = 5500,
  oilDrops = false,
}: {
  images: string[];
  captions: string[];
  label: string;
  intervalMs?: number;
  oilDrops?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const audio = useAmbientAudio();

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, images.length, intervalMs]);

  return (
    <div className="reveal mt-12">
      <p className="label-uc mb-4 text-ancosix-olive">{label}</p>
      <div
        className="group relative w-full overflow-hidden rounded-2xl border border-ancosix-olive/25 bg-ancosix-dark/60"
        style={{ aspectRatio: "16 / 9", minHeight: "200px" }}
      >
        {/* Slides */}
        {images.map((src, i) => (
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
                i === active && playing
                  ? "kenburns h-full w-full object-cover"
                  : "h-full w-full object-cover"
              }
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Cinematic vignette so captions stay legible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.04 0.005 168 / 12%) 0%, transparent 35%, transparent 55%, oklch(0.04 0.005 168 / 72%) 100%)",
          }}
        />

        {/* Laboratory droppers releasing golden oil drops — only on the extract video */}
        {oilDrops && <OilDrops count={3} />}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end gap-2 p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:p-5 md:p-7">
          <p
            key={active}
            className="font-display text-xs font-semibold text-ancosix-cream sm:text-sm md:text-base"
            style={{ animation: "fadeUp 0.8s ease-out" }}
          >
            {captions[active]}
          </p>
          {/* Sound + play/pause + progress dots */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Ambient soundtrack toggle */}
            <button
              type="button"
              onClick={audio.toggle}
              aria-label={audio.playing ? "Silencia" : "Reproduce música"}
              title={audio.playing ? "Silencia" : "Reproduce música"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ancosix-amber/60 text-ancosix-amber transition-colors hover:bg-ancosix-amber/10"
            >
              {audio.playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                  <path
                    d="M16 8.5c1.2 1.4 1.2 5.6 0 7M18.5 6c2.4 2.8 2.4 9.2 0 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                  <path
                    d="M16 9l5 6M21 9l-5 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ancosix-amber/60 text-ancosix-amber transition-colors hover:bg-ancosix-amber/10"
            >
              {playing ? (
                <span className="flex gap-[3px]">
                  <span className="h-3 w-[3px] bg-ancosix-amber" />
                  <span className="h-3 w-[3px] bg-ancosix-amber" />
                </span>
              ) : (
                <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-ancosix-amber" />
              )}
            </button>
            <div className="flex items-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Frame ${i + 1}`}
                  className="relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
                  style={{
                    width: i === active ? 28 : 10,
                    background:
                      i === active
                        ? "oklch(0.7518 0.0682 75.49 / 35%)"
                        : "oklch(0.7518 0.0682 75.49 / 22%)",
                  }}
                >
                  {i === active && playing && (
                    <span
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        width: "100%",
                        background: "var(--ancosix-amber)",
                        animation: `heroProgress ${intervalMs}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

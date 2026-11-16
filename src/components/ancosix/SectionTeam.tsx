import { GoldOrnament } from "./Ornament";
import { useI18n, t } from "./i18n";

const PHOTOS = [
  "https://vibe.filesafe.space/1790897558817574139/assets/03b4ae47-f8c7-445f-ae47-1e196dc74c5e.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/f6d0ff27-97dd-49fb-b13b-f1a5f4679831.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/9394c672-12ff-4718-a0f2-764774aff283.png",
];

export function SectionTeam() {
  const { lang } = useI18n();
  const members = t.team.members[lang];

  return (
    <section
      id="team"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{ backgroundColor: "var(--ancosix-dark)" }}
    >
      {/* subtle light washes — olive + amber for more luminosity */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.6737 0.0562 131.46 / 22%) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, oklch(0.7518 0.0682 75.49 / 16%) 0%, transparent 52%), linear-gradient(180deg, oklch(0.12 0.01 168 / 35%) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-cream sm:text-3xl md:text-5xl text-balance">
          {t.team.title[lang]}
        </h2>
        <GoldOrnament className="reveal mt-6" />

        <div className="reveal mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="h-32 w-32 overflow-hidden rounded-full border-2 border-ancosix-amber p-1"
                style={{ boxShadow: "0 0 36px -6px oklch(0.7518 0.0682 75.49 / 40%)" }}
              >
                <img
                  src={PHOTOS[i]}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ancosix-cream sm:text-xl">
                {m.name}
              </h3>
              <p className="mt-2 max-w-xs text-[0.82rem] leading-relaxed text-ancosix-amber sm:text-sm">
                {m.role}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.78rem] font-medium uppercase tracking-wider text-ancosix-cream/70 sm:mt-12 sm:text-sm">
          <span>CREA</span>
          <span className="text-ancosix-olive">·</span>
          <span>Università della Tuscia</span>
          <span className="text-ancosix-olive">·</span>
          <span>CIHEAM</span>
          <span className="text-ancosix-olive">·</span>
          <span>Unipg</span>
        </div>
      </div>
    </section>
  );
}

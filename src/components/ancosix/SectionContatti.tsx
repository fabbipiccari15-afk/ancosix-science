import { useState } from "react";
import { GoldOrnament } from "./Ornament";
import { TiltButton } from "./TiltButton";
import { useI18n, t, L } from "./i18n";

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="label-uc mb-2 block text-ancosix-cream/70">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-lg border border-ancosix-olive/25 bg-ancosix-dark/50 px-4 py-3 text-ancosix-cream placeholder-ancosix-cream/40 outline-none transition-colors focus:border-ancosix-amber"
      />
    </div>
  );
}

export function SectionContatti() {
  const { lang } = useI18n();
  const [sent, setSent] = useState(false);
  const f = t.contatti.fields[lang];

  return (
    <section
      id="contatti"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36"
      style={{
        background: "linear-gradient(160deg, var(--ancosix-dark) 0%, var(--ancosix-deep) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="reveal gold-thread font-display text-[1.85rem] font-semibold leading-tight text-ancosix-cream sm:text-3xl md:text-5xl text-balance">
          {L(lang, t.contatti.title)}
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-[0.95rem] text-ancosix-amber sm:mt-5 sm:text-base md:text-lg text-pretty">
          {L(lang, t.contatti.subtitle)}
        </p>
        <GoldOrnament className="reveal mt-6" />

        <form
          className="reveal glass-dark mt-9 rounded-2xl p-6 text-left sm:mt-10 sm:p-7 md:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Field label={f.name} name="name" />
            <Field label={f.org} name="org" />
            <Field label={f.email} name="email" type="email" />
            <Field label={f.country} name="country" />
          </div>
          <div className="mt-5">
            <label className="label-uc mb-2 block text-ancosix-cream/70">{f.msg}</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-ancosix-olive/25 bg-ancosix-dark/50 px-4 py-3 text-ancosix-cream placeholder-ancosix-cream/40 outline-none transition-colors focus:border-ancosix-amber"
            />
          </div>
          <TiltButton type="submit" className="mt-7 w-full py-4">
            {L(lang, t.contatti.submit)}
          </TiltButton>
          {sent && (
            <p className="mt-4 text-center text-sm text-ancosix-olive">
              {L(lang, t.contatti.sent)}
            </p>
          )}
        </form>

        <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 text-[0.85rem] text-ancosix-cream/80 sm:mt-10 sm:flex-row sm:gap-8 sm:text-sm">
          <a
            href="mailto:ancosix@crea.gov.it"
            className="flex items-center gap-2 transition-colors hover:text-ancosix-amber"
          >
            <span>✉</span> ancosix@crea.gov.it
          </a>
          <span className="hidden text-ancosix-olive sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span>📍</span> {L(lang, t.contatti.location)}
          </span>
        </div>
      </div>
    </section>
  );
}

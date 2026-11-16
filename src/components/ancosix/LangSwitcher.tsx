import { useState } from "react";
import { useI18n, LANGS, type Lang } from "./i18n";

export function LangSwitcher({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const current = LANGS.find((l) => l.code === lang)!;
  const textColor = variant === "dark" ? "text-ancosix-cream" : "text-ancosix-ink";
  const subColor = variant === "dark" ? "text-ancosix-cream/60" : "text-ancosix-ink/60";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
          variant === "dark"
            ? "border-ancosix-olive/30 text-ancosix-cream/85 hover:border-ancosix-amber/60 hover:text-ancosix-amber"
            : "border-ancosix-garnet/30 text-ancosix-ink/85 hover:border-ancosix-garnet/60"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <span
          className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open && (
        <>
          {/* click-away */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            className="glass-dark absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl"
            style={{ boxShadow: "0 18px 50px -12px oklch(0.04 0.005 168 / 80%)" }}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code as Lang);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  l.code === lang
                    ? "bg-ancosix-amber/15 text-ancosix-amber"
                    : `${textColor} hover:bg-ancosix-amber/10 hover:text-ancosix-amber`
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span>{l.label}</span>
                {l.code === lang && (
                  <span className="ml-auto text-ancosix-amber" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            ))}
            <p
              className={`border-t border-ancosix-olive/15 px-4 py-2 text-[0.65rem] uppercase tracking-wider ${subColor}`}
            >
              IT · EN · ES
            </p>
          </div>
        </>
      )}
    </div>
  );
}

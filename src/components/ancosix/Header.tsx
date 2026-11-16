import { useEffect, useState } from "react";
import { useI18n, t, L } from "./i18n";
import { LangSwitcher } from "./LangSwitcher";
import { TiltButton } from "./TiltButton";

export function Header() {
  const { lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchors = [
    "#problema",
    "#soluzione",
    "#scienza",
    "#applicazioni",
    "#progetto",
    "#team",
    "#contatti",
  ];
  const links = t.header[lang].map((label, i) => [label, anchors[i]] as const);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ancosix-dark/90 backdrop-blur-md border-b border-ancosix-olive/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-wide text-white transition-colors duration-500 sm:text-xl"
        >
          ANCoSIX
        </a>

        {/* Desktop nav — refined spacing + animated gold underline */}
        <nav className="hidden items-center gap-9 xl:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-[0.78rem] font-medium uppercase tracking-[0.16em] text-ancosix-cream/70 transition-colors duration-300 hover:text-ancosix-amber"
            >
              {label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-ancosix-amber to-transparent transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher variant="dark" />
          <a
            href="#contatti"
            className="hidden rounded-full border border-ancosix-amber/60 px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-wider text-ancosix-amber transition-colors hover:bg-ancosix-amber hover:text-ancosix-ink sm:inline-block"
          >
            {L(lang, t.ctaContact)}
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ancosix-cream/25 text-ancosix-cream/80 xl:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="xl:hidden">
          <nav className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-ancosix-olive/20 bg-ancosix-dark/95 p-4 backdrop-blur-md">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] text-ancosix-cream/75 transition-colors hover:bg-ancosix-olive/10 hover:text-ancosix-amber"
              >
                {label}
              </a>
            ))}
            <TiltButton href="#contatti" onClick={() => setOpen(false)} className="mt-2 py-3.5">
              {L(lang, t.ctaContact)}
            </TiltButton>
          </nav>
        </div>
      )}
    </header>
  );
}

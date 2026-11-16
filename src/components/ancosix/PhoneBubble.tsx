import { useEffect, useState } from "react";
import { useI18n, t, L } from "./i18n";

/* Placeholder phone number — replace with the real CREA number when ready */
const PHONE = "+39 000 000 0000";
const PHONE_HREF = "tel:+390000000000";

export function PhoneBubble() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Appear after the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-6 sm:right-6"
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Popover card */}
      <div
        className="glass-dark card-glow overflow-hidden rounded-2xl"
        style={{
          width: "min(78vw, 240px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
          transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="p-5">
          <p className="label-uc text-ancosix-olive">{L(lang, t.phone.tooltip)}</p>
          <a
            href={PHONE_HREF}
            className="mt-3 flex items-center gap-3 text-ancosix-cream transition-colors hover:text-ancosix-amber"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--ancosix-ruby), var(--ancosix-garnet))",
                color: "var(--ancosix-cream)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold">{PHONE}</span>
          </a>
        </div>
      </div>

      {/* Floating bubble button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={L(lang, t.phone.label)}
        className="phone-bubble group relative flex h-16 w-16 items-center justify-center rounded-full text-ancosix-cream transition-transform duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, var(--ancosix-ruby), var(--ancosix-garnet))",
          boxShadow: "0 14px 36px -10px oklch(0.5 0.19 25 / 60%)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">{L(lang, t.phone.label)}</span>
      </button>
    </div>
  );
}

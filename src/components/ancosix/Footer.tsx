import { useI18n, t, L } from "./i18n";

export function Footer() {
  const { lang } = useI18n();
  return (
    <footer
      className="px-5 py-9 sm:px-6 sm:py-10"
      style={{
        backgroundColor: "var(--ancosix-dark)",
        borderTop: "1px solid oklch(0.6737 0.0562 131.46 / 20%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center" aria-hidden="true">
          <span
            className="inline-block"
            style={{
              height: 1,
              width: 64,
              background: "linear-gradient(90deg, transparent, var(--ancosix-amber), transparent)",
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-ancosix-cream/70 sm:flex-row">
          <span>{L(lang, t.footer.left)}</span>
          <span className="order-3 text-center text-ancosix-cream/40 sm:order-2">
            {L(lang, t.footer.center)}
          </span>
          <span className="order-2 sm:order-3">{L(lang, t.footer.right)}</span>
        </div>
      </div>
    </footer>
  );
}

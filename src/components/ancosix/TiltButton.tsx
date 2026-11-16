import type { ReactNode } from "react";
import { usePointerParallax } from "./hooks";

/* Tilt + glow button — shared by the hero CTA and the contact form submit */
export function TiltButton({
  href,
  type,
  onClick,
  children,
  className = "",
}: {
  href?: string;
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) {
  const { ref, pos } = usePointerParallax<HTMLElement>();
  const px = (pos.x - 0.5) * 2;
  const py = (pos.y - 0.5) * 2;
  const active = pos.active;

  const style: React.CSSProperties = {
    background: "linear-gradient(135deg, var(--ancosix-ruby), var(--ancosix-garnet))",
    perspective: "600px",
    transform: active
      ? `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) scale(1.04)`
      : "rotateY(0deg) rotateX(0deg) scale(1)",
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: active
      ? "0 14px 30px -10px oklch(0.5 0.19 25 / 65%)"
      : "0 14px 36px -12px oklch(0.5 0.19 25 / 55%)",
  };

  const inner = (
    <>
      {/* Glow that follows the pointer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.7518 0.0682 75.49 / 30%) 0%, transparent 55%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  const classes = `group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ancosix-cream ${className}`;

  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type ?? "button"}
      onClick={onClick}
      className={classes}
      style={style}
    >
      {inner}
    </button>
  );
}

/* Reusable gold ornaments — the "thread" that connects the page */

export function GoldOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span
        style={{
          height: 1,
          width: 44,
          background: "linear-gradient(90deg, transparent, var(--ancosix-amber))",
        }}
      />
      <span className="text-ancosix-amber" style={{ fontSize: 7, lineHeight: 1 }}>
        ◆
      </span>
      <span
        style={{
          height: 1,
          width: 44,
          background: "linear-gradient(90deg, var(--ancosix-amber), transparent)",
        }}
      />
    </div>
  );
}

/* Short gold rule, aligned to the start of a heading */
export function GoldMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block ${className}`}
      aria-hidden="true"
      style={{
        height: 1,
        width: 34,
        background: "linear-gradient(90deg, var(--ancosix-amber), transparent)",
      }}
    />
  );
}

import { useMemo } from "react";

/**
 * A laboratory glass dropper releasing golden oil drops that fall and splash.
 * Each drop forms at the dropper tip, detaches, falls and splashes at the
 * bottom. Drops are staggered across the width and time so it feels organic.
 * Purely decorative (pointer-events: none).
 */
export function OilDrops({ count = 3 }: { count?: number }) {
  const drops = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Spread droppers across the upper-middle band of the frame
      const left = 18 + (i / Math.max(count - 1, 1)) * 64 + (Math.random() * 6 - 3);
      const delay = (i * 1.1 + Math.random() * 1.2).toFixed(2);
      const dur = (3.4 + Math.random() * 0.8).toFixed(2);
      const scale = (0.85 + Math.random() * 0.4).toFixed(2);
      return { left, delay, dur, scale, key: i };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {drops.map((d) => (
        <div key={d.key} className="absolute top-0 h-full" style={{ left: `${d.left}%` }}>
          {/* The glass dropper that releases this drop */}
          <div
            className="oil-dropper"
            style={{
              left: "50%",
              marginLeft: "-13px",
              transform: `scale(${d.scale})`,
              transformOrigin: "top center",
            }}
          >
            <span className="bulb" />
            <span className="tube" />
            <span className="tip" />
            {/* The drop forming at the tip and falling */}
            <div
              className="oil-drop"
              style={{
                animationDelay: `${d.delay}s`,
                animationDuration: `${d.dur}s`,
                transform: `scale(${d.scale})`,
              }}
            />
          </div>
          {/* Splash where the drop lands at the bottom */}
          <div
            className="oil-splash"
            style={{
              left: `calc(50% - 13px)`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.dur}s`,
              transform: `scale(${d.scale})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

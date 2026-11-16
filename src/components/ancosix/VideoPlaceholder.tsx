export function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="reveal mt-12">
      <p className="label-uc mb-4 text-ancosix-olive">{label}</p>
      <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-ancosix-olive/25 bg-ancosix-dark/60">
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.3745 0.0776 136.09 / 40%) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ancosix-amber/70 transition-transform duration-500 group-hover:scale-110">
            <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-ancosix-amber" />
          </div>
          <span className="label-uc text-ancosix-cream/50">Video — in arrivo</span>
        </div>
      </div>
    </div>
  );
}

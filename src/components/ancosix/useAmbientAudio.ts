import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Synthesizes a soft, contemplative ambient pad with the Web Audio API —
 * no external audio files. Suited to scientific / research visuals.
 * Adds a gentle, relaxing "oil drop" plink at a slow, irregular cadence.
 * Browsers require a user gesture, so playback only starts on toggle().
 */
export function useAmbientAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const dripTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);

  // A single soft droplet — short sine "plink" with a quick pitch fall + reverb-ish tail.
  const playDrip = useCallback((ctx: AudioContext, dest: AudioNode) => {
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = "sine";
    // Start ~A5, fall to ~D5 — a liquid "plop"
    o.frequency.setValueAtTime(880, now);
    o.frequency.exponentialRampToValueAtTime(587.33, now + 0.08);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.18, now + 0.012); // quick attack
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5); // soft tail

    // Subtle lowpass so the drop feels warm, not clicky
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 2200;
    lp.Q.value = 0.6;

    o.connect(g);
    g.connect(lp);
    lp.connect(dest);
    o.start(now);
    o.stop(now + 0.6);

    // A faint second droplet an octave down for body
    const o2 = ctx.createOscillator();
    o2.type = "sine";
    o2.frequency.setValueAtTime(440, now);
    o2.frequency.exponentialRampToValueAtTime(293.66, now + 0.1);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, now);
    g2.gain.exponentialRampToValueAtTime(0.07, now + 0.02);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    o2.connect(g2);
    g2.connect(lp);
    o2.start(now);
    o2.stop(now + 0.5);
  }, []);

  const clearDrip = useCallback(() => {
    if (dripTimerRef.current) {
      clearTimeout(dripTimerRef.current);
      dripTimerRef.current = null;
    }
  }, []);

  const scheduleDrip = useCallback(
    (ctx: AudioContext, dest: AudioNode) => {
      // Never stack two drip chains — clear any orphaned timer first
      clearDrip();
      const tick = () => {
        playDrip(ctx, dest);
        // Relaxed, slightly irregular cadence: 1.6s – 3.4s between drops
        const next = 1600 + Math.random() * 1800;
        dripTimerRef.current = setTimeout(tick, next);
      };
      // First drop after a short delay
      dripTimerRef.current = setTimeout(tick, 700);
    },
    [playDrip, clearDrip],
  );

  const build = useCallback(() => {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.7;
    filter.connect(master);

    // Ambient chord: A2, E3, A3, C4, E4 (A minor — contemplative, scientific)
    const freqs = [110, 164.81, 220, 261.63, 329.63];
    const oscs: OscillatorNode[] = [];
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 === 0 ? "triangle" : "sine";
      o.frequency.value = f;
      o.detune.value = (i - 2) * 4; // subtle warmth
      const g = ctx.createGain();
      g.gain.value = i === 0 ? 0.42 : 0.34 / (i + 1);
      o.connect(g);
      g.connect(filter);
      o.start();
      oscs.push(o);
    });

    // Slow LFO "breathing" the filter cutoff for gentle movement
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.06; // ~16s cycle
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 360;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    ctxRef.current = ctx;
    masterRef.current = master;
    filterRef.current = filter;
    oscRef.current = oscs;
    lfoRef.current = lfo;
  }, []);

  const start = useCallback(() => {
    if (!ctxRef.current) build();
    const ctx = ctxRef.current!;
    if (ctx.state === "suspended") void ctx.resume();
    const master = masterRef.current!;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 1.8); // gentle fade in
    // Start the relaxing oil-drop cadence (clears any orphaned chain first)
    scheduleDrip(ctx, master);
    setPlaying(true);
  }, [build, scheduleDrip]);

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;
    clearDrip();
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2); // gentle fade out
    setPlaying(false);
  }, [clearDrip]);

  const toggle = useCallback(() => {
    if (playing) stop();
    else start();
  }, [playing, start, stop]);

  useEffect(() => {
    return () => {
      clearDrip();
      const ctx = ctxRef.current;
      if (ctx) void ctx.close();
    };
  }, [clearDrip]);

  return { playing, toggle };
}

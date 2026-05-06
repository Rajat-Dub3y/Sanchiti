import { useState } from "react";
import { Reveal } from "../Reveal";

export const FounderVideo = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="py-32 relative">
      <div className="container text-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary">03 · A Word From Our Founder</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Hear the <span className="italic text-gradient-gold">why</span> behind Sanchiti.
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Two minutes that explain everything we believe about building enduring Indian brands.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 relative mx-auto max-w-5xl aspect-video rounded-3xl overflow-hidden border border-border/60 shadow-elegant group">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(38 40% 25% / 0.45), hsl(240 10% 4%) 70%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -inset-px rounded-3xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, hsl(38 55% 60% / 0.35), transparent 50%, hsl(38 55% 60% / 0.25))",
                WebkitMask:
                  "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: 1,
              }}
            />
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play founder video"
                data-cursor="hover"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-24 h-24 rounded-full bg-primary/20 animate-glow-pulse" />
                </span>
                <span className="relative w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow transition-transform duration-500 group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Play · 2:14
                </span>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src=""
                title="Founder video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

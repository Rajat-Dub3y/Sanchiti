import { Reveal } from "../Reveal";
import { AnimatedCounter } from "../AnimatedCounter";

export const Results = () => {
  return (
    <section className="py-40 border-t border-border/40 relative overflow-hidden text-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(38 50% 25% / 0.4), transparent 70%)",
        }}
      />
      <div className="container relative">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary">10 · A Client Result</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 font-display text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto">
            Our hospitality client saw an increase of
          </p>
        </Reveal>

        <div className="mt-10 relative inline-block">
          <AnimatedCounter
            target={110}
            suffix="%"
            className="font-display font-light text-[clamp(8rem,26vw,22rem)] leading-[0.85] text-gradient-gold tracking-[-0.06em] block"
          />
          <Reveal delay={400}>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, hsl(38 55% 55% / 0.35), transparent 65%)" }}
            />
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="mt-8 font-display text-2xl md:text-3xl text-foreground max-w-3xl mx-auto">
            in corporate event enquiries — through their <span className="italic text-gradient-gold">website transformation</span> alone.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Built one website, one strategy, one team — the quiet compounding of craft.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

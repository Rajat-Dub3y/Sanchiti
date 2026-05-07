import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 bg-hero-glow" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, hsl(38 55% 55% / 0.18), hsl(38 55% 55% / 0.04) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div className="container relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 backdrop-blur px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            Sanchiti · संचिति · The Art of Compounding Growth
          </div>
        </Reveal>

        <h1 className="mt-8 font-display font-light text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.03em] max-w-6xl">
          <Reveal as="span" delay={100} className="block">
            <span className="text-gradient-soft">India's Businesses</span>
          </Reveal>
          <Reveal as="span" delay={250} className="block">
            <span className="text-gradient-soft">Are Rising.</span>
          </Reveal>
          <Reveal as="span" delay={400} className="block italic font-normal text-gradient-gold">
            Is Yours?
          </Reveal>
        </h1>

        <Reveal delay={600}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Sanchiti Digital is opening five client partnerships this quarter. Our team of expert AI consultants, software engineers, brand strategists, creative directors, video producers, and digital engagement specialists work exclusively with businesses ready to lead — not follow. We only commit when we know we can deliver something exceptional. Due to our limited availability, only five partnerships will be accepted this quarter. If you are serious about becoming the digital leader in your industry — we would love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={750}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <MagneticButton as="a" href="#contact" className="text-base px-9 py-4">
              Get Your Free Audit
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </MagneticButton>
            <MagneticButton as="a" href="#story" variant="ghost" className="text-base px-9 py-4">
              Our Story
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={1000}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-border/40 pt-10">
            {[
              ["All-in-One", "Studio"],
              ["110%", "Avg. Growth"],
              ["6", "Disciplines Under One Roof"],
              ["1", "Partner. Infinite craft."],
            ].map(([k, v]) => (
              <div key={k as string}>
                <div className="font-display text-2xl md:text-3xl text-foreground">{k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="relative h-10 w-px bg-border overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-primary animate-scroll-indicator" />
        </div>
      </div>
      */}
    </section>
  );
};

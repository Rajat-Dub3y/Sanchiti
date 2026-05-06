import { Reveal } from "../Reveal";

const segments = [
  {
    title: "Established Businesses",
    desc: "Ready to modernize their digital identity.",
  },
  {
    title: "Traditional Companies",
    desc: "Looking to scale beyond word-of-mouth.",
  },
  {
    title: "Growing D2C Brands",
    desc: "That need a stronger digital presence.",
  },
  {
    title: "Service Providers",
    desc: "Who want to look premium and professional.",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">08 · Who We Serve</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              We don't work with everyone. <span className="italic text-gradient-gold">That's the point.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Whether you've been around for 2 years or 20 — if you're ready to grow digitally, we're ready to lead the way.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-6 text-foreground/85 text-lg leading-relaxed">
              We take on a limited number of clients at any one time. Not because we cannot handle more — but because our clients deserve our full attention and our best thinking. We partner with businesses that are serious about transformation, committed to making an impact, and ready to invest in building something that lasts. <span className="text-muted-foreground">If that is you — we'd love to hear from you. If you're looking for the cheapest option or a quick fix — we're not the right fit, and we'll tell you that honestly.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="hover-lift group relative h-full rounded-2xl border border-border/60 bg-surface/40 p-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display">
                  0{i + 1}
                </div>
                <h3 className="mt-8 font-display text-xl tracking-tight leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-px w-full bg-border/60 overflow-hidden">
                  <div className="h-full w-0 bg-primary transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

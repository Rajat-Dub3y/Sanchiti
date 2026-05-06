import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const bullets = [
  "A deep review of your current website and digital presence",
  "Social media audit — what's working, what's missing",
  "Brand visibility & positioning analysis",
  "Competitor benchmarking",
  "Clear, actionable recommendations — no jargon, no pressure",
];

export const FreeAudit = () => {
  return (
    <section id="audit" className="relative py-32 border-t border-border/40">
      <div className="container grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">02 · Free Audit</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Start with <span className="italic text-gradient-gold">clarity</span>, not a contract.
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Before we talk strategy, we give you a free, no-obligation digital audit of your business.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10">
              <MagneticButton as="a" href="#contact">
                Claim Your Free Audit
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="relative rounded-3xl border border-border/60 bg-surface/50 backdrop-blur p-8 md:p-12 shadow-card overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, hsl(38 55% 55% / 0.25), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">What you'll get</div>
                <ul className="mt-8 space-y-5">
                  {bullets.map((b, i) => (
                    <Reveal key={b} delay={150 + i * 120}>
                      <li className="flex gap-5 items-start group">
                        <span className="mt-2 shrink-0 w-8 h-[1px] bg-primary/70 group-hover:w-12 transition-all duration-500" />
                        <span className="text-base md:text-lg text-foreground/90 leading-relaxed">{b}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={900}>
                  <p className="mt-10 pt-8 border-t border-border/50 text-sm text-muted-foreground italic">
                    No sales pitch. Just clarity — so you can decide what's next.
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

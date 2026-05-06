import { Reveal } from "../Reveal";

const points = [
  {
    t: "Your AI Growth Strategy",
    d: "Built specifically for your industry. Not a template. A real competitive roadmap tailored to your business and your market.",
  },
  {
    t: "Stay Ahead, Not Behind",
    d: "As AI evolves, your strategy evolves with it. You always have an expert inside the loop keeping you current.",
  },
  {
    t: "Beat Your Competition",
    d: "The businesses that apply AI intelligently in their sector now will lead it for the next decade. We make sure you are one of them.",
  },
];

export const AIGuidance = () => {
  return (
    <section id="ai" className="py-32 border-t border-border/40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, hsl(38 50% 25% / 0.25), transparent 70%)",
        }}
      />
      <div className="container relative grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">06 · Your Competitive Edge</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Your competitors don't have this. <span className="italic text-gradient-gold">Yet.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Every Sanchiti Digital client gets direct access to our team of AI specialists — experts specifically trained in digital transformation and how artificial intelligence is reshaping every industry in India right now. They will show you exactly how to use AI to automate intelligently, dominate your category online, and outpace your competitors — whether they are domestic rivals or international brands entering your market.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-6 text-foreground/85 italic">
              This is not a generic consultation. It is a personalised AI growth strategy built around your business, your industry, and the specific opportunities your competitors are missing.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <div className="hover-lift group relative rounded-2xl border border-border/60 bg-surface/50 backdrop-blur p-8 md:p-10">
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-primary/70 text-sm tracking-[0.3em]">0{i + 1}</span>
                  <h3 className="font-display text-2xl tracking-tight">{p.t}</h3>
                </div>
                <p className="mt-4 pl-12 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={500}>
            <p className="mt-8 text-foreground/90 text-lg leading-relaxed">
              You are not just hiring an agency. You are gaining <span className="text-primary">an unfair advantage.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

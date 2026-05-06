import { Reveal } from "../Reveal";

const reasons = [
  {
    t: "All-in-One Studio",
    d: "Website, social, video, brand, marketing — managed by one coordinated team, so your story stays consistent everywhere.",
  },
  {
    t: "Indian Roots, Global Craft",
    d: "We understand Indian business culture, and we execute with a standard that stands up anywhere in the world.",
  },
  {
    t: "Compounding Growth. AI-Powered Strategy.",
    d: "Sanchiti means accumulation. Our work is designed to build momentum month after month — not one-off campaigns. We incorporate AI-integrated processes into every client strategy, keeping you ahead of competitors rather than catching up with them.",
  },
  {
    t: "Transparent, No Fluff",
    d: "Clear pricing, clear timelines, clear outcomes. No agency jargon. Just work you can see and results you can measure.",
  },
  {
    t: "London-Trained. India-Focused.",
    d: "Our founder brings financial services, consulting, and headhunting expertise from London — helping established businesses build digital presence that meets an international standard. Now applied exclusively to Indian businesses ready to lead their industry.",
  },
  {
    t: "Six-Year Thinking",
    d: "We don't think in months. We think in years. Our consulting approach is built for the long term — adaptable strategies that evolve as your market evolves, as India grows, and as AI reshapes every industry.",
  },
  {
    t: "Impact Beyond Business",
    d: "Connected to sustainable goods, environmental initiatives, and social impact causes across India — Sanchiti Digital partners with businesses that want their growth to contribute to something bigger. When you work with us, you become part of a network of impact.",
  },
];

export const WhySanchiti = () => {
  return (
    <section className="py-32 border-t border-border/40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(38 55% 55% / 0.2), transparent 70%)" }}
      />
      <div className="container grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">07 · Why Sanchiti</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
              Not just different. <br />
              <span className="italic text-gradient-gold">Deliberately better.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8 space-y-5">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 90}>
              <div className="hover-lift group relative rounded-2xl border border-border/60 bg-surface/40 p-8 md:p-10 flex gap-8 items-start">
                <div className="font-display text-5xl text-primary/30 group-hover:text-primary/70 transition-colors duration-500 leading-none shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-tight">{r.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

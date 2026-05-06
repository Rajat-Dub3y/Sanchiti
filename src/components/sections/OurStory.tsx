import { Reveal } from "../Reveal";

export const OurStory = () => {
  return (
    <section id="story" className="py-32 border-t border-border/40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, hsl(38 55% 55% / 0.15), transparent 70%)" }}
      />
      <div className="container grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">04 · Our Story</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Born from <span className="italic text-gradient-gold">observation.</span>
              <br /> Built for <span className="italic text-gradient-gold">impact.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-foreground/85">
          <Reveal delay={120}>
            <p>
              Sanchiti Digital was born out of a simple observation —<br />
              <span className="text-muted-foreground">
                Most Indian businesses have built incredible products and services, but their digital presence doesn't do justice to their brand.
              </span>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              We saw outdated websites, inconsistent social media, weak brand stories, and a huge gap between <em className="not-italic text-primary">what companies offer</em> and <em className="not-italic text-primary">how the world sees them</em>.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p>So we built a different kind of agency — modern, creative, and fully Indian at heart.</p>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Bharat is rising</div>
              <p>
                India is not just growing — it is reclaiming its place in the world. The businesses that build a powerful digital presence in this decade will define their industries for the next generation. Sanchiti Digital was built for this exact moment. We exist to ensure that <em className="not-italic text-primary">India's best businesses</em> — the ones with real legacy, real craft, and real ambition — are the ones that lead the digital era.
              </p>
            </div>
          </Reveal>

          <Reveal delay={560}>
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">London-trained. India-focused.</div>
              <p>
                Our founder, <span className="text-foreground">Alexander Woods</span>, brings over a decade of experience in financial services, consulting, and headhunting from London — working with established businesses to build the kind of structured, strategic presence that commands respect in global markets. He founded Sanchiti Digital to bring that same international standard to India's most ambitious businesses. The question he asks every client: <em className="not-italic text-primary">why should your digital presence be any less world-class than your business?</em>
              </p>
            </div>
          </Reveal>

          <Reveal delay={640}>
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Built with conscience</div>
              <p>
                Our founder also leads a sustainable eco-goods business dedicated to ethical sourcing and positive impact on India. Sanchiti Digital is connected to social impact work across education, clean water, and environmental sustainability. We choose to work with businesses that care about more than revenue — brands with a conscience, companies rooted in genuine service, organisations that want their success to mean something <em className="not-italic text-primary">beyond the balance sheet</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const features = [
  {
    t: "Your Tree Certificate",
    d: "Personalised with your name or business name. Professional. Frameable.",
  },
  {
    t: "Your QR Code",
    d: "Scan it anytime to track your tree growing, your carbon contribution, and your live impact statistics.",
  },
  {
    t: "Your Legacy",
    d: "As your business grows, your tree grows. Add services, add more trees. Some clients will have entire groves planted in their name.",
  },
];

export const TrackYourImpact = () => {
  return (
    <section
      id="impact"
      className="py-32 border-t border-border/40 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(140 25% 6%) 50%, hsl(var(--background)) 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(140 40% 20% / 0.4), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(38 55% 55% / 0.2), transparent 70%)" }}
      />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">09 · Our Promise to Every Client</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              You don't just get results. <br />
              You get a <span className="italic text-gradient-gold">tree.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Every client we work with has a tree planted in their name — in India, in real soil. You receive a personalised certificate with a unique QR code to track your tree growing, your carbon offset, and your impact over time.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-12 items-center">
          {/* Certificate mock-up */}
          <div className="lg:col-span-6">
  <Reveal>
    {/* 
      CHANGE 1: Added 'h-full' and 'min-h-fit'. 
      Removed the rigid aspect-[4/5] for mobile and moved it to 'sm' screens and up.
    */}
    <div className="relative sm:aspect-[4/5] max-w-md mx-auto h-full min-h-fit">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl blur-2xl opacity-60"
        style={{ background: "radial-gradient(circle, hsl(38 55% 55% / 0.35), transparent 65%)" }}
      />
      
      {/* 
        CHANGE 2: Changed 'h-full' to 'min-h-full'. 
        This ensures the background always covers the content even if it grows.
      */}
      <div className="relative min-h-full rounded-2xl border border-primary/40 bg-gradient-to-br from-[hsl(140_30%_8%)] to-[hsl(0_0%_4%)] p-10 flex flex-col shadow-card overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-3 rounded-xl border border-primary/20 pointer-events-none"
        />
        
        {/* Your Original Header */}
        <div className="text-center">
          <div className="text-[10px] tracking-[0.4em] text-primary uppercase">Sanchiti Digital</div>
          <div className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Certificate of Impact</div>
        </div>

        {/* Your Original Middle Section */}
        <div className="mt-12 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">A tree planted in honour of</div>
          <div className="mt-4 font-display text-3xl text-gradient-gold leading-tight">
            Your Brand Name
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">Location</div>
          <div className="mt-2 text-foreground text-sm">Pune · Maharashtra · India</div>
        </div>

        {/* Your Original Footer */}
        <div className="mt-auto pt-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tree ID</div>
            <div className="mt-1 font-mono text-xs text-foreground/80">SD-2026-00471</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CO₂ Offset</div>
            <div className="mt-1 font-display text-lg text-primary">21 kg / yr</div>
          </div>
          <div className="w-20 h-20 rounded-md bg-foreground p-1.5 shrink-0">
            <img
              src="/qr-sanchiti.png"
              alt="QR code linking to sanchiti.digital"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </Reveal>
</div>

          {/* Feature callouts */}
          <div className="lg:col-span-6 space-y-5">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 120}>
                <div className="hover-lift group rounded-2xl border border-border/60 bg-surface/40 backdrop-blur p-8 flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary font-display">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight">{f.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={500}>
              <div className="pt-4">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold tracking-tight">
                  #TrackYourImpact
                </div>
                <p className="mt-4 font-display text-base md:text-lg text-foreground/80 italic leading-relaxed max-w-md">
                  Because growing your business and growing India should happen together.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Collaborate on ventures */}
        <div className="mt-24 pt-16 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Become a Collaborator</span>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="mt-6 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Plant a tree. Or <span className="italic text-gradient-gold">build something bigger</span> with us.
              </h3>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Beyond the tree we plant in your name, our clients are invited to collaborate on the ground-level ventures we lead across India — real projects, real communities, real change.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <Reveal>
              <div className="hover-lift group h-full rounded-2xl border border-border/60 bg-surface/40 backdrop-blur p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Venture · 01</div>
                <h4 className="mt-5 font-display text-2xl md:text-3xl tracking-tight leading-tight">
                  Education Initiatives <br />— Rural India
                </h4>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Books, learning materials, and educational resources delivered to under-served communities across India. Join as a co-funder, sponsor, or on-the-ground partner.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hover-lift group h-full rounded-2xl border border-border/60 bg-surface/40 backdrop-blur p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Venture · 02</div>
                <h4 className="mt-5 font-display text-2xl md:text-3xl tracking-tight leading-tight">
                  Clean Water Projects <br />— India
                </h4>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Sustainable clean water access for communities that need it most. Partner with us to fund, build, or contribute expertise.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <p className="mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto">
              If either of these resonate, mention it when you reach out. We'll show you exactly how to get involved.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 text-center">
          <Reveal>
            <p className="font-display text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto italic">
              Because growing your business and growing India should happen together.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 inline-block">
              <MagneticButton as="a" href="#contact">
                Become a Client. Plant Your Tree.
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

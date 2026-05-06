import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "High-performance, beautifully designed websites that build trust and convert visitors.",
  },
  {
    num: "02",
    title: "Social Media Management",
    desc: "Strategy, content, and consistent presence that grow your brand every single day.",
  },
  {
    num: "03",
    title: "Video Production & Editing",
    desc: "Cinematic brand films, reels, and shoots — crafted to move your audience.",
  },
  {
    num: "04",
    title: "Brand Identity & Design",
    desc: "Logos, typography, visual systems — the timeless signature of your business.",
  },
  {
    num: "05",
    title: "Performance Marketing",
    desc: "Meta & Google ads engineered to bring measurable, compounding returns.",
  },
  {
    num: "06",
    title: "SEO & Digital Growth",
    desc: "Long-term visibility so customers find you exactly when they need you.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 border-t border-border/40">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-primary">05 · What We Do</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
                One partner. <br />
                <span className="italic text-gradient-gold">Every dimension</span> of your digital brand.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <p className="text-muted-foreground max-w-sm">
              Six disciplines under one studio — so your brand moves as one system, not six vendors.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 90}>
              <article
                data-cursor="hover"
                className="hover-lift group relative h-full rounded-2xl border border-border/60 bg-surface/50 backdrop-blur p-8 md:p-10 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mx, 50%) var(--my, 0%), hsl(38 55% 55% / 0.12), transparent 60%)",
                  }}
                />
                <div className="relative flex flex-col h-full min-h-[260px]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-primary/80 text-lg">{s.num}</span>
                    <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:rotate-45 transition-all duration-500">
                      →
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl md:text-[1.75rem] leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-20 max-w-3xl mx-auto text-center text-lg md:text-xl text-foreground/85 leading-relaxed">
            While other businesses coordinate five different vendors with five different invoices and five different strategies — your Sanchiti Digital team moves as one. <span className="text-primary">Every channel aligned. Every message consistent. Every month compounding.</span>
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <p className="text-muted-foreground">Not sure where to begin?</p>
            <MagneticButton as="a" href="#contact">
              Start With Your Free Audit
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

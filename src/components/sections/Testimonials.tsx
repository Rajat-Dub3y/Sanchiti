"use client";

import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  message: string;
  rating: number; // Added rating to interface
}

export const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [i, setI] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Simplified navigation to avoid dependency size errors
  const next = () => {
    if (items.length > 0) {
      setI((prev) => (prev + 1) % items.length);
    }
  };

  const prev = () => {
    if (items.length > 0) {
      setI((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section id="Testimonials" className="py-32 border-t border-border/40">
      <div className="container">
        <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                11 · What Our Clients Say
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-2xl">
                Real businesses.{" "}
                <span className="italic text-gradient-gold">Real transformation.</span>
              </h2>
            </Reveal>
          </div>

          {!loading && items.length > 0 && (
            <Reveal delay={200}>
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-surface/50 backdrop-blur transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-surface/50 backdrop-blur transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
                <div className="hidden sm:block text-xs font-mono tracking-widest opacity-40">
                  {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal>
          <div className="relative rounded-3xl border border-border/60 bg-surface/50 backdrop-blur p-10 md:p-16 min-h-[420px] md:min-h-[380px] overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-10 -left-4 font-display text-[14rem] leading-none text-primary/10 select-none"
            >
              "
            </div>

            {loading && (
              <div className="flex items-center justify-center h-full min-h-[280px]">
                <div className="flex gap-2">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
                      style={{ animationDelay: `${dot * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {!loading &&
              items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    i === idx
                      ? "opacity-100 translate-x-0 relative"
                      : "opacity-0 translate-x-12 absolute inset-10 md:inset-16 pointer-events-none"
                  }`}
                >
                  {/* Star Rating Display */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < (item.rating || 5)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/20"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="font-display text-2xl md:text-4xl leading-[1.25] tracking-tight text-foreground/95 max-w-4xl">
                    {item.message}
                  </blockquote>
                  <footer className="mt-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/30 flex items-center justify-center font-display text-primary-foreground text-lg">
                      {item.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.role}{item.company ? `, ${item.company}` : ""}
                      </div>
                    </div>
                  </footer>
                </div>
              ))}

            {!loading && items.length === 0 && (
              <div className="flex items-center justify-center min-h-[280px]">
                <p className="text-muted-foreground text-lg italic">
                  Testimonials coming soon.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Have we worked together?{" "}
              <a 
                href="/testimonial" 
                className="text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
              >
                Leave your feedback here.
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Star } from "lucide-react"; // 1. Import Star icon

type Status = "idle" | "loading" | "success" | "error";

export default function TestimonialsPage() {
  // 2. Add 'rating' to the form state
  const [form, setForm] = useState({ name: "", company: "", role: "", message: "", rating: 5 });
  const [status, setStatus] = useState<Status>("idle");
  const [hoveredRating, setHoveredRating] = useState(0);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      // 3. Reset form including rating
      setForm({ name: "", company: "", role: "", message: "", rating: 5 });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen py-32 relative overflow-hidden">
      {/* Background glow ... */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, hsl(38 50% 25% / 0.35), transparent 70%)",
        }}
      />

      <div className="container relative max-w-3xl">
        {/* Header Reveal components ... */}

        {status === "success" ? (
            <Reveal>

            <div className="mt-16 rounded-3xl border border-border/60 bg-surface/50 backdrop-blur p-10 md:p-16 text-center">
              <div
                aria-hidden
                className="font-display text-8xl text-primary/20 leading-none mb-6"
              >
              </div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Thank you sincerely.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                Your testimonial has been received. We review every submission personally — it will
                go live shortly.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={300}>
            <form
              onSubmit={onSubmit}
              className="mt-16 rounded-3xl border border-border/60 bg-surface/50 backdrop-blur p-8 md:p-12 space-y-8"
            >
              {/* Input mapping for Name, Company, Role ... */}
              {[
                { k: "name", l: "Your Name", t: "text", ph: "Arjun Sharma", req: true },
                { k: "company", l: "Company / Business Name", t: "text", ph: "Your company", req: false },
                { k: "role", l: "Your Role", t: "text", ph: "Managing Director", req: false },
              ].map((f) => (
                <label key={f.k} className="block">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {f.l} {!f.req && <span className="opacity-50">(Optional)</span>}
                  </span>
                  <input
                    required={f.req}
                    type={f.t}
                    placeholder={f.ph}
                    value={(form as any)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-3 w-full bg-transparent border-b border-border/60 pb-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-500"
                  />
                </label>
              ))}

              {/* 4. INSERT STAR RATING UI HERE */}
              <div className="block">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Your Rating
                </span>
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star
                        className={`h-7 w-7 ${
                          star <= (hoveredRating || form.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/20"
                        } transition-colors duration-200`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Your Testimonial
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your experience..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-3 w-full bg-transparent border-b border-border/60 pb-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-500 resize-none"
                />
              </label>

              {/* Error and Submit Button ... */}
              <div className="pt-4">
                <MagneticButton
                  type="submit"
                  disabled={status === "loading"}
                  className="text-base px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Submitting…" : "Submit Testimonial"}
                  {status !== "loading" && <span aria-hidden className="ml-2">→</span>}
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </main>
  );
}
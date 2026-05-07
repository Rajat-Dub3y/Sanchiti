import { type FormEvent, useState } from "react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { toast } from "@/hooks/use-toast";
 
const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I found you through your website and I'd love to discuss how you can help my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
 
export const Contact = () => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", goal: "" });
  const [loading, setLoading] = useState(false);
 
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!SCRIPT_URL) {
        throw new Error("Missing contact form URL");
      }
      const body = new URLSearchParams(form as any).toString();

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      toast({
        title: "Enquiry received ✓",
        description: "We review every enquiry personally. Expect a reply within 24 hours.",
      });
      setForm({ name: "", business: "", phone: "", goal: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach us directly at connect@sanchiti.digital",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <section id="contact" className="py-32 border-t border-border/40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, hsl(38 50% 25% / 0.35), transparent 70%)",
        }}
      />
      <div className="container relative grid lg:grid-cols-12 gap-16">
        {/* ── Left column ── */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">12 · Let's Talk</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Ready to transform? <br />
              <span className="italic text-gradient-gold">Let's talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 text-muted-foreground text-lg max-w-md leading-relaxed">
              We review every enquiry personally. We take on a limited number of new clients each
              quarter. If you're serious about building something exceptional — tell us about your
              business.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-12 space-y-5 text-sm">
              {/* Email */}
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  Email
                </div>
                <a
                  href="mailto:connect@sanchitidigital.in"
                  target="_blank"
                  className="link-underline text-foreground"
                >
                  connect@sanchitidigital.in
                </a>
                <div className="mt-1 text-xs text-muted-foreground">
                  We respond within 24 hours.
                </div>
              </div>
 
              {/* WhatsApp */}
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  WhatsApp
                </div>
                <p className="text-foreground/85 max-w-xs leading-relaxed mb-3">
                  Prefer WhatsApp? Message us directly — we are always available.
                </p>
                <div className="mt-2 text-sm pb-4 text-muted-foreground">
                    +91 77579 77823
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border/60 rounded-full px-5 py-2.5 hover:bg-surface/80 hover:border-primary/60 transition-all duration-300"
                >
                  {/* WhatsApp icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-green-500"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.882a.5.5 0 0 0 .614.612l6.166-1.516A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.12-1.438l-.36-.215-3.733.917.977-3.61-.236-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                  Chat on WhatsApp
                  
                </a>
              </div>
            </div>
          </Reveal>
        </div>
 
        {/* ── Right column — form ── */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border/60 bg-surface/50 backdrop-blur p-8 md:p-12 space-y-6"
            >
              {[
                { k: "name", l: "Your Name", t: "text", ph: "Arjun Sharma" },
                { k: "business", l: "Business Name", t: "text", ph: "Your business" },
                {
                  k: "phone",
                  l: "Phone Number — WhatsApp preferred",
                  t: "tel",
                  ph: "+91 98xxx xxxxx",
                },
              ].map((f) => (
                <label key={f.k} className="block group">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {f.l}
                  </span>
                  <input
                    required
                    type={f.t}
                    placeholder={f.ph}
                    value={(form as any)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-3 w-full bg-transparent border-b border-border/60 pb-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-500"
                  />
                </label>
              ))}
 
              <label className="block">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  What are you looking to achieve?
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder="A few lines about where you are and where you want to go..."
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="mt-3 w-full bg-transparent border-b border-border/60 pb-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-500 resize-none"
                />
              </label>
 
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <MagneticButton
                  type="submit"
                  disabled={loading}
                  className="text-base px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Your Enquiry"}
                  {!loading && <span aria-hidden>→</span>}
                </MagneticButton>
                <span className="text-xs text-muted-foreground">
                  Or reach us at{" "}
                  <a
                    href="mailto:connect@sanchitidigital.in"
                    target="_blank"
                    className="text-foreground link-underline"
                  >
                    connect@sanchitidigital.in
                  </a>{" "}
                  — we respond within 24 hours.
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
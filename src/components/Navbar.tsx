import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
   { label: "Testimonials", href: "#Testimonials"},
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] ${
        // Added 'open' check here
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group" data-cursor="hover">
          <span className="font-display text-xl font-semibold tracking-tight">
            Sanchiti<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:inline text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
            Digital
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton as="a" href="#contact" className="hidden sm:inline-flex">
            Get Your Free Audit
            <span aria-hidden>→</span>
          </MagneticButton>
          <button
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full border border-border/60 flex flex-col gap-1.5 items-center justify-center"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4 border-t border-border/50 mt-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium"
          >
            Get Your Free Audit →
          </a>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl">
              Sanchiti<span className="text-primary">.</span> Digital
            </div>
            <p className="mt-4 text-foreground/80 max-w-sm leading-relaxed">
              Building tomorrow's businesses, today.
            </p>
            <p className="mt-6 text-muted-foreground max-w-sm text-sm leading-relaxed">
              Sanchiti — संचिति — the accumulation of growth, wisdom, and wealth over time. Named for the moment India is in.
            </p>
            <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-sm">
              Proud to be impact-driven. <span className="text-primary">A tree is planted for every client we work with.</span>{" "}
              <span className="font-display text-primary">#TrackYourImpact</span>
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Studio</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#story" className="link-underline">Our Story</a></li>
              <li><a href="#impact" className="link-underline">#TrackYourImpact</a></li>
              <li><a href="#contact" className="link-underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Connect</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="https://www.instagram.com/sanchiti.in/" target="_blank" rel="noopener noreferrer" className="link-underline">Instagram</a></li>
              <li><a href="https://wa.me/917757977823" target="_blank" rel="noopener noreferrer"  className="link-underline">WhatsApp</a></li>
              <li><a href="mailto:connect@sanchitidigital.in"  target="_blank" className="link-underline">connect@sanchitidigital.in</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
          <span>© {new Date().getFullYear()} Sanchiti Digital. All rights reserved.</span>
          <span>Built to compound.</span>
        </div>
      </div>
    </footer>
  );
};

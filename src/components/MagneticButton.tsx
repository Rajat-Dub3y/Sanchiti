import { useEffect, useRef, useState } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "ghost";
}

export const MagneticButton = ({
  children,
  className = "",
  variant = "primary",
  as = "button",
  href,
  ...rest
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [tf, setTf] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setTf({ x: x * 0.25, y: y * 0.35 });
  };
  const onLeave = () => setTf({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide overflow-hidden transition-[transform,box-shadow,background] duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] will-change-transform";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-glow",
    ghost:
      "border border-border/60 text-foreground hover:border-primary/60 hover:text-primary",
  };

  const content = (
    <>
      <span
        className="absolute inset-0 -z-0 bg-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const style = { transform: `translate3d(${tf.x}px, ${tf.y}px, 0)` };

  if (as === "a") {
    return (
      <a
        ref={ref as any}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={`${base} ${variants[variant]} ${className}`}
        data-cursor="hover"
      >
        {content}
      </a>
    );
  }
  return (
    <button
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={`${base} ${variants[variant]} ${className}`}
      data-cursor="hover"
      {...rest}
    >
      {content}
    </button>
  );
};

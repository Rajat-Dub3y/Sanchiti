export const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-cursor="hover"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .18 5.3.18 11.82a11.7 11.7 0 0 0 1.6 5.91L0 24l6.42-1.69a11.84 11.84 0 0 0 5.63 1.43h.01c6.54 0 11.86-5.3 11.86-11.82A11.7 11.7 0 0 0 20.52 3.48ZM12.06 21.5h-.01a9.69 9.69 0 0 1-4.94-1.35l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.62 9.62 0 0 1-1.49-5.13c0-5.33 4.35-9.67 9.7-9.67 2.59 0 5.02 1 6.85 2.83a9.6 9.6 0 0 1 2.83 6.84c0 5.34-4.34 9.68-9.67 9.68Zm5.61-7.24c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.69.16-.2.31-.79.99-.97 1.2-.18.2-.36.23-.67.07-.31-.16-1.3-.48-2.48-1.53a9.37 9.37 0 0 1-1.72-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.69-1.67-.95-2.29-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.52.08-.79.39s-1.04 1.02-1.04 2.49 1.07 2.88 1.22 3.08c.16.21 2.11 3.22 5.12 4.51 1.78.77 2.48.83 3.37.7.54-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37Z" />
        </svg>
      </span>
      <span className="pointer-events-none absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-surface-elevated border border-border/60 px-4 py-2 text-xs text-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        Chat on WhatsApp
      </span>
    </a>
  );
};

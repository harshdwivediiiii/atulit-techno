export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 text-center text-sm text-muted backdrop-blur-md bg-surface/40">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] font-bold text-xs">
            AT
          </div>
          <span className="font-semibold text-foreground tracking-wide uppercase">Atulit Technology</span>
        </div>
        <p className="max-w-[400px] leading-relaxed text-muted mx-auto">
          Delivering precision structural steel fabrication and end-to-end industrial solutions.
        </p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="mt-8 text-xs opacity-60">
          © {new Date().getFullYear()} Atulit Technology Pvt Ltd. All rights reserved. Built with precision.
        </p>
      </div>
    </footer>
  );
}

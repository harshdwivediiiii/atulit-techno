"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { company, navItems } from "@/app/content";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const syncScrolled = useEffectEvent(() => {
    setScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    syncScrolled();
    window.addEventListener("scroll", syncScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrolled);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="site-container">
        <div
          className={`glass-panel flex items-center justify-between rounded-[1.6rem] px-4 py-3 md:px-5 ${
            scrolled ? "shadow-[var(--shadow-soft)]" : ""
          }`}
        >
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <div className="glow-orange absolute inset-0 rounded-2xl opacity-50 blur-xl transition-opacity group-hover:opacity-80" />
              <Image
                src="/assets/atulit/logo.png"
                alt={company.shortName}
                width={36}
                height={36}
                className="relative h-9 w-9 object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="truncate font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.18em] text-foreground sm:text-base">
                ATULIT
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.34em] text-muted sm:text-[11px]">
                Steel Fabrication
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm text-foreground/76 hover:text-foreground"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[var(--gradient-neon)] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ModeToggle />
            <a
              href="#contact"
              className="gradient-neon-bg inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon-blue hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle className="h-11 w-11 shrink-0" />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
              className="glass-panel-strong inline-flex h-11 w-11 items-center justify-center rounded-2xl text-foreground hover:-translate-y-0.5"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`pointer-events-none fixed inset-0 top-[5.25rem] z-40 bg-slate-950/35 opacity-0 backdrop-blur-sm transition ${
            open ? "pointer-events-auto opacity-100" : ""
          } lg:hidden`}
          onClick={() => setOpen(false)}
        />

        <div
          id="mobile-navigation"
          className={`glass-panel absolute inset-x-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-[1.6rem] transition duration-200 lg:hidden ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-2" aria-label="Mobile">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm text-foreground/82 hover:bg-white/5 hover:text-foreground"
              >
                <span className="text-[11px] font-semibold tracking-[0.3em] text-secondary">
                  0{index + 1}
                </span>
                <span>{item.label}</span>
              </a>
            ))}

            <a
              href={`mailto:${company.emailPrimary}`}
              onClick={() => setOpen(false)}
              className="gradient-neon-bg mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Email the team
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

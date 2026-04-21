import Image from "next/image";

import { company, navItems } from "@/app/content";

export function Footer() {
  return (
    <footer className="relative border-t border-border/80 py-14">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_repeat(2,minmax(0,0.85fr))]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/atulit/logo.png"
                alt={company.shortName}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-[family-name:var(--font-display)] text-base font-bold tracking-[0.16em] text-foreground">
                  ATULIT TECHNOLOGY
                </div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-muted">
                  Pvt Ltd
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-foreground/66">
              End-to-end steel fabrication for mining, agriculture, infrastructure, and industrial
              project execution from Bhilai since {company.established}.
            </p>
          </div>

          <div>
            <p className="section-kicker text-[11px] font-semibold uppercase text-muted">
              Sections
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/72">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-kicker text-[11px] font-semibold uppercase text-muted">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm text-foreground/72">
              <a href={`mailto:${company.emailPrimary}`} className="block hover:text-primary">
                {company.emailPrimary}
              </a>
              <address className="not-italic leading-7">{company.address}</address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs uppercase tracking-[0.24em] text-muted md:flex-row md:items-center md:justify-between">
          <span>(c) {new Date().getFullYear()} Atulit Technology Pvt Ltd.</span>
          <span>Engineered with precision in India.</span>
        </div>
      </div>
    </footer>
  );
}

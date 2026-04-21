import {
  Flame,
  Package,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { processSteps } from "@/app/content";
import { Reveal } from "@/components/reveal";

const stepIcons = [Ruler, Package, Scissors, Flame, ShieldCheck, Sparkles, Truck];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="site-container">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase text-secondary">
            Our Process
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Seven stages. <span className="text-gradient-neon">Zero compromise.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/72">
            A clear workflow from drawing review to dispatch keeps fabrication aligned with
            project intent, timelines, and finishing standards.
          </p>
        </Reveal>

        <div className="mt-14 flex gap-5 overflow-x-auto px-1 pb-4 hide-scrollbar">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            const accentClass = index % 2 === 0 ? "text-primary" : "text-secondary";

            return (
              <Reveal key={step.step} delay={index * 0.05} className="min-w-[18.25rem] max-w-sm flex-1">
                <article className="glass-panel group relative h-full overflow-hidden rounded-[1.8rem] p-6">
                  <div
                    className={`absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-70 ${
                      index % 2 === 0 ? "glow-blue" : "glow-orange"
                    }`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-5xl font-black text-foreground/10">{step.step}</span>
                      <span className="glass-panel-strong inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                        <Icon size={20} className={accentClass} />
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">{step.description}</p>
                    <div className="mt-5 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

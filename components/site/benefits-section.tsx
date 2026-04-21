import { HardHat, Leaf, Shield, Zap } from "lucide-react";

import { benefits } from "@/app/content";
import { Reveal } from "@/components/reveal";

const benefitIcons = [Shield, Zap, Leaf, HardHat];

export function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="site-container">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase text-primary">
            Why Atulit
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Four pillars. <span className="text-gradient-neon">One promise.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            const accentClass = benefit.accent === "orange" ? "text-secondary" : "text-primary";
            const glowClass = benefit.accent === "orange" ? "glow-orange" : "glow-blue";

            return (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <article className="glass-panel group relative h-full overflow-hidden rounded-[1.8rem] p-7">
                  <div
                    className={`absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${glowClass}`}
                  />
                  <div className="relative">
                    <div
                      className="glass-panel-strong animate-float-y inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ animationDelay: `${index * 0.35}s` }}
                    >
                      <Icon size={24} className={accentClass} />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/67">{benefit.description}</p>
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

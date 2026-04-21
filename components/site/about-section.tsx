import { Building2, Pickaxe, Wheat } from "lucide-react";

import { company, sectorCards, timelineMilestones } from "@/app/content";
import { Reveal } from "@/components/reveal";

const sectorIcons = [Pickaxe, Wheat, Building2];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="glow-blue absolute left-1/2 top-8 h-72 w-[48rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl" />

      <div className="site-container relative">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase text-primary">
            About Atulit
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Forging India&apos;s <span className="text-gradient-neon">industrial backbone</span>, one
            beam at a time.
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/72">
            From a project-driven workshop base to a fabrication company with developed land,
            production capacity, and sector reach, {company.shortName} is positioned as a practical
            execution partner for steel-intensive industrial work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {sectorCards.map((card, index) => {
            const Icon = sectorIcons[index];
            const glowClass = card.accent === "orange" ? "glow-orange" : "glow-blue";
            const mixedGlow =
              card.accent === "mixed"
                ? {
                    background:
                      "radial-gradient(circle, rgba(36, 93, 255, 0.22), transparent 52%), radial-gradient(circle at bottom right, rgba(255, 122, 26, 0.18), transparent 52%)",
                  }
                : undefined;

            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="glass-panel group relative h-full overflow-hidden rounded-[1.8rem] p-7">
                  <div
                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${glowClass}`}
                    style={mixedGlow}
                  />
                  <div className="relative">
                    <div className="glass-panel-strong inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl text-primary shadow-neon-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/68">{card.description}</p>
                    <div className="mt-6 h-px bg-gradient-to-r from-primary/45 via-secondary/35 to-transparent" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="section-kicker text-xs font-semibold uppercase text-secondary">
              Our Journey
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
              From a single workshop to a 5-acre fabrication base.
            </h3>
          </Reveal>

          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            {timelineMilestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.08}>
                <article className="relative">
                  <div className="mb-5 flex h-4 items-center">
                    <span className="gradient-neon-bg shadow-neon-blue h-3.5 w-3.5 rounded-full" />
                  </div>
                  <div className="text-3xl font-black text-gradient-neon">{milestone.year}</div>
                  <h4 className="mt-2 text-lg font-semibold">{milestone.label}</h4>
                  <p className="mt-2 text-sm leading-7 text-foreground/64">
                    {milestone.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

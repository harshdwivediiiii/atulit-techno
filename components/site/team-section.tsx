import { ShieldCheck, Users } from "lucide-react";

import { directors, workforceStrengths } from "@/app/content";
import { Reveal } from "@/components/reveal";

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-28">
      <div className="glow-blue absolute left-1/2 top-1/2 h-80 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" />

      <div className="site-container relative">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase text-primary">
            Leadership
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            People behind <span className="text-gradient-neon">every weld.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/72">
            The company profile highlights technical, marketing, operations, and project leadership
            supported by a multi-disciplined fabrication workforce.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {directors.map((director, index) => (
              <Reveal key={director.name} delay={index * 0.08}>
                <article className="glass-panel group relative h-full overflow-hidden rounded-[1.8rem] p-7">
                  <div
                    className={`absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
                      index % 2 === 0 ? "glow-blue" : "glow-orange"
                    }`}
                  />
                  <div className="relative">
                    <div className="glass-panel-strong inline-flex h-16 w-16 items-center justify-center rounded-full">
                      <Users size={28} className="text-primary" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                      {director.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{director.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-foreground/67">{director.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <aside className="glass-panel rounded-[1.8rem] p-7">
              <div className="flex items-center gap-3">
                <span className="glass-panel-strong inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <ShieldCheck size={20} className="text-secondary" />
                </span>
                <div>
                  <p className="section-kicker text-xs font-semibold uppercase text-secondary">
                    Workforce Strength
                  </p>
                  <h3 className="mt-2 text-2xl font-black">Multi-discipline manpower</h3>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {workforceStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="glass-panel-strong rounded-full px-4 py-2 text-sm text-foreground/82"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

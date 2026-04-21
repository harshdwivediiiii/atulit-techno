import Image from "next/image";

import { company, heroStats } from "@/app/content";
import heroBg from "@/public/assets/atulit/hero-bg.jpg";
import { Reveal } from "@/components/reveal";
import { BeamScene } from "@/components/site/beam-scene";
import { HeroEffects } from "@/components/site/hero-effects";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBg}
          alt="Atulit fabrication workshop"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="glow-blue absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full blur-3xl" />
        <div className="glow-orange absolute -bottom-24 right-0 h-[34rem] w-[34rem] rounded-full blur-3xl" />
      </div>

      <HeroEffects />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)]">
          <div className="space-y-8">
            <Reveal>
              <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground/78">
                <span className="animate-pulse-glow h-2 w-2 rounded-full bg-secondary" />
                {company.location}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="max-w-4xl">
                <h1 className="text-5xl font-black leading-[0.94] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
                  <span className="text-gradient-steel block">Engineering</span>
                  <span className="text-gradient-neon block">Strength.</span>
                  <span className="text-gradient-steel block">Delivering Precision.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                  {company.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="gradient-neon-bg inline-flex min-h-[3.25rem] items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon-blue hover:-translate-y-0.5"
                >
                  Explore Our Work
                </a>
                <a
                  href="#process"
                  className="glass-panel inline-flex min-h-[3.25rem] items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5"
                >
                  See the Process
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="glass-panel rounded-3xl p-5">
                    <div className="text-3xl font-black text-gradient-neon">{stat.value}</div>
                    <h2 className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/86">
                      {stat.label}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-foreground/68">{stat.detail}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative" delay={0.2}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 shadow-neon-blue">
              <div className="glow-blue absolute inset-x-12 top-0 h-32 rounded-full blur-3xl" />
              <div className="relative h-[24rem] rounded-[1.6rem] border border-white/10 bg-slate-950/20 sm:h-[30rem] lg:h-[34rem]">
                <BeamScene />
                <div className="glass-panel-strong absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.24em] text-foreground/72">
                  <span>ISMB / Live fabrication profile</span>
                  <span className="flex items-center gap-2 text-secondary">
                    <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    active
                  </span>
                </div>
              </div>

              <div className="glass-panel-strong animate-float-y absolute -left-3 top-10 rounded-2xl px-4 py-3 text-xs text-foreground/78 shadow-neon-blue">
                <div className="text-[11px] uppercase tracking-[0.24em] text-muted">Grade</div>
                <div className="mt-1 font-semibold text-primary">IS 2062 E250</div>
              </div>

              <div
                className="glass-panel-strong absolute -right-3 bottom-16 rounded-2xl px-4 py-3 text-xs text-foreground/78 shadow-neon-orange"
                style={{ animation: "float-y 5.2s ease-in-out infinite" }}
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-muted">Dispatch ready</div>
                <div className="mt-1 font-semibold text-secondary">Plant-to-site workflow</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.34em] text-muted"
          >
            Scroll
            <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects, recentDeliveries } from "@/app/content";
import { Reveal } from "@/components/reveal";

const filters = ["All", "Infrastructure", "Power", "Smelter"] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.tag === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="glow-orange absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl" />

      <div className="site-container relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="section-kicker text-xs font-semibold uppercase text-primary">
              Featured Projects
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Steel that powers <span className="text-gradient-neon">flagship plants.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setActiveFilter(filter);
                    });
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    activeFilter === filter
                      ? "gradient-neon-bg border-transparent text-primary-foreground shadow-neon-blue"
                      : "glass-panel text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={`${project.title}-${activeFilter}`} delay={index * 0.06}>
              <article className="glass-panel group relative overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/22 to-transparent" />
                  <span className="glass-panel-strong absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/78">
                    {project.tag}
                  </span>
                  <span className="glass-panel-strong absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">{project.description}</p>
                  <div className="mt-5 flex items-start justify-between gap-4 text-xs">
                    <span className="section-kicker font-semibold uppercase text-muted">Vendor</span>
                    <span className="text-right text-foreground/78">{project.vendor}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={0.12}>
          <div className="glass-panel overflow-hidden rounded-[1.8rem]">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border px-6 py-5">
              <div>
                <p className="section-kicker text-xs font-semibold uppercase text-secondary">
                  Recently Completed
                </p>
                <h3 className="mt-2 text-2xl font-black">Live supply reference</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-muted">Doc / ATPL-SR-001</span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.26em] text-muted">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Client</th>
                    <th className="px-6 py-4 font-semibold">Item</th>
                    <th className="px-6 py-4 font-semibold">Qty</th>
                    <th className="px-6 py-4 font-semibold">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeliveries.map((delivery) => (
                    <tr
                      key={`${delivery.client}-${delivery.quantity}-${delivery.completedAt}`}
                      className="border-t border-border/70"
                    >
                      <td className="px-6 py-4 font-semibold">{delivery.client}</td>
                      <td className="px-6 py-4 text-foreground/66">{delivery.item}</td>
                      <td className="px-6 py-4 font-mono text-primary">{delivery.quantity}</td>
                      <td className="px-6 py-4 text-foreground/66">{delivery.completedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { infrastructure, infrastructureMetrics } from "@/app/content";
import infrastructureImage from "@/public/assets/atulit/infrastructure.jpg";
import { Reveal } from "@/components/reveal";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

function Counter({ value, prefix = "", suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1600;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src={infrastructureImage}
          alt="Atulit facility infrastructure"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.26]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(8, 17, 29, 0.18), var(--background) 90%)",
          }}
        />
      </div>

      <div className="site-container relative">
        <Reveal className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase text-secondary">
            Infrastructure
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Built for <span className="text-gradient-neon">scale.</span> Engineered for{" "}
            <span className="text-gradient-neon">speed.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {infrastructureMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.08}>
                <article className="glass-panel rounded-[1.8rem] p-7">
                  <div className="text-4xl font-black text-gradient-neon sm:text-5xl">
                    <Counter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                    {metric.label}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/68">{metric.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="glass-panel rounded-[1.8rem] p-7">
              <p className="section-kicker text-xs font-semibold uppercase text-primary">
                Facility Snapshot
              </p>
              <div className="mt-6 space-y-4">
                {infrastructure.map((row) => (
                  <div
                    key={row.label}
                    className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm font-semibold text-foreground">{row.label}</dt>
                    <dd className="mt-2 text-sm leading-7 text-foreground/66">{row.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

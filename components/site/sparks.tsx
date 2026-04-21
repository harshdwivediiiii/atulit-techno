"use client";

import type { CSSProperties } from "react";

type SparksProps = {
  count?: number;
};

type Spark = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function getSpark(index: number): Spark {
  const left = seededValue(index + 1) * 100;
  const delay = seededValue(index + 11) * 4;
  const duration = 2.2 + seededValue(index + 21) * 2.8;
  const size = 2 + seededValue(index + 31) * 3;

  return {
    id: index,
    left,
    delay,
    duration,
    size,
  };
}

function formatPercent(value: number) {
  return `${value.toFixed(5)}%`;
}

function formatPixels(value: number) {
  return `${value.toFixed(5)}px`;
}

function formatSeconds(value: number) {
  return `${value.toFixed(5)}s`;
}

export function Sparks({ count = 28 }: SparksProps) {
  const sparks = Array.from({ length: count }, (_, index) => getSpark(index));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="spark-particle absolute bottom-0 rounded-full"
          style={{
            "--spark-left": formatPercent(spark.left),
            "--spark-size": formatPixels(spark.size),
            "--spark-duration": formatSeconds(spark.duration),
            "--spark-delay": formatSeconds(spark.delay),
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

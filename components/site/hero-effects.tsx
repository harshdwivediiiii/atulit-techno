"use client";

import dynamic from "next/dynamic";

const Sparks = dynamic(() => import("@/components/site/sparks").then((module) => module.Sparks), {
  ssr: false,
});

export function HeroEffects() {
  return <Sparks />;
}

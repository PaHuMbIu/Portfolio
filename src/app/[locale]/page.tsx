"use client";

import { HomeHero, HomeTechnologies } from "@/widgets";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-[1200px]">
      <HomeHero />
      <HomeTechnologies />
    </div>
  );
}

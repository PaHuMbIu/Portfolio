"use client";

import { HomeHero, HomeTechnologies, HomeAboutProject, HomeStats, HomeCTA } from "@/widgets";

export default function Home() {
  return (
    <section className="w-full mx-auto max-w-[1200px]">
      <HomeHero />
      <HomeStats />
      <HomeTechnologies />
      <HomeAboutProject />
      <HomeCTA />
    </section>
  );
}

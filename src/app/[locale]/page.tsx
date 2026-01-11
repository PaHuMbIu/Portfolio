"use client";

import {
  HomeHero,
  HomeTechnologies,
  HomeAboutProject,
  HomeStats,
  HomeCTA,
  LayoutStar,
} from "@/widgets";

export default function Home() {
  return (
    <LayoutStar>
      <section className="w-full mx-auto max-w-[1200px]">
        <HomeHero />
        <HomeStats />
        <HomeTechnologies />
        <HomeAboutProject />
        <HomeCTA />
      </section>
    </LayoutStar>
  );
}

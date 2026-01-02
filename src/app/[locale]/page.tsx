"use client";

import { TechnologyCard } from "@/widgets";
import { TECHNOLOGIES_DATA } from "@/widgets/technology-card/model/technologies";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("technologyCard");

  return (
    <div className="flex justify-center items-center pt-10">
      <ul className="flex flex-wrap gap-3.5 max-w-[1100px] justify-center">
        {TECHNOLOGIES_DATA.map((technology, index) => (
          <TechnologyCard
            key={index}
            icon={technology.icon}
            technologyName={technology.technologyName}
            description={t(technology.descriptionKey)}
            url={technology.url}
          />
        ))}
      </ul>
    </div>
  );
}

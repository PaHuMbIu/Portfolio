"use client";

import { useTranslations } from "next-intl";
import { TechnologySlider } from "@/widgets/technology-slider/ui/TechnologySlider";

export const HomeTechnologies = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          {t("technologiesTitle")}
        </h2>

        <p className="text-sm md:text-base text-white/60 text-center max-w-md">
          {t("technologiesDescription")}
        </p>

        <div className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mt-6"></div>
      </div>

      {/* <TechnologyList /> */}

      <TechnologySlider />
    </>
  );
};

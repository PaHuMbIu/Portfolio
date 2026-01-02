"use client";

import { TECHNOLOGIES_DATA } from "@/widgets/technology-card/model/technologies";
import { TechnologyCard } from "@/widgets/technology-card/ui/TechnologyCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const HomeTechnologies = () => {
  const t = useTranslations("home");
  const tTechnologyCard = useTranslations("technologyCard");

  return (
    <div className="flex flex-col items-center max-w-[1200px] w-full">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          {t("technologiesTitle")}
        </h2>

        <p className="text-sm md:text-base text-white/60 text-center max-w-md">
          {t("technologiesDescription")}
        </p>

        <div className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mt-6"></div>
      </div>

      <motion.ul
        className="flex flex-wrap gap-4 md:gap-5 justify-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {TECHNOLOGIES_DATA.map((technology, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <TechnologyCard
              description={tTechnologyCard(technology.descriptionKey)}
              {...technology}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

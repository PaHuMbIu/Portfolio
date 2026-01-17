"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TechnologySlider } from "@/widgets/technology-slider/ui/TechnologySlider";
import { Code2 } from "lucide-react";

export const HomeTechnologies = () => {
  const t = useTranslations("home");

  return (
    <div className="w-full my-16">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 flex-wrap justify-center">
          <div className="hidden min-[410px]:block p-1.5 min-[410px]:p-2 rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 shrink-0">
            <Code2 className="w-4 h-4 min-[410px]:w-5 min-[410px]:h-5 text-purple-300" />
          </div>

          <h2 className="text-base min-[410px]:text-lg md:text-2xl lg:text-3xl font-bold text-white text-center">
            {t("technologiesTitle")}
          </h2>
        </div>

        <p className="text-sm md:text-base text-white/60 text-center max-w-md mb-6">
          {t("technologiesDescription")}
        </p>

        <motion.div
          className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mt-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </motion.div>

      <TechnologySlider />
    </div>
  );
};

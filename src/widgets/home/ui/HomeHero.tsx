"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp30 } from "@/shared/animations";

export const HomeHero = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center max-w-4xl w-full mb-12 mx-auto">
      <motion.h1
        className="text-white text-2xl md:text-5xl lg:text-6xl font-bold text-center md:mb-8 mb-4 md:pt-4 pt-2"
        variants={fadeUp30}
        initial="hidden"
        animate="visible"
      >
        {t("title")}
      </motion.h1>

      <motion.p
        className="text-sm md:text-xl text-center text-white/80 max-w-2xl leading-relaxed mb-6"
        variants={fadeUp30}
        initial="hidden"
        animate="visible"
      >
        {t("subtitle")}
      </motion.p>

      <motion.div
        className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mt-4"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </div>
  );
};

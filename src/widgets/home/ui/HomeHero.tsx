"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { titleVariants } from "../animations/title.variants";
import { AnimatedHeroText } from "./AnimatedHeroText";

export const HomeHero = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center max-w-4xl w-full mb-12 mx-auto">
      <motion.h1
        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 pt-14"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedHeroText text={t("title")} />
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-white/80 max-w-2xl leading-relaxed mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: "easeOut",
        }}
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

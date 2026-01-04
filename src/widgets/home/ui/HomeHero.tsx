"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { titleVariants, letterVariants } from "../animations/title.variants";

export const HomeHero = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center max-w-4xl w-full mb-12">
      <motion.h1
        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {t("title")
          .split("")
          .map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-white/80 max-w-2xl leading-relaxed"
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
    </div>
  );
};

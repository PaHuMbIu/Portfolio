"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CTA_BUTTONS_DATA } from "../model/ctaData";
import { CTAButton } from "./CTAButton";

export const HomeCTA = () => {
  const t = useTranslations("home.cta");

  return (
    <motion.section
      className="flex flex-col items-center w-full my-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">{t("title")}</h2>

      <p className="text-sm md:text-base text-white/60 text-center max-w-md my-4!">
        {t("description")}
      </p>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
        {CTA_BUTTONS_DATA.map((button, index) => (
          <CTAButton key={index} index={index} Icon={button.icon} {...button} />
        ))}
      </div>
    </motion.section>
  );
};

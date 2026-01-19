"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const HomeAboutProject = () => {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <motion.div
      className="flex flex-col items-center max-w-4xl w-full my-16 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <div className="relative w-full md:p-8 p-4 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <Sparkles className="w-5 h-5 text-blue-300" />
            </div>

            <h2 className="text-lg md:text-3xl font-bold text-white text-center">
              {t("aboutProjectTitle")}
            </h2>
          </div>

          <div className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mb-4"></div>

          <p className="text-sm md:text-lg text-white/80 text-center max-w-3xl leading-relaxed">
            {t.rich("aboutProjectDescription", {
              link: (chunks) => (
                <Link
                  href={`/${locale}/about-me`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 decoration-cyan-400/50 hover:decoration-cyan-300"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 to-pink-500/0 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none " />
      </div>
    </motion.div>
  );
};

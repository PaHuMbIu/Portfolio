"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

export function SoonScreen() {
  const t = useTranslations("modalSoon");

  return (
    <main className="w-full mx-auto max-w-[1200px] h-[80vh] flex items-center justify-center">
      <section className="w-full max-w-2xl mx-auto px-4">
        <motion.div
          className="relative w-full md:p-12 p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="relative p-6 rounded-2xl bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                <Wrench className="w-12 h-12 md:w-16 md:h-16 text-purple-300" />

                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="p-2 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <Clock className="w-5 h-5 text-cyan-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              {t("title")}
            </motion.h1>

            <motion.div
              className="w-32 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
            />

            <motion.p
              className="text-sm md:text-lg text-white/80 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              {t("description")}
            </motion.p>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 to-pink-500/0 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}

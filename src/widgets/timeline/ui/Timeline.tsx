"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "./TimelineItem";
import { TIMELINE_DATA } from "../model/timelineData";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export const Timeline = () => {
  const t = useTranslations("timeline");

  return (
    <div className={cn("w-full max-w-4xl mx-auto", "px-2 py-6 sm:px-4 sm:py-12")}>
      <motion.h1
        className={cn(
          "font-bold text-white text-center",
          "text-2xl mb-6 sm:text-3xl sm:mb-12 md:text-4xl",
        )}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>

      <div className="relative">
        {TIMELINE_DATA.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

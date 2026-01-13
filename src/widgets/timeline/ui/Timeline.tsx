"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/widgets/timeline-item";
import { TIMELINE_DATA } from "../model/timelineData";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { fadeDown } from "@/shared/animations";

export const Timeline = () => {
  const t = useTranslations("timeline");

  return (
    <div className={cn("w-full max-w-4xl mx-auto", "px-2 pt-6 sm:px-4 sm:pt-12")}>
      <motion.h1
        className={cn(
          "font-bold text-white text-center",
          "text-2xl mb-6 sm:text-3xl sm:mb-12 md:text-4xl",
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeDown}
      >
        {t("title")}
      </motion.h1>

      <div className="relative">
        {TIMELINE_DATA.map((item, index) => (
          <TimelineItem key={item.id} item={item} isLast={index === TIMELINE_DATA.length - 1} />
        ))}
      </div>
    </div>
  );
};

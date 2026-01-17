"use client";

import { motion } from "framer-motion";
import { IStatsData } from "../model/statsData";
import { useTranslations } from "next-intl";
import { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface StatsCardProps extends IStatsData {
  index: number;
  Icon: LucideIcon;
}

export const StatsCard = ({ Icon, keyId, color, value, index }: StatsCardProps) => {
  const t = useTranslations("home.stats");

  return (
    <motion.article
      key={keyId}
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative xl:p-6 p-4 rounded-2xl bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 [&:hover,&:active]:border-white/20 transition-all duration-300 [&:hover,&:active]:shadow-lg [&:hover,&:active]:shadow-purple-500/20">
        <div className={cn("inline-flex p-3 rounded-xl bg-linear-to-br mb-4 shadow-lg", color)}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl md:text-4xl font-bold text-white mb-2 bg-linear-to-r from-white to-white/70 bg-clip-text">
          {value}
        </h3>

        <p className="text-xs sm:text-sm xl:text-base text-white/60 font-medium whitespace-nowrap ">
          {t(`${keyId}.label`)}
        </p>

        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 to-pink-500/0 group-[&:hover,&:active]:from-purple-500/10 group-[&:hover,&:active]:to-pink-500/10 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.article>
  );
};

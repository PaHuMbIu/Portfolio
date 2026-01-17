"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ICTAButtonData } from "../model/ctaData";

interface CTAButtonProps extends ICTAButtonData {
  Icon: LucideIcon;
  index: number;
}

export const CTAButton = ({
  Icon,
  keyId,
  href,
  index,
  gradient,
  hoverGradient,
  isExternal,
}: CTAButtonProps) => {
  const t = useTranslations("home.cta");
  const target = isExternal ? "_blank" : "_self";

  return (
    <Link key={keyId} href={href} target={target} className="block">
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-xl px-6 py-4 bg-linear-to-r",
          "hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer",
          gradient,
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0, delay: index * 0.1 }}
      >
        <div className="relative z-10 flex items-center gap-3 text-white font-semibold">
          <Icon className="w-5 h-5" />
          <span>{t(`${keyId}.label`)}</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>

        <div
          className={cn(
            "absolute inset-0 bg-linear-to-r",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            hoverGradient,
          )}
        />
      </motion.div>
    </Link>
  );
};

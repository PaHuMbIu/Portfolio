"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IImageUrl } from "../model/timelineData";
import Link from "next/link";
import { ExternalLink, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  cardOverlay,
  cardGradientOverlay,
  cardShimmerOverlay,
  cardShimmerEffect,
  cardHoverOverlay,
} from "@/shared/ui/tv/card";
import { TechStack } from "./TechStack";

interface ProjectGalleryProps {
  image: IImageUrl;
  stack: string[];
}

export const ProjectGallery = ({ image, stack }: ProjectGalleryProps) => {
  const t = useTranslations("timeline.projectGallery");

  const { name, image: imageUrl, url } = image;

  const statusProject = url === "Frozen" ? t("frozen") : t("openProject");
  const activeUrl = url === "Frozen" ? null : url;
  const isFrozen = url === "Frozen";

  return (
    <motion.div
      key={name}
      className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-sm shadow-lg shadow-purple-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ul className="absolute z-10 top-0 left-4 group-hover:opacity-0 transition-opacity duration-300">
        <TechStack stack={stack} />
      </ul>

      <div className={cardOverlay({ frozen: isFrozen })} />

      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={400}
          className="w-full max-h-[400px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        <div className={cardGradientOverlay({ frozen: isFrozen })} />

        <div className={cardShimmerOverlay()}>
          <div className={cardShimmerEffect()} />
        </div>

        <Link
          href={activeUrl || ""}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "absolute inset-0 z-10 flex flex-col justify-end",
            !activeUrl && "pointer-events-none cursor-default",
          )}
        >
          <motion.div
            className="w-full p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
            initial={false}
          >
            <div className="flex items-center gap-3 text-white">
              <motion.div
                className={cn(
                  "p-2 rounded-lg border transition-all duration-300",
                  isFrozen ?
                    "bg-slate-800/60 border-slate-600/40"
                  : "bg-purple-500/20 border-purple-400/40 group-hover:bg-purple-500/30 group-hover:border-purple-400/60",
                )}
              >
                {isFrozen ?
                  <Snowflake className="w-5 h-5 text-slate-300" />
                : <ExternalLink className="w-5 h-5 text-purple-200" />}
              </motion.div>

              <span className="font-semibold text-lg tracking-wide">{statusProject}</span>
            </div>
          </motion.div>
        </Link>

        <div className={cardHoverOverlay()} />
      </div>

      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        <div className="px-4 py-2 bg-black/70 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl">
          <p className="text-sm font-semibold text-white tracking-wide">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

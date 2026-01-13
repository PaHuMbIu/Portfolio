"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IImageUrl } from "../../timeline/model/timelineData";
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
  cardContainer,
} from "@/shared/ui/tv/card";
import { TechStack } from "./TechStack";
import { fadeUpWithDelay } from "@/shared/animations";

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
      className={cardContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpWithDelay(0.2)}
    >
      <ul
        className={cn(
          "absolute z-10 top-0 group-[&:hover,&:active]:opacity-0 transition-opacity duration-300",
          "left-2 sm:left-4",
        )}
      >
        <TechStack stack={stack} />
      </ul>

      <div className={cardOverlay({ frozen: isFrozen })} />

      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={400}
          className={cn(
            "w-full object-cover transition-all duration-700 group-[&:hover,&:active]:scale-110 group-[&:hover,&:active]:brightness-110",
            "max-h-[250px] sm:max-h-[400px]",
          )}
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
            className={cn(
              "w-full transform translate-y-full group-[&:hover,&:active]:translate-y-0 transition-transform duration-500 ease-out",
              "p-3 sm:p-5",
            )}
            initial={false}
          >
            <div className={cn("flex items-center text-white", "gap-2 sm:gap-3")}>
              <motion.div
                className={cn(
                  "rounded-lg border transition-all duration-300",
                  "p-1.5 sm:p-2",
                  isFrozen ?
                    "bg-slate-800/60 border-slate-600/40"
                  : "bg-purple-500/20 border-purple-400/40 group-[&:hover,&:active]:bg-purple-500/30 group-[&:hover,&:active]:border-purple-400/60",
                )}
              >
                {isFrozen ?
                  <Snowflake className={cn("text-slate-300", "w-4 h-4 sm:w-5 sm:h-5")} />
                : <ExternalLink className={cn("text-purple-200", "w-4 h-4 sm:w-5 sm:h-5")} />}
              </motion.div>

              <span className={cn("font-semibold tracking-wide", "text-sm sm:text-lg")}>
                {statusProject}
              </span>
            </div>
          </motion.div>
        </Link>

        <div className={cardHoverOverlay()} />
      </div>

      <motion.div
        className={cn(
          "absolute opacity-0 group-[&:hover,&:active]:opacity-100 transition-opacity duration-500 pointer-events-none z-20",
          "top-2 right-2 sm:top-4 sm:right-4",
        )}
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        <div
          className={cn(
            "bg-black/70 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl",
            "px-2 py-1 sm:px-4 sm:py-2",
          )}
        >
          <p className={cn("font-semibold text-white tracking-wide", "text-xs sm:text-sm")}>
            {name}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

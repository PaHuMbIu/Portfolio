"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import {
  cardContainer,
  cardGradientOverlay,
  cardShimmerOverlay,
  cardShimmerEffect,
  cardHoverOverlay,
} from "@/shared/ui/tv/card";
import { fadeUpWithDelay } from "@/shared/animations";
import Image from "next/image";
import { ExternalLink, Snowflake } from "lucide-react";
import { ProjectActionButton } from "./ProjectActionButton";
import { IProjectItem } from "@/widgets/timeline/model/timelineData";

interface ProjectCardProps {
  project: IProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = useTranslations("timeline.projectGallery");

  const { name, image, url } = project;

  const statusProject = url === "Frozen" ? t("frozen") : t("openProject");

  const activeUrl = url === "Frozen" ? null : url;
  const isFrozen = url === "Frozen";

  return (
    <motion.article
      key={name}
      className={cn(cardContainer(), "w-full  md:w-[420px]")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpWithDelay(0.2)}
    >
      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          className="w-full max-h-[400px] object-cover transition-all duration-700 group-[&:hover,&:active]:scale-110 group-[&:hover,&:active]:brightness-110"
        />

        <div className={cardGradientOverlay({ frozen: isFrozen })} />

        <div className={cardShimmerOverlay()}>
          <div className={cardShimmerEffect()} />
        </div>

        <motion.div className="absolute inset-0 z-10 flex flex-col justify-end">
          <motion.div
            className="w-full transform translate-y-full group-[&:hover,&:active]:translate-y-0 transition-transform duration-500 ease-out p-3 sm:p-5"
            initial={false}
          >
            <ProjectActionButton
              activeUrl={activeUrl || ""}
              isDisabled={isFrozen}
              Icon={isFrozen ? Snowflake : ExternalLink}
              buttonText={statusProject}
            />
          </motion.div>
        </motion.div>

        <div className={cardHoverOverlay()} />
      </div>

      <motion.div
        className="absolute opacity-0 group-[&:hover,&:active]:opacity-100 transition-opacity duration-500 pointer-events-none z-20 top-2 right-2 sm:top-4 sm:right-4"
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-black/70 rounded-xl border border-white/30 shadow-xl px-2 py-1 sm:px-4 sm:py-2">
          <p className="font-semibold text-white tracking-wide text-xs sm:text-sm">{name}</p>
        </div>
      </motion.div>
    </motion.article>
  );
};

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
import Image from "next/image";
import { Code, ExternalLink, Lock, Snowflake } from "lucide-react";
import { TechStack } from "@/widgets/timeline-item/ui/TechStack";
import { IProject } from "@/widgets/projects-gallery/model/projectsData";
import { ProjectActionButton } from "./ProjectActionButton";

interface GalleryProjectCardProps {
  project: IProject;
  stack: string[];
}

export const GalleryProjectCard = ({ project, stack }: GalleryProjectCardProps) => {
  const t = useTranslations("timeline.projectGallery");

  const { projectName, projectImage, projectUrl, codeLink } = project;

  const statusProject = projectUrl === "Frozen" ? t("frozen") : t("openProject");

  const activeUrl = projectUrl === "Frozen" ? null : projectUrl;
  const activeCodeLink = codeLink === "NDA" ? null : codeLink;

  const isNDA = codeLink === "NDA";
  const isFrozen = projectUrl === "Frozen";

  return (
    <article key={projectName} className={cn(cardContainer(), "aspect-5/3")}>
      <ul
        className={cn(
          "absolute z-10 top-0 group-[&:hover,&:active]:opacity-0 transition-opacity duration-300",
          "left-2 sm:left-4",
        )}
      >
        <TechStack stack={stack} />
      </ul>

      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={projectImage}
          alt={projectName}
          width={500}
          height={400}
          className="w-full h-full object-cover transition-all duration-700 group-[&:hover,&:active]:scale-110"
        />

        <div className={cardGradientOverlay({ frozen: isFrozen })} />

        <div className="hidden md:block">
          <div className={cardShimmerOverlay()}>
            <div className={cardShimmerEffect()} />
          </div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <motion.div
            className={cn(
              "w-full transform translate-y-full group-[&:hover,&:active]:translate-y-0 transition-transform duration-500 ease-out",
              "p-3 sm:p-5",
            )}
            initial={false}
          >
            <div className={cn("flex items-center gap-2 sm:gap-3")}>
              <ProjectActionButton
                activeUrl={activeUrl || ""}
                isDisabled={isFrozen}
                Icon={isFrozen ? Snowflake : ExternalLink}
                buttonText={statusProject}
              />

              <ProjectActionButton
                activeUrl={activeCodeLink || ""}
                isDisabled={isNDA}
                Icon={isNDA ? Lock : Code}
                buttonText={t("code")}
              />
            </div>
          </motion.div>
        </div>

        <div className={cardHoverOverlay()} />
      </div>

      <motion.div
        className={cn(
          "absolute opacity-0 group-[&:hover,&:active]:opacity-100 transition-opacity duration-500 pointer-events-none z-20",
          "top-2 right-2 sm:top-3 sm:right-3",
        )}
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        <div
          className={cn(
            "bg-black/70 rounded-xl border border-white/30 shadow-xl",
            "px-2 py-1 sm:px-3 sm:py-1.5",
          )}
        >
          <p className={cn("font-semibold text-white tracking-wide", "text-xs sm:text-sm")}>
            {projectName}
          </p>
        </div>
      </motion.div>
    </article>
  );
};

"use client";

import { PROJECTS_DATA } from "../model/projectsData";
import { GalleryProjectCard } from "@/widgets";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { DecorativeLine } from "@/shared/ui";
import { ProjectsGalleryFilters } from "@/features";
import { useProjectsFilters } from "@/features/projects-gallery-filters/model/useProjectsFilters";
import { useTranslations } from "next-intl";

export const ProjectsGallery = () => {
  const t = useTranslations("projects");

  const {
    technologiesFilters,
    searchQuery,
    filteredProjects,
    setTechnologiesFilters,
    setSearchQuery,
    handleCheckedTechnology,
  } = useProjectsFilters();

  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <header className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("title")}</h1>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-purple-400 text-sm sm:text-base">
                <span className="font-medium">{PROJECTS_DATA.length}</span>
                <span className="text-white/60">{t("projectCount")}</span>
              </div>

              {(technologiesFilters.length > 0 || searchQuery.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{filteredProjects.length}</span>
                  <span className="text-white/60">{t("filters.found")}</span>
                </motion.div>
              )}
            </div>
          </div>

          <ProjectsGalleryFilters
            setTechnologiesFilters={setTechnologiesFilters}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            handleCheckedTechnology={handleCheckedTechnology}
            technologiesFilters={technologiesFilters}
          />
        </div>
      </header>

      <DecorativeLine delay={0.3} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((projectItem) => (
          <GalleryProjectCard
            key={projectItem.id}
            project={projectItem}
            stack={projectItem.stack}
          />
        ))}
      </div>
    </section>
  );
};

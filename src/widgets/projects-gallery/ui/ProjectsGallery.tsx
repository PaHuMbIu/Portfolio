"use client";

import { PROJECTS_DATA } from "../model/projectsData";
import { GalleryProjectCard } from "@/widgets";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input, DecorativeLine } from "@/shared/ui";
import { fadeUpItem, fadeUpWithDelay } from "@/shared/animations";
import { useState, useMemo } from "react";

export const ProjectsGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Получаем все уникальные технологии
  // const allTechs = useMemo(() => {
  //   const techSet = new Set<string>();
  //   PROJECTS_DATA.forEach((project) => {
  //     project.stack.forEach((tech) => techSet.add(tech));
  //   });
  //   return Array.from(techSet).sort();
  // }, []);

  // // Статистика по технологиям
  // const techStats = useMemo(() => {
  //   const stats: Record<string, number> = {};
  //   PROJECTS_DATA.forEach((project) => {
  //     project.stack.forEach((tech) => {
  //       stats[tech] = (stats[tech] || 0) + 1;
  //     });
  //   });
  //   return stats;
  // }, []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    if (!query) return PROJECTS_DATA;

    return PROJECTS_DATA.filter((project) => project.projectName.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <motion.div
        className="flex flex-col gap-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpWithDelay(0.1)}
      >
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Мои проекты</h1>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-purple-400 text-sm sm:text-base">
                <span className="font-medium">{PROJECTS_DATA.length}</span>
                <span className="text-white/60">проектов</span>
              </div>
              {/* {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{filteredProjects.length}</span>
                  <span className="text-white/60">найдено</span>
                </motion.div>
              )} */}
            </div>
          </div>

          <div className="relative w-full sm:w-auto sm:min-w-[300px] group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/60 pointer-events-none z-10 transition-colors duration-200 group-focus-within:text-purple-400" />
            <Input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              type="text"
              placeholder="Поиск проектов..."
              variant="glass"
            />
          </div>
        </header>

        <DecorativeLine delay={0.3} />
      </motion.div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((projectItem) => (
          <motion.div key={projectItem.id} variants={fadeUpItem}>
            <GalleryProjectCard project={projectItem} stack={projectItem.stack} />
          </motion.div>
        ))}
      </section>
    </div>
  );
};

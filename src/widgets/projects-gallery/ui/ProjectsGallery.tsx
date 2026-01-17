"use client";

import { PROJECTS_DATA } from "../model/projectsData";
import { GalleryProjectCard } from "@/widgets";
import { motion } from "framer-motion";
import { Search, TrendingUp, Filter } from "lucide-react";
import {
  Input,
  DecorativeLine,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/shared/ui";
import { useState, useMemo } from "react";

export const ProjectsGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [technologiesFilters, setTechnologiesFilters] = useState<string[]>([]);

  const technologiesData = Array.from(
    new Set(PROJECTS_DATA.flatMap((project) => project.stack)),
  ).sort();

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    return PROJECTS_DATA.filter((project) => {
      const matchesTechnologies = technologiesFilters.every((technology) =>
        project.stack.includes(technology),
      );

      const matchesSearch = project.projectName.toLowerCase().includes(query);

      return matchesTechnologies && matchesSearch;
    });
  }, [searchQuery, technologiesFilters]);

  const handleCheckedTechnology = (technology: string, checked: boolean) => {
    setTechnologiesFilters((prev) => {
      return checked ? [technology, ...prev] : prev.filter((value) => value !== technology);
    });
  };

  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <header className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Мои проекты</h1>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-purple-400 text-sm sm:text-base">
                <span className="font-medium">{PROJECTS_DATA.length}</span>
                <span className="text-white/60">проектов</span>
              </div>

              {(technologiesFilters.length > 0 || searchQuery.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{filteredProjects.length}</span>
                  <span className="text-white/60">найдено</span>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <form
              className="relative w-full sm:w-auto sm:min-w-[280px] group appearance-none"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/60 pointer-events-none z-10 transition-colors duration-200 group-focus-within:text-purple-400" />
              <Input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Поиск проектов..."
                variant="glass"
              />
            </form>

            <Popover>
              <PopoverTrigger className="flex items-center justify-center gap-2 whitespace-nowrap">
                <Filter className="w-4 h-4" />
                <span>Фильтры</span>
                {technologiesFilters.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs font-medium bg-purple-500/20 text-purple-300 rounded">
                    {technologiesFilters.length}
                  </span>
                )}
              </PopoverTrigger>

              <PopoverContent variant="glass" className="p-0">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-sm font-semibold text-white">Технологии</h3>

                  <p className="text-xs text-white/60 mt-1">
                    Выбрано: {technologiesFilters.length}
                  </p>
                </div>

                <ul className="p-3 max-h-[300px] overflow-y-auto space-y-1">
                  {technologiesData.map((technology) => (
                    <li key={technology}>
                      <label
                        htmlFor={technology}
                        className="flex gap-3 items-center px-2 py-2 rounded-md hover:bg-white/5 transition-colors duration-150 cursor-pointer"
                      >
                        <Checkbox
                          id={technology}
                          checked={technologiesFilters.includes(technology)}
                          onCheckedChange={(checked) =>
                            handleCheckedTechnology(technology, Boolean(checked))
                          }
                        />
                        <span className="text-white/90 text-sm">{technology}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
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

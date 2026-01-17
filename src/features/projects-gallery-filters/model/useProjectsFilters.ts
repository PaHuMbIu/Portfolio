import { useState, useMemo } from "react";
import { PROJECTS_DATA } from "@/widgets/projects-gallery/model/projectsData";

export const useProjectsFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [technologiesFilters, setTechnologiesFilters] = useState<string[]>([]);

  const technologiesData = Array.from(
    new Set(PROJECTS_DATA.flatMap((project) => project.stack)),
  ).sort();

  const handleCheckedTechnology = (technology: string, checked: boolean) => {
    setTechnologiesFilters((prev) => {
      return checked ? [technology, ...prev] : prev.filter((value) => value !== technology);
    });
  };

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

  return {
    searchQuery,
    setSearchQuery,
    setTechnologiesFilters,
    technologiesData,
    technologiesFilters,
    handleCheckedTechnology,
    filteredProjects,
  };
};

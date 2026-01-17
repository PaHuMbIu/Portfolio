import { Input, Popover, PopoverTrigger, PopoverContent, Checkbox, Button } from "@/shared/ui";
import { Search, Filter, X } from "lucide-react";
import { useProjectsFilters } from "../model/useProjectsFilters";
import { useTranslations } from "next-intl";

interface ProjectsGalleryFiltersProps {
  setTechnologiesFilters: (technologies: string[]) => void;
  setSearchQuery: (searchQuery: string) => void;
  searchQuery: string;
  handleCheckedTechnology: (technology: string, checked: boolean) => void;
  technologiesFilters: string[];
}

export const ProjectsGalleryFilters = ({
  setSearchQuery,
  searchQuery,
  handleCheckedTechnology,
  technologiesFilters,
  setTechnologiesFilters,
}: ProjectsGalleryFiltersProps) => {
  const t = useTranslations("projects.filters");

  const { technologiesData } = useProjectsFilters();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
      <form
        className="relative w-full sm:w-auto sm:max-w-[280px] group appearance-none"
        onSubmit={(e) => e.preventDefault()}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/60 pointer-events-none z-10 transition-colors duration-200 group-focus-within:text-purple-400" />
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder={t("search")}
          variant="glass"
        />
      </form>

      <Popover>
        <PopoverTrigger className="flex items-center justify-center gap-2 whitespace-nowrap">
          <Filter className="w-4 h-4" />
          <span>{t("filters")}</span>
          {technologiesFilters.length > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-xs font-medium bg-purple-500/20 text-purple-300 rounded">
              {technologiesFilters.length}
            </span>
          )}
        </PopoverTrigger>

        <PopoverContent variant="glass" className="p-0 z-10">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">{t("technologies")}</h3>

              <p className="text-xs text-white/60 mt-1">
                {t("selected")}: {technologiesFilters.length}
              </p>
            </div>

            {technologiesFilters.length > 0 && (
              <Button variant="clear" onClick={() => setTechnologiesFilters([])}>
                <X />
              </Button>
            )}
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
  );
};

"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/shared/lib/utils";

interface AppMetadataProps {
  isCollapsed?: boolean;
}

export const AppMetadata = ({ isCollapsed = false }: AppMetadataProps) => {
  const t = useTranslations("sidebar");

  return (
    <div
      className={cn(
        "flex flex-col gap-1 text-xs text-white/60 w-full transition-opacity duration-200",
        isCollapsed ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="flex items-center justify-between">
        <span>{t("version")}:</span>
        <span className="font-medium">0.1.0</span>
      </div>

      <div className="flex items-center justify-between">
        <span>{t("createdBy")}:</span>
        <span className="font-medium">Pavel</span>
      </div>
    </div>
  );
};

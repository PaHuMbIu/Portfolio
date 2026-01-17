"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/shared/lib/utils";
import { FileText, Calendar } from "lucide-react";
import { SidebarContext } from "@/shared/ui/sidebar";
import { useContext } from "react";

export const ChangelogDialog = () => {
  const t = useTranslations("changelog");

  const sidebarContext = useContext(SidebarContext);
  const open = sidebarContext?.open ?? true;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="changelog">
          <FileText className="w-4 h-4 shrink-0" />
          <span
            className={cn(
              "transition-200ms ease-in-out items-baseline",
              open ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none",
            )}
          >
            {t("button")}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black/70 backdrop-blur-xl border-white/20 text-white max-w-[calc(100%-20px)] sm:max-w-2xl max-h-[calc(100vh-20px)] overflow-y-auto shadow-xl">
        <DialogHeader className="space-y-2 sm:space-y-3 pb-3 sm:pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
              {t("title")}
            </DialogTitle>
          </div>
          <DialogDescription className="text-white/60 text-xs sm:text-sm leading-relaxed">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        <section className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
          <article className="group relative overflow-hidden rounded-xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 p-3 sm:p-5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {t("releases.0.title")}
                </h3>

                <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/60" />
                  <time className="text-[10px] sm:text-xs font-medium text-white/70">
                    18.01.2026
                  </time>
                </div>
              </div>

              <div className="pl-2 border-l-2 border-white/10">
                <ul className="space-y-2 sm:space-y-2.5">
                  <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{t("releases.0.changes.0")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ProjectActionButtonProps {
  activeUrl: string;
  isDisabled: boolean;
  Icon: LucideIcon;
  buttonText: string;
}

export const ProjectActionButton = ({
  activeUrl,
  isDisabled,
  Icon,
  buttonText,
}: ProjectActionButtonProps) => {
  return (
    <Link
      href={activeUrl || ""}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(!activeUrl && "pointer-events-none cursor-default")}
    >
      <div className={cn("flex items-center text-white", "gap-2 sm:gap-3")}>
        <motion.div
          className={cn(
            "rounded-lg border transition-all duration-300",
            "p-1.5 sm:p-2",
            isDisabled ?
              "bg-slate-800/60 border-slate-600/40"
            : "bg-purple-500/20 border-purple-400/40 group-[&:hover,&:active]:bg-purple-500/30 group-[&:hover,&:active]:border-purple-400/60",
          )}
        >
          {isDisabled ?
            <Icon className={cn("text-slate-300", "w-4 h-4 sm:w-5 sm:h-5")} />
          : <Icon className={cn("text-purple-200", "w-4 h-4 sm:w-5 sm:h-5")} />}
        </motion.div>

        <span className={cn("font-semibold tracking-wide", "text-sm sm:text-lg")}>
          {buttonText}
        </span>
      </div>
    </Link>
  );
};

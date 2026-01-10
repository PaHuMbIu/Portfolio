"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { IProjectLink } from "../model/timelineData";

interface ProjectLinksProps {
  link: IProjectLink;
}

export const ProjectLinks = ({ link }: ProjectLinksProps) => {
  const { name, url } = link;
  const isDisabled = url === "NDA";

  return (
    <motion.div
      whileHover={!isDisabled ? { scale: 1.05, y: -2 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={url}
        target="_blank"
        className={cn(
          "group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border",
          {
            "text-gray-500 cursor-not-allowed pointer-events-none border-gray-700/50 bg-gray-800/20":
              isDisabled,
          },

          {
            "text-white bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-teal-500/20 border-blue-500/30 hover:border-blue-500/60 hover:from-blue-500/30 hover:via-cyan-500/20 hover:to-teal-500/30 hover:shadow-lg hover:shadow-blue-500/30 before:absolute before:inset-0 before:bg-linear-to-r before:from-blue-500/0 before:via-cyan-400/0 before:to-teal-500/0 before:transition-all before:duration-300 hover:before:from-blue-500/20 hover:before:via-cyan-400/20 hover:before:to-teal-500/20":
              !isDisabled,
          },
        )}
      >
        <div className="relative z-10 flex items-center gap-2.5">
          <ExternalLink
            className={cn(
              "w-4 h-4 transition-all duration-300",
              !isDisabled && "group-hover:scale-110 group-hover:rotate-12",
            )}
          />
          <span className="relative z-10">{name}</span>
        </div>
      </Link>
    </motion.div>
  );
};

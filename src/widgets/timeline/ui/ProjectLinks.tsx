"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { IProjectLink } from "../model/timelineData";
import { Button } from "@/shared/ui/button";

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
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Button
        asChild
        variant={isDisabled ? "glowBlueDisabled" : "glowBlue"}
        className="text-xs sm:text-sm font-semibold"
      >
        <Link href={url} target="_blank">
          {!isDisabled && (
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
            <motion.div
              whileHover={!isDisabled ? { rotate: [0, -10, 10, -10, 0] } : undefined}
              transition={{ duration: 0.5 }}
            >
              <ExternalLink
                className={cn(
                  "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300",
                  !isDisabled && "group-hover:scale-110 group-hover:text-cyan-300",
                )}
              />
            </motion.div>

            <span
              className={cn(
                "relative z-10 transition-all duration-300",
                !isDisabled && "group-hover:text-cyan-100",
              )}
            >
              {name}
            </span>
          </div>
        </Link>
      </Button>
    </motion.div>
  );
};

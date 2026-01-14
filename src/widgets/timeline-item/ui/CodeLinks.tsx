"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ICodeLink } from "../../timeline/model/timelineData";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { hoverScaleLift, iconWiggle } from "@/shared/animations";

interface CodeLinksProps {
  link: ICodeLink;
}

export const CodeLinks = ({ link }: CodeLinksProps) => {
  const { name, url } = link;
  const isDisabled = url === "NDA";

  return (
    <motion.div {...(!isDisabled ? hoverScaleLift : {})}>
      <Button
        asChild
        variant={isDisabled ? "glowDisabled" : "glow"}
        className="text-xs sm:text-sm font-semibold"
      >
        <Link href={url} target="_blank">
          <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
            <motion.div {...(!isDisabled ? iconWiggle : {})}>
              <Github
                className={cn(
                  "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300",
                  !isDisabled && "group-hover:scale-110 group-hover:text-purple-300",
                )}
              />
            </motion.div>

            <span>{name}</span>
          </div>
        </Link>
      </Button>
    </motion.div>
  );
};

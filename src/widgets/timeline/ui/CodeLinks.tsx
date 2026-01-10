import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ICodeLink } from "../model/timelineData";
import Link from "next/link";
import { Github } from "lucide-react";

interface CodeLinksProps {
  link: ICodeLink;
}

export const CodeLinks = ({ link }: CodeLinksProps) => {
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
            "text-white bg-linear-to-br from-purple-500/20 via-purple-600/10 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60 hover:from-purple-500/30 hover:via-purple-600/20 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/30 before:absolute before:inset-0 before:bg-linear-to-r before:from-purple-500/0 before:via-purple-400/0 before:to-pink-500/0 before:transition-all before:duration-300 hover:before:from-purple-500/20 hover:before:via-purple-400/20 hover:before:to-pink-500/20":
              !isDisabled,
          },
        )}
      >
        <div className="relative z-10 flex items-center gap-2.5">
          <Github
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

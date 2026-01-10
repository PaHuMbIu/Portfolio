"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IImageUrl } from "../model/timelineData";
import Link from "next/link";
import { ExternalLink, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ProjectGalleryProps {
  image: IImageUrl;
}

export const ProjectGallery = ({ image }: ProjectGalleryProps) => {
  const t = useTranslations("timeline.projectGallery");

  const { name, image: imageUrl, url } = image;

  const statusProject = url === "Frozen" ? t("frozen") : t("openProject");
  const activeUrl = url === "Frozen" ? null : url;
  const isFrozen = url === "Frozen";

  return (
    <motion.div
      key={name}
      className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-sm shadow-lg shadow-purple-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 blur-xl -z-10" />

      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={400}
          className="w-full max-h-[400px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        <div
          className={cn(
            "absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            isFrozen ? "from-slate-900/90 via-slate-800/60 to-transparent" : "",
          )}
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>

        <Link
          href={activeUrl || ""}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "absolute inset-0 z-10 flex flex-col justify-end",
            !activeUrl && "pointer-events-none cursor-default",
          )}
        >
          <motion.div
            className="w-full p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
            initial={false}
          >
            <div className="flex items-center gap-3 text-white">
              <motion.div
                className={cn(
                  "p-2 rounded-lg backdrop-blur-md border transition-all duration-300",
                  isFrozen ?
                    "bg-slate-800/60 border-slate-600/40"
                  : "bg-purple-500/20 border-purple-400/40 group-hover:bg-purple-500/30 group-hover:border-purple-400/60",
                )}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {isFrozen ?
                  <Snowflake className="w-5 h-5 text-slate-300" />
                : <ExternalLink className="w-5 h-5 text-purple-200" />}
              </motion.div>
              <span className="font-semibold text-lg tracking-wide">{statusProject}</span>
            </div>
          </motion.div>
        </Link>

        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/15 transition-colors duration-500 pointer-events-none rounded-2xl" />
      </div>

      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        <div className="px-4 py-2 bg-black/70 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl">
          <p className="text-sm font-semibold text-white tracking-wide">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";
import { ITimelineItem } from "../model/timelineData";
import Image from "next/image";
import { RoadLine } from "./RoadLine";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: ITimelineItem;
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  const { title, date, description, stack, codeLinks, projectLinks, imageUrls } = item;

  return (
    <div className="relative flex">
      <RoadLine />

      <motion.div
        className="flex-1 pb-8"
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm md:text-base text-purple-400 font-medium">{date}</p>
        </div>

        <div className="space-y-2 text-white/80 text-sm md:text-base leading-relaxed">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {stack && stack.length > 0 && (
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs md:text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}

        {(codeLinks || projectLinks) && (
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {codeLinks?.map((link, index) => {
              const { name, url } = link;
              const isDisabled = url === "NDA";

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    className={cn(
                      "group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border",
                      {
                        "text-gray-500 cursor-not-allowed border-gray-700/50 bg-gray-800/20":
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
            })}

            {projectLinks?.map((link, index) => {
              const { name, url } = link;
              const isDisabled = url === "Заморожен" || url === "NDA";

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border",
                      {
                        "text-gray-500 cursor-not-allowed border-gray-700/50 bg-gray-800/20":
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
            })}
          </motion.div>
        )}

        {imageUrls && imageUrls.length > 0 && (
          <motion.div
            className="mt-6 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {imageUrls.map((image, index) => {
              const { name, image: imageUrl, url } = image;
              const isClickable = url && url !== "NDA" && url !== "Заморожен";

              return (
                <motion.div
                  key={name}
                  className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={name}
                      width={500}
                      height={400}
                      className="w-full max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {isClickable && (
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                      >
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2 text-white">
                            <ExternalLink className="w-5 h-5" />
                            <span className="font-medium">Открыть проект</span>
                          </div>
                        </div>
                      </Link>
                    )}
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300 pointer-events-none" />
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
                      <p className="text-xs font-medium text-white">{name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

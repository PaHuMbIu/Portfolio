"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ITimelineItem } from "../model/timelineData";
import { RoadLine, CodeLinks, ProjectLinks, ProjectGallery } from "@/widgets/timeline";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: ITimelineItem;
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  const t = useTranslations("timeline");
  const { id, stack, codeLinks, projectLinks, imageUrls } = item;

  const date = t.raw(`timelineData.${id}.date`) as string[];
  const title = t(`timelineData.${id}.title`);
  const description = t.raw(`timelineData.${id}.description`) as string[];

  return (
    <div className="relative flex">
      <RoadLine />

      <motion.div
        className="flex-1 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
      >
        <article
          className={cn(
            "relative rounded-xl bg-linear-to-br from-white/5 to-purple-500/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/5",
            "p-3 sm:p-4 md:p-5",
          )}
        >
          <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-purple-600/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-2">
              <h3 className={cn("font-bold text-white mb-1", "text-lg sm:text-xl md:text-2xl")}>
                {title}
              </h3>
              <time
                className={cn("text-purple-400 font-medium", "text-xs sm:text-sm md:text-base")}
              >
                {date}
              </time>
            </div>

            <motion.div
              className={cn(
                "space-y-2 text-white/80 leading-relaxed",
                "text-xs sm:text-sm md:text-base",
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {description.map((paragraph, index) => (
                <motion.p
                  className="text-white/85 leading-[1.8] tracking-wide"
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </article>

        {(codeLinks || projectLinks) && (
          <motion.div
            className={cn("pt-2 flex flex-wrap", "gap-2 sm:gap-4")}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {codeLinks?.map((link, index) => (
              <CodeLinks key={index} link={link} />
            ))}

            {projectLinks?.map((link, index) => (
              <ProjectLinks key={index} link={link} />
            ))}
          </motion.div>
        )}

        {imageUrls && imageUrls.length > 0 && (
          <motion.div
            className={cn(
              "mt-4 flex w-full justify-center",
              "flex-col sm:flex-row",
              "gap-3 sm:gap-4",
              "sm:mt-6",
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {imageUrls.map((image, index) => (
              <ProjectGallery key={index} image={image} stack={stack || []} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

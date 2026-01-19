"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ITimelineItem } from "@/widgets/timeline/model/timelineData";
import { RoadLine, CodeLinks, ProjectLinks } from "@/widgets/timeline-item";
import { cn } from "@/shared/lib/utils";
import {
  fadeUpLeft,
  staggerParagraphs,
  fadeUpSmall,
  fadeUpWithDelay,
  scaleInWithDelay,
} from "@/shared/animations";
import { ProjectCard } from "@/widgets";

interface TimelineItemProps {
  item: ITimelineItem;
  isLast?: boolean;
}

export const TimelineItem = ({ item, isLast = false }: TimelineItemProps) => {
  const t = useTranslations("timeline");
  const { id, stack, codeLinks, projectLinks, projectItems } = item;

  const date = t.raw(`timelineData.${id}.date`) as string[];
  const title = t(`timelineData.${id}.title`);
  const description = t.raw(`timelineData.${id}.description`) as string[];

  return (
    <div className="relative flex">
      <RoadLine isLast={isLast} />

      <motion.div
        className="flex-1 pb-4 sm:pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUpLeft}
      >
        <article
          className={cn(
            "relative rounded-xl bg-linear-to-br from-white/5 to-purple-500/5 border border-white/10 shadow-lg shadow-purple-500/5",
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
              variants={staggerParagraphs}
            >
              {description.map((paragraph, index) => (
                <motion.p
                  className="text-white/85 leading-[1.8] tracking-wide"
                  key={index}
                  variants={fadeUpSmall}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeUpWithDelay(0.3)}
          >
            {codeLinks?.map((link, index) => (
              <CodeLinks key={index} link={link} />
            ))}

            {projectLinks?.map((link, index) => (
              <ProjectLinks key={index} link={link} />
            ))}
          </motion.div>
        )}

        {projectItems && projectItems.length > 0 && (
          <motion.div
            className={cn(
              "mt-4 flex w-full justify-center",
              "flex-col sm:flex-row",
              "gap-3 sm:gap-4",
              "sm:mt-6",
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scaleInWithDelay(0.1)}
          >
            {projectItems.map((project, index) => (
              <ProjectCard key={index} project={project} stack={stack || []} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

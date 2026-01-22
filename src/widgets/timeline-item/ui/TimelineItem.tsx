"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ITimelineItem } from "@/widgets/timeline/model/timelineData";
import { RoadLine, CodeLinks, ProjectLinks } from "@/widgets/timeline-item";
import { cn } from "@/shared/lib/utils";
import { staggerParagraphs, fadeUpWithDelay } from "@/shared/animations";
import { ProjectCard } from "@/widgets";

interface TimelineItemProps {
  item: ITimelineItem;
  isLast?: boolean;
}

export const TimelineItem = ({ item, isLast = false }: TimelineItemProps) => {
  const t = useTranslations("timeline");
  const { id, codeLinks, projectLinks, projectItems } = item;

  const date = t.raw(`timelineData.${id}.date`) as string[];
  const title = t(`timelineData.${id}.title`);
  const description = t.raw(`timelineData.${id}.description`) as string[];

  return (
    <div className="relative flex">
      <RoadLine isLast={isLast} />

      <div className="flex-1 pb-4 sm:pb-8">
        <article
          className={cn(
            "relative rounded-xl bg-linear-to-br from-white/5 to-purple-500/5 border border-white/10 shadow-lg shadow-purple-500/5",
            "p-3 sm:p-4 md:p-5",
          )}
        >
          <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-purple-600/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <header className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-0">
              <div className="mb-0 lg:mb-2 pr-0 lg:pr-2">
                <h3 className={cn("font-bold text-white mb-1", "text-lg sm:text-xl md:text-2xl")}>
                  {title}
                </h3>
                <time
                  className={cn("text-purple-400 font-medium", "text-xs sm:text-sm md:text-base")}
                >
                  {date}
                </time>
              </div>

              {(codeLinks || projectLinks) && (
                <motion.div
                  className="flex sm:flex-nowrap flex-wrap gap-2 sm:gap-4 shrink-0"
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
            </header>

            <div className="relative flex flex-col xl:block">
              {projectItems && (
                <motion.div
                  className="w-full xl:w-auto xl:float-right xl:ml-1 ml-0 mt-1 flex justify-center xl:block order-2 xl:order-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeUpWithDelay(0.2)}
                >
                  {projectItems.map((project) => (
                    <ProjectCard project={project} key={project.name} />
                  ))}
                </motion.div>
              )}

              <motion.div
                className="space-y-2 py-2 xl:py-0 text-white/80 leading-relaxed text-xs sm:text-sm md:text-base order-1 xl:order-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerParagraphs}
              >
                {description.map((paragraph, index) => (
                  <p key={index} className="text-white/85 leading-[1.8] tracking-wide">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

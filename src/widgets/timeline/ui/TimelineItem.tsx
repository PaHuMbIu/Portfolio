"use client";

import { motion } from "framer-motion";
import { ITimelineItem } from "../model/timelineData";
import { RoadLine, TechStack, CodeLinks, ProjectLinks, ProjectGallery } from "@/widgets/timeline";

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

        {stack && stack.length > 0 && <TechStack stack={stack} />}

        {(codeLinks || projectLinks) && (
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
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
            className="mt-6 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {imageUrls.map((image, index) => (
              <ProjectGallery key={index} image={image} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

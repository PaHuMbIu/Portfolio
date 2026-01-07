import { fadeUpItem, staggerContainer } from "@/shared/animations";
import { TECHNOLOGIES_DATA } from "@/widgets/technology-card/model/technologies";
import { TechnologyCard } from "@/widgets/technology-card/ui/TechnologyCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const TechnologyList = () => {
  const tTechnologyCard = useTranslations("technologyCard");

  return (
    <motion.ul
      className="grid grid-cols-[repeat(auto-fit,200px)] justify-center gap-4 md:gap-5 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {TECHNOLOGIES_DATA.map((technology, index) => (
        <motion.li key={index} variants={fadeUpItem}>
          <TechnologyCard
            description={tTechnologyCard(technology.descriptionKey)}
            {...technology}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};

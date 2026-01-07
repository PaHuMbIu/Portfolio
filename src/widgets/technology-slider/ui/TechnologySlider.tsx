"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TechnologyCard } from "@/widgets/technology-card/ui/TechnologyCard";
import { TECHNOLOGIES_DATA } from "@/widgets/technology-card/model/technologies";
import { useTranslations } from "next-intl";
import { fadeUpItem, staggerContainer } from "@/shared/animations";

export const TechnologySlider = () => {
  const tTechnologyCard = useTranslations("technologyCard");

  return (
    <motion.div
      className="w-full technology-slider"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <Swiper
        className="swiper-track"
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView="auto"
        speed={800}
        grabCursor={true}
      >
        {TECHNOLOGIES_DATA.map((technology, index) => (
          <SwiperSlide key={index} className="max-w-[200px]!">
            <motion.div variants={fadeUpItem}>
              <TechnologyCard
                description={tTechnologyCard(technology.descriptionKey)}
                {...technology}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

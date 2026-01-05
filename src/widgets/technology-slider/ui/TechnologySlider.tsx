"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TechnologyCard } from "@/widgets/technology-card/ui/TechnologyCard";
import { TECHNOLOGIES_DATA } from "@/widgets/technology-card/model/technologies";
import { useTranslations } from "next-intl";
import { listVariants, itemVariants } from "@/widgets/home/animations/technologyList.variants";

export const TechnologySlider = () => {
  const tTechnologyCard = useTranslations("technologyCard");

  return (
    <motion.div
      className="w-full technology-slider"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={listVariants}
    >
      <Swiper
        className="swiper-track"
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={0}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 3,
          },
          1490: {
            slidesPerView: 5,
          },
        }}
      >
        {TECHNOLOGIES_DATA.map((technology, index) => (
          <SwiperSlide key={index} className="block!">
            <motion.div variants={itemVariants}>
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

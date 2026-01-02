"use client";

import { SplitText } from "@/shared/ui";
import { useTranslations } from "next-intl";

export const HomeHero = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center max-w-4xl w-full mb-12">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
        <SplitText
          text={t("title")}
          tag="h1"
          delay={25}
          duration={0.8}
          ease="back.out"
          splitType="chars"
          from={{ opacity: 0, y: 50, scale: 0.5, rotationX: -90 }}
          to={{ opacity: 1, y: 0, scale: 1, rotationX: 0 }}
          threshold={0.2}
          rootMargin="-50px"
          className="bg-linear-to-r from-white via-purple-200 to-white bg-clip-text text-white"
        />
      </div>

      <SplitText
        text={t("subtitle")}
        tag="p"
        delay={15}
        duration={0.6}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.2}
        rootMargin="-50px"
        className="text-lg md:text-xl text-center text-white/80 max-w-2xl leading-relaxed"
      />
    </div>
  );
};

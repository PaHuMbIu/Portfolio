"use client";

import { ReactNode, useState } from "react";
// import { Button } from "@/shared/ui";

interface TechnologyCardProps {
  icon: ReactNode;
  description: string;
}

export const TechnologyCard = ({ icon, description }: TechnologyCardProps) => {
  const [flipCard, setFlipCard] = useState(false);

  return (
    <li
      onClick={() => setFlipCard(!flipCard)}
      className="perspective-[1000px] hover-card shadow-sm"
    >
      <article className={`${flipCard ? "flipped" : ""} flip-card`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="w-[100px] h-[100px]">{icon}</div>
          </div>

          <div className="flip-card-back">
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  icon: ReactNode;
  technologyName: string;
  description: string;
  url: string;
}

export const TechnologyCard = ({ icon, technologyName, description, url }: TechnologyCardProps) => {
  const [flipCard, setFlipCard] = useState(false);

  const handleFlipCard = () => setFlipCard(!flipCard);

  return (
    <li className="perspective-[1000px] hover-card shadow-sm">
      <article
        onClick={handleFlipCard}
        className={cn("flip-card cursor-pointer", flipCard && "flipped")}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="w-[100px] h-[100px]">{icon}</div>
          </div>

          <div className="flip-card-back">
            <div className="flex flex-col items-center justify-start w-full h-full">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xl font-bold text-white hover:text-purple-300 transition-colors duration-200 text-center leading-tight"
              >
                {technologyName}
              </Link>

              <div className="w-12 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent mb-2"></div>

              <div className="flex w-full h-full">
                <p className="text-white/90 text-center leading-relaxed text-balance max-w-full">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

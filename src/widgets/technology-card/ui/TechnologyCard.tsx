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
    <li onClick={() => setFlipCard(!flipCard)}>
      <article className="bg-[#FFFFFF0D] transition-all duration-300 backdrop-blur-[10px] hover-card p-5 border-[#21212d] border-3 flex justify-center items-center rounded-[5px] w-[200px] h-[200px] shadow-sm ">
        {flipCard ?
          <p>{description}</p>
        : <div className="w-[100px] h-[100px]">{icon}</div>}
      </article>
    </li>
  );
};

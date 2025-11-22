"use client";

import { ReactNode } from "react";
import { Button } from "@/shared/ui";

interface TechnologyCardProps {
  icon: ReactNode;
  description: string;
}

export const TechnologyCard = ({ icon, description }: TechnologyCardProps) => {
  return (
    <article className="p-5 border border-white/10 flex justify-center items-center rounded-[5px] w-[260px] h-[230px] cursor-pointer">
      <div className="w-[128px] h-[128px]">{icon}</div>
    </article>
    //   </Button>
    // <Button variant="reset" size="reset">
  );
};

"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface TechnologuCardSmallProps {
  icon: ReactNode;
  technologyName: string;
  url: string;
}

export const TechnologuCardSmall = ({ icon, url }: TechnologuCardSmallProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-card group block w-[120px] h-[120px]"
    >
      <div className="flex items-center justify-center w-full h-full bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] p-5 border-[3px] border-[#21212d] rounded-xl shadow-lg transition-[border-color,box-shadow] duration-300 group-hover:border-[rgba(138,43,226,0.8)] group-hover:shadow-[0_12px_40px_rgba(138,43,226,0.5)]">
        <div className="w-[100px] h-[100px]">{icon}</div>
      </div>
    </Link>
  );
};

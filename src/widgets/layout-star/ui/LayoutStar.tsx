"use client";

import { useStarrySky } from "../../../app/providers/StarrySkyContext";

interface LayoutStarProps {
  children: React.ReactNode;
}

export const LayoutStar = ({ children }: LayoutStarProps) => {
  const { isEnabled } = useStarrySky();

  return (
    <div className="p-3 relative w-full">
      {isEnabled && (
        <>
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </>
      )}

      {children}
    </div>
  );
};

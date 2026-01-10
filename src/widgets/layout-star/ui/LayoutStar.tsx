"use client";

interface LayoutStarProps {
  children: React.ReactNode;
}

export const LayoutStar = ({ children }: LayoutStarProps) => {
  return (
    <div className="p-3 relative w-full">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {children}
    </div>
  );
};

"use client";
import { TechnologyCard } from "@/widgets";
import { ReactIcon } from "@/shared/assets";

export default function Home() {
  return (
    <div className="p-3">
      <header></header>

      <div className="flex gap-x-2.5 justify-center pt-20">
        <TechnologyCard icon={<ReactIcon />} description={""} />
        <TechnologyCard icon={<ReactIcon />} description={""} />
        <TechnologyCard icon={<ReactIcon />} description={""} />
        <TechnologyCard icon={<ReactIcon />} description={""} />
      </div>
    </div>
  );
}

// import { motion, useScroll, useTransform } from "framer-motion"
// const { scrollYProgress } = useScroll();
// const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
// <>
//   <div className="h-[200vh]">
//     <svg
//       viewBox="0 0 200 400"
//       className="w-full h-[600px] fixed top-0 left-0"
//     >
//       <motion.path
//         d="M100 0 L100 300 Q100 350 150 350 L200 350"
//         stroke="tomato"
//         strokeWidth="6"
//         fill="none"
//         strokeLinecap="round"
//         style={{
//           pathLength,
//         }}
//       />
//       <motion.circle
//         r="6"
//         fill="tomato"
//         style={{
//           pathLength,
//           offsetPath: "path('M100 0 L100 300 Q100 350 150 350 L200 350')",
//           offsetDistance: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
//         }}
//       />
//     </svg>
//   </div>
// </>
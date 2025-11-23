"use client";
import { TechnologyCard } from "@/widgets";
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ShadcnIcon,
  TailwindIcon,
  GitIcon,
  HtmlIcon,
  CssIcon,
  ScssIcon,
  NextJsIcon,
  // JestIcon,
  // DockerIcon,
  // ViteIcon,
  PrettierIcon,
  EslintIcon,
  // ReduxIcon,
  ZustandIcon,
} from "@/shared/assets";
import SplitText from "@/shared/ui/SplitText";

export default function Home() {
  return (
    <div className="p-3 relative h-screen">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="text-center w-full">
        <SplitText
          text="Hello, my name is Pavel, I'm Frontend developer"
          className="text-2xl font-semibold text-white"
          delay={30}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="flex justify-center items-center pt-20">
        <ul className="flex flex-wrap gap-3.5 max-w-[1100px] justify-center">
          <TechnologyCard icon={<ReactIcon />} description={"141414124124"} />
          <TechnologyCard icon={<JavaScriptIcon />} description={""} />
          <TechnologyCard icon={<TypeScriptIcon />} description={""} />
          <TechnologyCard icon={<HtmlIcon />} description={""} />
          <TechnologyCard icon={<CssIcon />} description={""} />
          <TechnologyCard icon={<ScssIcon />} description={""} />
          <TechnologyCard icon={<GitIcon />} description={""} />
          <TechnologyCard icon={<TailwindIcon />} description={""} />
          <TechnologyCard icon={<NextJsIcon />} description={""} />
          <TechnologyCard icon={<ShadcnIcon />} description={""} />
          <TechnologyCard icon={<PrettierIcon />} description={""} />
          <TechnologyCard icon={<EslintIcon />} description={""} />
          <TechnologyCard icon={<ZustandIcon />} description={""} />
        </ul>
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

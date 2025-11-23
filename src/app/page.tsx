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
  PrettierIcon,
  EslintIcon,
  ZustandIcon,
} from "@/shared/assets";
import SplitText from "@/shared/ui/SplitText";

const technologies = [
  {
    icon: <ReactIcon />,
    description: "141414124124",
  },
  {
    icon: <JavaScriptIcon />,
    description: "",
  },
  {
    icon: <TypeScriptIcon />,
    description: "",
  },
  {
    icon: <HtmlIcon />,
    description: "",
  },
  {
    icon: <CssIcon />,
    description: "",
  },
  {
    icon: <ScssIcon />,
    description: "",
  },
  {
    icon: <GitIcon />,
    description: "",
  },
  {
    icon: <TailwindIcon />,
    description: "",
  },
  {
    icon: <NextJsIcon />,
    description: "",
  },
  {
    icon: <ShadcnIcon />,
    description: "",
  },
  {
    icon: <PrettierIcon />,
    description: "",
  },
  {
    icon: <EslintIcon />,
    description: "",
  },
  {
    icon: <ZustandIcon />,
    description: "",
  },
];

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

      <div className="flex justify-center items-center pt-10">
        <ul className="flex flex-wrap gap-3.5 max-w-[1100px] justify-center">
          {technologies.map((technology) => (
            <TechnologyCard
              key={Date.now() + Math.random()}
              icon={technology.icon}
              description={technology.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

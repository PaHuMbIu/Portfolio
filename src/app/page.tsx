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
    <div className="p-3 relative h-screen w-full">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="flex justify-center items-center pt-10">
        <ul className="flex flex-wrap gap-3.5 max-w-[1100px] justify-center">
          {technologies.map((technology, index) => (
            <TechnologyCard
              key={index}
              icon={technology.icon}
              description={technology.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

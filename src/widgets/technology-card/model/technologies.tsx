import { ReactNode } from "react";
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  GitIcon,
  HtmlIcon,
  CssIcon,
  ScssIcon,
  NextJsIcon,
  ZustandIcon,
  ViteIcon,
  ReduxIcon,
  DockerIcon,
  JestIcon,
} from "@/shared/assets/technologies";

export interface ITechnology {
  icon: ReactNode;
  technologyName: string;
  descriptionKey: string;
  url: string;
}

export interface ITechnologyLearning {
  icon: ReactNode;
  technologyName: string;
  url: string;
}

export const TECHNOLOGIES_DATA: ITechnology[] = [
  {
    icon: <ReactIcon />,
    technologyName: "React",
    descriptionKey: "reactDescription",
    url: "https://react.dev",
  },
  {
    icon: <JavaScriptIcon />,
    technologyName: "JavaScript",
    descriptionKey: "javascriptDescription",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <TypeScriptIcon />,
    technologyName: "TypeScript",
    descriptionKey: "typescriptDescription",
    url: "https://www.typescriptlang.org",
  },
  {
    icon: <HtmlIcon />,
    technologyName: "HTML",
    descriptionKey: "htmlDescription",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <CssIcon />,
    technologyName: "CSS",
    descriptionKey: "cssDescription",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <ScssIcon />,
    technologyName: "SCSS",
    descriptionKey: "scssDescription",
    url: "https://sass-lang.com",
  },
  {
    icon: <GitIcon />,
    technologyName: "Git",
    descriptionKey: "gitDescription",
    url: "https://git-scm.com",
  },
  {
    icon: <TailwindIcon />,
    technologyName: "Tailwind CSS",
    descriptionKey: "tailwindcssDescription",
    url: "https://tailwindcss.com",
  },
  {
    icon: <NextJsIcon />,
    technologyName: "Next.js",
    descriptionKey: "nextjsDescription",
    url: "https://nextjs.org",
  },
  {
    icon: <ZustandIcon />,
    technologyName: "Zustand",
    descriptionKey: "zustandDescription",
    url: "https://zustand-demo.pmnd.rs",
  },
  {
    icon: <ViteIcon />,
    technologyName: "Vite",
    descriptionKey: "viteDescription",
    url: "https://vitejs.dev",
  },
  {
    icon: <ReduxIcon />,
    technologyName: "Redux",
    descriptionKey: "reduxDescription",
    url: "https://redux.js.org",
  },
];

export const TECHNOLOGIES_LEARNING_DATA: ITechnologyLearning[] = [
  {
    icon: <DockerIcon />,
    technologyName: "Docker",
    url: "https://www.docker.com",
  },
  {
    icon: <JestIcon />,
    technologyName: "Jest",
    url: "https://jestjs.io",
  },
];

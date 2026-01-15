import {
  IRobotImage,
  CalculatorImage,
  TimeCraftReactImage,
  TimeCraftImage,
  VirusTotalImage,
  FilmHubImage,
  LoftHausImage,
  CasperGarant,
  Tonex,
} from "@/shared/images/projects";
import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  stack: string[];
  projectName: string;
  projectImage: StaticImageData;
  projectUrl: string;
  codeLink: string;
}

export const PROJECTS_DATA: IProject[] = [
  {
    id: 1,
    stack: ["HTML", "CSS", "JavaScript"],
    projectName: "LoftHouse",
    projectImage: LoftHausImage,
    projectUrl: "https://pahumbiu.github.io/Layout_LoftHouse/",
    codeLink: "https://github.com/PaHuMbIu/Layout_LoftHouse",
  },
  {
    id: 2,
    projectName: "Calculator",
    projectImage: CalculatorImage,
    projectUrl: "https://pahumbiu.github.io/Calculator/",
    codeLink: "https://github.com/PaHuMbIu/Calculator",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    projectName: "VirusTotal",
    projectImage: VirusTotalImage,
    projectUrl: "https://pahumbiu.github.io/VirusTotal/",
    codeLink: "https://github.com/PaHuMbIu/VirusTotal",
    stack: ["React", "CSS"],
  },
  {
    id: 4,
    projectName: "TimeCraft",
    projectImage: TimeCraftImage,
    projectUrl: "http://timecraft.delfinnnn.online",
    codeLink: "https://github.com/PaHuMbIu/TimeCraft_JS",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 5,
    projectName: "TimeCraft React",
    projectImage: TimeCraftReactImage,
    projectUrl: "http://timecraft-react.delfinnnn.online/",
    codeLink: "https://github.com/PaHuMbIu/TimeCraft_React",
    stack: ["React", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 6,
    projectName: "iRobot",
    projectImage: IRobotImage,
    projectUrl: "https://pahumbiu.github.io/iRobot/",
    codeLink: "https://github.com/PaHuMbIu/iRobot",
    stack: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 7,
    stack: ["React", "Next.js", "TailwindCSS", "TypeScript", "shadcn/ui", "Zustand"],
    projectName: "FilmHub",
    projectImage: FilmHubImage,
    projectUrl: "Frozen",
    codeLink: "NDA",
  },
  {
    id: 8,
    stack: ["React", "TailwindCSS", "TypeScript", "RTK query"],
    projectName: "CasperGarant",
    projectImage: CasperGarant,
    projectUrl: "https://t.me/CasperGarantBot",
    codeLink: "NDA",
  },
  {
    id: 9,
    stack: ["React", "TailwindCSS", "TypeScript", "RTK query"],
    projectName: "TRONEX-TWA",
    projectImage: Tonex,
    projectUrl: "https://t.me/tonexfarm_bot",
    codeLink: "https://github.com/VladimirBerl/TRONEX-TWA",
  },
];

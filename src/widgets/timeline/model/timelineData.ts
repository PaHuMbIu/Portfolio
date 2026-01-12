import type { StaticImageData } from "next/image";
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

export interface ICodeLink {
  name: string;
  url: string;
}

export interface IProjectLink {
  name: string;
  url: string;
}

export interface IImageUrl {
  name: string;
  image: StaticImageData;
  url: string;
}

export interface ITimelineItem {
  id: string;
  stack?: string[];
  codeLinks?: ICodeLink[];
  projectLinks?: IProjectLink[];
  imageUrls?: IImageUrl[];
}

export const TIMELINE_DATA: ITimelineItem[] = [
  {
    id: "1",
  },
  {
    id: "2",
    stack: ["HTML", "CSS", "JavaScript"],
    codeLinks: [{ name: "LoftHouse", url: "https://github.com/PaHuMbIu/Layout_LoftHouse" }],
    projectLinks: [{ name: "LoftHouse", url: "https://pahumbiu.github.io/Layout_LoftHouse/" }],
    imageUrls: [
      {
        name: "LoftHouse",
        image: LoftHausImage,
        url: "https://pahumbiu.github.io/Layout_LoftHouse/",
      },
    ],
  },
  {
    id: "3",
    imageUrls: [
      { name: "Calculator", image: CalculatorImage, url: "https://pahumbiu.github.io/Calculator/" },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    codeLinks: [{ name: "Calculator", url: "https://github.com/PaHuMbIu/Calculator" }],
    projectLinks: [{ name: "Calculator", url: "https://pahumbiu.github.io/Calculator/" }],
  },
  {
    id: "4",
    imageUrls: [
      { name: "VirusTotal", image: VirusTotalImage, url: "https://pahumbiu.github.io/VirusTotal/" },
    ],
    stack: ["React", "CSS"],
    codeLinks: [
      { name: "VirusTotal", url: "https://github.com/PaHuMbIu/VirusTotal?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "VirusTotal", url: "https://pahumbiu.github.io/VirusTotal/" }],
  },
  {
    id: "5",
    imageUrls: [
      { name: "TimeCraft", image: TimeCraftImage, url: "http://timecraft.delfinnnn.online" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    codeLinks: [
      { name: "TimeCraft", url: "https://github.com/PaHuMbIu/TimeCraft_JS?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "TimeCraft", url: "http://timecraft.delfinnnn.online" }],
  },
  {
    id: "6",
    imageUrls: [
      {
        name: "TimeCraft React",
        image: TimeCraftReactImage,
        url: "http://timecraft-react.delfinnnn.online/",
      },
    ],
    stack: ["React", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    codeLinks: [{ name: "TimeCraft React", url: "https://github.com/PaHuMbIu/TimeCraft_React" }],
    projectLinks: [{ name: "TimeCraft React", url: "http://timecraft-react.delfinnnn.online/" }],
  },
  {
    id: "7",
    imageUrls: [{ name: "iRobot", image: IRobotImage, url: "https://pahumbiu.github.io/iRobot/" }],
    stack: ["HTML", "SCSS", "JavaScript"],
    codeLinks: [{ name: "iRobot", url: "https://github.com/PaHuMbIu/iRobot" }],
    projectLinks: [{ name: "iRobot", url: "https://pahumbiu.github.io/iRobot/" }],
  },
  {
    id: "8",
    stack: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "shadcn/ui",
      "Django",
      "PostgreSQL",
      "Docker",
    ],
    imageUrls: [{ name: "FilmHub", image: FilmHubImage, url: "Frozen" }],
    codeLinks: [{ name: "FilmHub", url: "NDA" }],
    projectLinks: [{ name: "FilmHub", url: "NDA" }],
  },
  {
    id: "9",
    stack: ["React", "TailwindCSS", "TypeScript", "shadcn/ui", "PostgreSQL", "Docker"],
    codeLinks: [
      { name: "CasperGarant", url: "NDA" },
      { name: "TRONEX-TWA", url: "https://github.com/VladimirBerl/TRONEX-TWA" },
    ],
    imageUrls: [
      { name: "CasperGarant", image: CasperGarant, url: "https://t.me/CasperGarantBot" },
      { name: "Tonex", image: Tonex, url: "https://t.me/tonexfarm_bot" },
    ],
    projectLinks: [
      { name: "CasperGarantBot", url: "https://t.me/CasperGarantBot" },
      { name: "Tonex", url: "https://t.me/tonexfarm_bot" },
    ],
  },
  {
    id: "10",
  },
];

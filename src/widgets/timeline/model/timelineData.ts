import {
  IRobotImage,
  CalculatorImage,
  TimeCraftReactImage,
  TimeCraftImage,
  VirusTotalImage,
  FilmHubImage,
  LoftHausImage,
  CasperGarant,
} from "@/shared/images/projects";

import { StaticImageData } from "next/image";

export interface ICodeLink {
  name: string;
  url: string;
}

export interface IProjectLink {
  name: string;
  url: string;
}

export interface IProjectItem {
  name: string;
  image: StaticImageData;
  url: string;
}

export interface ITimelineItem {
  id: string;
  codeLinks?: ICodeLink[];
  projectLinks?: IProjectLink[];
  projectItems?: IProjectItem[];
}

export const TIMELINE_DATA: ITimelineItem[] = [
  {
    id: "1",
  },
  {
    id: "2",
    codeLinks: [{ name: "LoftHouse", url: "https://github.com/PaHuMbIu/Layout_LoftHouse" }],
    projectLinks: [{ name: "LoftHouse", url: "https://pahumbiu.github.io/Layout_LoftHouse/" }],
    projectItems: [
      {
        name: "LoftHouse",
        image: LoftHausImage,
        url: "https://pahumbiu.github.io/Layout_LoftHouse/",
      },
    ],
  },
  {
    id: "3",
    projectItems: [
      { name: "Calculator", image: CalculatorImage, url: "https://pahumbiu.github.io/Calculator/" },
    ],
    codeLinks: [{ name: "Calculator", url: "https://github.com/PaHuMbIu/Calculator" }],
    projectLinks: [{ name: "Calculator", url: "https://pahumbiu.github.io/Calculator/" }],
  },
  {
    id: "4",
    projectItems: [
      { name: "VirusTotal", image: VirusTotalImage, url: "https://pahumbiu.github.io/VirusTotal/" },
    ],
    codeLinks: [
      { name: "VirusTotal", url: "https://github.com/PaHuMbIu/VirusTotal?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "VirusTotal", url: "https://pahumbiu.github.io/VirusTotal/" }],
  },
  {
    id: "5",
    projectItems: [
      { name: "TimeCraft", image: TimeCraftImage, url: "http://timecraft.delfinnnn.online" },
    ],
    codeLinks: [
      { name: "TimeCraft", url: "https://github.com/PaHuMbIu/TimeCraft_JS?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "TimeCraft", url: "http://timecraft.delfinnnn.online" }],
  },
  {
    id: "6",
    projectItems: [
      {
        name: "TimeCraft React",
        image: TimeCraftReactImage,
        url: "http://timecraft-react.delfinnnn.online/",
      },
    ],
    codeLinks: [{ name: "TimeCraft React", url: "https://github.com/PaHuMbIu/TimeCraft_React" }],
    projectLinks: [{ name: "TimeCraft React", url: "http://timecraft-react.delfinnnn.online/" }],
  },
  {
    id: "7",
    projectItems: [
      { name: "iRobot", image: IRobotImage, url: "https://pahumbiu.github.io/iRobot/" },
    ],
    codeLinks: [{ name: "iRobot", url: "https://github.com/PaHuMbIu/iRobot" }],
    projectLinks: [{ name: "iRobot", url: "https://pahumbiu.github.io/iRobot/" }],
  },
  {
    id: "8",
    projectItems: [{ name: "FilmHub", image: FilmHubImage, url: "Frozen" }],
    codeLinks: [{ name: "FilmHub", url: "NDA" }],
    projectLinks: [{ name: "FilmHub", url: "NDA" }],
  },
  {
    id: "9",
    codeLinks: [{ name: "Casper Garant", url: "NDA" }],
    projectItems: [
      { name: "Casper Garant", image: CasperGarant, url: "https://t.me/CasperGarantBot" },
    ],
    projectLinks: [{ name: "Casper Garant", url: "https://t.me/CasperGarantBot" }],
  },
  {
    id: "10",
  },
];

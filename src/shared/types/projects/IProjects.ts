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

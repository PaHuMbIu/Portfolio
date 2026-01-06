import { Award, Code2, Zap, FolderKanban, LucideIcon } from "lucide-react";

export interface IStatsData {
  icon: LucideIcon;
  keyId: string;
  color: string;
  value: string;
}

export const STATS_DATA: IStatsData[] = [
  {
    icon: FolderKanban,
    keyId: "projects",
    color: "from-purple-500 to-pink-500",
    value: "10+",
  },
  {
    icon: Code2,
    keyId: "technologies",
    color: "from-blue-500 to-cyan-500",
    value: "12+",
  },
  {
    icon: Award,
    keyId: "experience",
    color: "from-orange-500 to-red-500",
    value: "2+",
  },
  {
    icon: Zap,
    keyId: "projectsCompleted",
    color: "from-yellow-500 to-orange-500",
    value: "50+",
  },
];

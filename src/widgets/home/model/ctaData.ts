import { FolderKanban, Send, Github, LucideIcon } from "lucide-react";

export interface ICTAButtonData {
  icon: LucideIcon;
  keyId: string;
  href: string;
  isExternal: boolean;
  gradient: string;
  hoverGradient: string;
}

export const CTA_BUTTONS_DATA: ICTAButtonData[] = [
  {
    icon: FolderKanban,
    keyId: "projects",
    href: "/projects",
    isExternal: false,
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Send,
    keyId: "contact",
    href: "https://t.me/PaHuMbIu",
    isExternal: true,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Github,
    keyId: "github",
    href: "https://github.com/PaHuMbIu",
    isExternal: true,
    gradient: "from-gray-700 to-gray-900",
    hoverGradient: "from-gray-600 to-gray-800",
  },
];

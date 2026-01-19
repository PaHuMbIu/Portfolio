"use client";

import { Github, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { LanguageSwitcher } from "@/features/language-switch/ui/LanguageSwitcher";
import { Button } from "@/shared/ui";
import { BurgerMenu } from "@/widgets";
import { useStarrySky } from "@/app/providers";
import { cn } from "@/shared/lib/utils";

export const Header = () => {
  const { isEnabled, toggle } = useStarrySky();

  return (
    <header className="sticky top-0 left-0 right-0 pt-0 z-50 bg-[#8A2BE208] backdrop-blur-xl">
      <nav className="relative flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
        <div className="flex flex-row-reverse md:flex-row items-center gap-2 w-full justify-end">
          <LanguageSwitcher />

          <hr className="w-px h-6 bg-neutral-700 mx-1" />

          <Button variant="bordered" onClick={toggle}>
            <Sparkles
              className={cn(
                "w-4 h-4 transition-colors duration-200",
                isEnabled ? "text-purple-400" : "text-neutral-400 group-hover:text-purple-400",
              )}
            />
          </Button>

          <hr className="w-px h-6 bg-neutral-700 mx-1" />

          <Button asChild variant="bordered">
            <Link href="https://t.me/PaHuMbIu" target="_blank" rel="noopener noreferrer">
              <Send className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
            </Link>
          </Button>

          <Button asChild variant="bordered">
            <Link href="https://github.com/PaHuMbIu" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
            </Link>
          </Button>
        </div>

        <BurgerMenu />
      </nav>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
    </header>
  );
};

"use client";

import { Github, Send } from "lucide-react";
import Link from "next/link";
import { LanguageSwitcher } from "@/features/language-switch/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui";
import { BurgerMenu } from "@/widgets";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 left-0 right-0 pt-0 z-50 bg-[#8A2BE208] backdrop-blur-xl">
      <nav className="relative flex items-center justify-between px-8 py-4">
        <div className="flex flex-row-reverse md:flex-row items-center gap-2 w-full justify-end">
          <Link
            href="/projects"
            className="md:block hidden px-4 py-2 text-sm font-medium text-white transition-colors duration-200 relative group"
          >
            {t("projects")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
          </Link>

          <LanguageSwitcher />

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

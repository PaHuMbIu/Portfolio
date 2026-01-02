"use client";

import { Button } from "@/shared/ui";
import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export const LanguageSwitcher = () => {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const detectedLanguage = locale === "ru" ? "En" : "Ru";

  const handleToggleLang = () => {
    const newLocale = detectedLanguage.toLowerCase();
    const newPath = pathname.replace(/^\/(ru|en)/, `/${newLocale}`);

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <Button
      onClick={handleToggleLang}
      hover="purpleHover"
      className="p-2.5! max-w-9 max-h-9 text-white/90 flex items-center justify-center"
    >
      {detectedLanguage}
    </Button>
  );
};

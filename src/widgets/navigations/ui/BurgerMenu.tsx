"use client";

import {
  Sheet,
  SheetTrigger,
  Button,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/shared/ui";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "../model/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const BurgerMenu = () => {
  const t = useTranslations("sidebar");
  const locale = useLocale();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.replace(/^\/(ru|en)/, "") || "/";

  const isActive = (href: string) => pathnameWithoutLocale === href;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="bordered" className="md:hidden block justify-end">
          <Menu className="w-4 h-4 " />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <SheetDescription className="sr-only">Main navigation menu for the site</SheetDescription>

        <nav className="flex flex-col gap-2 mt-8">
          {NAV_ITEMS.map((item) => {
            const hrefWithLocale = `/${locale}${item.href}`;

            return (
              <Button
                asChild
                key={item.label}
                variant={isActive(item.href) ? "menuItemActive" : "menuItem"}
              >
                <Link href={hrefWithLocale} className="flex justify-start">
                  <item.icon
                    className={cn(
                      "w-6 h-6 shrink-0 transition-colors duration-300 ease-in-out",
                      "text-white group-hover:text-purple-300",
                      isActive(item.href) && "text-purple-300",
                    )}
                  />
                  <span
                    className={cn(
                      "text-base font-medium whitespace-nowrap transition-colors duration-300 ease-in-out",
                      "text-white group-hover:text-purple-200",
                      isActive(item.href) && "text-purple-200 font-semibold",
                    )}
                  >
                    {t(item.label)}
                  </span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

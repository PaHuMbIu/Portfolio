"use client";

import { ChevronsRight, ChevronsLeft } from "lucide-react";
import Link from "next/link";
import {
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  Sidebar,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
} from "@/shared/ui/sidebar";
import { NAV_ITEMS } from "../model/navItems";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { AppMetadata } from "./AppMetadata";

export const SidebarNav = () => {
  const t = useTranslations("sidebar");
  const { open, toggleSidebar } = useSidebar();
  const locale = useLocale();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.replace(/^\/(ru|en)/, "") || "/";

  const isActive = (href: string) => pathnameWithoutLocale === href;

  const chevronsDirection = open ? <ChevronsLeft /> : <ChevronsRight />;

  return (
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader>
        <SidebarTrigger onClick={toggleSidebar}>{chevronsDirection}</SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const hrefWithLocale = `/${locale}${item.href}`;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="h-[40px]! p-0!">
                      <Link
                        href={hrefWithLocale}
                        className={cn(
                          "sidebar-item flex items-center gap-x-1 rounded-md w-full h-full",
                          isActive(item.href) && "sidebar-item-active",
                        )}
                      >
                        <item.icon className="sidebar-item-icon w-6! h-6! text-white shrink-0 pl-1" />

                        <span
                          className={cn(
                            "sidebar-item-text text-base font-medium whitespace-nowrap text-white transition-200ms ease-in-out",
                            open ?
                              "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 pointer-events-none",
                          )}
                        >
                          {t(item.label)}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto pt-4 border-t border-purple-400/20">
        <AppMetadata isCollapsed={!open} />
      </SidebarFooter>
    </Sidebar>
  );
};

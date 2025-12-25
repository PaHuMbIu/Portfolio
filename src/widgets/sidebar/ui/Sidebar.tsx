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
} from "@/shared/ui/sidebar";
import { SIDEBAR_ITEMS } from "../model/sidebarItems";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const SidebarNav = () => {
  const { open, toggleSidebar } = useSidebar();

  const pathname = usePathname();
  const isActive = (href: string) => pathname == href;

  return (
    <Sidebar
      className="border-r border-purple-400/20 custom-sidebar-styled pt-[68px]! bg-[rgba(138, 43, 226, 0.031)]! group px-5 py-[10px] z-40"
      collapsible="icon"
      side="left"
    >
      <SidebarHeader className="flex-row! items-center gap-3 p-0! pt-1!">
        <SidebarTrigger
          onClick={toggleSidebar}
          className={cn(
            "absolute right-[-13px] top-[77px] z-50",
            "transition-all duration-300 ease-out",
            "rounded-full bg-purple-500/20 backdrop-blur-sm",
            "border border-purple-400/30 shadow-lg shadow-purple-500/20",
            "hover:bg-purple-500/30 hover:text-purple-300 hover:border-purple-400/50",
            "hover:shadow-purple-500/40 hover:scale-110 active:scale-95",
            "[&>svg]:w-5! [&>svg]:h-5! text-white",
            "p-2 w-7 h-7 flex items-center justify-center",
            "group-hover:opacity-100 group-hover:translate-x-0 opacity-0",
          )}
        >
          {open ?
            <ChevronsLeft />
          : <ChevronsRight />}
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_ITEMS.map((item) => (
                <SidebarMenuItem
                  className="text-white w-full hover:bg-transparent transition-default"
                  key={item.label}
                >
                  <SidebarMenuButton className="h-[40px]! p-0!">
                    <Link
                      href={item.href}
                      className={cn(
                        "sidebar-item flex items-center gap-x-1 rounded-md w-full h-full",
                        isActive(item.href) && "sidebar-item-active",
                      )}
                    >
                      <item.icon className="sidebar-item-icon w-6! h-6! text-white shrink-0 pl-1" />

                      <span
                        className={cn(
                          "sidebar-item-text text-base font-medium whitespace-nowrap text-white transition-default p-0!",
                          open ?
                            "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 pointer-events-none",
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

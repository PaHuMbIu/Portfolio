"use client";

import { PanelRightOpenIcon, PanelRightCloseIcon } from "lucide-react";
import Link from "next/link";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/shared/ui/sidebar";
import { SIDEBAR_ITEMS } from "../model/sidebarItems";

export const Sidebar = () => {
  return (
    <SidebarProvider className=" max-w-[220px] bg-[#8A2BE208] backdrop-blur-xl border-r border-border/10">
      <SidebarTrigger className="text-white absolute right-0 top-[3px] z-50 cursor-pointer">
        <PanelRightOpenIcon className="w-6 h-6" />
      </SidebarTrigger>

      <SidebarContent>
        <SidebarMenu>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild className="text-white w-full hover:bg-transparent">
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium text-white">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarProvider>
  );
};

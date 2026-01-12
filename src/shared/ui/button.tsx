import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        transparent: "bg-transparent hover:bg-transparent focus:bg-transparent !p-0 !m-0",
        default: "bg-primary text-primary-foreground [&:hover,&:active]:bg-primary/90",
        destructive: cn(
          "bg-destructive text-white [&:hover,&:active]:bg-destructive/90",
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
          "dark:bg-destructive/60",
        ),
        outline: cn(
          "border bg-background shadow-xs",
          "[&:hover,&:active]:bg-accent [&:hover,&:active]:text-accent-foreground",
          "dark:bg-input/30 dark:border-input dark:[&:hover,&:active]:bg-input/50",
        ),
        secondary: "bg-secondary text-secondary-foreground [&:hover,&:active]:bg-secondary/80",
        ghost: cn(
          "[&:hover,&:active]:bg-accent [&:hover,&:active]:text-accent-foreground",
          "dark:[&:hover,&:active]:bg-accent/50",
        ),
        link: "text-primary underline-offset-4 [&:hover,&:active]:underline",
        glow: cn(
          "group relative overflow-hidden justify-start items-center gap-2.5 text-white",
          "sm:px-6 sm:py-3.5 px-4 py-2.5 rounded-xl transition-all duration-500 backdrop-blur-md border",
          "bg-linear-to-br from-purple-600/30 via-purple-500/20 to-pink-600/30",
          "border-purple-400/40 [&:hover,&:active]:border-purple-400/80",
          "[&:hover,&:active]:from-purple-600/40 [&:hover,&:active]:via-purple-500/30 [&:hover,&:active]:to-pink-600/40",
          "[&:hover,&:active]:shadow-2xl [&:hover,&:active]:shadow-purple-500/40 [&:hover,&:active]:-translate-y-0.5",
          "before:absolute before:inset-0 before:bg-linear-to-r",
          "before:from-purple-500/0 before:via-pink-400/0 before:to-purple-500/0",
          "before:transition-all before:duration-700",
          "[&:hover,&:active]:before:from-purple-500/30 [&:hover,&:active]:before:via-pink-400/30 [&:hover,&:active]:before:to-purple-500/30",
          "after:absolute after:inset-0 after:bg-linear-to-r",
          "after:from-transparent after:via-white/10 after:to-transparent",
          "after:-translate-x-full [&:hover,&:active]:after:translate-x-full",
          "after:transition-transform after:duration-1000",
        ),
        glowDisabled: cn(
          "group relative overflow-hidden justify-start items-center gap-2.5 text-gray-500",
          "sm:px-6 sm:py-3.5 px-4 py-2.5 rounded-xl transition-all duration-500 backdrop-blur-md border",
          "cursor-not-allowed pointer-events-none",
          "border-gray-700/30 bg-gray-800/10 opacity-60",
        ),
        glowBlue: cn(
          "group relative overflow-hidden justify-start items-center gap-2.5",
          "sm:px-6 sm:py-3.5 px-4 py-2.5 rounded-xl transition-all duration-500 backdrop-blur-md border",
          "text-white bg-linear-to-br from-blue-600/30 via-cyan-500/20 to-teal-600/30",
          "border-blue-400/40 [&:hover,&:active]:border-blue-400/80",
          "[&:hover,&:active]:from-blue-600/40 [&:hover,&:active]:via-cyan-500/30 [&:hover,&:active]:to-teal-600/40",
          "[&:hover,&:active]:shadow-2xl [&:hover,&:active]:shadow-blue-500/40 [&:hover,&:active]:-translate-y-0.5",
          "before:absolute before:inset-0 before:bg-linear-to-r",
          "before:from-blue-500/0 before:via-cyan-400/0 before:to-teal-500/0",
          "before:transition-all before:duration-700",
          "[&:hover,&:active]:before:from-blue-500/30 [&:hover,&:active]:before:via-cyan-400/30 [&:hover,&:active]:before:to-teal-500/30",
          "after:absolute after:inset-0 after:bg-linear-to-r",
          "after:from-transparent after:via-white/10 after:to-transparent",
          "after:-translate-x-full [&:hover,&:active]:after:translate-x-full",
          "after:transition-transform after:duration-1000",
        ),
        glowBlueDisabled: cn(
          "group relative overflow-hidden justify-start items-center gap-2.5",
          "sm:px-6 sm:py-3.5 px-4 py-2.5 rounded-xl transition-all duration-500 backdrop-blur-md border",
          "text-gray-500 cursor-not-allowed pointer-events-none",
          "border-gray-700/30 bg-gray-800/10 opacity-60",
        ),
        bordered: cn(
          "p-2.5 text-white [&:hover,&:active]:bg-white/5 relative border border-transparent",
          "[&:hover,&:active]:border-purple-500/50 rounded-md transition-all duration-300",
        ),
        menuItem: cn(
          "group relative flex items-center overflow-hidden border-l-2 border-l-transparent gap-x-1 rounded-md w-full h-[40px] px-1 transition-all duration-300 ease-in-out",
          "[&:hover,&:active]:bg-linear-to-r [&:hover,&:active]:from-purple-400/30 [&:hover,&:active]:via-purple-600/20 [&:hover,&:active]:to-transparent [&:hover,&:active]:shadow-[0_4px_15px_rgba(138,43,226,0.3)] [&:hover,&:active]:border-l-purple-300/50 [&:hover,&:active]:translate-x-1",
        ),
        menuItemActive: cn(
          "group relative flex items-center overflow-hidden border-l-2 border-l-transparent gap-x-1 rounded-md w-full h-[40px] px-1 transition-all duration-300 ease-in-out",
          "bg-linear-to-r from-purple-400/40 via-purple-600/25 to-transparent shadow-[0_4px_20px_rgba(138,43,226,0.4)] border-l-purple-300/80 translate-x-0.5",
          "active:from-purple-400/50 active:via-purple-600/35 active:to-transparent active:shadow-[0_4px_25px_rgba(138,43,226,0.5)] active:border-l-purple-300/90",
        ),
      },
      hover: {
        purpleHover: cn(
          "border border-purple-500/0 [&:hover,&:active]:bg-white/5 [&:hover,&:active]:border-purple-500/50",
          "rounded-md transition-all duration-300",
          "[&:hover,&:active]:text-purple-400 transition-colors duration-200",
        ),
      },
    },
    defaultVariants: {
      variant: "transparent",
    },
  },
);

function Button({
  className,
  variant,
  asChild = false,
  hover,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className, hover }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

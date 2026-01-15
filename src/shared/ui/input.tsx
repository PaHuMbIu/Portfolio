import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        glass: cn(
          "pl-10 pr-10 h-11 bg-white/8 backdrop-blur-md border border-white/10",
          "text-white placeholder:text-white/40",
          "shadow-lg shadow-black/20 rounded-lg",
          "transition-all duration-300",
          "hover:border-white/20 hover:bg-white/8 hover:shadow-xl hover:shadow-purple-500/10",
          "focus:border-purple-500/50 focus:ring-purple-500/20 focus:shadow-xl focus:shadow-purple-500/20",
          "selection:bg-purple-500/50 selection:text-white",
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };

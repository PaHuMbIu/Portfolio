import { Loader2 } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface LoaderProps {
  textLoading: string;
  className?: string;
}

export function Loader({ textLoading, className }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 min-h-100", className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute size-12 rounded-full border-2 border-white/10" />

        <Loader2 className="size-8 text-white/80 animate-spin" strokeWidth={2.5} />
      </div>

      <span className="text-white/60 text-sm font-medium tracking-wide">{textLoading}</span>

      <div className="flex gap-1.5 mt-1">
        <div className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:-0.3s]" />
        <div className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:-0.15s]" />
        <div className="size-1.5 rounded-full bg-white/40 animate-bounce" />
      </div>
    </div>
  );
}

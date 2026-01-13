import { cva } from "class-variance-authority";

export const cardOverlay = cva(
  "absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-500 blur-xl -z-10",
  {
    variants: {
      frozen: {
        true: "from-slate-900/90 via-slate-800/60 to-transparent",
        false:
          "from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/10 group-hover:to-blue-500/10",
      },
    },
    defaultVariants: { frozen: false },
  },
);

export const cardGradientOverlay = cva(
  "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  {
    variants: {
      frozen: {
        true: "from-slate-900/90 via-slate-800/60 to-transparent",
        false: "from-black/90 via-black/50 to-transparent",
      },
    },
    defaultVariants: { frozen: false },
  },
);

export const cardShimmerOverlay = cva(
  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
);

export const cardShimmerEffect = cva(
  "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out",
);

export const cardHoverOverlay = cva(
  "absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/15 transition-colors duration-500 pointer-events-none rounded-2xl",
);

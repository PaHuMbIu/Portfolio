"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface StarrySkyContextProps {
  isEnabled: boolean;
  toggleSkyStar: () => void;
}

const StarrySkyContext = createContext<StarrySkyContextProps | null>(null);

export function useStarrySky() {
  const context = useContext(StarrySkyContext);
  if (!context) {
    throw new Error("useStarrySky must be used within a StarrySkyProvider.");
  }

  return context;
}

interface StarrySkyProviderProps {
  children: ReactNode;
  defaultEnabled?: boolean;
}

export function StarrySkyProvider({ children, defaultEnabled = false }: StarrySkyProviderProps) {
  const [isEnabled, setIsEnabled] = useState<boolean>(defaultEnabled);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem("starry_sky_enabled");
    if (savedState !== null) {
      setIsEnabled(savedState === "true");
    }
  }, []);

  const toggleSkyStar = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    if (isMounted) {
      localStorage.setItem("starry_sky_enabled", String(newState));
    }
  };

  return (
    <StarrySkyContext.Provider value={{ isEnabled, toggleSkyStar }}>
      {children}
    </StarrySkyContext.Provider>
  );
}

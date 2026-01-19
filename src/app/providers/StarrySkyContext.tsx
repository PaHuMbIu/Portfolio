"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface StarrySkyContextProps {
  isEnabled: boolean;
  toggle: () => void;
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
  children: React.ReactNode;
  defaultEnabled?: boolean;
}

export function StarrySkyProvider({ children, defaultEnabled = true }: StarrySkyProviderProps) {
  const [isEnabled, setIsEnabled] = useState<boolean>(defaultEnabled);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Загружаем состояние из localStorage при монтировании
    const savedState = localStorage.getItem("starry_sky_enabled");
    if (savedState !== null) {
      setIsEnabled(savedState === "true");
    }
  }, []);

  const toggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    if (isMounted) {
      localStorage.setItem("starry_sky_enabled", String(newState));
    }
  };

  return (
    <StarrySkyContext.Provider value={{ isEnabled, toggle }}>{children}</StarrySkyContext.Provider>
  );
}

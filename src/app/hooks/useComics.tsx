"use client";
import { Comic } from "@/@types/comic";
import { ReactNode, createContext, useContext, useState } from "react";

interface ComicsProviderProps {
  children: ReactNode;
}

interface ComicsContextData {
  visibleComics: Comic[] | undefined;
  setVisibleComics: (visibleComics: Comic[]) => void;
}

const ComicsContext = createContext({} as ComicsContextData);

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [visibleComics, setVisibleComics] = useState<Comic[]>();

  return (
    <ComicsContext.Provider value={{ visibleComics, setVisibleComics }}>
      {children}
    </ComicsContext.Provider>
  );
}

export const useComics = () => useContext(ComicsContext);

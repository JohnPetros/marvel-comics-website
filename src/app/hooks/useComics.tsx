"use client";
import { Comic } from "@/@types/comic";
import { ReactNode, createContext, useContext, useState } from "react";

type Order = "asc" | "desc";

interface ComicsProviderProps {
  children: ReactNode;
}

interface ComicsContextData {
  visibleComics: Comic[] | undefined;
  setVisibleComics: (visibleComics: Comic[]) => void;
  sortComics: (order: Order) => void;
  order: Order;
}

const ComicsContext = createContext({} as ComicsContextData);

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [visibleComics, setVisibleComics] = useState<Comic[]>();
  const [order, setOrder] = useState<Order>("asc");

  function sortComics(order: Order) {
    
  }

  return (
    <ComicsContext.Provider
      value={{ visibleComics, setVisibleComics, sortComics, order }}
    >
      {children}
    </ComicsContext.Provider>
  );
}

export const useComics = () => useContext(ComicsContext);

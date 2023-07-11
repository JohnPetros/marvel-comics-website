"use client";
import { Comic, Order } from "@/@types/comic";
import { ReactNode, createContext, useState } from "react";


interface ComicsProviderProps {
  children: ReactNode;
}

interface ComicsContextData {
  comics: Comic[] | undefined;
  setComics: (visibleComics: Comic[]) => void;
  sortComics: (order: Order) => void;
  order: Order;
}

export const ComicsContext = createContext({} as ComicsContextData);

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [comics, setComics] = useState<Comic[]>();
  const [order, setOrder] = useState<Order>("asc");

  function sortComics(order: Order) {}

  return (
    <ComicsContext.Provider
      value={{ comics, setComics, sortComics, order }}
    >
      {children}
    </ComicsContext.Provider>
  );
}
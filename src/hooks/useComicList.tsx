"use client";
import { Category, Order } from "@/@types/comic";
import { ReactNode, createContext, useContext, useState } from "react";

interface ComicsProviderProps {
  children: ReactNode;
}

interface ComicsListContextData {
  comicsAmount: number;
  setComicsAmount: (comicsAmount: number) => void;
  category: Category;
  setCategory: (category: Category) => void;
  setOrder: (order: Order) => void;
  order: Order;
}

export const ComicsListContext = createContext({} as ComicsListContextData);

export function ComicsListProvider({ children }: ComicsProviderProps) {
  const [comicsAmount, setComicsAmount] = useState(0);
  const [order, setOrder] = useState<Order>("asc");
  const [category, setCategory] = useState<Category>("comics");

  return (
    <ComicsListContext.Provider
      value={{
        comicsAmount,
        setComicsAmount,
        category,
        setCategory,
        order,
        setOrder,
      }}
    >
      {children}
    </ComicsListContext.Provider>
  );
}

export const useComicsList = () => useContext(ComicsListContext);

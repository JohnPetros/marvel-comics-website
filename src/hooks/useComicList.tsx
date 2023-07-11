"use client";
import { Category, Order } from "@/@types/comic";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

interface ComicsListProviderProps {
  children: ReactNode;
}

type ComicsListState = {
  amount: number;
  category: Category;
  order: Order;
};

type ComicsListAction =
  | { type: "setAmount"; payload: number }
  | { type: "setCategory"; payload: Category }
  | { type: "setOrder"; payload: Order };

interface ComicsListContextData {
  state: ComicsListState;
  dispatch: (action: ComicsListAction) => void;
}

export const ComicsListContext = createContext({} as ComicsListContextData);

function ComicsListReducer(state: ComicsListState, action: ComicsListAction) {
  switch (action.type) {
    case "setAmount":
      return { ...state, amount: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    case "setOrder":
      return { ...state, order: action.payload };
    default:
      return state;
  }
}

const initialState: ComicsListState = {
  amount: 0,
  category: "comics",
  order: "asc",
};

export function ComicsListProvider({ children }: ComicsListProviderProps) {
  const [state, dispatch] = useReducer(ComicsListReducer, initialState);

  return (
    <ComicsListContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ComicsListContext.Provider>
  );
}

export const useComicsList = () => useContext(ComicsListContext);

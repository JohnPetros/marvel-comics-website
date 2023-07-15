"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

import { Category } from "@/@types/comic";
import { Order } from "@/@types/order";

interface ComicsListProviderProps {
  children: ReactNode;
}

type ComicsListState = {
  amount: number;
  category: Category | null;
  order: Order;
  search: string;
};

type ComicsListAction =
  | { type: "setAmount"; payload: number }
  | { type: "setCategory"; payload: Category }
  | { type: "setOrder"; payload: Order }
  | { type: "setSearch"; payload: string }
  | { type: "resetState" };

interface ComicsListContextData {
  state: ComicsListState;
  dispatch: (action: ComicsListAction) => void;
}

const initialState: ComicsListState = {
  amount: 0,
  category: null,
  order: "asc",
  search: "",
};

export const ComicsListContext = createContext({} as ComicsListContextData);

function ComicsListReducer(state: ComicsListState, action: ComicsListAction) {
  switch (action.type) {
    case "setAmount":
      return { ...state, amount: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    case "setOrder":
      return { ...state, order: action.payload };
    case "setSearch":
      return { ...state, search: action.payload };
    case "resetState":
      return initialState;
    default:
      return state;
  }
}

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

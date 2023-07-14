"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { Category } from "@/@types/comic";
import { Order } from "@/@types/order";
import { useSearchParams } from "next/navigation";

interface ComicsListProviderProps {
  children: ReactNode;
}

type ComicsListState = {
  amount: number;
  category: Category;
  order: Order;
  search: string;
  limit: number;
};

type ComicsListAction =
  | { type: "setAmount"; payload: number }
  | { type: "setCategory"; payload: Category }
  | { type: "setOrder"; payload: Order }
  | { type: "setSearch"; payload: string }
  | { type: "setLimit"; payload: number };

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
    case "setSearch":
      return { ...state, search: action.payload };
    case "setLimit":
      return { ...state, limit: action.payload };
    default:
      return state;
  }
}

const initialState: ComicsListState = {
  amount: 0,
  category: "comics",
  order: "asc",
  search: "",
  limit: 20,
};

export function ComicsListProvider({ children }: ComicsListProviderProps) {
  const [state, dispatch] = useReducer(ComicsListReducer, initialState);

  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch({
      type: "setCategory",
      payload: (searchParams.get("category") as Category) ?? "comics",
    });
  }, []);

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

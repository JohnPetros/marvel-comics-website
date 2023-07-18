"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

import { Order } from "@/@types/order";

interface CharactersListProviderProps {
  children: ReactNode;
}

type CharactersListState = {
  amount: number;
  order: Order;
  search: string;
};

type CharactersListAction =
  | { type: "setAmount"; payload: number }
  | { type: "setOrder"; payload: Order }
  | { type: "setSearch"; payload: string };

interface CharactersListContextData {
  state: CharactersListState;
  dispatch: (action: CharactersListAction) => void;
}

export const CharactersListContext = createContext(
  {} as CharactersListContextData
);

function CharactersListReducer(
  state: CharactersListState,
  action: CharactersListAction
) {
  switch (action.type) {
    case "setAmount":
      return { ...state, amount: action.payload };
    case "setOrder":
      return { ...state, order: action.payload };
    case "setSearch":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

const initialState: CharactersListState = {
  amount: 0,
  order: "asc",
  search: "",
};

export function CharactersListProvider({
  children,
}: CharactersListProviderProps) {
  const [state, dispatch] = useReducer(CharactersListReducer, initialState);

  return (
    <CharactersListContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CharactersListContext.Provider>
  );
}

export const useCharactersList = () => useContext(CharactersListContext);

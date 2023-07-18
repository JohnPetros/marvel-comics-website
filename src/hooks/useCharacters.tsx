"use client";
import { useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Character } from "@/@types/character";
import { Order } from "@/@types/order";
import { api } from "@/services/api";

interface useCharactersParams {
  order: Order;
  search: string;
}

export const useCharacters = ({ order, search }: useCharactersParams) => {
  const nextPage = useRef(1);

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["characters", order, search],
    ({ pageParam = 0 }) => {
      return api.getCharacters({ order, search, limit: 20, offset: pageParam * 20 });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

  if (error) {
    throw new Error("Error on fetching characters 😢");
  }

  const characters = useMemo(() => {
    if (!response?.pages) return [];

    return response.pages.reduce<Character[]>((allCharacters, currentPage) => {
      const characters = currentPage.data.results;

      return [...allCharacters, ...characters];
    }, []);
  }, [isFetching]);

  return {
    characters,
    isLoading,
    isFetching,
    nextPage,
    hasNextPage,
    fetchNextPage,
  };
};

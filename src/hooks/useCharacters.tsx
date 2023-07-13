"use client";
import { useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Character } from "@/@types/character";
import { Order } from "@/@types/order";
import { getCharacters } from "@/utils/getCharacters";

interface useCharactersParams {
  order: Order;
  search: string;
}

export const useCharacters = ({ order, search }: useCharactersParams) => {
  const nextPage = useRef(1);

  const {
    data: response,
    isLoading,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ["comics", order, search],
    ({ pageParam = nextPage.current }) => {
      return getCharacters({ order, search, limit: pageParam * 20 });
    },
    {
      getNextPageParam: () => {
        return (nextPage.current - 1) * 20 !== 100
          ? nextPage.current
          : undefined;
      },
    }
  );

  console.log(response);

  const characters = useMemo(() => {
    if (!response?.pages) return [];

    return response.pages.reduce<Character[]>(
      (allCharacters, currentPage, index) => {
        const characters = currentPage.data.results.slice(20 * index);

        return [...allCharacters, ...characters];
      },
      []
    );
  }, [isFetching]);

  return { characters, isLoading, isFetching, nextPage, fetchNextPage };
};
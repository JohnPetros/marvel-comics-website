"use client";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Category, Comic } from "@/@types/comic";
import { Order } from "@/@types/order";
import { api } from "@/services/api";

interface useComicsParams {
  category: Category;
  order: Order;
  search: string;
}

export const useComics = ({ category, order, search }: useComicsParams) => {
  const {
    data: response,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["comics", category, order, search],
    ({ pageParam = 0 }) => {
      return api.getComics({
        category,
        order,
        search,
        limit: 20,
        offset: pageParam * 20,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

  if (error) {
    throw new Error("Error on fetching comics 😢");
  }

  console.log(response?.pages);

  const comics = useMemo(() => {
    if (!response?.pages || response.pages[0].code === "RequestThrottled") {
      return [];
    }

    return response.pages.reduce<Comic[]>((allComics, currentPage) => {
      const comics = currentPage.data.results;

      return [...allComics, ...comics];
    }, []);
  }, [isFetching]);

  return { comics, isLoading, isFetching, fetchNextPage, hasNextPage };
};

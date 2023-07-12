"use client";
import { Category, Comic, Order } from "@/@types/comic";
import { getComics } from "@/utils/getComics";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

interface useComicsParams {
  category: Category;
  order: Order;
  search: string;
  limit: number;
}

export const useComics = ({
  category,
  order,
  search,
  limit,
}: useComicsParams) => {
  const nextPage = useRef(1);

  const {
    data: response,
    isLoading,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ["comics", category, order, search, limit],
    ({ pageParam = nextPage.current }) => {
      return getComics({ category, order, search, limit: pageParam * 20 });
    },
    {
      getNextPageParam: () => {
        return (nextPage.current - 1) * 20 !== 100
          ? nextPage.current
          : undefined;
      },
    }
  );

  const comics = useMemo(() => {
    if (!response?.pages) return [];

    return response.pages.reduce<Comic[]>((allComics, currentPage, index) => {
      const comics = currentPage.data.results.slice(20 * index);

      return [...allComics, ...comics];
    }, []);
  }, [isFetching]);

  return { comics, isLoading, isFetching, nextPage, fetchNextPage };
};

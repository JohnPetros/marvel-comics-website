"use client";
import { useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Category, Comic } from "@/@types/comic";
import { Order } from "@/@types/order";
import { getComics } from "@/utils/getComics";
import { useSearchParams } from "next/navigation";

interface useComicsParams {
  category: Category;
  order: Order;
  search: string;
}

export const useComics = ({
  category,
  order,
  search,
}: useComicsParams) => {
  const nextPage = useRef(1);

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    [
      "comics",
      category,
      order,
      search,
    ],
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
    if (!response?.pages || response.pages[0].code === "RequestThrottled") {
      return [];
    }

    return response.pages.reduce<Comic[]>((allComics, currentPage, index) => {
      const comics = currentPage.data.results.slice(20 * index);

      return [...allComics, ...comics];
    }, []);
  }, [isFetching]);

  return { comics, isLoading, isFetching, nextPage, fetchNextPage };
};

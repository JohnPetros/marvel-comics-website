"use client";
import { Category, Comic, Order } from "@/@types/comic";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { log } from "console";
import { useMemo, useRef } from "react";

function getComicsFromPages(
  allComics: Comic[],
  comicsFromCurrentPage: Comic[]
) {
  comicsFromCurrentPage.filter(checkImageAvailability);
  return [...allComics, ...comicsFromCurrentPage];
}

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
      nextPage.current = nextPage.current + 1;
      return getComics({ category, order, search, limit: 20 * pageParam });
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
    if (!response) return [];

    return response.pages.reduce((allComics, currentPage, index) => {
      const comics = currentPage.data.results.slice(20 * index);

      const comicsFromCurrentPage = comics.filter(checkImageAvailability);

      return [...allComics, ...comicsFromCurrentPage];
    }, []);
  }, [isFetching]);

  return { comics, isLoading, isFetching, nextPage, fetchNextPage };
};

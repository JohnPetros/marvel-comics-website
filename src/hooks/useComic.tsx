"use client";
import { Category } from "@/@types/comic";
import { getComic } from "@/utils/getComic";
import { useQuery } from "@tanstack/react-query";

interface useComicParams {
  category: Category;
  id: number;
}

export function useComic({ category, id }: useComicParams) {
  const { data: response, isLoading } = useQuery(["comic", id], () =>
    getComic({ category, id })
  );

  const comic = response?.data.results[0];
  return { comic, isLoading };
}

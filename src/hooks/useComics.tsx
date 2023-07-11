"use client";
import { Category, Comic, Order } from "@/@types/comic";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";
import { useQuery } from "@tanstack/react-query";

interface useComicsParams {
  category: Category;
  order: Order;
  search: string;
}

export const useComics = ({ category, order, search }: useComicsParams) => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["comics", category, order, search],
    queryFn: () => {
      return getComics(category, 20, order, search);
    },
  });

  let comics = [];

  if (!isLoading) {
    const { results } = response?.data;
    comics = results.filter(checkImageAvailability);
  }

  return { comics, isLoading };
};

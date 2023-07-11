"use client";
import { Category, Comic, Order } from "@/@types/comic";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";
import { useQuery } from "@tanstack/react-query";

export const useComics = (category: Category, order: Order) => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["comics", category, order],
    queryFn: () => {
      return getComics(category, 20, order);
    },
  });

  let comics = [];

  if (!isLoading) {
    const { results } = response?.data;
    comics = results.filter(checkImageAvailability);
  }

  return { comics, isLoading };
};

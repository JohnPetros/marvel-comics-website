"use client";
import { Comic } from "@/@types/comic";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";
import { useQuery } from "react-query";

export const useComics = (initialData: Comic[]) => {
  const { data } = useQuery("comics", () => getComics("comics", 20, "asc"), {
    initialData,
  });

  const comics = data.filter(checkImageAvailability);

  return { comics };
};

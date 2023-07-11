"use client";
import { Comic } from "@/@types/comic";
import { ComicsContext } from "@/contexts/comicsContext";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";
import { useContext } from "react";
import { useQuery } from "react-query";

export const useComics = (initialData: Comic[]) => {
  const state = useContext(ComicsContext);

  const response = useQuery("comics", () => getComics("comics", 20, "asc"), {
    initialData,
  });

  const comics = response.data;

  const availableComics = comics.filter(checkImageAvailability);

  state.setComics(availableComics);

  return { comics: availableComics, state };
};

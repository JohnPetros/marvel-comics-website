import { fetchData } from "./fetchData";

import { ApiResponse } from "@/@types/apiResponse";
import { Comic } from "@/@types/comic";
import {
  getCharactersParams,
  getComicByIdParams,
  getComicsParams,
} from "./types";
import { Character } from "@/@types/character";

export const api = {
  getComics: async ({
    category,
    search,
    limit = 20,
    order = "asc",
    offset = 0,
    revalidate = false,
  }: getComicsParams): Promise<ApiResponse<Comic>> => {
    const orderParamKey = category === "events" ? "name" : "title";
    const orderParamValue =
      order === "desc" ? `-${orderParamKey}` : orderParamKey;

    const response = await fetchData({
      resource: category,
      limit,
      offset,
      orderParams: [orderParamValue],
      search: search ? `${orderParamKey}StartsWith=${search}` : "",
      revalidate,
    });

    const data = response.json();
    return data;
  },

  getComic: async ({
    category,
    id,
  }: getComicByIdParams): Promise<ApiResponse<Comic>> => {
    const response = await fetchData({ resource: `${category}/${id}` });
    const data = response.json();
    return data;
  },

  getCharacters: async ({
    search,
    order = "asc",
    limit = 20,
  }: getCharactersParams): Promise<ApiResponse<Character>> => {
    const orderParam = order === "desc" ? "-name" : "name";

    const response = await fetchData({
      resource: "characters",
      limit,
      orderParams: [orderParam],
      search: search ? `nameStartsWith=${search}` : "",
    });

    const data = response.json();
    return data;
  },

  getCharacter: async (id: number): Promise<ApiResponse<Character>> => {
    const response = await fetchData({ resource: `characters/${id}` });
    const data = response.json();
    return data;
  },
};

import { fetchData } from "./fetchData";
import { ApiResponse } from "@/@types/apiResponse";
import { Character } from "@/@types/character";
import { Order } from "@/@types/order";

interface getCharactersParams {
  order?: Order;
  search?: string;
  limit?: number;
}

export async function getCharacters({
  search,
  order = "asc",
  limit = 20,
}: getCharactersParams): Promise<ApiResponse<Character>> {
  const orderParam = order === "desc" ? "-name" : "name";

  const response = await fetchData({
    resource: "characters",
    limit,
    orderParams: [orderParam],
    search: search ? `nameStartsWith=${search}` : "",
  });

  const data = response.json();
  return data;
}

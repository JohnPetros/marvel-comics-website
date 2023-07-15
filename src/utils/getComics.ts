import { Category, Comic } from "@/@types/comic";
import { ApiResponse } from "@/@types/apiResponse";
import { Order } from "@/@types/order";

import { fetchData } from "./fetchData";

interface getComicsParams {
  category: Category;
  order?: Order;
  search?: string;
  limit?: number;
  offset?: number;
}

export async function getComics({
  category,
  search,
  limit = 20,
  order = "asc",
  offset = 0,
}: getComicsParams): Promise<ApiResponse<Comic>> {
  const orderParamKey = category === "events" ? "name" : "title";
  const orderParamValue =
    order === "desc" ? `-${orderParamKey}` : orderParamKey;

  const response = await fetchData({
    resource: category,
    limit,
    offset,
    orderParams: [orderParamValue],
    search: search ? `${orderParamKey}StartsWith=${search}` : "",
  });

  const data = response.json();
  return data;
}

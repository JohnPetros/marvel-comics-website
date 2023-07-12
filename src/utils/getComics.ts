import { Category, Comic, Order } from "@/@types/comic";
import { fetchData } from "./fetchData";

interface getComicsParams {
  category: Category;
  order?: Order;
  search?: string;
  limit?: number;
}

export async function getComics({
  category,
  search,
  limit = 20,
  order = "asc",
}: getComicsParams) {
  const orderParamKey = category === "events" ? "name" : "title";
  const orderParamValue =
    order === "desc" ? `-${orderParamKey}` : orderParamKey;

    console.log(orderParamValue);
    

  const response = await fetchData({
    resource: category,
    limit,
    orderParams: [orderParamValue],
    search: search ? `${orderParamKey}StartsWith=${search}` : "",
  });

  const data = response.json();

  return data;
}

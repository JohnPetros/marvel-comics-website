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
  const orderParam = order === "desc" ? "-title" : "title";

  const response = await fetchData({
    resource: category,
    limit,
    orderParams: [orderParam],
    search: search ? `titleStartsWith=${search}` : "",
  });

  const data = response.json();

  return data;
}

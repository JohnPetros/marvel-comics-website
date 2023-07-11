import { Comic } from "@/@types/comic";
import { fetchData } from "./fetchData";

export type ComicCategory = "comics" | "series" | "events";

export async function getComics(
  category: ComicCategory,
  limit: number,
  order: "asc" | "desc"
) {
  const orderParam = order === "desc" ? "-title" : "title";

  const response = await fetchData({
    resource: category,
    limit,
    orderParams: [orderParam],
  });

  const data = response.json();
  return data;
}

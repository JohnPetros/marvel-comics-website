import { fetchData } from "./fetchData";

export type ComicCategory = "comics" | "series" | "events";

export async function getComics(
  category: ComicCategory,
  limit: number,
  order: "asc" | "desc",
  search?: string
) {
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

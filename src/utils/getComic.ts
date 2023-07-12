import { Category, Comic } from "@/@types/comic";
import { fetchData } from "./fetchData";
import { ApiResponse } from "@/@types/apiResponse";

interface getComicByIdParams {
  category: Category;
  id: number;
}

export async function getComic({
  category,
  id,
}: getComicByIdParams): Promise<ApiResponse<Comic>> {
  const response = await fetchData({ resource: `${category}/${id}` });
  const data = response.json();
  return data;
}

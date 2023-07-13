import { fetchData } from "./fetchData";
import { ApiResponse } from "@/@types/apiResponse";
import { Character } from "@/@types/character";


export async function getCharacter(
  id: number
): Promise<ApiResponse<Character>> {
  const response = await fetchData({ resource: `characters/${id}` });
  const data = response.json();
  return data;
}

import { fetchData } from "@/utils/fetchData";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { checkImageAvailability } from "@/utils/checkImageAvailability";

async function getComics() {
  const response = await fetchData({ resource: "comics", limit: 100 });
  const data = response.json();
  return data;
}

export async function ComicsList() {
  const response = await getComics();
  const comics = response.data.results;
  const availableComics = comics.filter(checkImageAvailability);

  return (
    <div className="grid grid-cols-5 gap-x-2 gap-y-12">
      {availableComics.map((comic: ComicType) => (
        <Comic data={comic} />
      ))}
    </div>
  );
}

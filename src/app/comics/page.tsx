import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";
import { fetchData } from "@/utils/fetchData";
import { checkImageAvailability } from "@/utils/checkImageAvailability";

async function getComics() {
  const response = await fetchData({ resource: "comics", limit: 100 });
  const data = response.json();
  return data;
}

export default async function Comics() {
  const response = await getComics();
  const comics = response.data.results;
  const availableComics = comics.filter(checkImageAvailability);

  return (
    <div className="container mx-auto mt-12 space-y-20">
      <Header />
      <ComicsList comics={availableComics} />
    </div>
  );
}

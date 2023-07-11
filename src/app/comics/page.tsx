import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";

export default async function Comics() {
  const response = await getComics("comics", 20, "asc");
  const comics = response.data.results;
  const availableComics = comics.filter(checkImageAvailability);

  return (
    <div className="container mx-auto mt-12 space-y-12">
      {/* <Header /> */}
      <ComicsList comics={availableComics} />
    </div>
  );
}

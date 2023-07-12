import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";

export default async function Comics() {
  const response = await getComics({ category: "comics" });
  const { results } = response.data;
  const comics = results.filter(checkImageAvailability);

  return (
    <div className="container mx-auto mt-12 space-y-12">
      <Header />
      <ComicsList initialComics={comics} />
    </div>
  );
}

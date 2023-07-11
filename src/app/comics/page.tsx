import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";
import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { getComics } from "@/utils/getComics";

export default async function Comics() {
  return (
    <div className="container mx-auto mt-12 space-y-12">
      <Header />
      <ComicsList />
    </div>
  );
}

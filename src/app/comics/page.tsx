import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";
import { getComics } from "@/utils/getComics";

export default async function Comics() {
  const response = await getComics({ category: "comics", limit: 20 });

  return (
    <div className="container mx-auto mt-12 space-y-12">
      <Header />
      <ComicsList initialData={response} />
    </div>
  );
}

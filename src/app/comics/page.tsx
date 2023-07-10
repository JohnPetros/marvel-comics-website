import { Header } from "./components/Header";
import { ComicsList } from "./components/ComicsList";

export default function Comics() {
  return (
    <div className="container mx-auto mt-12 space-y-20">
      <Header />
      <ComicsList />
    </div>
  );
}

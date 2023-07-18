import { CharactersList } from "./components/CharactersList";
import { Header } from "./components/Header";

export default async function Characters() {
  return (
    <div className="container mx-auto mt-12 space-y-12">
      <Header />
      <CharactersList />
    </div>
  );
}

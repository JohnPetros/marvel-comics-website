import { getCharacters } from "@/utils/getCharacters";
import { CharactersList } from "./components/CharactersList";
import { Header } from "./components/Header";

export default async function Characters() {
  const response = await getCharacters({ limit: 20 });
  const characters = response.data.results;

  return (
    <div className="container mx-auto mt-12 space-y-12">
      <Header />
      <CharactersList initialCharacters={characters} />
    </div>
  );
}

import { CharacterInfo } from "./components/CharacterInfo";
import { RelatedResourcers } from "@/app/components/RelatedResources";
import { Header } from "./components/Header";
import { api } from "@/services/api";

type Params = {
  characterId: number;
};

interface CharacterDetailsProps {
  params: Params;
}

export default async function CharacterDetails({
  params,
}: CharacterDetailsProps) {
  const response = await api.getCharacter(params.characterId);
  const character = response.data.results[0];

  return (
    <>
      <Header characterId={character.id} />
      <CharacterInfo character={character} />
      <RelatedResourcers
        originalResourceId={character.id}
        originalResource={"characters"}
        totalRelatedResources={{
          comics: character.comics.available,
          series: character.series.available,
          events: character.events.available,
        }}
      />
    </>
  );
}

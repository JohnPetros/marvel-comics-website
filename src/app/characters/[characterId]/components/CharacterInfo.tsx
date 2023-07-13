import { Character } from "@/@types/character";

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({
  character: { name, description, thumbnail },
}: CharacterInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-white text-2xl font-bold">{name}</h2>
        <p className="text-white text-md">{description}</p>
      </div>
    </div>
  );
}

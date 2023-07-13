"use client";
import { Character } from "@/@types/character";
import Image from "next/image";

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({
  character: { name, description, thumbnail },
}: CharacterInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="relative h-[660px] bg-black">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "120%",
        }}
        className="bg-no-repeat bg-center absolute left-0 top-0 bottom-0 right-0 brightness-[0.1] blur-sm"
      />

      <div className="container mx-auto z-20 relative h-full flex items-center gap-24">
        <div className="w-[540px]">
          <h2 className="text-white text-4xl font-bold uppercase">{name}</h2>
          <p className="text-white text-base mt-6">{description}</p>
        </div>
        <div className="relative w-[380px] h-[440px] shadow-lg">
          <Image src={`${image}`} alt={name} fill />
        </div>
      </div>
    </div>
  );
}

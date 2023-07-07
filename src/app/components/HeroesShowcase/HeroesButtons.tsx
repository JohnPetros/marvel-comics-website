import Image from "next/image";
import { Hero, heroes } from "@/utils/heroes";

type HeroesButtonsProps = {
  activeHero: Hero;
  changeActiveHero: (heroIndex: number) => void;
};

export default function HeroesButtons({
  activeHero,
  changeActiveHero,
}: HeroesButtonsProps) {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between p-6">
        {heroes.map(({ id, image, name }, index) => (
          <button
            key={String(id)}
            className={`relative w-12 h-12 hover:scale-110 transition-transform duration-200 rounded-full bg-transparent border border-l-4 overflow-hidden bg-[url('/images/${
              activeHero.image
            }')] bg-top ${
              activeHero.id === id
                ? "border-red-600/70"
                : "border-yellow-500/80"
            }`}
            style={{ backgroundSize: "300%" }}
            onClick={() => changeActiveHero(index)}
          >
            <Image src={`/images/${image}`} fill alt={name} />
          </button>
        ))}
      </div>
    </div>
  );
}

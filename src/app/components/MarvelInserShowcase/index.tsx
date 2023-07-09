import Image from "next/image";
import { Link } from "../Link";

export function MarvelInserShowcase() {
  return (
    <section className="w-full h-[680px] relative flex flex-col justify-center">
      <div className="grid grid-cols-[1fr_1.2fr] absolute top-0 left-0 right-0 bottom-0">
        <div className=" bg-[#000]">
          <div className=" h-full"></div>
        </div>

        <div
          style={{ backgroundImage: "url('/images/marvel-insider.jpg')" }}
          className="relative h-full bg-marvel-insider-image bg-no-repeat bg-cover bg-center bg-blend-color"
        >
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-red-600/60"></span>
        </div>
      </div>

      <div className="z-20 w-full max-w-[1200px] mx-auto">
        <small className="uppercase text-sm text-red-600 flex items-center gap-2 font-bold mb-12 after:inline-block after:h-1 after:w-12 after:bg-red-600">
          Earn rewards
        </small>
        <Image
          src="/icons/marvel-insider.png"
          width={280}
          height={280}
          alt="Marvel Insider"
        />
        <p className="text-white/80 my-8">
          Get rewarded for doing what you already do as a fan.​
        </p>
        <Link name="Join Now" path="/" />
      </div>
    </section>
  );
}
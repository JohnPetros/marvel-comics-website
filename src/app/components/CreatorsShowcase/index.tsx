import { creators } from "@/utils/creators";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Creator } from "./Creator";
import Image from "next/image";

export function CreatorsShowcase() {
  return (
    <section
      id="creators"
      className="w-[1200px] max-w-full mx-auto flex flex-col items-center justify-center gap-12 relative mt-32"
    >
      <div className="w-full h-full absolute left-0 top-0 bottom-0 right-0 opacity-5">
        <Image src="/images/comic.jpg" alt="" fill />
      </div>

      <div className="grid gap-2">
        <Heading title="Behind the pencils & ink" subtitle="Artist" />
        <Paragraph>
          Got a favourite artist, writer or colour artist. Find out more about
          the world of Marvel artists
        </Paragraph>
      </div>

      <div className="grid grid-cols-3 gap-x-24 gap-y-12">
        {creators.map(({ id, name, image, link }) => (
          <Creator key={id} name={name} image={image} link={link} />
        ))}
      </div>
    </section>
  );
}

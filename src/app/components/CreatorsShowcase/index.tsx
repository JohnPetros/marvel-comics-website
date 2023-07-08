import { creators } from "@/utils/creators";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Creator } from "./Creator";

export function CreatorsShowcase() {
  return (
    <section
      id="creators"
      className="w-[1200px] max-w-full mx-auto flex flex-col items-center justify-center gap-12"
    >
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

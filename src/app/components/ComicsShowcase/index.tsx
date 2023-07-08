import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { ComicsCarrousel } from "./ComicsCarrousel";

async function getComics() {
  const response = await fetch(
    `${process.env.BASE_URL}/comics?ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}`
  );

  const data = response.json();
  return data;
}

export async function ComicsShowcase() {
  const { data } = await getComics();
  const comics = data.results;
  const filteredComics = comics.filter(checkImageAvailability);

  return (
    <section id="comics" className="grid grid-cols-[1fr_1.5fr]">
      <div className="flex flex-col items-center justify-center gap-6">
        <Heading title="Best selling digital comics" subtitle="our comics" />
        <Link path="/comics" name="See all comics" />
      </div>

      <ComicsCarrousel comics={filteredComics} />
    </section>
  );
}

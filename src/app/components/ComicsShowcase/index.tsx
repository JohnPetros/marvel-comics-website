import { checkImageAvailability } from "@/utils/checkImageAvailability";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { ComicsCarrousel } from "./ComicsCarrousel";
import { getComics } from "@/utils/getComics";

export async function ComicsShowcase() {
  const response = await getComics({ category: "comics", limit: 20 });
  const comics = response.data.results.filter(checkImageAvailability);

  return (
    <section id="comics" aria-label="Comics" className="grid grid-cols-1 mt-32">
      <div className="flex flex-col items-center justify-center gap-8 bg-white">
        <Heading title="Best selling digital comics" subtitle="our comics" />
        <Link path="/comics?category=comics">see all of our comics</Link>
      </div>

      <ComicsCarrousel comics={comics} />
    </section>
  );
}

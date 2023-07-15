import { getComics } from "@/utils/getComics";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { Series } from "./Series";
import { checkImageAvailability } from "@/utils/checkImageAvailability";

export async function SeriesShowcase() {
  const response = await getComics({ category: "series", limit: 9 });
  const series = response.data.results.filter(checkImageAvailability);

  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return (
    <section
      id="series"
      aria-label="Comic Series"
      className="w-11/12 max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 mt-32"
    >
      <Heading
        title={`${month} ${date.getDate()}: New series releases`}
        subtitle="Series"
      />

      <div className="my-8 grid w-full grid-cols-1 sm:grid-cols-3 gap-6">
        <Series data={series[0]} index={0} />
        <Series data={series[1]} index={1} />
        <Series data={series[2]} index={2} />
      </div>

      <div className="">
        <Link path="/comics?category=series">See more</Link>
      </div>
    </section>
  );
}

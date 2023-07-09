import { Heading } from "../Heading";
import { Link } from "../Link";
import { Series } from "./Series";
import { checkImageAvailability } from "@/utils/checkImageAvailability";

async function getSeries() {
  const response = await fetch(
    `${process.env.BASE_URL}/series?orderBy=title&limit=9&ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}`
  );

  const series = response.json();
  return series;
}

export async function SeriesShowcase() {
  const series = await getSeries();
  const filteredSeries = series.data.results.filter(checkImageAvailability);

  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return (
    <section
      id="series"
      className="w-11/12 max-w-[1200px] mx-auto flex flex-col items-center justify-center mt-32"
    >
      <Heading
        title={`${month} ${date.getDate()}: New series releases`}
        subtitle="Series"
      />

      <div className="my-12 grid w-full grid-cols-1 sm:grid-cols-3 gap-6">
        <Series data={filteredSeries[0]} index={0} />
        <Series data={filteredSeries[1]} index={1} />
        <Series data={filteredSeries[2]} index={2} />
      </div>

      <div className="">
        <Link path="/series" name="See more" />
      </div>
    </section>
  );
}

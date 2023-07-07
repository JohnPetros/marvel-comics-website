import { Series as SeriesType } from "@/@types/series";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { Series } from "./Series";

function verifyImageAvailability(series: SeriesType) {
  return !series.thumbnail.path.includes("image_not_available");
}

async function getSeries() {
  const response = await fetch(
    `${process.env.BASE_URL}/series?orderBy=title&limit=9&ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}`
  );

  const series = response.json();
  return series;
}

export async function SeriesShowcase() {
  const series = await getSeries();
  const filteredSeries = series.data.results.filter(verifyImageAvailability);

  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return (
    <section
      id="series"
      className="w-[1200px] max-w-full mx-auto flex flex-col items-center justify-center"
    >
      <Heading
        title={`${month} ${date.getDate()}: New series releases`}
        subtitle="available now"
      />

      <div className="my-12 grid w-full grid-cols-3 gap-6">
        <Series data={filteredSeries[0]} />
        <Series data={filteredSeries[1]} />
        <Series data={filteredSeries[2]} />
      </div>

      <div className="">
        <Link path="/series" name="See more" />
      </div>
    </section>
  );
}

import { Heading } from "../Heading";
import { Link } from "../Link";
import { Series } from "./Series";

async function getSeries() {
  const response = await fetch(
    `${process.env.BASE_URL}/series?orderBy=-modified&limit=3&ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}`
  );

  const series = response.json();
  return series;
}

export async function SeriesShowcase() {
  const series = await getSeries();

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

      {series.length > 1 && (
        <div className="grid grid-cols-3 gap-6">
          <Series data={series.data.results[0]} />
          <Series data={series.data.results[1]} />
          <Series data={series.data.results[2]} />
        </div>
      )}

      <div className="mt-4">
        <Link path="/series" name="See more" />
      </div>
    </section>
  );
}

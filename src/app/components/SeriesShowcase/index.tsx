import { Heading } from '../Heading'
import { Link } from '../Link'
import { Series } from './Series'
import { api } from '@/services/api'
import { checkImageAvailability } from '@/utils/checkImageAvailability'

const date = new Date()
const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)

// function getRandomOffset() {
//   return Math.floor(Math.random() * 14000)
// }

export async function SeriesShowcase() {
  const response = await api.getComics({
    category: 'series',
    limit: 9,
    offset: 1000,
    revalidate: 1000 * 60 * 24, // 1 day
  })
  const series = response.data.results.filter(checkImageAvailability)

  if (series.length && series[0]?.id)
    return (
      <section
        id="series"
        aria-label="Comic Series"
        className="mx-auto mt-32 flex w-11/12 max-w-[1200px] flex-col items-center justify-center gap-6"
      >
        <Heading
          title={`${month} ${date.getDate()}: New series releases`}
          subtitle="Series"
        />

        <div className="my-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <Series data={series[0]} index={0} />
          <Series data={series[1]} index={1} />
          <Series data={series[2]} index={2} />
        </div>

        <div className="">
          <Link path="/comics?category=series">See more</Link>
        </div>
      </section>
    )
}

import { Link } from '../Link'
import { Heading } from '../Heading'
import { ComicsCarrousel } from './ComicsCarrousel'
import { api } from '@/services/api'
import { checkImageAvailability } from '@/utils/checkImageAvailability'

export async function ComicsShowcase() {
  const response = await api.getComics({ category: 'comics', limit: 20 })
  const comics = response.data.results.filter(checkImageAvailability)

  return (
    <section id="comics" aria-label="Comics" className="mt-32 grid grid-cols-1">
      <div className="flex flex-col items-center justify-center gap-8 bg-white">
        <Heading title="Best selling digital comics" subtitle="our comics" />
        <Link path="/comics?category=comics">see all of our comics</Link>
      </div>

      <ComicsCarrousel comics={comics} />
    </section>
  )
}

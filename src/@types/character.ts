import { Thumbnail } from './thumbnail'
import { RelatedResource } from './relatedResource'

export type Character = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  comics: RelatedResource
  series: RelatedResource
  events: RelatedResource
}

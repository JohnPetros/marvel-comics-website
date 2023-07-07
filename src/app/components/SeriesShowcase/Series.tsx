import Image from "next/image"

type Thumbnail = {
  path: string
  extension:
    | 'jpg'
    | 'png'
    | 'jpeg'
}

type SeriesProps = {
  data: {
    id: number
    thumbnail: Thumbnail
  }
}

export function Series({ data }: SeriesProps) {
  
  console.log(data.thumbnail)
  
  return (
    <div className="bg-yellow-500 p-6 flex items-center justify-center">
      <div className="relative flex-1">
        <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`} fill alt="" />
      </div>
    </div>
  );
}

import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface MusicItemProps {
  name: string
  image: string
  singer: string
  link: string
}

const MusicItem = ({ image, name, singer, link }: MusicItemProps) => {
  return (
    <Link to={link}>
      <div className="group/item relative flex min-h-[16.25rem] max-w-[13rem] cursor-pointer flex-col gap-2 rounded-md px-3 py-2 ease-linear hover:bg-[#2a2a2a] hover:transition-all md:w-full">
        <div className="h-[11.5rem] w-[11.5rem] flex-shrink-0 overflow-hidden rounded-lg">
          <img src={image} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start gap-1">
          <h5 className="text-overflow text-base font-semibold capitalize">{name}</h5>
          <p className="text-overflow text-sm font-normal">{singer}</p>
        </div>
        <div className="group/edit invisible absolute bottom-20 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary group-hover/item:visible group-hover:transition-all">
          <FaPlay className="h-4 w-4 text-Black" />
        </div>
      </div>
    </Link>
  )
}

export default MusicItem

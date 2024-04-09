import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface SingerItemProps {
  image: string
  singerName: string
}

const SingerItem = ({ image, singerName }: SingerItemProps) => {
  return (
    <Link to="">
      <div className="group/item relative flex h-[16.25rem] max-w-[13rem] cursor-pointer flex-col justify-center gap-2 rounded-md p-2 ease-linear hover:bg-[#2a2a2a] hover:transition-all">
        <div className="h-[11.5rem] w-[11.5rem] overflow-hidden rounded-full">
          <img src={image} loading="lazy" alt={singerName} className="h-full w-full object-cover" />
        </div>
        <div className="">
          <h5 className="text-lg font-normal">{singerName}</h5>
          <p className="mt-0 text-sm font-normal">Nghệ sĩ</p>
        </div>
        <div className="group/edit invisible absolute bottom-20 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary group-hover/item:visible group-hover:transition-all">
          <FaPlay className="h-4 w-4 text-Black" />
        </div>
      </div>
    </Link>
  )
}

export default SingerItem

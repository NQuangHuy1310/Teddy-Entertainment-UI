import { Link } from 'react-router-dom'
import MusicItem from '~/components/MusicPage/MusciItem'
import SingerItem from '~/components/MusicPage/SingerItem'
import { useDocountTitle } from '~/hooks'
import { musicInfo } from '~/models/common'

interface HomeSectionProps {
  data?: { name: string; image: string }[]
  title: string
  music?: musicInfo[]
}

const HomeSection: React.FC<HomeSectionProps> = ({ data, title, music }) => {
  useDocountTitle('Teddy Music - Music for everyone')

  return (
    <div className="flex flex-col gap-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Link to="" className="cursor-pointer text-Gray4 hover:text-Gray6">
          Hiện tất cả
        </Link>
      </div>
      <div className="flex flex-wrap items-center">
        {/* singer */}
        {data && data.map((item, index) => <SingerItem key={index} singerName={item.name} image={item.image} />)}

        {/* Music */}
        {music && music.map((item, index) => <MusicItem key={index} {...item} />)}
      </div>
    </div>
  )
}

export default HomeSection

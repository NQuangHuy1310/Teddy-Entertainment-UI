import { popularMusic, SingerData } from '~/apis'
import HomeSection from './HomeSection'

const HomeMusic = () => {
  return (
    <div className="flex flex-col flex-wrap gap-20">
      <HomeSection title="Danh mục nổi bật" music={popularMusic} />
      <HomeSection title="Bài hát thịnh hành" music={popularMusic} />
      <HomeSection title="Bài hát mới" music={popularMusic} />
      <HomeSection title="Nghệ sĩ phổ biến" data={SingerData} />
    </div>
  )
}

export default HomeMusic

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Button } from '~/components/Button'
import config from '~/config'

const MusicHeader = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-MusicHeader px-6 py-4">
      <div className="flex items-center gap-4">
        <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-Dark">
          <MdKeyboardArrowLeft className="h-6 w-6" />
        </span>
        <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-Dark">
          <MdKeyboardArrowRight className="h-6 w-6" />
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button className="rounded-full" to={config.routes.register}>
          Đăng ký
        </Button>
        <Button className="rounded-full" variant="background" to={config.routes.login}>
          Đăng nhập
        </Button>
      </div>
    </div>
  )
}

export default MusicHeader

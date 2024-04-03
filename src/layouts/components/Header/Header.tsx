import { useTranslation } from 'react-i18next'
import { RiBearSmileLine } from 'react-icons/ri'
import { MdExpandMore } from 'react-icons/md'
import { Button } from '~/components/Button'
import { MdOutlineWbSunny } from 'react-icons/md'
import { HiMiniBars3 } from 'react-icons/hi2'

const Header = () => {
  const { t } = useTranslation(['home'])

  return (
    <header className="sticky left-0 right-0 top-0 border-b-[1px] border-primary shadow-lg">
      <div className="mx-auto flex h-[4.5rem] max-w-screen-container items-center justify-between px-8 py-6">
        <div className="flex cursor-pointer items-center gap-1 rounded-lg bg-secondary1 px-4 py-2 text-white">
          <RiBearSmileLine className="h-6 w-6 text-secondary2" />
          <span className="text-lg font-semibold">Teddy</span>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="" className="navLinks block">
            {t('home.header.music')}
          </a>
          <a href="" className="navLinks block">
            {t('home.header.movie')}
          </a>
          <a href="" className="navLinks block">
            {t('home.header.new')}
          </a>
          <a href="" className="navLinks block">
            {t('home.header.study')}
          </a>
          <a href="" className="navLinks flex items-center gap-1">
            {t('home.header.more')}
            <MdExpandMore className="h-5 w-5" />
          </a>
        </nav>

        <div className="hidden gap-4 lg:flex">
          <Button variant="default" className="border-none">
            <MdOutlineWbSunny className="h-5 w-5" />
          </Button>

          <Button variant="default">{t('home.header.register')}</Button>
          <Button variant="background">{t('home.header.login')}</Button>
        </div>

        <div className="block lg:hidden">
          <HiMiniBars3 className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header

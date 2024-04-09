import { useTranslation } from 'react-i18next'
import { RiBearSmileLine } from 'react-icons/ri'
import { MdExpandMore } from 'react-icons/md'
import { Button } from '~/components/Button'
import { HiMiniBars3 } from 'react-icons/hi2'
import Theme from './Theme'
import { Link } from 'react-router-dom'
import routes from '~/config/routes'
import { backToTop } from '~/utils/common'
import ChangeLanguage from './ChangeLanguage'

const Header = () => {
  const { t } = useTranslation(['home'])

  return (
    <header className="sticky left-0 right-0 top-0 z-50 border-b-[1px] border-primary bg-Light shadow-lg duration-100 dark:bg-Dark">
      <div className="relative mx-auto flex h-[4.5rem] max-w-screen-container items-center justify-between px-8 py-6">
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-secondary1 px-4 py-2 text-white"
          onClick={backToTop}
        >
          <RiBearSmileLine className="h-6 w-6 text-secondary2" />
          <span className="text-lg font-semibold">Teddy</span>
        </Link>

        <nav className="hidden items-center gap-8 capitalize lg:flex">
          <Link to="" target="_blank" className="navLinks block">
            {t('home.header.music')}
          </Link>
          <Link to="" target="_blank" className="navLinks block">
            {t('home.header.movie')}
          </Link>
          <Link to="" target="_blank" className="navLinks block">
            {t('home.header.new')}
          </Link>
          <Link to="" target="_blank" className="navLinks block">
            {t('home.header.study')}
          </Link>
          <Link to="" target="_blank" className="navLinks flex items-center gap-1">
            {t('home.header.more')}
            <MdExpandMore className="h-5 w-5" />
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center justify-center gap-2">
            <ChangeLanguage />
            <Theme />
          </div>

          <Button to={routes.register} variant="default">
            {t('home.header.register')}
          </Button>
          <Button to={routes.register} variant="background">
            {t('home.header.login')}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Theme />
          <HiMiniBars3 className="h-6 w-6 cursor-pointer text-Black dark:text-White" />
        </div>
      </div>
    </header>
  )
}

export default Header

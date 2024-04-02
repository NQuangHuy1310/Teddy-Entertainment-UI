import { useTranslation } from 'react-i18next'
import { RiBearSmileLine } from 'react-icons/ri'
import { navbarLinks } from '~/constants'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="border-b-[1px] border-primary shadow-lg">
      <div className="max-w-screen-container mx-auto flex h-[4.5rem] items-center justify-between px-16 py-6">
        <div className="flex items-center gap-10">
          <div className="flex cursor-pointer items-center gap-1 rounded-lg bg-secondary1 px-4 py-2 text-white">
            <RiBearSmileLine className="h-6 w-6 text-secondary2" />
            <span className="text-lg font-semibold">Teddy</span>
          </div>
          <nav className="flex items-center gap-8">
            {navbarLinks.map((nav, index) => (
              <a key={index} className="cursor-pointer font-normal hover:text-primary hover:transition-all">
                {t(nav.name)}
              </a>
            ))}
          </nav>
        </div>
        <div className=""></div>
      </div>
    </header>
  )
}

export default Header

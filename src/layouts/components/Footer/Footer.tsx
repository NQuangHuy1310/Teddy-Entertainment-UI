import { useTranslation } from 'react-i18next'
import { RiBearSmileLine } from 'react-icons/ri'
import { SocaialLinks } from '~/constants'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="mx-auto max-w-screen-container bg-white px-16 py-16">
      <div className="flex flex-col gap-10 border-b-[1px] border-black pb-20 lg:flex-row">
        <div className="flex max-w-[54rem] flex-shrink-0 flex-col gap-6 text-base">
          <div className="flex w-[6.5rem] cursor-pointer items-center gap-1 rounded-lg bg-secondary1 px-4 py-2 text-white">
            <RiBearSmileLine className="h-6 w-6 text-secondary2" />
            <span className="text-lg font-semibold">Teddy</span>
          </div>
          <div>
            <h4 className="font-bold">{t('home.address')}</h4>
            <p className="block">
              Cao đẳng FPT Polyteachnic - P. Trịnh Văn Bô, Xuân Phương, Nam Từ Niêm, Hà Nội, Việt Nam
            </p>
          </div>

          <div>
            <h4 className="font-bold">{t('home.contact')}</h4>
            <a href="" className="block underline">
              0352223905
            </a>
            <a href="" className="block underline">
              huynq13102004@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {SocaialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_black"
                className="rounded-sm bg-secondary1 p-3 text-white underline"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h4></h4>
        </div>
        <div className="flex-1">
          <h4></h4>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8">
        <p>© 2024 Teddy Enterntainment. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="" className="text-sm text-nowrap underline">
            {t('home.policy')}
          </a>
          <a href="" className="text-sm text-nowrap underline">
            {t('home.service')}
          </a>
          <a href="" className="text-sm text-nowrap underline">
            {t('home.setting')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

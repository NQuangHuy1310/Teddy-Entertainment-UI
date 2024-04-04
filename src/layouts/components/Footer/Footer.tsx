import { useTranslation } from 'react-i18next'
import { RiBearSmileLine } from 'react-icons/ri'
import { SocaialLinks } from '~/constants'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-Light text-LightPrimary dark:bg-Dark dark:text-DarkPrimary">
      <footer className="mx-auto max-w-screen-container px-16 py-16 ">
        <div className="flex flex-col gap-10 border-b-[1px] border-black pb-20 dark:border-white lg:flex-row">
          <div className="flex max-w-[54rem] flex-shrink-0 flex-col gap-6 text-base">
            <div className="flex w-[6.5rem] cursor-pointer items-center gap-1 rounded-lg bg-secondary1 px-4 py-3 text-white">
              <RiBearSmileLine className="h-6 w-6 text-secondary2" />
              <span className="text-lg font-semibold">Teddy</span>
            </div>
            <div>
              <h5 className="text-lg font-bold">{t('home.address')}</h5>
              <p className="block">
                Cao đẳng FPT Polyteachnic - P. Trịnh Văn Bô, Xuân Phương, Nam Từ Niêm, Hà Nội, Việt Nam
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold">{t('home.contact')}</h5>
              <a href="" className="block underline">
                0352223905
              </a>
              <a href="" className="block underline">
                huynq13102004@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
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

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-8 md:flex-row">
          <p>© 2024 Teddy Enterntainment. All rights reserved.</p>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-4  ">
            <a href="" className="text-nowrap text-sm underline">
              {t('home.policy')}
            </a>
            <a href="" className="text-nowrap text-sm underline">
              {t('home.service')}
            </a>
            <a href="" className="text-nowrap text-sm underline">
              {t('home.setting')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

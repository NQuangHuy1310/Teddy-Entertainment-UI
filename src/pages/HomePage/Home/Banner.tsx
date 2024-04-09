import { useTranslation } from 'react-i18next'
import { Button } from '~/components/Button'

const Banner = () => {
  const { t } = useTranslation('home')

  return (
    <section className="section-2 overflow-hidden shadow-md">
      <div className="relative">
        <div className="h-[40rem] max-md:h-[30rem]">
          <img
            src="https://images.unsplash.com/photo-1712107063586-a282f12c3973?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="absolute left-0 top-10 flex max-w-[36rem] flex-col items-center justify-center gap-4 p-4 text-white md:left-10 md:top-[10rem] md:items-start md:p-0">
          <h1 className="text-center md:text-left">{t('home.banner.heading')}</h1>
          <p className="text-center text-base md:text-left md:text-lg">{t('home.banner.subHeading')}</p>
          <div className="flex w-1/2 flex-col gap-4 md:w-full md:flex-row md:items-center">
            <Button variant="background" size="md">
              {t('home.getStated')}
            </Button>
            <Button variant="outLine" size="md">
              {t('home.banner.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

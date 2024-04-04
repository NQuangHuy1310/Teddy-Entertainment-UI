import { Button } from '~/components/Button'
import { images } from '~/assets'
import { useTranslation } from 'react-i18next'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

interface SectionProps {
  sectionHeading: any | string
  subHeading: any | string
  title1?: any | string
  title2?: any | string
  subText1: any | string
  subText2: any | string
  subText3?: any | string
  image: string
  reverse?: boolean
  buttonText?: any | string
  isShowContent?: boolean
}

const Section = ({
  sectionHeading,
  subHeading,
  title1,
  title2,
  subText1,
  subText2,
  subText3,
  image,
  reverse,
  buttonText,
  isShowContent
}: SectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="section-1">
      <div
        className={`flex items-center gap-10 ${reverse ? 'max-md:flex-col-reverse' : 'max-md:flex-col'} md:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}
      >
        <div className="flex flex-1 flex-col gap-6 md:gap-10">
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold">{t('home.discover')}</span>
            <h2>{t(sectionHeading)}</h2>
            <p className="text-lg">{t(subHeading)}</p>
          </div>

          {!isShowContent && (
            <div className="flex flex-col items-start gap-4 md:items-center lg:flex-row lg:gap-6">
              <div className="flex flex-1 flex-col gap-2 lg:gap-2">
                <h5 className="text-lg font-bold">{t(title1)}</h5>
                <p>{t(subText1)}</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 lg:gap-2">
                <h5 className="text-lg font-bold">{t(title2 ? title2 : title1)}</h5>
                <p>{t(subText2)}</p>
              </div>
            </div>
          )}

          {isShowContent && (
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <IoShieldCheckmarkSharp className="h-6 w-6 text-secondary1" />
                {t(subText1)}
              </p>
              <p className="flex items-center gap-2">
                <IoShieldCheckmarkSharp className="h-6 w-6 text-secondary1" />
                {t(subText2)}
              </p>
              <p className="flex items-center gap-2">
                <IoShieldCheckmarkSharp className="h-6 w-6 text-secondary1" />
                {t(subText3)}
              </p>
            </div>
          )}

          <div>
            <Button variant="background">{t(buttonText ? buttonText : 'home.getStated')}</Button>
          </div>
        </div>
        <div className="max-h-[40rem] flex-1">
          <img
            src={image || images.PleaceholderImage}
            alt={t('home.music.discoverMusic')}
            className="h-full w-full rounded-md object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Section

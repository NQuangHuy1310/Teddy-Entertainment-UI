import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import Input from '~/components/Input'
import { FaFacebookSquare } from 'react-icons/fa'
import { images } from '~/assets'
import config from '~/config'

const Login = () => {
  const { t } = useTranslation(['auth'])

  return (
    <form action="">
      <div
        className="flex w-[20rem] flex-col items-center justify-center gap-3 rounded-lg border-[1px]
      border-[#E6E8EC] bg-Light px-10 py-7 shadow-[0_20px_60px_-6px_#28282814]
      dark:bg-Dark md:w-[31rem] md:gap-6 md:px-16 md:py-16"
      >
        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-Gray1 dark:text-Gray6 capitalize">{t('auth.signinHeading')}</h4>
          <span className="text-Gray2 text-sm md:text-lg">
            {t('auth.signinSub')}
            <Link to={config.routes.register} className="ml-1 inline-block text-base text-primary md:text-lg">
              {t('auth.signup')}
            </Link>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="border-Gray5 flex w-[4rem] cursor-pointer items-center justify-center rounded-md border-[1px] px-4 py-2 ease-linear hover:opacity-80 hover:transition-all md:w-[6.875rem] md:px-6 md:py-3">
            <FaFacebookSquare className="h-6 w-6 text-[#4776D0]" />
          </div>
          <div className="border-Gray5 flex w-[4rem] cursor-pointer items-center justify-center rounded-md border-[1px] px-4 py-2  ease-linear hover:opacity-80 hover:transition-all md:w-[6.875rem] md:px-6 md:py-3">
            <img src={images.google} alt="" />
          </div>
          <div className="border-Gray5 flex w-[4rem] cursor-pointer items-center justify-center rounded-md border-[1px] px-4 py-2  ease-linear hover:opacity-80 hover:transition-all md:w-[6.875rem] md:px-6 md:py-3">
            <img src={images.twitter} alt="" />
          </div>
        </div>

        <p className="text-Gray2 text-sm font-normal">{t('auth.loginEmail')}</p>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-1.5">
            <label className="text-Gray2 dark:text-Gray6 text-base">{t('auth.email')}</label>
            <Input type="email" placeholder={t('auth.email')} />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <label className="text-Gray2 dark:text-Gray6 text-base">{t('auth.password')}</label>
            <Input type="password" placeholder={t('auth.password')} />
          </div>
        </div>

        <div className="w-full">
          <Link to="" className="mb-3 block text-right text-base text-primary">
            {t('auth.forgotPassword')}
          </Link>
          <Button variant="background" size="lg" type="button" className="w-full">
            {t('auth.signin')}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Login

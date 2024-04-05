import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import Input from '~/components/Input'
import { FaFacebookSquare } from 'react-icons/fa'
import { images } from '~/assets'
import config from '~/config'
import { useDocumentTitle } from '@uidotdev/usehooks'

const Register = () => {
  const { t } = useTranslation(['auth'])

  useDocumentTitle(t('auth.signup'))

  return (
    <form action="">
      <div
        className="flex w-[20rem] flex-col items-center justify-center gap-4 rounded-lg border-[1px]
      border-[#E6E8EC] bg-Light px-10 py-7 shadow-[0_20px_60px_-6px_#28282814]
      dark:bg-Dark md:w-[31rem] md:gap-6 md:px-16 md:py-16"
      >
        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-Gray1  dark:text-Gray6  capitalize">{t('auth.signupHeading')}</h4>
          <span className="text-Gray2 text-sm md:text-lg">
            {t('auth.signupSub')}
            <Link to={config.routes.login} className="ml-1 inline-block text-base text-primary md:text-lg">
              {t('auth.signin')}
            </Link>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="socialItem">
            <FaFacebookSquare className="h-6 w-6 text-[#4776D0]" />
          </div>
          <div className="socialItem">
            <img src={images.google} alt="" />
          </div>
          <div className="socialItem">
            <img src={images.twitter} alt="" />
          </div>
        </div>

        <p className="text-Gray2 text-sm font-normal">{t('auth.signinEmail')}</p>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-1.5">
            <label className="text-Gray2 dark:text-Gray6 text-base">{t('auth.fullname')}</label>
            <Input type="email" placeholder={t('auth.fullname')} />
          </div>
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
            {t('auth.signup')}
          </Button>
        </div>

        <p className="text-Gray2 hidden text-center text-sm md:block">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với điều khoản của chúng tôi.
        </p>
      </div>
    </form>
  )
}

export default Register

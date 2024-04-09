import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { locales } from '~/i18n/i18n'

const ChangeLanguage = () => {
  const { i18n, t } = useTranslation()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as keyof typeof locales)
  }

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="">
      <select
        name="language"
        id=""
        className="rounded-lg border-[1px] border-Gray4 px-3 py-2 text-center text-sm focus:outline-none"
        onChange={handleChange}
      >
        <option value="vi">{t('home.language.vi')}</option>
        <option value="en">{t('home.language.en')}</option>
      </select>
    </div>
  )
}

export default ChangeLanguage

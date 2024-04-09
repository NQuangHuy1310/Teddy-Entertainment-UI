import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from '~/locales/en/home.json'
import HOME_VI from '~/locales/vi/home.json'
import AUTH_EN from '~/locales/en/auth.json'
import AUTH_VI from '~/locales/vi/auth.json'
import HOME_MUSIC_EN from '~/locales/en/music.json'
import HOME_MUSIC_VI from '~/locales/vi/music.json'

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    home: HOME_EN,
    auth: AUTH_EN,
    music: HOME_MUSIC_EN
  },
  vi: {
    home: HOME_VI,
    auth: AUTH_VI,
    music: HOME_MUSIC_VI
  }
}

export const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  // debug: true,
  lng: 'vi',
  ns: ['home'],
  defaultNS,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})

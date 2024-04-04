import { contact, service, SocialLink } from '~/models'
import { FaFacebookSquare, FaInstagram, FaGithub, FaYoutubeSquare, FaTiktok } from 'react-icons/fa'
import { t } from 'i18next'
import { FiMail, FiPhone, FiMap } from 'react-icons/fi'

export const SocaialLinks: SocialLink[] = [
  {
    link: '',
    icon: FaFacebookSquare
  },
  {
    link: '',
    icon: FaInstagram
  },
  {
    link: '',
    icon: FaGithub
  },
  {
    link: '',
    icon: FaYoutubeSquare
  },
  {
    link: '',
    icon: FaFacebookSquare
  },
  {
    link: '',
    icon: FaTiktok
  }
]

export const services: service[] = [
  {
    title: t('home.services.title'),
    subTitle: t('home.services.subTitle'),
    buttonText: t('home.services.buttonText')
  },
  {
    title: t('home.endlessPossibilities.title'),
    subTitle: t('home.endlessPossibilities.subTitle'),
    buttonText: t('home.endlessPossibilities.buttonText')
  },
  {
    title: t('home.stayEntertained.title'),
    subTitle: t('home.stayEntertained.subTitle'),
    buttonText: t('home.stayEntertained.buttonText')
  }
]

export const contacts: contact[] = [
  {
    icon: FiMail,
    heading: t('home.sContact.email'),
    text: t('home.sContact.emailText'),
    link: t('home.sContact.emailData')
  },
  {
    icon: FiPhone,
    heading: t('home.sContact.phone'),
    text: t('home.sContact.phoneText'),
    link: t('home.sContact.phoneData')
  },
  {
    icon: FiMap,
    heading: t('home.sContact.office'),
    text: t('home.sContact.address'),
    link: ''
  }
]

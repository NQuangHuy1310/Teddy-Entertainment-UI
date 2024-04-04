import { contact, service, SocialLink } from '~/models'
import { FaFacebookSquare, FaInstagram, FaGithub, FaYoutubeSquare, FaTiktok } from 'react-icons/fa'
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
    title: 'home.services.title',
    subTitle: 'home.services.subTitle',
    buttonText: 'home.services.buttonText'
  },
  {
    title: 'home.endlessPossibilities.title',
    subTitle: 'home.endlessPossibilities.subTitle',
    buttonText: 'home.endlessPossibilities.buttonText'
  },
  {
    title: 'home.stayEntertained.title',
    subTitle: 'home.stayEntertained.subTitle',
    buttonText: 'home.stayEntertained.buttonText'
  }
]

export const contacts: contact[] = [
  {
    icon: FiMail,
    heading: 'home.sContact.email',
    text: 'home.sContact.emailText',
    link: 'home.sContact.emailData'
  },
  {
    icon: FiPhone,
    heading: 'home.sContact.phone',
    text: 'home.sContact.phoneText',
    link: 'home.sContact.phoneData'
  },
  {
    icon: FiMap,
    heading: 'home.sContact.office',
    text: 'home.sContact.address',
    link: ''
  }
]

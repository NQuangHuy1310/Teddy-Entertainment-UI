import { contact, service, sideBarItem, SocialLink } from '~/models'
import { FaFacebookSquare, FaInstagram, FaGithub, FaYoutubeSquare, FaTiktok, FaRegUser } from 'react-icons/fa'
import { FiMail, FiPhone, FiMap } from 'react-icons/fi'
import { MdSecurity } from 'react-icons/md'
import { FaRegBell } from 'react-icons/fa6'

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

export const sidebars: sideBarItem[] = [
  {
    icon: FaRegUser,
    link: '',
    text: 'Cài đặt tài khoản'
  },
  {
    icon: MdSecurity,
    link: '',
    text: 'Bảo mật và đăng nhập'
  },
  {
    icon: FaRegBell,
    link: '',
    text: 'Thông báo'
  }
]

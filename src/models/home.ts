import { IconType } from 'react-icons'

export interface SocialLink {
  link: string
  icon: IconType
}

export interface service {
  title: string
  subTitle: string
  buttonText: string
}

export interface contact {
  icon: IconType
  heading: string
  text: string
  link: string
}

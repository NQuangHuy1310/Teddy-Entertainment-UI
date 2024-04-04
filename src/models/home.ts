import { IconType } from 'react-icons'

export interface SocialLink {
  link: string
  icon: IconType
}

export interface service {
  title: any | string
  subTitle: any | string
  buttonText: any | string
}

export interface contact {
  icon: IconType
  heading: any | string
  text: any | string
  link: any | string
}

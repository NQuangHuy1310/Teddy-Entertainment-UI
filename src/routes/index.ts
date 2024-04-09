import config from '~/config'
import AuthLayout from '~/layouts/AuthLayout'
import HomeLayout from '~/layouts/HomeLayout'
import ProfileLayout from '~/layouts/ProfileLayout'
import { route } from '~/models/common'
import Home from '~/pages/HomePage/Home'
import Login from '~/pages/Login'
import Notifications from '~/pages/HomePage/Notifications'
import Personal from '~/pages/HomePage/Notifications'
import Register from '~/pages/Register'
import Security from '~/pages/HomePage/Security'
import MusicLayout from '~/layouts/MusicLayout'
import HomeMusic from '~/pages/MusicPage/Home/HomeMusic'

export const publicRoutes: route[] = [
  // home
  { path: config.routes.home, element: Home, layout: HomeLayout },
  { path: config.routes.login, element: Login, layout: AuthLayout },
  { path: config.routes.register, element: Register, layout: AuthLayout },

  // music
  { path: config.routes.music, element: HomeMusic, layout: MusicLayout }
]

export const privateRoutes: route[] = [
  { path: config.routes.personal, element: Personal, layout: ProfileLayout },
  { path: config.routes.security, element: Security, layout: ProfileLayout },
  { path: config.routes.notifications, element: Notifications, layout: ProfileLayout }
]

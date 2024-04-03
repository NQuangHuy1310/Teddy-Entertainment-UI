import config from '~/config'
import HomeLayout from '~/layouts/HomeLayout'
import { route } from '~/models/common'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Register from '~/pages/Register'

export const publicRoutes: route[] = [
  { path: config.routes.home, element: Home, layout: HomeLayout },
  { path: config.routes.login, element: Login, layout: HomeLayout },
  { path: config.routes.register, element: Register, layout: HomeLayout }
]

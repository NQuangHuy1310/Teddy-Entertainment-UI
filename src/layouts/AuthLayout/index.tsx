import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col-reverse overflow-x-hidden bg-LightBase dark:bg-DarkBase lg:flex-row">
      <div className="h-full flex-1 flex-shrink-0 max-lg:hidden">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/30/03/13/eibsee-7352987_1280.jpg"
          className="h-full w-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="flex h-full flex-1 items-center justify-center bg-LightBase dark:bg-DarkBase">{children}</div>
    </div>
  )
}

export default AuthLayout

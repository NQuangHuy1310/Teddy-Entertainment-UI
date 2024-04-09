import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from './Sidebar'

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-LightBase dark:bg-DarkBase">
      <Header />
      <div className="mx-auto mb-12 mt-12 flex min-h-screen max-w-screen-container items-start gap-20 sm:px-3 md:px-4">
        <Sidebar />
        <div className="mt-6 h-screen flex-1 rounded-md bg-White dark:bg-Dark">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfileLayout

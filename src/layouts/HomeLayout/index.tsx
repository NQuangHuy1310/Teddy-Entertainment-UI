import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-LightBase dark:bg-DarkBase">
      <Header />
      <main className="mx-auto min-h-screen max-w-screen-container sm:px-3 md:px-4">{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout

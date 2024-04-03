import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-bgBase text-black duration-200 dark:bg-darkPrimary dark:text-white">
      <Header />
      <main className="mx-auto min-h-screen max-w-screen-container pt-12">{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout

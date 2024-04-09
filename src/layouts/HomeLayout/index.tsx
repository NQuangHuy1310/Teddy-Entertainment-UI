import { ReactNode, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/HomeHeader'
import { IoIosArrowDropup } from 'react-icons/io'
import { backToTop } from '~/utils/common'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [screenHeight, setScreenHeight] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY
      setScreenHeight(height)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [screenHeight])

  return (
    <div className="bg-LightBase dark:bg-DarkBase">
      <Header />
      <main className="mx-auto mt-4 min-h-screen max-w-screen-container sm:px-3 md:px-4">{children}</main>
      <Footer />

      <div
        className={`fixed bottom-4 right-4 flex cursor-pointer flex-col items-center rounded-lg bg-primary 
        px-2 py-2 text-White shadow-md ${screenHeight > 1000 ? 'flex' : 'hidden'}`}
        onClick={backToTop}
      >
        <IoIosArrowDropup className="h-5 w-5" />
        <span className="text-sm">Lên đầu</span>
      </div>
    </div>
  )
}

export default HomeLayout

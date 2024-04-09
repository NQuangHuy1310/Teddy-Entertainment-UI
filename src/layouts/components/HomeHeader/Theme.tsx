import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'
import { Button } from '~/components/Button'
import { useEffect, useState } from 'react'
import { getTheme, saveThemeToLocalStorage } from '~/utils'

const Theme = () => {
  const element = document.documentElement
  const [theme, setTheme] = useState<'dark' | 'light' | null>(getTheme() || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark')
      saveThemeToLocalStorage('dark')
    } else {
      element.classList.remove('dark')
      saveThemeToLocalStorage('light')
    }
  }, [theme, element.classList])

  return (
    <Button
      variant="default"
      className="border-none bg-transparent p-3 dark:text-white"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IoMoonOutline className="h-5 w-5" /> : <MdOutlineWbSunny className="h-5 w-5" />}
    </Button>
  )
}

export default Theme

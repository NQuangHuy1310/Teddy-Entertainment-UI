import { useEffect } from 'react'

const useDocountTitle = (title: string) => {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = ''
    }
  }, [title])
}

export default useDocountTitle

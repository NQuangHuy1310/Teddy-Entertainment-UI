import { useState, useEffect } from 'react'

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)
  let timeoutId: number | undefined = undefined // Initialize as null (avoiding undefined)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)

      clearTimeout(timeoutId) // Clear existing timeout, if any

      timeoutId = setTimeout(() => {
        setCopied(false)
        timeoutId = undefined // Set to undefined for cleanup
      }, 2000)
    })
  }

  useEffect(() => {
    // Cleanup function: Clear timeout when component unmounts
    return () => clearTimeout(timeoutId)
  }, [timeoutId])

  return { copied, copyToClipboard }
}

export default useCopyToClipboard

import { useEffect } from 'react'

export function useModalLock(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
    }
  }, [isOpen])
}

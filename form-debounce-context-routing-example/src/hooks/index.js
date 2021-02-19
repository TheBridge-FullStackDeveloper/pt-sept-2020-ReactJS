import { useEffect } from 'react'

export const useDebounce = (value, time) => {
  useEffect(() => {
    let id = setTimeout(() => {
      console.info('> con useDebounce: ', value)
    }, time)

    return () => clearTimeout(id)
  }, [value, time])
}
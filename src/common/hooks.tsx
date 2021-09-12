import {
  useEffect,
  useRef,
} from 'react'


export const useInterval = (
  callback: () => void,
  delay: number,
) => {
  const savedCallback: any = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

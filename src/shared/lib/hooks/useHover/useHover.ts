import { useCallback, useMemo, useState } from 'react'

interface UseHoverFN {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverFN]

export const useHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave])
}

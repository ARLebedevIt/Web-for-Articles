import { useEffect, useMemo, useState } from "react"


export function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query])
  const [match, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches)
    mediaQuery.addEventListener("change", onChange)

    return () => mediaQuery.removeEventListener("change", onChange)
  }, [mediaQuery])

  return match
}


export function useMediaQueries() {
  const md = useMediaQuery("(max-width: 990px)")
  const lg = useMediaQuery("(min-width: 1200px)")

  return { md, lg }
}
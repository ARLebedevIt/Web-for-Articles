import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseTheme {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.CRIMSON
        break
      case Theme.CRIMSON:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  useEffect(() => {
    if (theme !== undefined) {
      document.body.className = theme || Theme.LIGHT
    }
  }, [theme])

  return { theme: theme || Theme.LIGHT, toggleTheme }
}

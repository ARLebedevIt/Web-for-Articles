import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseTheme {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  useEffect(() => {
    if (theme !== undefined) {
      document.body.className = theme
    }
  }, [theme])

  return { theme: theme || Theme.LIGHT, toggleTheme }
}

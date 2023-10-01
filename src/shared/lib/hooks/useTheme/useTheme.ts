import { useContext } from 'react'
import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface UseTheme {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme(): UseTheme {
  const { theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    
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
    saveAction?.(newTheme)
  }

  return { theme: theme || Theme.LIGHT, toggleTheme }
}

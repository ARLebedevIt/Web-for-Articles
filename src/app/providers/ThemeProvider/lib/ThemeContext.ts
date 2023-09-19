import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  CRIMSON = 'app_crimson_theme',
}

export interface ThemeContextType {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

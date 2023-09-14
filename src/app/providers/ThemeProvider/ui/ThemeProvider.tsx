import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

type ThemeProviderTypes = {
  children: React.ReactNode
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderTypes> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

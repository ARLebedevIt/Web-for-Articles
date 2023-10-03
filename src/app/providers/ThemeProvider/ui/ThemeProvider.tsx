import React, { useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'

type ThemeProviderTypes = {
  children: React.ReactNode
  initialTheme?: Theme
}

const fallbacktheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider = ({ children, initialTheme }: ThemeProviderTypes) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || fallbacktheme || Theme.DARK)

  const [isThemeInited, setIsThemeInited] = useState(false)

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInited(true)
    }
  }, [initialTheme, isThemeInited, theme])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

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

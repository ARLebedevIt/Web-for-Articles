import React, { useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { useJsonSettings } from '@/entities/User'


type ThemeProviderTypes = {
  children: React.ReactNode
  initialTheme?: Theme
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderTypes) => {
  const {theme: defaultTheme} = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.DARK)

  const [isThemeInited, setIsThemeInited] = useState(false)

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

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

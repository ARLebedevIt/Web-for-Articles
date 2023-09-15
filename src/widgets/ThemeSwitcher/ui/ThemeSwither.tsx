import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC, ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'

interface ThemeSwitherType {
  className?: string
}

export const ThemeSwither = memo(({ className }: ThemeSwitherType) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})

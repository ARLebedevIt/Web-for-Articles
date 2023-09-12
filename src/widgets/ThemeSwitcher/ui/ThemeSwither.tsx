import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'

interface ThemeSwitherType {
  className?: string
}

export const ThemeSwither: FC<ThemeSwitherType> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}

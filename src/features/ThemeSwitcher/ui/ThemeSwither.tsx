import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import ThemeIconDeprecated  from '@/shared/assets/icons/deprecated/themeSwither.svg'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ThemeIcon  from '@/shared/assets/icons/redesigned/themeSwitcher.svg'

interface ThemeSwitherType {
  className?: string
}

export const ThemeSwither = memo(({ className }: ThemeSwitherType) => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()
  
  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({
        theme: newTheme
      }))
    })
  }, [dispatch, toggleTheme])

  return (
    <ToggleFeatures
    feature='isAppRedesigned'
    on={
      <Icon clickable onClick={onToggleHandler} Svg={ThemeIcon} />
    }
    off={
      <ButtonDeprecated
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}>
      <IconDeprecated width={40} inverted height={40} Svg={ThemeIconDeprecated} />
    </ButtonDeprecated>
    }
    /> 
  )
})

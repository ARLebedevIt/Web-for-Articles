import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherType {
  className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherType) => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language === 'ru' ? 'en' : 'ru'

  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button onClick={onToggleLang} variant='clear'>
          {currentLang.toUpperCase()}
        </Button>
      }
      off={
        <ButtonDeprecated
          theme={ButtonTheme.BACKGROUND_INVERTED}
          className={classNames('', {}, [className])}
          onClick={onToggleLang}>
          {currentLang.toUpperCase()}
        </ButtonDeprecated>
      }
    />
  )
})

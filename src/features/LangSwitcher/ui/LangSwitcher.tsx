import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'

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
    <Button
      theme={ButtonTheme.BACKGROUND_INVERTED}
      className={classNames('', {}, [className])}
      onClick={onToggleLang}
    >
      {currentLang.toUpperCase()}
    </Button>
  )
})

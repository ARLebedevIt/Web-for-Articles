import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'
import { useTranslation } from 'react-i18next'
import { FC } from 'react'

interface LangSwitcherType {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherType> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language === 'ru' ? 'en' : 'ru'

  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleLang}
    >
      {currentLang.toUpperCase()}
    </Button>
  )
}

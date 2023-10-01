import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Text } from '@/shared/ui/deprecated/Text'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Drawer } from '@/shared/ui/deprecated/Drawer'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const { isArticlePageWasOpened } = useJsonSettings()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }))
    }
  }, [dispatch, isArticlePageWasOpened])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const text = (
    <Text
    text={t('Здесь вы можете просматривать статьи на различные темы')}
    title={t('Добро пожаловать на страницу статей')}
  />
  )

  if (isMobile) {
    <Drawer>
      {text}
    </Drawer>
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} >
      {text}
    </Modal>
  )
})
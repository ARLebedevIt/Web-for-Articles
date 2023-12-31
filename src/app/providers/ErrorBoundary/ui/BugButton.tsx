import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/deprecated/Button'

// Компонент для тестирования
const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error('Тестовая ошибка')
    }
  }, [error])

  return (
    <Button onClick={onThrow}>{t('throw error')}</Button>
  )
}

export default BugButton

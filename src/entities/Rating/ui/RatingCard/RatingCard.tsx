import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/ui/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/ui/Modal'
import { Input } from '@/shared/ui/Input/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

type RatingCardProps = {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, feedbackTitle, hasFeedback, onAccept, onCancel, title, rate = 0,
  } = props
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStars: number) => {
    setStarsCount(selectedStars)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStars)
    }
  }, [hasFeedback, onAccept])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])
  console.log(feedback)

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>
  )
  return (
    <Card max className={className}>
      <VStack gap="16" align="center">
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
              <Button onClick={acceptHandle}>{t('Отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle}>{t('Отправить')}</Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})

export default RatingCard

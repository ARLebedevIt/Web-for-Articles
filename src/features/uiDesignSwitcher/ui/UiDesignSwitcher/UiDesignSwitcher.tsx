import { useTranslation } from 'react-i18next'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { ListBox as ListBoxRedesigned } from '@/shared/ui/redesigned/Popups'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ToggleFeatures, getFeatureFlag, toggleFeatures, updateFeatureFlag } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'

interface UiDesignSwitcherProps {
  className?: string
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props
  const { t } = useTranslation('settings')
  const dispatch = useAppDispatch()
  const isAppRedesigned = getFeatureFlag('isAppRedesigned')
  const authData = useSelector(getUserAuthData)
  const [isLoading, setIsLoading] = useState(false)
  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ]

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })

  const ListBox = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => ListBoxRedesigned,
    off: () => ListBoxDeprecated
  })

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true)
      await dispatch(
        updateFeatureFlag({
          userId: authData?.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap()
    }
    setIsLoading(false)
  }

  return (
    <HStack gap='8'>
      <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Text text={t('Вариант интерфейса')} />
      }
      off={
        <TextDeprecated text={t('Вариант интерфейса')} />
      }
      />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      )}
    </HStack>
  )
})

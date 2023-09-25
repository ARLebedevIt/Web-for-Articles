import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Text } from '@/shared/ui/Text/ui/Text'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { profileActions } from '../../model/slice/profileSlice'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

type EditableProfileCardHeaderProps = {}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation()
  const readOnly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack max justify="between">
      <Text title={t('Профиль')} />
      {canEdit && (
      <div>
        {readOnly ? (
          <Button
            onClick={onEdit}
            data-testid="EditableProfileCardHeader.EditBtn"
            theme={ButtonTheme.OUTLINE}>
            {t('Редактировать')}

          </Button>
        ) : (
          <HStack gap="8">
            <Button
              data-testid="EditableProfileCardHeader.CancelBtn"
              onClick={onCancelEdit}
              theme={ButtonTheme.OUTLINE_RED}
                >
              {t('Отменить')}
            </Button>
            <Button
              onClick={onSaveEdit}
              theme={ButtonTheme.OUTLINE}
              data-testid="EditableProfileCardHeader.SaveBtn"
                >
              {t('Сохранить')}
            </Button>
          </HStack>
        )}
      </div>
      )}
    </HStack>
  )
})
